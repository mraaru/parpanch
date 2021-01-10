import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/parpanchlogo1.jpeg";

function togglesubmenud() {
  document.getElementById("sidesubbar4").classList.toggle("show");
}
function togglesubmenue() {
  document.getElementById("sidesubbar5").classList.toggle("show");
}
function togglesubmenuf() {
  document.getElementById("sidesubbar6").classList.toggle("show");
}
function togglesubmenug() {
  document.getElementById("sidesubbar7").classList.toggle("show");
}

const CommonFooter = (props) => {
  return (
    <>
      <div className="footer-full-screen">
        <div className="footer-box-full-on">
          <div className="menu-box-all-new">
            <div className="bog-box-footer-box">
              <ul>
                <li>About</li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Code of Ethics</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Term and Conditions</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Cookie Policy</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Cookie Preferences</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Community Guidelines</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Work for us</Link>
                </li>
                <br />
                <li>
                  <Link to="/">HR Quality</Link>
                </li>
                <br />
              </ul>
              <ul>
                <li>Connect</li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Apps</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Newsletters</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Channel Finder</Link>
                </li>
                <br />
                <li>
                  <Link to="/">TV Schedule</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Podcasts</Link>
                </li>
                <br />
                <li>
                  <Link to="/"> Submit a Tip</Link>
                </li>
                <br />
              </ul>
              <ul>
                <li>Our Channels</li>
                <li>
                  <Link to="/"> Al Jazeera Arabic</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Al Jazeera English</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Al Jazeera Mubasher</Link>
                </li>
                <br />
                <li>
                  <Link to="/"> Al Jazeera Documentary</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Al Jazeera Balkans</Link>
                </li>
                <br />
                <li>
                  <Link to="/">AJ+</Link>
                </li>
                <br />
              </ul>
              <ul>
                <li>Our Network</li>
                <li>
                  <Link to="/"> Al Jazeera Centre for Studies</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Al Jazeera Media Institute</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Learn Arabic</Link>
                </li>
                <br />
                <li>
                  <Link to="/">
                    {" "}
                    Al Jazeera Centre for Public Liberties & Human Rights
                  </Link>
                </li>
                <br />
                <li>
                  <Link to="/">Al Jazeera Forum</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Al Jazeera Hotel Partners</Link>
                </li>
              </ul>
            </div>
            <div className="gg1000px-mobile-view-footer">
              <ul>
                <li
                  onClick={togglesubmenud}
                  style={{
                    fontSize: "1.5rem",
                  }}
                >
                  About <i class="fas fa-chevron-down"></i>
                  <ul
                    id="sidesubbar4"
                    style={{
                      fontSize: "1rem",
                      paddingLeft: "10%",
                      paddingTop: "10%",
                    }}
                  >
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Code of Ethics</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Term and Conditions</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Cookie Policy</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Cookie Preferences</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Community Guidelines</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Work for us</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">HR Quality</Link>
                    </li>
                    <br />
                  </ul>
                </li>
              </ul>
              <ul>
                <li
                  onClick={togglesubmenue}
                  style={{
                    fontSize: "1.5rem",
                  }}
                >
                  About <i class="fas fa-chevron-down"></i>
                  <ul
                    id="sidesubbar5"
                    style={{
                      fontSize: "1rem",
                      paddingLeft: "10%",
                      paddingTop: "10%",
                    }}
                  >
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Code of Ethics</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Term and Conditions</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Cookie Policy</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Cookie Preferences</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Community Guidelines</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Work for us</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">HR Quality</Link>
                    </li>
                    <br />
                  </ul>
                </li>
              </ul>
              <ul>
                <li
                  onClick={togglesubmenuf}
                  style={{
                    fontSize: "1.5rem",
                  }}
                >
                  About <i class="fas fa-chevron-down"></i>
                  <ul
                    id="sidesubbar6"
                    style={{
                      fontSize: "1rem",
                      paddingLeft: "10%",
                      paddingTop: "10%",
                    }}
                  >
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Code of Ethics</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Term and Conditions</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Cookie Policy</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Cookie Preferences</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Community Guidelines</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Work for us</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">HR Quality</Link>
                    </li>
                    <br />
                  </ul>
                </li>
              </ul>
              <ul>
                <li
                  onClick={togglesubmenug}
                  style={{
                    fontSize: "1.5rem",
                  }}
                >
                  About <i class="fas fa-chevron-down"></i>
                  <ul
                    id="sidesubbar7"
                    style={{
                      fontSize: "1rem",
                      paddingLeft: "10%",
                      paddingTop: "10%",
                    }}
                  >
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Code of Ethics</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Term and Conditions</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Cookie Policy</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Cookie Preferences</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Community Guidelines</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">Work for us</Link>
                    </li>
                    <br />
                    <li>
                      <Link to="/">HR Quality</Link>
                    </li>
                    <br />
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="socal-media-logo-policy-andall">
            <div className="socalmesia">
              <ul>
                <li>Follow Parpanch:</li>
              </ul>
              <br />
              <ul>
                <li>
                  <Link to="/">
                    <i class="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fab fa-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    {" "}
                    <i class="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    {" "}
                    <i class="fab fa-facebook"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <br />
            <div className="logo-bran">
              <img
                src={Logo}
                alt=""
                style={{
                  width: "250px",
                }}
              />
              <li>
                <Link to="/">Parpanch</Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonFooter;
