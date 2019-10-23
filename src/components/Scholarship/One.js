'use strict'
import React from "react"
import { nullLiteral } from "@babel/types";

export class One extends React.Component{
   constructor()
   {
       super()
       this.state ={
           agencyName:'',
           primaryAgency:'',
           taxID:'',
           contactPerson:'',
           title:'',
           mailingAddress:'',
           phone:0,
           fax:'',
           email:'',
           summary:'',
        
       }
       this.handleAgencyNameChanged = this.handleAgencyNameChanged.bind(this);
    this.handlePrimaryAgencyChanged = this.handlePrimaryAgencyChanged.bind(this);
    this.handleTaxIDChanged = this.handleTaxIDChanged.bind(this);
    this.handleContactPersonChanged = this.handleContactPersonChanged.bind(this);
    this.handleTitleChanged = this.handleTitleChanged.bind(this);
    this.handleMailingAddressChanged = this.handleMailingAddressChanged.bind(this);
    this.handlePhoneChanged = this.handlePhoneChanged.bind(this);
    this.handleFaxChanged = this.handleFaxChanged.bind(this);
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handleSummaryChanged = this.handleSummaryChanged.bind(this);
    }
    

   handleAgencyNameChanged(event)
   {
       this.setState({agencyName:event.target.value})
   }
   handlePrimaryAgencyChanged(event)
   {
       this.setState({primaryAgency:event.target.value})
   }
   handleTaxIDChanged(event)
   {
       this.setState({taxID:event.target.value})
   }
   handleContactPersonChanged(event)
   {
       this.setState({contactPerson:event.target.value})
   }
   handleTitleChanged(event)
   {
       this.setState({title:event.target.value})
   }
   handleMailingAddressChanged(event)
   {
       this.setState({mailingAddress:event.target.value})
   }
  handlePhoneChanged(event)
   {
       this.setState({phone:event.target.value})
   }
   handleFaxChanged(event)
   {
       this.setState({fax:event.target.value})
   }
   handleEmailChanged(event)
   {
       this.setState({email:event.target.value})
   }
   handleSummaryChanged(event)
   {
       this.setState({summary:event.target.value})
   }

    render()
    {
        return(
          <div>
            <form onSubmit="return validateForm()">

            

            <h2><b>I. Personal Information</b></h2>
            <h3>Please complete the following personal information: </h3>

            <div className='row'>
          <div className='four columns'>
            <label>Last Name:</label>
            </div>
            <div className='six columns'>
            <input
              placeholder='Last Name'
              type='text'
              onChange={this.handleAgencyNameChanged}
              value={this.state.agencyName}
              autoFocus
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