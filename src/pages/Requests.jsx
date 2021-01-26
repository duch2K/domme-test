import { RequestsTable } from '../components';

import searchIcon from '../img/search.svg';
import slidersIcon from '../img/sliders.svg';

function Requests() {
  return (
    <main className="requests">
      <div className="requests__sort">
        <ul>
          <li>Все (184)</li>
          <li>Новые (32)</li>
          <li>Важные (32)</li>
          <li>В ожидании</li>
          <li>В процессе</li>
          <li>Просроченно</li>
          <li>Решенные</li>
          <li>Отклоненные</li>
        </ul>

        <div className="requests__btn btn">Создать заявку</div>
      </div>

      <div className="requests__filter">
        <div className="requests__search">
          <button>
            <img src={searchIcon} alt="search"/>
          </button>
          <input type="text" placeholder="Поиск..."/>
        </div>

        <div className="requests__controls">
          <div className="requests__controls-switch">
            <span>Только с сообщениями</span>
            <div>
              <span></span>
            </div>
          </div>
          <div className="requests__controls-btn">
            <span>Фильтр</span>
            <img src={slidersIcon} alt="sliders"/>
          </div>
        </div>
      </div>

      <div className="requests__table">
        <RequestsTable />
      </div>
    </main>
  );
}

export default Requests;
