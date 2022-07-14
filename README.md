# react-signin-dynamodb

> A sign in component that uses dynamodb as the backend. 

[![NPM](https://img.shields.io/npm/v/react-signin-dynamodb.svg)](https://www.npmjs.com/package/react-signin-dynamodb) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-signin-dynamodb
```

## Dependencies

```bash
npm install --save aws-sdk
npm install --save bootstrap
npm install --save react-bootstrap
npm install --save react-dynamodb-helper
npm install --save react-ses-helper
npm install --save react-ui-components-superflows
```

## Note

### AWS key pair needs to have DynamoDb privileges
### For SES to work a template needs to be in place, for more information see the react-ses-helper npm

## Usage

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { SignIn } from 'react-signin-dynamodb'

const App = () => {

  function processAccount(email, exists) {
    console.log(email, exists);
  }

  return  (
  
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
    />

  )
}

export default App

```

## License

MIT © [superflows-dev](https://github.com/superflows-dev)
