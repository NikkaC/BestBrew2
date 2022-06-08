import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <MDBFooter color="#bbb">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <Link to="/onas"> <a>Ekipa BestBrew </a></Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;