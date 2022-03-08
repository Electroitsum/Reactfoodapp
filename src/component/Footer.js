import { IconContext } from "react-icons/lib";
import {
  FaTwitterSquare,
  FaPinterestSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

function footer() {
  return (
    <>
      <div className="footer-area">
        <div className="footer-inner row m-0 my-5">
          <span className="col-12 col-md p-3">
            <p className="footerhead-text">Our Contact</p>
            <p className="footer-text" style={{ fontWeight: "700" }}>
              React Developers
            </p>
            <p className="footer-text">Bharat House, Near G.T. Road</p>
            <p className="footer-text" style={{ marginBottom: "15px" }}>
              Pin: 482005, Mumbai (M. H.)
            </p>
            <p className="footer-text">(458) 566-458 - 9285-12584</p>
            <p className="footer-text">test@maindomain.com</p>
          </span>
          <span className="col-12 col-md p-3">
            <p className="footerhead-text">Quick Links</p>
            <a className="footerlink-text" href="https://google.com">
              Latest Events
            </a>
            <a className="footerlink-text" href="https://google.com">
              Terms & Conditions
            </a>
            <a className="footerlink-text" href="https://google.com">
              Privacy Policy
            </a>
            <a className="footerlink-text" href="https://google.com">
              Carrer
            </a>
            <a className="footerlink-text" href="https://google.com">
              Contact Us
            </a>
          </span>
          <span className="col-12 col-md p-3">
            <p className="footerhead-text">Latest Posts</p>
            <a className="footerlink-text" href="https://google.com">
              ipsum id orci porta dapibus. suscipit tortor eget
            </a>
            <a className="footerlink-text" href="https://google.com">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </a>
            <a className="footerlink-text" href="https://google.com">
              Pellentesque in ipsum id orci porta dapibus.
            </a>
          </span>
          <span className="col-12 col-md p-3">
            <p className="footerhead-text">Recent News</p>
            <a className="footerlink-text" href="https://google.com">
              ipsum id orci porta dapibus. suscipit tortor eget
            </a>
            <a className="footerlink-text" href="https://google.com">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </a>
            <a className="footerlink-text" href="https://google.com">
              Pellentesque in ipsum id orci porta dapibus.
            </a>
          </span>
        </div>
        <span
          style={{
            display: "inline-block",
            width: "100%",
            height: "0.5px",
            backgroundColor: "white",
          }}
        ></span>
        <div className="footersocial-con my-5">
          <div className="footersocial row m-0">
            <span className="col-12 col-sm-6" style = {{color: "#656565"}}>@Developed by <span style={{color: "white"}}>sumit</span></span>
            <span className="col-12 col-sm-6 d-flex justify-content-start justify-content-sm-end">
              <a href="https://google.com" className="socialmedia-link p-1">
                 
                <IconContext.Provider value={{ size: "30px", padding: "20px"}}>
                  <FaFacebookSquare />
                </IconContext.Provider>
                
              </a>
              <a href="https://google.com" className="socialmedia-link p-1">
                <IconContext.Provider value={{ size: "30px" }}>
                  <FaTwitterSquare />
                </IconContext.Provider>
              </a>
              <a href="https://google.com" className="socialmedia-link p-1">
                <IconContext.Provider value={{ size: "30px" }}>
                  <FaLinkedin />
                </IconContext.Provider>
              </a>
              <a href="https://google.com" className="socialmedia-link p-1">
                <IconContext.Provider value={{ size: "30px" }}>
                  <FaPinterestSquare />
                </IconContext.Provider>
              </a>
              <a href="https://google.com" className="socialmedia-link p-1">
                <IconContext.Provider value={{ size: "30px" }}>
                  <FaGooglePlusSquare />
                </IconContext.Provider>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
