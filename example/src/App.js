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
      awsSecret="FAneu8OQpDkZr1WqmE6pTap2WNHOpvRMgeKpMFWh"
      awsKey="AKIASUWOWMZOTVNFRHEK"
    />

  )
}

export default App
