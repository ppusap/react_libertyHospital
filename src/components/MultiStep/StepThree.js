'use strict'
import React from 'react'
import { nullLiteral } from "@babel/types";

export class StepThree extends React.Component 
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
    this.handleSubmit = this.handleSubmit.bind(this)
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
   handleSubmit(event){

   }
   render()
   {
       return(
           <div>
               <div>
                   <h6>
                   With my signature I certify the following:
                   The above information is correct; I am authorized by the governing board of this organization to submit this grant application to the Liberty Hospital Foundation;
                   this organization is in good standing with the IRS,
                   retains its 501(c)(3) tax-exempt status;
                   this organization does not discriminate on the basis of race, religion, sexual preference, physical circumstances, or national origin. 
                   </h6>
               </div>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
          <div className='six columns'>
           
            <input
              className='u-full-width'
              placeholder='Printed Name,Head of Primary Agency'
              type='text'
              required="true"
              onChange={this.handlePrintedNameChanged}
              value={this.state.printedName}
              autoFocus
            />
          </div>
          <div className='six columns'>
           
           <input
             className='u-full-width'
             placeholder='Title'
             type='text'
             required="true"
             onChange={this.handleTitleChanged}
             value={this.state.title}
             autoFocus
           />
         </div>
             </div> 
             <br/>
          
             <div className='row'>
          <div className='six columns'>
           
            <input
              className='u-full-width'
              placeholder='Signature,Head of Primary Agency'
              type='text'
              required="true"
              onChange={this.handleSignatureChanged}
              value={this.state.signature}
              autoFocus
            />
          </div>
          <div className='six columns'>
           
            <input
              className='u-full-width'
              placeholder='Date'
              type='date'
              onChange={this.handleDateChanged}
              value={this.state.date}
              autoFocus
            />
          </div>
             </div> 
            <br/>
            
          
            <input type="submit" value="Save" />
             </form>


           </div>
       );

   }
   
}

