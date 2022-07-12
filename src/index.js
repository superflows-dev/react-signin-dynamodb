import React from 'react'
import { useState } from "react";
import styles from './styles.module.css'
import { VSpace, InputEmail, LogoMast, AlertError, ButtonNext } from 'react-ui-components-superflows';
import * as DynamoDB from  'react-dynamodb-helper';

import { Col, Row, Button, Container } from 'react-bootstrap';

export const SignIn = (props) => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const onClick = async ()  => {
        
    var params = {
        TableName: "Account_Credentials",
        Key : { 
            "email" : email,
        }
    };

    console.log(props);

    let result = await DynamoDB.getData(props.awsRegion, props.awsSecret, props.awsKey, params)
    if(result.Item == null) {
        setError(Constants.ERROR_EMAIL_NOT_FOUND)
    }

  }


  return (

    <Container>
      <Row className='justify-content-center'>
        <Col sm={10} xs={10} md={6} xl={4} xxl={4}>

          <VSpace />
          <LogoMast imageUrl={props.imageUrl} imageAlt={props.imageAlt} />
          <VSpace />
          <InputEmail setValue={setEmail}/>
          <AlertError caption={error}/>
          <VSpace />
          <ButtonNext caption={props.buttonCaption} disabled={email.length === 0} onClick={() => {onClick()}}/>

        </Col>
      </Row>
    </Container>

  )
}
