import React from 'react';

import { RequestsTable } from '../components';

import searchIcon from '../img/search.svg';
import slidersIcon from '../img/sliders.svg';

const filters = [ 
  { id: 1, name: 'Все', title: 'all' }, 
  { id: 2, name: 'Новые', title: 'isNew' },
  { id: 3, name: 'Важные', title: 'important' },
  { id: 4, name: 'В ожидании', title: 'awaiting' },
  { id: 5, name: 'В процессе', title: 'process' },
  { id: 6, name: 'Просроченно', title: 'expired' },
  { id: 7, name: 'Решенные', title: 'solved' },
  { id: 8, name: 'Отклоненные', title: 'rejected' }
];

function Requests() {
  const [filter, setFilter] = React.useState('all');

  return (
    <main className="requests">
      <div className="requests__header filter">
        <ul>
          { filters.map(({id, name, title, count}) => (
            <li key={id} className={filter === title ? 'active' : ''}
              onClick={() => setFilter(title)}
            >
              {name} {count ? `(${count})` : ''}
            </li>
          ))}
        </ul>

        <div className="requests__btn btn">Создать заявку</div>
      </div>

      <div className="requests__subheader">
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
