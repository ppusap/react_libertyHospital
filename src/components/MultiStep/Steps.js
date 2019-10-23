import React from 'react'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'
import '../css/custom.css'
import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/prog-tracker.css'


const steps = 
    [
      {name: 'Agency Information', component: <StepOne/>},
      {name: 'Project Information', component: <StepTwo/>},
      {name: 'Submission', component: <StepThree/>},
     
    ]

export { steps }