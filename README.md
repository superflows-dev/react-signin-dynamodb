# react-signin-dynamodb

> A sign in component that uses dynamodb as the backend. 

[![NPM](https://img.shields.io/npm/v/react-signin-dynamodb.svg)](https://www.npmjs.com/package/react-signin-dynamodb) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Note

This component is under active development. Expect frequent updates.

## Overview

This is a single page responsive component that provides the sign in functionality, in a password-less otp based sign in flow. It is a ready-to-use component & comes with in-built validations.

<img src="https://user-images.githubusercontent.com/108924653/179670455-a96c46ef-8ab5-4cf8-a9af-7468bada19eb.png" width="300">

## Install

```bash
npm install --save react-signin-dynamodb
```
Then install the dependencies.

## Dependencies

```bash
npm install --save aws-sdk
npm install --save bootstrap
npm install --save react-bootstrap
npm install --save react-dynamodb-helper
npm install --save react-ses-helper
npm install --save react-ui-components-superflows
```
Then review the AWS configuration.

## Configuration

### AWS SES Sender Receiver

The sender (source) email address should be configured and verified. If SES is in sandbox mode, the receiver email address(es) should also be configured and verified. A test email should be sent from the SES console and ensured that the intended receiver receives it.

### AWS SES Template

This is required if you are planning to send templated emails. An html template should be created. As of July 22, SES console does not support adding email templates. They can only be done through the apis. Best way is to do it via aws command line interface.

### AWS DynamoDB

This component uses dynamodb as the backend. Please create a table as follows:

- Name: Account_Credentials
- Partition Key: email
- Sort Key: none

Create a sample record for testing as follows:
- email: some_valid_email
- firstName: some_firstname
- lastName: some_lastname

### AWS Credentials

AWS region, secret and access key form the credentials. These are required to use this package. It is crucial that these credentials are given the following permissions: 
- SES email sending permissions
- Create, Update, Delete, View permissions for the Account_Credentials table in dynamodb


## Usage

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Themes from 'react-ui-themes-superflows';

import { SignIn } from 'react-signin-dynamodb'

const App = () => {

  function processAccount(email, exists) {
    console.log(email, exists);
  }

  return  (

    /*

      imageUrl: Logo URL
      imageAlt: alternative text for logo
      buttonCaption: caption of the button
      onSubmitResult: called after user clicks submit
      awsRegion: aws region (recommended to store in env)
      awsSecret: aws secret (recommended to store in env)
      awsKey: aws access key (recommended to store in env)
      template: email template comfigured in aws ses
      project: name of the project
      emailerSource: source email configured to send emails in aws ses
      theme: ui theme

    */
  
    <SignIn  
      imageUrl="https://****************.amazonaws.com/superflows_black.png" 
      imageAlt="This is a test image"
      buttonCaption="Sign In"
      onSubmitResult={processAccount}
      awsRegion="aws_region"
      awsSecret="aws_secret"
      awsKey="aws_key"
      template="TemplateOtp1"
      project="SF-21"
      emailerSource="super*********@**ail.com"
      theme={Themes.getTheme("Default")}
    />

  )
}

export default App

```

## Tests

```bash

PASS src/index.test.js (9.608s)
  ✓ Render (31ms)
  ✓ Auto focus on input (7ms)
  ✓ Submit button should be initially disabled (5ms)
  ✓ Submit button should enable / disable after valid / invalid email value (3090ms)
  ✓ Valid and existing email (4023ms)

--------------|----------|----------|----------|----------|-------------------|
File          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------|----------|----------|----------|----------|-------------------|
All files     |    96.43 |    66.67 |       80 |       96 |                   |
 constants.js |      100 |      100 |      100 |      100 |                   |
 index.js     |     96.3 |    66.67 |       80 |    95.83 |                87 |
--------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        11.253s
Ran all test suites.

```

## License

MIT © [superflows-dev](https://github.com/superflows-dev)
