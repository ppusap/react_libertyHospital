import React from "react";
import {Link} from "react-router-dom";
import 'C:/Users/S534686/Documents/GDP/my-app/src/css/styles.css';  


const Program = () => {
    return(
    <div className="Program">
      <div className="container">
        <div className="page-header">
            <img className="mb-4" src={require("./AppLogo.jpg")} alt="" width="272" height="72" />
        </div>

        
        <h1>Patient Assistance Program</h1>
        <div>
        <h2>Funding Details:</h2>
        <table>
            <tr>
                <td><h5>Services Provided</h5></td>
                <td><h5>Number Served</h5></td>
                <td><h5>Funding Used</h5></td>
            </tr>
            <br></br>
            <tr>
                <td>Student Assistance</td>
                <td><input type="text" size="20" placeholder="No Of Persons"></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars"></input></td>
            </tr>
            <tr>
                <td>Transportation Assistance</td>
                <td><input type="text" size="20" placeholder="No Of Persons"></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars"></input></td>
            </tr>
            <tr>
                <td>Medication Assistance</td>
                <td><input type="text" size="20" placeholder="No Of Persons"></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars"></input></td>
            </tr>
        </table>
        <button type="submit" formAction="./">Submit</button>
        </div>
      </div>
    </div>
    )
}

export default Program;