import React from "react";
import NavMenuItem from "./Navigation/NavMenuItem";

const ProjectsHeading = () => {
  return (
    <div className="py-48">
      <div className="border-t">
        <NavMenuItem
          title="Projects"
          marqueeText="See Everything"
          images={["/NavImages/pic1.png", "/NavImages/pic2.jpg"]}
        />
      </div>

      <NavMenuItem
        title="Agency"
        marqueeText="Know About Us"
        images={["/NavImages/Carl.png", "/NavImages/Michele_640x290.jpg"]}
      />
      <NavMenuItem
        title="Contact"
        marqueeText="Let's Talk"
        images={["/NavImages/mail.png", "/NavImages/mail.png"]}
      />
      <NavMenuItem
        title="Blog"
        marqueeText="Read Articles"
        images={["/NavImages/pic3.jpg", "/NavImages/pic4.png"]}
      />
    </div>
  );
};

export default ProjectsHeading;

//       <footer>
//         <Clock />
//         <div>
//           <p>Privacy Policy</p>
//           <p>Privacy Notice</p>
//           <p>Ethics Report</p>
//         </div>
//         <div>
//           <h1>FB</h1>
//           <h1>IG</h1>
//           <h1>IN</h1>
//         </div>
//       </footer>
//     </div>
//   );
// }; */}
