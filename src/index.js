import React from 'react'
import { useState } from "react";
import { Constants } from './constants';
import { VSpace, InputEmail, LogoMast, AlertError, ButtonNext } from 'react-ui-components-superflows';
import * as DynamoDB from  'react-dynamodb-helper';
import * as SesHelper from 'react-ses-helper';

import { Col, Row, Button, Container } from 'react-bootstrap';

export const SignIn = (props) => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function generateOTP() {

    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;

  }

  const onClick = async ()  => {

    setError("")
        
    var paramsCredentials = {
        TableName: "Account_Credentials",
        Key : { 
            "email" : email,
        }
    };
    
    let resultCredentials = await DynamoDB.getData(props.awsRegion, props.awsSecret, props.awsKey, paramsCredentials)
    if(resultCredentials.Item == null) {

      setError(Constants.ERROR_EMAIL_NOT_FOUND)
      if(props.onSubmitResult != null) props.onSubmitResult(email, false);

    } else {

      const otp = generateOTP();
      const expiry = parseInt(new Date().getTime()/1000) + 24*60*60;

      let paramsUpdateCredentials = {
        TableName: "Account_Credentials",
        Key:{
            email: email
        },
        UpdateExpression: "set #otp = :otpVal, #expiry = :expiry",
        ExpressionAttributeNames: {
            "#otp": "otp",
            "#expiry": "expiry",
        },
        ExpressionAttributeValues: {
            ":otpVal": otp,
            ":expiry": expiry
        }
      }

      await DynamoDB.updateData(props.awsRegion, props.awsSecret, props.awsKey, paramsUpdateCredentials)

      SesHelper.sendTemplatedEmail(props.awsRegion, props.awsSecret, props.awsKey, props.emailerSource,[email], [], props.template, "{\"project\": \"" + props.project + "\", \"name\": \"" + resultCredentials.Item.firstName + "\", \"otp\": \"" + otp + "\"}", [])

      if(props.onSubmitResult != null) props.onSubmitResult(email, true);
      
    }

  }


  return (

    <Container>
      <Row className='justify-content-center'>
        <Col sm={10} xs={10} md={6} xl={4} xxl={4}>

          <VSpace />
          <LogoMast imageUrl={props.imageUrl} imageAlt={props.imageAlt} />
          <VSpace />
          <InputEmail setValue={setEmail} autofocus={true} onEnterPressed={() => {onClick()}}/>
          <AlertError caption={error}/>
          <VSpace />
          <ButtonNext caption={props.buttonCaption} disabled={email.length === 0} onClick={() => {onClick()}}/>

        </Col>
      </Row>
    </Container>

  )
}
