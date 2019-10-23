'use strict'
import React from "react"
import { nullLiteral } from "@babel/types";

export class StepTwo extends React.Component {
   constructor()
   {
       super()
       this.state ={
           projectTitle:'',
           newProject:'',
           grantAmount:'',
           synopsis:'',
           response:'',
           funds:0,
           outcomes:'',
           
           outcomesEvalution:'',
           collabration:'',
           sourceOfSupport:'',
           sustainability:'',
           noOfPeople:0,
           SocioEcnomics:'',
           ageDemoGraphics:'',
           genderDemoGraphics:'',
           clients:''


        
       }
    this.handleProjectTitleChanged = this.handleProjectTitleChanged.bind(this);
    this.handleNewProjectChanged = this.handleNewProjectChanged.bind(this);
    this.handleGrantAmountChanged = this.handleGrantAmountChanged.bind(this);
    this.handleSynopsisChanged = this.handleSynopsisChanged.bind(this);
    this.handleResponseChanged = this.handleResponseChanged.bind(this);
    this.handleFundsChanged=this.handleFundsChanged.bind(this);
    this.handleOutcomesChanged = this.handleOutcomesChanged.bind(this);
    this.handleOutcomesEvalutionChanged = this.handleOutcomesEvalutionChanged.bind(this);
    this.handleCollabrationChanged = this.handleCollabrationChanged.bind(this);
    this.handleSofSChanged = this.handleSofSChanged.bind(this);
    this.handleNoOfPeopleChanged = this.handleNoOfPeopleChanged.bind(this);
    this.handleSocioEcnomicsChanged=this.handleSocioEcnomicsChanged.bind(this);
    this.handleAgeDemoGraphicsChanged=this.handleAgeDemoGraphicsChanged.bind(this)
    this.handleGenderDemoGraphicsChanged=this.handleGenderDemoGraphicsChanged.bind(this);
    // this.handleClientsChanged=this.handleClientsChanged.bind(this)
    this.handleSustainabilityChanged=this.handleSustainabilityChanged.bind(this)
    }
    

    handleProjectTitleChanged(event)
   {
       this.setState({projectTitle:event.target.value})
   }
   handleNewProjectChanged(event)
   {
       this.setState({newProject:event.target.value})
   }
   handleGrantAmountChanged(event)
   {
       this.setState({grantAmount:event.target.value})
   }
   handleSynopsisChanged(event)
   {
       this.setState({synopsis:event.target.value})
   }
   handleResponseChanged(event)
   {
       this.setState({response:event.target.value})
   }
   handleFundsChanged(event)
   {
       this.setState({funds:event.target.value})
   }
   handleOutcomesChanged(event)
   {
       this.setState({outcomes:event.target.value})
   }
  handleOutcomesEvalutionChanged(event)
   {
       this.setState({outcomesEvalution:event.target.value})
   }
   handleCollabrationChanged(event)
   {
       this.setState({collabration:event.target.value})
   }
   handleSofSChanged(event)
   {
       this.setState({sourceOfSupport:event.target.value})
   }
   handleSustainabilityChanged(event)
   {
       this.setState({sustainability:event.target.value})
   }
   handleNoOfPeopleChanged(event)
   {
       this.setState({noOfPeople:event.target.value})
   }
   handleSocioEcnomicsChanged(event)
   {
       this.setState({SocioEcnomics:event.target.value})
   }
   handleAgeDemoGraphicsChanged(event)
{
    this.setState({ageDemoGraphics:event.target.value})
}
handleGenderDemoGraphicsChanged(event)
{
    this.setState({genderDemoGraphics:event.target.value})
}


