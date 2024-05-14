// CSS styles for navigation elements go here
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
   `;

export const NavLogo = styled.img`
`;
 
export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #4d4dff;
    }
`;
 
export const Bars = styled(FaBars)`
    `;
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
