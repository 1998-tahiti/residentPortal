import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import logo from '../data/logo.png';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    screenSize,
  } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink ='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 px-3">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center mt-4 pr-1">
  <Link
    to="/"
    onClick={handleCloseSideBar}
    className="flex items-center gap-2 min-w-0"
  >
    <img
      src={logo}
      alt="The Monroe Ledger"
      className="w-6 h-8 object-contain flex-shrink-0"
    />

    <span
      style={{
        fontFamily: 'Playfair Display, serif',
        color: '#1F2937',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '1',
        whiteSpace: 'nowrap',
      }}
    >
      The Monroe Ledger
    </span>
  </Link>

  <TooltipComponent content="Close" position="BottomCenter">
    <button
      type="button"
      onClick={() => setActiveMenu(false)}
      style={{ color: currentColor }}
      className="text-lg rounded-full p-1.5 hover:bg-light-gray flex-shrink-0 ml-2"
    >
      <MdOutlineCancel />
    </button>
  </TooltipComponent>
</div>

          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>

                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;