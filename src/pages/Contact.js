import React from "react";
import Container from "../component/Container"
import Me from "../Images/My Profile.jpg"

function Contact() {
    return(
        
        <Container style={{ minHeight: "80%" }}>
            
            <h1 className="text-center">Contact Me</h1>
            
          <div className="card col-md row-2">
            <img src={Me} alt="Its Me" id="myPicture" />

            <p class="state">I would love to hear from you regarding any opportunities or questions you may have at this time.</p>
            <p class="state">Please do not hesitate to call, email, or message me and I will be sure to respond as soon as I can.</p>
            <p class="state">The best way to reach me would be via email, but I will return any calls within the same business day.</p>
            
            <p class="state">Phone: <strong>(480)-349-9532</strong></p>
            <a href = "mailto: nicolai.pitroff@gmail.com?subject= Regarding your portfolio">nicolai.pitroff@gmail.com</a>
            <a href = "https://github.com/NPitroff">My Github</a>
        </div>
        
        </Container>
    );
}

export default Contact;