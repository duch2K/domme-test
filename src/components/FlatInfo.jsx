import userImg from '../img/user.jpg';

function FlatInfo() {
  return (
    <div className="flat-info">
      <h2>Квартира №134</h2>
      <ul>
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
    </div>
  );
}

export default FlatInfo;
