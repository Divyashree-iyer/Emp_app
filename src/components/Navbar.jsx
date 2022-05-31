import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import { GrLogout } from 'react-icons/gr';
import { useStateContext } from '../contexts/ContextProvider';




const NavButton = ({title, to, icon,color,currentColor})=>(

    <div style={{color}} className="nav-item mx-2" >
      <NavLink
        to={`/${to}`}
        key={title}
        style={({ isActive }) => ({
          backgroundColor: isActive ? currentColor : '',
        })}
      >
        {title} {icon}
      </NavLink>

    </div>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  
  return (
    
    <div className=''>

      <div className='navbar navbar-light bg-light justify-content-end'>

        <NavButton title="Employee Master" to='employee-master' currentColor={currentColor}
        color="#03C9D7" icon={<IoMdContacts />}  />

        <NavButton title="Employee List" to='employee-list' currentColor={currentColor}
        color="#03C9D7" icon={<RiContactsLine />}  />

      
        <NavButton title="Logout" to='logout' currentColor={currentColor} color="#03C9D7"
        icon={<GrLogout />}  />

      </div>
    </div>
  )
}

export default Navbar