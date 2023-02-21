import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useOnClickOutside from '../hooks/useOnClickOutside';

export default function Navbar() {
  const [dropDown, setDropdown] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, dropDown, setDropdown);

  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/profile',
      text: 'Profile',
    },
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/login',
      text: 'Login',
    },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
        <li ref={ref} className="dropdown">
          <button type="button" onClick={() => setDropdown((prev) => !prev)}>
            Services&nbsp;
            <span>&#8595;</span>
          </button>
          {
            dropDown
            && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
            )
          }
        </li>
      </ul>
    </nav>
  );
}
