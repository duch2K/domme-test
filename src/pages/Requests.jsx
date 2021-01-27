import React from 'react';

import { RequestsTable } from '../components';

import searchIcon from '../img/search.svg';
import slidersIcon from '../img/sliders.svg';

const sortTypes = [ 
  { id: 1, name: 'Все', title: 'all', count: 84 }, 
  { id: 2, name: 'Новые', title: 'new', count: 32 },
  { id: 3, name: 'Важные', title: 'important', count: 24 },
  { id: 4, name: 'В ожидании', title: 'awaiting', count: 0 },
  { id: 5, name: 'В процессе', title: 'inProcess', count: 15 },
  { id: 6, name: 'Просроченно', title: 'expired', count: 43 },
  { id: 7, name: 'Решенные', title: 'solved', count: 23 },
  { id: 8, name: 'Отклоненные', title: 'rejected', count: 0 }
];

function Requests() {
  const [filter, setFilter] = React.useState('all')

  return (
    <main className="requests">
      <div className="requests__sort">
        <ul>
          {sortTypes.map(({id, name, title, count}) => (
            <li key={id} className={filter === title ? 'active' : ''}
              onClick={() => setFilter(title)}
            >
              {name} {count ? `(${count})` : ''}
            </li>
          ))}
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
        <RequestsTable filter={filter} />
      </div>
    </main>
  );
}

export default Requests;
