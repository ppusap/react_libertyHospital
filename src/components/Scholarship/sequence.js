import React from 'react'
import One from './One.js'
import Two from './Two'
import Three from './Three'
import Four from './Four.js'

import '../css/custom.css'
import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/prog-tracker.css'


const sequence = 
    [
      {name: 'Personal Information', component: <One/>},
      {name: 'High School Information', component: <Two/>},
      {name: 'Acknowledgement', component: <Three/>},
      {name: 'College Plan', component: <Four/>}

      
      
     
    ]

export { sequence }