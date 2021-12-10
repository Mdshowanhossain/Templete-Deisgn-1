import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <>
        <div className="contact_bg">
          <div className="about_container">
            <div className="about_title_wrapper">
              <span className="about_title">CONTACT US</span>
            </div>
            <div className="map_container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923086.3367773639!2d50.65730821838223!3d25.344290044604957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sQatar!5e0!3m2!1sen!2sbd!4v1638992575436!5m2!1sen!2sbd"
                style={{
                  width: "800",
                  height: "850",
                  style: "border:0",
                  allowFullScreen: "",
                  loading: "lazy",
                }}
              ></iframe>
            </div>

            <div className="contact_form_wrapper">
              <div className="left_contact">
                <div className="contact_form_title">
                  <span className="">CONTACT FORM</span>
                </div>
                <div className="form_input_container">
                  <form action="">
                    <label>Name*</label>
                    <div className="">
                      <input type="text" />
                    </div>
                    <label>Email*</label>
                    <div className="">
                      <input type="text" />
                    </div>
                    <label>Contact Number</label>
                    <div className="">
                      <input type="text" />
                    </div>
                    <label>Message</label>
                    <div className="">
                      <textarea></textarea>
                    </div>
                    <button>SUBMIT</button>
                  </form>
                </div>
              </div>
              <div className="right_contact">
                <div className="contact_us_side_content">
                  <div className="address">
                    <div className="contact_icons_wrapper contact_c">
                      <span>QATAR OFFICE</span>
                      <div className="home">
                        <i class="fas fa-home"></i>
                        <small> Britannic Water Treatment Company W.L.L.</small>
                      </div>

                      <div className="call">
                        <i className="fas fa-phone"></i>
                        <small>Qatar : +974 4460 0212 / +974 4460 1088</small>
                      </div>
                      <div className="message">
                        <i className="fas fa-envelope"></i>
                        <small>
                          Projects Division:{" "}
                          <a className="anchor" href="">
                            sales@britannicwater.com
                          </a>
                        </small>
                      </div>
                      <div className="email">
                        <i class="fas fa-envelope"></i>
                        <small>
                          Domestic Division:{" "}
                          <a href="" className="anchor">
                            info@britannicwater.com
                          </a>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Contact;
