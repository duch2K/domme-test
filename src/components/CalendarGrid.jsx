function CalendarGrid() {
  return (
    <div className="calendar-grid">
      {[...Array(35)].map((e, i) => (
        <div className="calendar-grid__item" key={i}>
          <div className="calendar-grid__item-num">{i+1}</div>
        </div>
      ))}
    </div>
  );
}

export default CalendarGrid;
