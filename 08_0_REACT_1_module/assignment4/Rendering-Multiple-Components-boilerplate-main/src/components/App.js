import React, {Component, useState} from "react";
import ProjectDetails from "./ProjectDetails";
import '../styles/App.css';

const data ={projectName:"IRCTC-Tatkal Booking", projectDescription:"This app will help user in booking tatkal tickets in IRCTC website by getting data from user beforehand and booking automatically." }

const App = () => {
  return (
    <div id="main">
      <ProjectDetails childData={data}/>
    </div>
  )
}


export default App;
