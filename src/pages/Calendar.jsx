import React from 'react';

import { CalendarMonth, CalendarYear } from "../components";
import prevIcon from '../img/prev.svg';
import nextIcon from '../img/next.svg';

function Calendar() {
  const [grid, setGrid] = React.useState(true);

  const onFilterClick = (e) => {
    if (e.target.textContent === 'Месяц')
      setGrid(true);
    else if (e.target.textContent === 'Год')
      setGrid(false);
    else return;
  };

  return (
    <main className="calendar">
      <div className="calendar__header">
        <div className="calendar__header-month-year">
          <img src={prevIcon} alt="arrow prev"/>
          <div>{grid && 'Сентябрь'} 2021</div>
          <img src={nextIcon} alt="arrow next"/>
        </div>

        <div className="calendar__header-sum">Сумма за месяц: 400.000тг</div>

        <div className="calendar__header-switch" onClick={onFilterClick}>
          <span className={grid && 'active'}>Месяц</span>
          <span className={!grid && 'active'}>Год</span>
        </div>

        <div className="calendar__header-btn btn">Добавить событие</div>
      </div>
      
      <div className="calendar__grid">
        {grid ? (<CalendarMonth />) : (<CalendarYear/>)}
      </div>
    </main>
  );
}

export default Calendar;
