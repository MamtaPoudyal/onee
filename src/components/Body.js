import React from "react";
import './css/Body.css';

const Body =()=>{
    return(
        <main className="main-content">
            <section className="welcome-section">
                <h2>Welcome to My Website</h2>
                <p>Explore the amazing services we offer and learn more about our mission to provide quality content</p>
            </section>
            <section className="features">
                <h3>Our Features</h3>
                <ul>
                    <li>Feature 1: Hight quality content</li>
                    <li>Feature 2: Respnsive Design</li>
                    <li>Feature 3: User-friendly experiences</li>
                </ul>
            </section>
        </main>
    );
};
export default Body;