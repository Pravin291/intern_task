// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import DashSideBar from './DashSideBar';
// import Research from '../pages/Research';
// import Planning from '../pages/Planning';
// import Designing from '../pages/Designing';
// import Manufacturing from '../pages/Manufacturing';
// import Sales from '../Sales';

// export default function Dashboard() {
//     // const location = useLocation();
//     // const [tab, setTab] = useState("");

//     // useEffect(() => {
//     //     const urlParams = new URLSearchParams(location.search);
//     //     const tabFromUrl = urlParams.get("tab");
//     //     console.log(tabFromUrl)
//     //     if (tabFromUrl) {
//     //         setTab(tabFromUrl);
//     //     }
//     // }, [location.search]);

//     return (

//         <div className="min-h-screen flex flex-col md:flex-row">
//             <div className="md:w-56">
//                 <DashSideBar />
//             </div>
//             {/* {tab === 'research' && <Research />}
//             {tab === 'planning' && <Planning />}
//             {tab === 'designing' && <Designing />}
//             {tab === 'manufacturing' && <Manufacturing />}
//             {tab === 'sales' && <Sales />} */}
//         </div>
//     );
// }

import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
export default function Dashboard() {
  
  return (
    <nav className="min-h-screen bg-gray-200">
      <div className="flex items-center font-medium justify-around">
        <ul className="md:flex hidden  uppercase items-center gap-8">
          <NavLinks/>
        </ul>
        {/* mobile view */}
        <ul className={
            `md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4`
        }>
          <li className="">
            <Link to="/research" className="py-7 px-3 inline-block">
              Dashboard
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
}
