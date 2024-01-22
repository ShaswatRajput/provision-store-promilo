import React, { useContext } from "react";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Contexts/LoginContext";

const Navbar = () => {
  const { loginStatus, setLoginStatus } = useContext(LoginContext);
  const handleLogout = () => {
    sessionStorage.setItem("accessToken", "");
    setLoginStatus(false);
  };
  return (
    <nav
      className="navbar"
      style={{
        boxShadow: "10px 3px 10px rgb(180, 183, 184)",
        backgroundColor: "linen",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <Link to={"/"}>
            <div
              className="navbar-brand"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "80px", width: "100px" }}
                src="../../pro.png"
                alt="provision-store"
                width="30"
                height="24"
              />
            </div>
          </Link>
        </div>
        <div
          className="nav-links"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Link
            to={"/products"}
            style={{
              marginRight: "20px",
              fontFamily: "Gilroy,sans-sherif",
              fontSize: "24px",
              textDecoration: "none",
              fontWeight: "bolder",
              color: "black",
            }}
          >
            <div>Products</div>
          </Link>

          {loginStatus ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="about">
                <Link
                  to={"/about"}
                  style={{
                    display: "flex",
                    fontFamily: "Gilroy,sans-sherif",
                    fontSize: "24px",
                    textDecoration: "none",
                    fontWeight: "bolder",
                    color: "black",
                  }}
                >
                  <div>About</div>
                </Link>
              </div>
              <Link
                to={"/"}
                style={{
                  display: "flex",
                  marginRight: "20px",
                  fontFamily: "Gilroy,sans-sherif",
                  fontSize: "24px",
                  textDecoration: "none",
                  fontWeight: "bolder",
                  color: "black",
                }}
              >
                <div onClick={handleLogout}>Logout</div>
              </Link>
              <img
                src="https://th.bing.com/th/id/OIP.2L4teoG-Xl7ymyD-8xdtgQHaHx?rs=1&pid=ImgDetMain"
                style={{
                  marginRight: "20px",
                  height: "70px",
                  width: "70px",
                  borderRadius: "50%",
                }}
              />
            </div>
          ) : (
            <Link
              to={"/"}
              style={{
                marginRight: "20px",
                fontFamily: "Gilroy,sans-sherif",
                fontSize: "24px",
                textDecoration: "none",
                fontWeight: "bolder",
                color: "black",
              }}
            >
              <div>Login</div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
