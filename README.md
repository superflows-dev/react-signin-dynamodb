# react-signin-dynamodb

> A sign in component that uses dynamodb as the backend. 

[![NPM](https://img.shields.io/npm/v/react-signin-dynamodb.svg)](https://www.npmjs.com/package/react-signin-dynamodb) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-signin-dynamodb
```

## Usage

```jsx

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { SignIn } from 'react-signin-dynamodb'

const App = () => {
  return  (
  
    <SignIn  
      imageUrl="https://superflows-images.s3.ap-south-1.amazonaws.com/superflows_black.png" 
      imageAlt="This is a test image"
      buttonCaption="Sign In"
      awsRegion="aws_region"
      awsSecret="aws_secret"
      awsKey="aws_access_key"
    />

  )
}

export default App


```

## License

MIT © [superflows-dev](https://github.com/superflows-dev)
