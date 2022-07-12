import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { SignIn } from 'react-signin-dynamodb'

const App = () => {
  return  (
  
    <SignIn  
      imageUrl="https://superflows-images.s3.ap-south-1.amazonaws.com/superflows_black.png" 
      imageAlt="This is a test image"
      buttonCaption="Sign In"
      awsRegion="ap-south-1"
      awsSecret="0nCKOcgRf8ibAgmeuRId5iQ1DZ9u5jWNbDPeMH/h"
      awsKey="AKIASUWOWMZOUWTMABMQ"
    />

  )
}

export default App
