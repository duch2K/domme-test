const monthes = ['Январь', 'Февраль', 'Март',
                'Апрель', 'Май', 'Июнь', 
                'Июль', 'Август', 'Сентябрь' , 
                'Октябрь', 'Ноябрь', 'Декабрь'];

function CalendarYear() {
  return (
    <div className="calendar-year">
      { monthes.map((e, i) => (
        <div className="calendar-year__item" key={i}>
          <b>{e}</b>
          <span>30.333.321 T (3 события)</span>
        </div>
      ))}
    </div>
  );
}

export default CalendarYear;
