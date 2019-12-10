'use strict'
import React from "react"
import { nullLiteral } from "@babel/types";
//import Table from './Table';

export class One extends React.Component{
   constructor()
   {
       super()
       this.state ={
        organizationName:'',
        year2015_2016:'',
        year2016_2017:'',
        year2017_2018:'',
        year2018_2019:'',
        involvement:'',
        workExperience:'',
        plan_to_work_during_the_school_term:'',
        hours_per_week:''
     }
    
     this.handleOrganizationNameChanged = this.handleOrganizationNameChanged.bind(this);
    this.handleYear2015_2016Changed = this.handleYear2015_2016Changed.bind(this);
    this.handleYear2016_2017Changed = this.handleYear2016_2017Changed.bind(this);
    this.handleYear2017_2018Changed = this.handleYear2017_2018Changed.bind(this);
    this.handleYear2018_2019Changed = this.handleYear2018_2019Changed.bind(this);
    this.handleInvolvementChanged = this.handleInvolvementChanged.bind(this);
    this.handleWorkExperienceChanged = this.handleWorkExperienceChanged.bind(this);
    this.handlePlan_to_work_during_the_school_termChanged = this.handlePlan_to_work_during_the_school_termChanged.bind(this);
    this.handleHours_per_weekChanged = this.handleHours_per_weekChanged.bind(this)
    }
    

   handleOrganizationNameChanged = (event) =>
   {
       this.setState({organizationName:event.target.value})
   }
   handleYear2015_2016Changed(event)
   {
       this.setState({year2015_2016:event.target.value})
   }
   handleYear2016_2017Changed(event)
   {
       this.setState({year2016_2017:event.target.value})
   }
   handleYear2017_2018Changed(event)
   {
       this.setState({year2017_2018:event.target.value})
   }
   handleYear2018_2019Changed(event)
   {
       this.setState({year2018_2019:event.target.value})
   }
   handleInvolvementChanged(event)
   {
       this.setState({involvement:event.target.value})
   }
  handleWorkExperienceChanged(event)
   {
       this.setState({workExperience:event.target.value})
   }
   handlePlan_to_work_during_the_school_termChanged(event)
   {
       this.setState({plan_to_work_during_the_school_term:event.target.value})
   }
   handleHours_per_weekChanged(event)
   {
       this.setState({hours_per_week:event.target.value})
   }
   

   handleChangeEvents(event){
     //console.log(event.target.name)
    this.setState(
      {
        [event.target.name]:event.target.value
      }
      )
   }

    render()
    {
        return(
          <div>
            <form onSubmit="return validateForm()">

            

            <h2><b>Extra Curricular Activities </b></h2>
            <h6>Please list your participation in school (including sports, extracurricular 
                and/or academic clubs), community, church, and service organizations as well 
                as other community activities over the last four (4) years:   </h6>
            <h6>Please indicate years of involvement, 
                offices held, honors and awards received. 
                Please contain answers to table below</h6>

            <div OrganisationName = {this.state.organizationName} ></div>

            <div className='row'>
          <div className='four columns'>
            <label>Organization/Activity Name:</label>
            </div>
            <div className='six columns'>
            <input
              placeholder='Organization/Activity Name:'
              type='text'
              onChange={this.handleChangeEvents}
              //value={this.state.agencyName}              
              //required
            />
          </div>


             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>First Name:</label>
            </div>
            <div className='six columns'>
            <input
              placeholder='First Name'
              type='text'
              onChange={this.handleAgencyNameChanged}
              value={this.state.agencyName}
              autoFocus
            />
          </div>
             </div>  
    
             <div className='row'>
          <div className='four columns'>
            <label>Address:</label>
            </div>
            <div className='six columns'>
            <input
              placeholder='1121, North college Dr, Maryville, MO, 64468'
              type='text'
              onChange={this.handleAgencyNameChanged}
              value={this.state.agencyName}
              autoFocus
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>Contact Number</label>
            </div>
            <div className='six columns'>
            <input
              placeholder='660-528-1000'
              type='text'
              onChange={this.handleAgencyNameChanged}
              value={this.state.agencyName}
              autoFocus
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>Email:</label>
            </div>
            <div className='six columns'>
            <input
              placeholder='Sai@gmail.com'
              type='email'
              onChange={this.handleAgencyNameChanged}
              value={this.state.agencyName}
              autoFocus
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>How did you learn about this scholarship</label>
            </div>
            <div className='six columns'>
            <input
              type='text'
              onChange={this.handleAgencyNameChanged}
              value={this.state.agencyName}
              autoFocus
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>Do you have any relatives employed by New Liberty Hospital District (“Liberty Hospital”) or the Liberty
            Hospital Foundation?</label>
            </div>
            <div className='six columns'>
            <div className= 'radio'>
            <label>
            <input
              type="radio" value="yes" checked
            /> yes</label>
            <label>
            <input
              type="radio" value="no" 
            /> no</label>
            </div>
          </div>
             </div> 

             <div className='row'>
          <div className='four columns'>
            <label>If yes, please state the name(s) and relationship:</label>
            </div>
            <div className='six columns'>
            <input
              type='text'
              onChange={this.handleAgencyNameChanged}
              value={this.state.agencyName}
              autoFocus
            />
          </div>
             </div> 
         
            </form>
    
            </div>
           

        );
    }
}


export default One;