import React from "react";
import Container from "../component/Container";

function Home() {
  return (
    <Container style={{ minHeight: "80%" }}>
      <h1 className="text-center">Introduction</h1>
      <div className="card col-6">
        <p class="state">
          I am a Full-Stack web developer with a background in customer service
          and sales. I began working on my certificate for web development at
          UCI beginning in 2020 and have trained in Javascript, Node, and React
          to implement responsive web design. </p>
          <p class="state">I am enthusiastic about the
          learning opportunity that coding provides, and am known to ask many
          questions of my peers and mentors. With each new project, I push
          myself to try and implement new code that I had not used before. An
          example is with an in progress web project that utilizes restful API.
          I needed a way to set up communication between our front end and back
          end to properly send user input to a search API. The Axios npm bridged
          that gap, and after reading the documentation, I successfully created
          a post request that called the search API and returned the data we
          were looking to display.</p>
          <p class="state"> I have found my new passion with code, and I
          love to solve new problems presented while coding. I believe that this
          newfound passion and drive to push my coding knowledge would be a
          strong addition to any organization.</p>
      </div>
    </Container>
  );
}

export default Home;
