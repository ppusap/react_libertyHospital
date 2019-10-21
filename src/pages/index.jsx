import React from "react";
import {Link} from "react-router-dom";
import 'C:/Users/S534686/Documents/GDP/my-app/src/css/styles.css';  

const MainPage = () => {
    return(
    <div className="MainPage">
      <div className="container">
        <div className="page-header">
            <img className="mb-4" src={require("./AppLogo.jpg")} alt="" width="272" height="72" />
        </div>

        
        <h1>Program Management</h1>
        <div>
        <h2>Programs:</h2>
        <ol>
        <Link to="/Login"> <h3>1. Patient Assistance</h3></Link>
        <Link to="/Login"> <h3>2. Hughes Family Assistance </h3></Link>
        <Link to="/Login"> <h3>3. Kyleigh's Gift  </h3></Link>
        <Link to="/Login"> <h3>4. TreeHouse </h3></Link>
        </ol>
        </div>
      </div>
    </div>
    )
}

export default MainPage;