import logo from '../img/logo.svg';
import houseIcon from '../img/house-purple.svg';
import bellIcon from '../img/bell.svg';
import userAva from '../img/man-avatar.jpg';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo"/>
        <span>Domme</span>
      </div>

      <div className="header__main">
        <div className="header__house">
          <div className="header__house-logo">
            <img src={houseIcon} alt="house logo"/>
          </div>
          <div className="header__house-name">
            <h2>ЖК "Gagarin Park"</h2>
            <span>Выбрать другой</span>
          </div>
        </div>
        <div className="header__user">
          <img className="header__user-notifications" src={bellIcon} alt="bell"/>
          <div className="header__user-avatar">
            <img src={userAva} alt="user"/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
