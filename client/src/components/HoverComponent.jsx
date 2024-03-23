import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";

export default function HoverComponent({ children, mainMenu, ...rest }) {
    return (
        <div
          onMouseEnter={rest.onMouseEnter}
          onMouseLeave={rest.onMouseLeave}
        >
          <Link to={mainMenu}>
            <Sidebar.Item {...rest}>
              {children}
            </Sidebar.Item>
          </Link>
        </div>
      );
}
