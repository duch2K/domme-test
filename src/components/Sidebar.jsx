import React from 'react'
import { Link } from 'react-router-dom';

import {
  listIcon,
  usersIcon,
  gridIcon,
  dollarIcon,
  layoutIcon,
  globeIcon,
  boxIcon,
  houseIcon,
  calendarIcon,
  monitorIcon,
  listIconP,
  usersIconP,
  gridIconP,
  dollarIconP,
  layoutIconP,
  globeIconP,
  boxIconP,
  houseIconP,
  calendarIconP,
  monitorIconP
} from './sidebarIcons';

const pages = [
  { id: 1, name: 'Заявки', title: 'requests', icon: listIcon, activeIcon: listIconP },
  { id: 2, name: 'Люди', title: 'people', icon: usersIcon, activeIcon: usersIconP },
  { id: 3, name: 'Шахматка', title: 'checkmate', icon: gridIcon, activeIcon: gridIconP },
  { id: 4, name: 'Финансы', title: 'finance', icon: dollarIcon, activeIcon: dollarIconP },
  { id: 5, name: 'Лента', title: 'feed', icon: layoutIcon, activeIcon: layoutIconP },
  { id: 6, name: 'События', title: 'events', icon: globeIcon, activeIcon: globeIconP },
  { id: 7, name: 'Телеметрия', title: 'telemetry', icon: boxIcon, activeIcon: boxIconP },
  { id: 8, name: 'Умный дом', title: 'smart-house', icon: houseIcon, activeIcon: houseIconP },
  { id: 9, name: 'Календарь', title: 'calendar', icon: calendarIcon, activeIcon: calendarIconP },
  { id: 10, name: 'Мониторинг', title: 'monitoring', icon: monitorIcon, activeIcon: monitorIconP }
];

function Sidebar() {
  const [activePage, setActivePage] = React.useState('');

  const ref = React.useRef(null);

  const onLinkClick = (title) => {
    setActivePage(title);
  };

  return (
    <nav className="sidebar">
      <ul>
        {pages.map(({id, name, title, icon, activeIcon}) => (
          <Link to={`/${title}`}>
            <li key={id} ref={ref} className={activePage === title ? 'active' : ''}
              onClick={() => onLinkClick(title)}
            >
              {/* <div></div> */}
              <img src={activePage === title ? activeIcon : icon} alt={title}/>
              <span>{name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
