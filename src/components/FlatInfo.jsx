import userImg from '../img/user.jpg';
import upIcon from '../img/up.svg';

function FlatInfo() {
  return (
    <div className="flat-info">
      <h2>Квартира №134</h2>

      <ul className="flat-info__props">
        <li>Блок <span>2</span></li>
        <li>Подъезд <span>4</span></li>
        <li>Этаж <span>2</span></li>
      </ul>

      <div className="flat-info__user">
        <div className="flat-info__user-img">
          <img src={userImg} alt="avatar"/>
        </div>
        <div className="flat-info__user-info">
          <b>Медет Сисенгалиев</b>
          <span>Лиц. счет: 234255472</span>
        </div>
      </div>

      <div className="flat-info__contacts">
          <div className="flat-info__contacts-head">
            <h3>Контактные данные</h3>
            <img src={upIcon} alt="up"/>
          </div>
          <ul>
            <li>
              <span>E-mail</span>
              <b>kovrogangster@mail.ru</b>
            </li>
            <li>
              <span>Телефон</span>
              <b>+7 707 111-22-33</b>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default FlatInfo;
