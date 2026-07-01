import Clock from "./Clock";
import React from "react";

const FullScreenNav = () => {
  return (
    <div>
      <div>
        <div></div>
        <div>
          <h1>Projects</h1>
          <h2>See Everything</h2>
        </div>
           <div></div>
        <div>
          <h1>Agency</h1>
          <h2>Know About Us</h2>
        </div>
           <div></div>
        <div>
          <h1>Contect</h1>
          <h2>Send Us A Mail</h2>
        </div>
           <div></div>
        <div>
          <h1>Blog</h1>
          <h2>Read Articals</h2>
        </div>
           <div></div>
      </div>
      <footer>
        <Clock />
        <div>
          <p>Privacy Policy</p>
          <p>Privacy Notice</p>
          <p>Ethics Report</p>
        </div>
        <div>
          <h1>FB</h1>
          <h1>IG</h1>
          <h1>IN</h1>
        </div>
      </footer>
    </div>
  );
};

export default FullScreenNav;