    render()
    {
        return(
            <form>


            <div className='row'>
          <div className='six columns'>
            <label>Project Title</label>
            <input
              className='u-full-width'
              placeholder='Title'
              type='text'
              onChange={this.handleProjectTitleChanged}
              value={this.state.projectTitle}
              autoFocus
            />
          </div>
             </div>  

             <div className='row'>
          <div className='six columns'>
            <label>Is this a new Project or continution of the current Project:</label>
            <input
              className='u-full-width'
              placeholder='Enter the text here'
              type='text'
              onChange={this.handleNewProjectChanged}
              value={this.state.newProject}
              autoFocus
            />
          </div>
          </div>

          <div className='row'>
          <div className='six columns'>
            <label>Have you received fundings from the LiveWell Grant Program in the past?Please detail previous grant amounts(s), and if outcomes form the previous award(s) were met </label>
            <input
              className='u-full-width'
              placeholder='Enter the text here'
              type='text'
              onChange={this.handleGrantAmountChanged}
              value={this.state.grantAmount}
              autoFocus
            />
          </div>
          </div>

          <div className='row'>
          <div className='six columns'>
            <label>Project Narrative/synopsis (250 Words)</label>
            <input
              className='u-full-width'
              placeholder='Enter the text here'
              type='text'
              onChange={this.handleSynopsisChanged}
              value={this.state.synopsis}
              autoFocus
            />
          </div>
          </div>

          <div className='row'>
          <div className='six columns'>
            <label>How is this project a response to a health priority in the Liberty Hospital service area?</label>
            <input
              className='u-full-width'
              placeholder='Enter the text here'
              type='text'
              onChange={this.handleResponseChanged}
              value={this.state.response}
              autoFocus
            />
          </div>
          </div>

          <div className='row'>
          <div className='six columns'>
            <label>What are the main otcomes for which you are requesting support?</label>
            <input
              className='u-full-width'
              placeholder='Enter the text Here'
              type='text'
              onChange={this.handleOutcomesChanged}
              value={this.state.outcomes}
              autoFocus
            />
          </div>
          </div>

          <div className='row'>
          <div className='six columns'>
            <label>How will outcomes be evaluated</label>
            <input
              className='u-full-width'
              placeholder='Click here to Enter'
              type='Number'
              onChange={this.handleOutcomesEvalutionChanged}
              value={this.state.outcomesEvalution}
              autoFocus
            />
          </div>
          </div>

          <div className='row'>
          <div className='six columns'>
            <label>Describe how this project is a collaborative effort(if applicable)</label>
            <input
              className='u-full-width'
              placeholder='Click here to enter the text'
              type='text'
              onChange={this.handleCollabrationChanged}
              value={this.state.collabration}
              autoFocus
            />
          </div>
          </div>

          <div className='row'>
          <div className='six columns'>
            <label>Amount of Funds requested from the Livewell Grant Program</label>
            <input
              className='u-full-width'
              placeholder='Mailing Address'
              type='text'
              onChange={this.handleFundsChanged}
              value={this.state.funds}
              autoFocus
            />
          </div>
          </div>

          <div className='row'>
          <div className='six columns'>
            <label>E-Mail</label>
            <input
              className='u-full-width'
              placeholder='E-Mail'
              type='text'
              onChange={this.handleSofSChanged}
              value={this.state.email}
              autoFocus
            />
          </div>
          </div>

          <div className='row'>
          <div className='six columns'>
            <label>What is sustainability plan for this Project?</label>
            <input
              className='u-full-width'
              placeholder='Mailing Address'
              type='text'
              onChange={this.handleSustainabilityChanged}
              value={this.state.sustainability}
              autoFocus
            />
          </div>
          </div>

        <div>
            <p>
                The Liberity Hospital Half Marathon is the primary source of funds for the LiveWell Grant Program.An effort to recruit volunteers and participants, and promotions of the events is expected for arwardee organizations. Please describe how yout organizations(s) will support ans raise awarness of event
            </p>
        </div>


          <div className='row'>
          <div className='six columns'>
            <label>Amount of Funds requested from the Livewell Grant Program</label>
            <input
              
              placeholder='Mailing Address'
              type='text'
              onChange={this.handleOutcomesChanged}
              value={this.state.mailingAddress}
              autoFocus
            />
          </div>
          </div>

        
          <div className='row'>
          <div className='six columns'>
            <label>Briefly summarize the mission of each agency involved in the project:</label>
            <input
             
              placeholder='Summary'
              type='text'
              onChange={this.handleNoOfPeopleChanged}
              value={this.state.summary}
              autoFocus
            />
          </div>
          </div>


          </form>

        );
    }
}

export default StepTwo;
