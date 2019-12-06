'use strict'
import React from "react"
import { nullLiteral } from "@babel/types";

export class Four extends React.Component{
   constructor()
   {
       super()
       this.state ={
        Names_of_Colleges_you_applied_to_or_have_been_accepted_to:'',
        Name_of_College_you_plan_to_attend:'',
        Have_you_been_accepted_to_the_Nursing_Program:'',
        Yes:'',
        Waiting_to_hear:'',
        Cant_apply_yet :'',
        If_cant_apply_yet_when_can_you_be_accepted_to_the_Nursing_Program:'',
        Field_of_interest:'',
        Month_Year_you_expect_to_graduate:'',
        College_credit_awarded_in_progress_Classes_taken:''
        
       }
    this.handleNames_of_Colleges_you_applied_to_or_have_been_accepted_toChanged = this.handleNames_of_Colleges_you_applied_to_or_have_been_accepted_toChanged.bind(this);
    this.handleName_of_College_you_plan_to_attendChanged = this.handleName_of_College_you_plan_to_attendChanged.bind(this);
    this.handleHave_you_been_accepted_to_the_Nursing_ProgramChanged = this.handleHave_you_been_accepted_to_the_Nursing_ProgramChanged.bind(this);
    this.handleYesChanged = this.handleYesChanged.bind(this);
    this.handleWaiting_to_hearChanged = this.handleWaiting_to_hearChanged.bind(this);
    this.handleCant_apply_yetChanged = this.handleCant_apply_yetChanged.bind(this);
    this.handleIf_cant_apply_yet_when_can_you_be_accepted_to_the_Nursing_ProgramChanged = this.handleIf_cant_apply_yet_when_can_you_be_accepted_to_the_Nursing_ProgramChanged.bind(this);
    this.handleField_of_interestChanged = this.handleField_of_interestChanged.bind(this);
    this.handleMonth_Year_you_expect_to_graduateChanged = this.handleMonth_Year_you_expect_to_graduateChanged.bind(this);
    this.handleCollege_credit_awarded_in_progress_Classes_takenChanged = this.handleCollege_credit_awarded_in_progress_Classes_takenChanged.bind(this);
    }
    

   handleNames_of_Colleges_you_applied_to_or_have_been_accepted_toChanged(event)
   {
       this.setState({Names_of_Colleges_you_applied_to_or_have_been_accepted_to:event.target.value})
   }
   handleName_of_College_you_plan_to_attendChanged(event)
   {
       this.setState({Name_of_College_you_plan_to_attend:event.target.value})
   }
   handleHave_you_been_accepted_to_the_Nursing_ProgramChanged(event)
   {
       this.setState({Have_you_been_accepted_to_the_Nursing_Program:event.target.value})
   }
   handleYesChanged(event)
   {
       this.setState({Yes:event.target.value})
   }
   handleWaiting_to_hearChanged(event)
   {
       this.setState({title:event.target.value})
   }
   handleCant_apply_yetChanged(event)
   {
       this.setState({Cant_apply_yet:event.target.value})
   }
  handleIf_cant_apply_yet_when_can_you_be_accepted_to_the_Nursing_ProgramChanged(event)
   {
       this.setState({If_cant_apply_yet_when_can_you_be_accepted_to_the_Nursing_Program:event.target.value})
   }
   handleField_of_interestChanged(event)
   {
       this.setState({Field_of_interest:event.target.value})
   }
   handleMonth_Year_you_expect_to_graduateChanged(event)
   {
       this.setState({Month_Year_you_expect_to_graduate:event.target.value})
   }
   handleCollege_credit_awarded_in_progress_Classes_takenChanged(event)
   {
       this.setState({College_credit_awarded_in_progress_Classes_taken:event.target.value})
   }

    render()
    {
        return(
          <div>
            <form onSubmit="return validateForm()">

            

            <h2><b>V. College Plans</b></h2>
          
           <div className='row'>
           <div className='four columns'>
            <label>Name(s) of College(s) you applied to or have been accepted to: </label>
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
            <label>Name of College you plan to attend:</label>
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
            <label>Have you been accepted to the Nursing Program?: </label>
            </div>
            <div className='six columns'>
            <div className= 'radio'>
            <label>
            <input
              type="checkbox" value="yes" 
            /> yes</label>
            <label>
            <input
              type="checkbox" value="yes" 
            /> waiting to hear</label>
            <label>
            <input
              type="checkbox" value="no" 
            /> can't apply yet</label>
            </div>
          </div>
             </div> 

             <div className='row'>
          <div className='four columns'>
            <label>If can’t apply yet, when can you be accepted to the Nursing Program?:</label>
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
            <label>Field of interest:</label>
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
            <label>Month/Year you expect to graduate: </label>
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
            <label>College credit awarded/in progress-Classes taken: </label>
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
            <label>College awarded/ing: </label>
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


export default Four;