function CalendarMonthGrid() {
  return (
    <div className="calendar-grid-month">
      {[...Array(35)].map((e, i) => (
        <div className="calendar-grid-month__item" key={i}>
          <div className="calendar-grid-month__item-num">{i + 1}</div>
        </div>
      ))}
    </div>
  );
}

export default CalendarMonthGrid;
