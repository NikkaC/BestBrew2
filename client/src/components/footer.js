import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="#bbb">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="./onas">Ekipa BestBrew </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;