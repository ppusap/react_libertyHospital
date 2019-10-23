import React from "react";
import {Link} from "react-router-dom";
import './css/styles.css';  

const Status = () => {
    return(
    

<form  onsubmit="return validateForm()" action="./home.html"  id="validateForm"> 
<br></br>
<br></br>
<br></br>
    <center><h2> <b>
       Track Status
       </b>
    </h2>
    </center>
   
    <br></br><br></br>
  
<div><center>
        
       
   <label>Enter the confirmation number:
        <input type="text" name="name" placeholder="confirmation Number" /><br></br><br></br>
        <button class="btn btn-lg btn-primary " type="submit" formaction="home.html">submit</button>
    
        </label></center>
    
</div>
</form>
)
    }


export default Status;