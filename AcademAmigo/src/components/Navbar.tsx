import React from "react";
import { Nav, NavLink, NavMenu, NavLogo } from "./navelements";
import logo from '../assets/Images/AcademAmigo-Logo.png'

const Navbar: React.FC = () => {
    return (
        <div className="flex justify-center">
          <Nav className="flex justify-between justify-center h-28 w-11/12 p-10 rounded-full shadow-lg bg-darkblue items-center">
            <NavLogo className="w-24" src={logo} alt="Logo"></NavLogo>
            <NavMenu>
              <NavLink className="text-white m-2" to="/home">
                Home
              </NavLink>
              <NavLink className="text-white m-2" to="/quiz">
                Quizzes
              </NavLink>
              <NavLink className="text-white m-2" to="/flashcards">
                Flashcards
              </NavLink>
              <NavLink className="text-white m-2" to="/generation">
                Generation
              </NavLink>
              {/* <NavLink to="/studyplan">
                Study Plan
              </NavLink> */}
            </NavMenu>
          </Nav>
        </div>
    );
};

export default Navbar;
