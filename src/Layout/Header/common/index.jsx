import React from "react";
import { Link } from "react-router-dom";

function togglesidebarr() {
  document.getElementById("dropdown").classList.toggle("active");
}
function togglesubmenu() {
  document.getElementById("sidesubbar").classList.toggle("show");
}
function togglesubmenua() {
  document.getElementById("sidesubbar1").classList.toggle("show");
}
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 75);
});

const CommonHeader = (props) => {
  return (
    <>
      <header>
        <div className="logo-and-brandname">
          <div className="a-box-of-logo-nd-menu-ls">
            <ul>
              <li>
                <Link to="/">
                  <img
                    src={props.logo}
                    alt=""
                    style={{
                      width: "80px",
                    }}
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{
                    color: "rgb(243, 156, 18)",
                  }}
                >
                  {props.brandname}
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">{props.menu1}</Link>
              </li>
              <li>
                <Link to="/">
                  {props.menu2} <i class="fas fa-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="/"> {props.menu2a} </Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu2b}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu2c}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu2d}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu2e}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu2f}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu2g}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">{props.menu3}</Link>
              </li>
              <li>
                <Link to="/">{props.menu4}</Link>
              </li>
              <li>
                <Link to="/">{props.menu5}</Link>
              </li>
              <li>
                <Link to="/">{props.menu6}</Link>
              </li>
              <li>
                <Link to="/">
                  {props.menu7} <i class="fas fa-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="/"> {props.menu7a} </Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu7b}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu7c}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu7d}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu7e}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu7f}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu7g}</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="b-box-of-live-go">
            <ul>
              <li>
                <Link to="/live">
                  <i
                    class="fas fa-play-circle"
                    style={{
                      fontSize: "25px",
                      color: "rgb(243, 156, 18)",
                    }}
                  ></i>
                  Live
                </Link>
              </li>
            </ul>
          <div className="toggle-btn" onClick={togglesidebarr}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="media-screen-1000px-show">
          <div id="dropdown">
            <ul>
              <li>
                <Link to="/">{props.menu1}</Link>
              </li>
              <li onClick={togglesubmenu}>
                <Link to="/">
                  {props.menu2} <i class="fas fa-chevron-down"></i>
                </Link>
                <ul id="sidesubbar">
                  <li>
                    <Link to="/"> {props.menu2a} </Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu2b}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu2c}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu2d}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu2e}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu2f}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu2g}</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">{props.menu3}</Link>
              </li>
              <li>
                <Link to="/">{props.menu4}</Link>
              </li>
              <li>
                <Link to="/">{props.menu5}</Link>
              </li>
              <li>
                <Link to="/">{props.menu6}</Link>
              </li>
              <li onClick={togglesubmenua}>
                <Link to="/">
                  {props.menu7} <i class="fas fa-chevron-down"></i>
                </Link>
                <ul id="sidesubbar1">
                  <li>
                    <Link to="/"> {props.menu7a} </Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu7b}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu7c}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu7d}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu7e}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu7f}</Link>
                  </li>
                  <li>
                    <Link to="/">{props.menu7g}</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default CommonHeader;
