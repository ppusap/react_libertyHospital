import React from "react";
import {Link} from "react-router-dom";
import './css/styles.css';  


const Program = () => {
    return(
    <div className="Program">
      <div className="container">
        
        <h1>Patient Assistance Program</h1>
        <div>
        <form className="form-submit" action="./Program" id="validateForm">   
        <h2>Funding Details:</h2>
        <table>
            <tr>
                <td><h5>Services Provided</h5></td>
                <td><h5>Number Served</h5></td>
                <td><h5>Funding Used</h5></td>
            </tr>
            <br></br>
            <tr>
                <td>Women's Imaging </td>
                <td><input type="text" size="20" placeholder="No Of Persons" required required></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars" required></input></td>
            </tr>
            <tr>
                <td>Clothes Closet</td>
                <td><input type="text" size="20" placeholder="No Of Persons" required></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars" required></input></td>
            </tr>
            <tr>
                <td>Dialysis</td>
                <td><input type="text" size="20" placeholder="No Of Persons" required></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars" required></input></td>
            </tr>
            <tr>
                <td>Language Interpretation</td>
                <td><input type="text" size="20" placeholder="No Of Persons" required></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars" required></input></td>
            </tr>
            <tr>
                <td>Durable Medical Equipment </td>
                <td><input type="text" size="20" placeholder="No Of Persons" required></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars" required></input></td>
            </tr>
            <tr>
                <td>Sam Rodgers Co-pays</td>
                <td><input type="text" size="20" placeholder="No Of Persons" required></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars" required></input></td>
            </tr>
            <tr>
                <td>Scales</td>
                <td><input type="text" size="20" placeholder="No Of Persons" required></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars" required></input></td>
            </tr>
            <tr>
                <td>Student Assistance </td>
                <td><input type="text" size="20" placeholder="No Of Persons" required></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars" required></input></td>
            </tr>
            <tr>
                <td>Transportation Assistance</td>
                <td><input type="text" size="20" placeholder="No Of Persons" required></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars" required></input></td>
            </tr>
            <tr>
                <td>Cardiac Rehab</td>
                <td><input type="text" size="20" placeholder="No Of Persons" required></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars" required></input></td>
            </tr>
            <tr>
                <td>Medication Assistance</td>
                <td><input type="text" size="20" placeholder="No Of Persons" required></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars" required></input></td>
            </tr>
            <tr>
                <td>Medication Assistance</td>
                <td><input type="text" size="20" placeholder="No Of Persons" required></input></td>
                <td><input type="text" size="20" placeholder="Amount in Dollars" required></input></td>
            </tr>
        </table>
        <button type="submit" formaction="./Program">Submit</button>
        </form>
        </div>
      </div>
    </div>
    )
}

export default Program;