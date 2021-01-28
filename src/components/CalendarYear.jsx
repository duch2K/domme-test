const monthes = ['Январь', 'Февраль', 'Март',
                'Апрель', 'Май', 'Июнь', 
                'Июль', 'Август', 'Сентябрь' , 
                'Октябрь', 'Ноябрь', 'Декабрь'];

function CalendarYear() {
  return (
    <div className="calendar-year">
      { monthes.map((item) => (
        <div className="calendar-year__item">
          <b>{item}</b>
          <span>30.333.321 T (3 события)</span>
        </div>
      ))}
    </div>
  );
}

export default CalendarYear;
