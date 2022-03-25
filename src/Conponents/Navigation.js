import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navigations } from "../helpers/constans";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLogout } from "../hooks/useLogout";
import { useApp } from "../Contex/AppContext";

const Navigation = () => {
  const { logout } = useLogout();
  const { user } = useApp();

  return (
    <Nav>
      <Logo>
        <button
          className="btn"
          //  onClick={()=>setShow(!show)}
        >
          <GiHamburgerMenu />
        </button>
      </Logo>
      <NavLinks>
        {navigations.map((item) => (
          <li key={`link-${item}`}>
            {user && (
              <>
                <div />
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : null)}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                >
                  {item}
                </NavLink>
              </>
            )}
          </li>
        ))}
      </NavLinks>
      <>
        {!user && (
          <LoginBox>
            <button className="btn">
              <NavLink to="/login">Login</NavLink>
            </button>
            <button className="btn">
              <NavLink to="/signup">SignUp</NavLink>
            </button>
          </LoginBox>
        )}

        {user && (
          <button className="btn" onClick={logout}>
            Logout
          </button>
        )}
      </>
    </Nav>
  );
};

export default Navigation;

const LoginBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  button {
    list-style: none;
  }
`;

const Nav = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  z-index: 2;
`;
const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const NavLinks = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  li {
    margin: 0 1rem;
    cursor: pointer;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    text-align: left;
    color: #6b7688;
    line-height: 1.5rem;

    div {
      width: 5px;
      height: 5px;
      background: transparent;
      border-radius: 50%;
      margin-bottom: 5px;
    }
    a {
      color: #6b7688;
      text-decoration: none;
      flex-direction: column;
      text-transform: uppercase;
      font-weight: 500;

      transition: all 0.3s ease-in-out;

      &:hover {
        color: #313bac;
      }
    }
    .active {
      /* border-radius: 15px; */
      border-width: 1px;
      background-color: #6b7688;
      /* padding:5px; */
      color: white;

      border-bottom: 2px solid #313bac;
    }

    &:hover {
      div {
        background-color: #313bac;
      }
    }
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
`;
