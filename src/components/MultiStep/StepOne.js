'use strict'
import React from "react"
import { nullLiteral } from "@babel/types";

export class StepOne extends React.Component{
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
    this.handleSubmit = this.handleSubmit.bind(this)
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
   handleSubmit(event){

   }

    render()
    {
        return(
          <div>
            <form onSubmit={this.handleSubmit}>


          <div className='row'>
          <div className='four columns'>
            <label>Name of the Agency/Agencies(list all the agencies involved in the project):<sup><b>*</b></sup></label>
            </div>
            <div className='six columns'>
            <input
              placeholder='Agency Name'
              type='text'
              onChange={this.handleAgencyNameChanged}
              value={this.state.agencyName}
              maxlength="15"
              minlength="3"
              required="true"
              autoFocus

            />
          </div>
             </div>  
         
             <div className='row'>
          <div className='four columns'>
            <label>Primary Agency<sup><b>*</b></sup></label>
            </div>
            <div className='four columns'>
            <input
              
              placeholder='Primary Agency'
              type='text'
              required="true"
              onChange={this.handlePrimaryAgencyChanged}
              value={this.state.primaryAgency}
              autoFocus
            />
          </div>
          </div>
          <br/>
          <div className='row'>
          <div className='four columns'>
            <label>Primary Agency Tax ID #</label>
            </div>
            <div className='four columns'>
            <input
              className='u-full-width'
              placeholder='Tax ID'
              type='text'
              
              onChange={this.handleTaxIDChanged}
              value={this.state.taxID}
              autoFocus
            />
          </div>
          </div>
          <br/>
          <div className='row'>
          <div className='four columns'>
            <label>Contact Person</label>
            </div>
            <div className='four columns'>
            <input
              className='u-full-width'
              placeholder='Contact Person'
              type='text'
              onChange={this.handleContactPersonChanged}
              value={this.state.contactPerson}
              autoFocus
            />
          </div>
          </div>
          <br/>
          <div className='row'>
          <div className='four columns'>
            <label>Title<sup><b>*</b></sup></label>
            </div>
            <div className='four columns'>
            <input
              className='u-full-width'
              placeholder='title'
              type='text'
              onChange={this.handleTitleChanged}
              value={this.state.title}
              required="true"
              autoFocus
            />
          </div>
          </div>
          <br/>
          <div className='row'>
          <div className='four columns'>
            <label>Mailing Address</label>
            </div>
            <div className='four columns'>
            <input
              className='u-full-width'
              placeholder='Mailing Address'
              type='text'
              onChange={this.handleMailingAddressChanged}
              value={this.state.mailingAddress}
              autoFocus
            />
          </div>
          </div>
          <br/>
          <div className='row'>
          <div className='four columns'>
         
            <label>Phone<sup><b>*</b></sup></label>
            </div>
          <div className='four columns'>
            <input
              className='u-full-width'
              placeholder='Phone'
              type="text"
              pattern="[0-9]*"
              maxlength="10"
              minlength="10"
              required="true"
              onChange={this.handlePhoneChanged}
              value={this.state.phone}
              autoFocus
            />
          </div>
          </div>

          <br/>
          <div className='row'>
          <div className='four columns'>
            <label>Fax</label>
            </div>
            <div className='four columns'>
            <input
              className='u-full-width'
              placeholder='fax'
              type='text'
              onChange={this.handleFaxChanged}
              value={this.state.fax}
              autoFocus
            />
          </div>
          </div>
          <br/>
          <div className='row'>
          <div className='four columns'>
            <label>E-Mail<sup><b>*</b></sup></label>
            </div>
            <div className='four columns'>
            <input
              className='u-full-width'
              placeholder='E-Mail'
              type='email'
              required="true"
              onChange={this.handleEmailChanged}
              value={this.state.email}
              autoFocus
            />
          </div>
          </div>
          <br/>
          <div className='row'>
          <div className='four columns'>
            <label>Briefly summarize the mission of each agency involved in the project:</label>
            </div>
            <div className='six columns'>
            <input
              className='u-full-width'
              placeholder='Summary'
              type='text'
              onChange={this.handleSummaryChanged}
              value={this.state.summary}
              autoFocus
            />
          </div>
          </div>
          <p><sup>*</sup><b>Required field</b></p>
          <input type="submit" value="Save" />
            </form>
            {/* <button className="btn btn-lg btn-primary " type="save" formAction="home.html">Save</button> */}
            </div>
           

        );
    }
}