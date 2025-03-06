import React from "react";
import iittech from "./img/it.jpg";
import './css/About.css';

const About =()=>{
    const aboutdescription='Information technology (IT) is a set of related fields that encompass computer systems, software, programming languages, and data and information processing, and storage. IT forms part of information and communications technology (ICT).An information technology system (IT system) is generally an information system, a communications system, or, more specifically speaking, a computer system — including all hardware, software, and peripheral equipment — operated by a limited group of IT users, and an IT project usually refers to the commissioning and implementation of an IT system. IT systems play a vital role in facilitating efficient data management, enhancing communication networks, and supporting organizational processes across various industries. Successful IT projects require meticulous planning, seamless integration, and ongoing maintenance to ensure optimal functionality and alignment with organizational objectives.';
    return (
        <div className="about-container">
            <img src={iittech}alt="About Us" className="about-image"/>

            <div className="text-container">
                <h2 className="abouttitle"></h2>
                <p>{aboutdescription}</p>
            </div>

        </div>
    );
};

export default About;

