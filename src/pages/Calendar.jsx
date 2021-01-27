import React from 'react';

import { CalendarMonthGrid, CalendarYearGrid } from "../components";
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

        <div className="calendar__header-switch">
          <span className={grid && 'active'} onClick={onFilterClick}>Месяц</span>
          <span className={!grid && 'active'} onClick={onFilterClick}>Год</span>
        </div>

        <div className="calendar__header-btn btn">Добавить событие</div>
      </div>
      
      <div className="calendar__grid-month">
        {grid ? (<CalendarMonthGrid />) : (<CalendarYearGrid/>)}
      </div>
    </main>
  );
}

export default Calendar;
