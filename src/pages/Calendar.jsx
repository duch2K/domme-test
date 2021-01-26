import { CalendarGrid } from "../components";
import prevIcon from '../img/prev.svg';
import nextIcon from '../img/next.svg';

function Calendar() {
  return (
    <div className="calendar">
      <div className="calendar__header">
        <div className="calendar__header-month">
          <img src={prevIcon} alt="arrow prev"/>
          <div>Сентябрь 2021</div>
          <img src={nextIcon} alt="arrow next"/>
        </div>

        <div className="calendar__header-sum">Сумма за месяц: 400.000тг</div>

        <div className="calendar__header-switch">
          <span>Месяц</span>
          <span>Год</span>
        </div>

        <div className="calendar__header-btn btn">Добавить событие</div>
      </div>
      
      <div className="calendar__grid">
        <CalendarGrid />
      </div>
    </div>
  );
}

export default Calendar;
