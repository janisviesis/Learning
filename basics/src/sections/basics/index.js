import React from "react";

const Basics = () => {
  return (
    <div>
      <h2>HTML/CSS/JavaScript Basics</h2>
      <p>
        HTML stands for HyperText Markup Language. It is used on the front and gives structure to
        the webpage, which you can style using CSS and make interactive using JavaScript.
      </p>
      <p>
        CSS or Cascading Style Sheets is the language used to style the front end of any website.
        CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
      </p>
      <p>
        JavaScript allows you to add interactivity to your pages. You may have seen common examples
        on the websites: sliders, click interactions, popups, and so on.
      </p>
      <p>
        {`W3schools provides new hub to all the tutorials they offer and your learning progress - `}
        <a href="https://my-learning.w3schools.com/" target="_blank" rel="noopener noreferrer">
          My Learning
        </a>
        . Create a free W3Schools account to improve your learning experience - read tutorial, do
        exercises and take quiz. Start by exploring the following resources:
      </p>
      <ul>
        <li>
          <a
            href="https://my-learning.w3schools.com/tutorial/html"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3Schools: Learn HTML
          </a>
        </li>
        <li>
          <a
            href="https://my-learning.w3schools.com/tutorial/css"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3Schools: Learn CSS
          </a>
        </li>
        <li>
          <a
            href="https://my-learning.w3schools.com/tutorial/js"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3Schools: JavaScript Tutorial
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Basics;
