/*!

=========================================================
* Now UI Dashboard React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "../../assets/img/lgo.png";
import '../../assets/css/my.css'

var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div className="sidebar" data-color={props.backgroundColor} style={{ boxShadow:'none'}} >
      <div className="logo" style={{backgroundColor:"white",borderRight:'1px solid lightgray'}}>
        <a
          href="https://www.creative-tim.com?ref=nudr-sidebar"
          className="simple-text logo-mini"
          target="_blank"
          style={{width:'100%'}}
        >
          <div className="logo-img" style={{backgroundColor:'white', width:'100%',display:'flex',justifyContent:'center'}} >
            <img src={logo} alt="react-logo" style={{width:'100px',height:'auto'}} />
          </div>
        </a>
        {/* <a
          href="https://www.creative-tim.com?ref=nudr-sidebar"
          className="simple-text logo-normal"
          target="_blank"
          style={{color:'black'}}
        >
        Crypto Exchange
        </a> */}
      </div>
      <div className="sidebar-wrapper" style={{backgroundColor:"white"}} ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            if (prop.redirect) return null;
            return (
              <li
                className={
                  activeRoute(prop.layout + prop.path) +
                  (prop.pro ? " active active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="navlink"
                  activeClassName="active"
                >
                  <i className={"now-ui-icons activei " + prop.icon} style={{color:'black'}} />
                  <p style={{color:'black'}} >{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
