import React from "react";
import { Link } from "react-router-dom";

export default function NavLinks() {
  const links = [
    {
      name: "Research",
      submenu: true,
      sublinks: [
        {
          name: "External",
          submenu: true,
          sublinks: [
            {
              name: "B2C",
              submenu: true,
              sublinks: [
                {
                  name: "Online",
                  link: "/online",
                },
                {
                  name: "Interview",
                  link: "/interview",
                },
                {
                  name: "Public Data",
                  link: "/public-data",
                },
                {
                  name: "Health",
                  link: "/health",
                },
              ],
            },
            {
              name: "B2C",
              link: "/b2c",
            },
          ],
        },
        {
          name: "Internal",
          link: "/internal",
        },
      ],
    },
    {
      name: "Planning",
      submenu: true,
      sublinks: [
        {
          name: "PRED",
          link: "/pred",
        },
        {
          name: "SPECS",
          link: "/specs",
        },
      ],
    },
    {
      name: "Designing",
      submenu: true,
      sublinks: [
        {
          name: "Hardware",
          link: "/hardware",
        },
        {
          name: "Software",
          link: "/software",
        },
      ],
    },
    {
      name: "Manufacturing",
      submenu: true,
      sublinks: [
        {
          name: "Material",
          link: "/material",
        },
        {
          name: "Production",
          link: "/production",
        },
      ],
    },
    {
      name: "Sales",
      submenu: true,
      sublinks: [
        {
          name: "Online",
          link: "/online",
        },
        {
          name: "Delership",
          link: "/delership",
        },
      ],
    },
  ];

  return (
    <>
      {links.map((link, index) => (
        <div
          key={index}
          className="px-3 text-left md:cursor-pointer relative group"
        >
          <h1 className="py-7 hover:text-cyan-500">{link.name}</h1>
          <div className="absolute top-0 right-0 w-4 bg-white transform rotate-45 -translate-x-2/4 translate-y-1/4 hidden group-hover:block"></div>
          {link.submenu && (
            <div className="absolute top-full left-0 bg-white p-6 shadow-md rounded-md hidden group-hover:block">
              {renderSublinks(link.sublinks)}
            </div>
          )}
        </div>
      ))}
    </>
  );

  function renderSublinks(sublinks) {
    return (
      <>
        {sublinks.map((sublink, subIndex) => (
          <div
            key={subIndex}
            className="px-3 text-left md:cursor-pointer relative group"
          >
            {sublink.name && (
              <li key={subIndex} className="text-sm text-gray-600 my-2.5">
                {sublink.submenu ? (
                  <>
                    <div className="hidden group-hover:block">
                      <h2>{sublink.name}</h2>
                      {renderSublinks(sublink.sublinks)}
                    </div>
                  </>
                ) : (
                  <Link to={sublink.link} className=" hover:text-cyan-500">
                    {sublink.name}
                  </Link>
                )}
              </li>
            )}
          </div>
        ))}
      </>
    );
  }
}