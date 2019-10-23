'use strict'
import React from "react"
import { nullLiteral } from "@babel/types";

export class Two extends React.Component{
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


            <h2><b>II. High School Academic Information</b></h2>
            <h5><label>High School Attended: </label></h5>
            <div className='row'>
          <div className='four columns'>
            <label>Name:</label>
            </div>
            <div className='six columns'>
            <input
              placeholder = "School name"
              type='text'
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
            placeholder = "1121 N college Dr"
              type='text'
              
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>Graduation Year:</label>
            </div>
            <div className='six columns'>
            <input
            placeholder = "2015"
              type='text'
             
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>Class Rank:</label>
            </div>
            <div className='six columns'>
            <input
            placeholder = "First"
              type='text'
              
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>GPA (MUST BE 3.0 or higher to apply):</label>
            </div>
            <div className='six columns'>
            <input
              type='text'
              placeholder = "3.5"
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>Weighted GPA:</label>
            </div>
            <div className='six columns'>
            <input
              type='text'
              placeholder = '3.5'
              autoFocus
            />
          </div>
             </div>  

             <h5><label>ACT Results:</label> </h5>

             <div className='row'>
          <div className='four columns'>
            <label>Raw Score:</label>
            </div>
            <div className='six columns'>
            <input
              type='text'
              
              autoFocus
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>English:</label>
            </div>
            <div className='six columns'>
            <input
              type='text'
              
              autoFocus
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>Math:</label>
            </div>
            <div className='six columns'>
            <input
              type='text'
              
              autoFocus
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>Reading:</label>
            </div>
            <div className='six columns'>
            <input
              type='text'
              
              autoFocus
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>Science:</label>
            </div>
            <div className='six columns'>
            <input
              type='text'
              
              autoFocus
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>Composite:</label>
            </div>
            <div className='six columns'>
            <input
              type='text'
              
              autoFocus
            />
          </div>
             </div> 

             <div className='row'>
          <div className='four columns'>
            <label>Other test scores you wish to report (SAT cumulative and raw scores, Advanced Placement exams, etc.):</label>
            </div>
            <div className='six columns'>
            <input
              type='text'
              
              autoFocus
            />
          </div>
             </div>  

             <div className='row'>
          <div className='four columns'>
            <label>Name of High School Counselor:</label>
            </div>
            <div className='six columns'>
            <input
              type='text'
              
              autoFocus
            />
          </div>
             </div> 

             <div className='row'>
          <div className='four columns'>
            <label>Phone number:</label>
            </div>
            <div className='six columns'>
            <input
              type='text'
              
              autoFocus
            />
          </div>
             </div> 
            </form>
            </div>
           

        );
    }
}


export default Two;