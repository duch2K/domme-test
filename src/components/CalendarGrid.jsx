function CalendarGrid() {
  return (
    <div className="calendar-grid">
      {[...Array(35)].map((e, i) => <div className="calendar-grid__item" key={i}></div>)}
    </div>
  );
}

export default CalendarGrid;
