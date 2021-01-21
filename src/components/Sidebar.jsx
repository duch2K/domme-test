import listIcon from '../img/list.svg';
import usersIcon from '../img/users.svg';
import gridIcon from '../img/grid.svg';
import dollarIcon from '../img/dollar-sign.svg';
import layoutIcon from '../img/layout.svg';
import globeIcon from '../img/globe.svg';
import boxIcon from '../img/box.svg';
import houseIcon from '../img/house.svg';
import calendarIcon from '../img/calendar.svg';
import monitorIcon from '../img/monitor.svg';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <div></div>
          <img src={listIcon} alt=""/>
          <span>Заявки</span>
        </li>
        <li>
          <img src={usersIcon} alt=""/>
          <span>Люди</span>
        </li>
        <li>
          <img src={gridIcon} alt=""/>
          <span>Шахматка</span>
        </li>
        <li>
          <img src={dollarIcon} alt=""/>
          <span>Финансы</span>
        </li>
        <li>
          <img src={layoutIcon} alt=""/>
          <span>Лента</span>
        </li>
        <li>
          <img src={globeIcon} alt=""/>
          <span>События</span>
        </li>
        <li>
          <img src={boxIcon} alt=""/>
          <span>Телеметрия</span>
        </li>
        <li>
          <img src={houseIcon} alt=""/>
          <span>Умный дом</span>
        </li>
        <li>
          <img src={calendarIcon} alt=""/>
          <span>Календарь</span>
        </li>
        <li>
          <img src={monitorIcon} alt=""/>
          <span>Мониторинг</span>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
