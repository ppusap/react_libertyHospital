'use strict'
import React from 'react'
import { nullLiteral } from "@babel/types";

export class Three extends React.Component 
{
    constructor(){
        super()
        this.state={
            printedName:'',
            title:'',
            signature:'',
            date:'',
        }
    this.handlePrintedNameChanged = this.handlePrintedNameChanged.bind(this);
    this.handleTitleChanged = this.handleTitleChanged.bind(this);
    this.handleSignatureChanged = this.handleSignatureChanged.bind(this);
    this.handleDateChanged = this.handleDateChanged.bind(this);
    }
   handlePrintedNameChanged(event)
   {
    this.setState({printedName:event.target.value}) 
   }
   handleTitleChanged(event)
   {
       this.setState({title:event.target.value})
   }
   handleSignatureChanged(event)
   {
       this.setState({signature:event.target.value})
   }
   handleDateChanged(event)
   {
       this.setState({date:event.target.value})
   }
   render()
   {
       return(
           <div>
               <div>
                   <h6>
                   I certify that I have read the foregoing Scholarship Application and the Liberty Hospital/Liberty
                Hospital
                Foundation Scholarship Application Guidelines, that I understand the questions, that the answers I have
                given
                are true, accurate and complete, and that I have made no false statements nor have I misrepresented any
                facts in
                this application, and that I authorize investigation of all my statements contained in this application.
                I
                understand that false answers will disqualify me from consideration for a scholarship. I hereby release
                the
                New
                Liberty Hospital District (“Liberty Hospital”) and the Liberty Hospital Foundation, their respective
                officers
                and agents, committee members, and employees from any liability resulting from any investigation of my
                statements contained in this application that I have hereby authorized by my signature below


                Liberty Hospital/Liberty Hospital Foundation will not discriminate in any respect on any application for
                funding
                under the Liberty Hospital/Liberty Hospital Foundation Scholarship Award Program because of an
                applicant’s
                race,
                sex, age, national origin, religion, physical or mental impairment, or veteran status.
                   </h6>
               </div>
        <form>
          <div className='row'>
          <div className='six columns'>
           
            <input
              className='u-full-width'
              placeholder='Printed Name'
              type='text'
              onChange={this.handlePrintedNameChanged}
              value={this.state.printedName}
              autoFocus
            />
          </div>
          <div className='six columns'>
           
           <input
             className='u-full-width'
             placeholder='Date'
             type='text'
             onChange={this.handleTitleChanged}
             value={this.state.title}
             autoFocus
           />
         </div>
             </div> 
             <br/>
             </form>
             <button type="submit" formaction="/">Submit</button>
           </div>
       );

   }
   
}

export default Three;