import eventIcon from '../img/event-rect.svg';

const events = [
  {
    day: 4,
    name: 'Lorem ipsum dolor',
    price: '200000',
    color: 'yellow'
  },
  {
    day: 12,
    name: 'Lorem ipsum dolor set amet lorem dolor',
    price: '200000',
    color: 'purple'
  },
  {
    day: 23,
    name: 'Lorem ipsum dolor',
    price: '200000',
    color: 'yellow'
  }
];

function CalendarMonth() {
  return (
    <div className="calendar-month">
      { [...Array(35)].map((e, i) => {
        let classes = 'calendar-month__item';
        let descr = null;

        for (const event of events) {
          if (event.day === i + 1) {
            classes += ' event';
            classes += ` event--${event.color}`;
            if (event.name.length > 28)
              event.name = event.name.substring(0, 29) + '...';

            descr = (
              <div className="calendar-month__item-descr">
                <span>{event.price} тг</span>
                <b>{event.name}</b>
              </div>
            );
          }
        }

        return (
          <div className={classes} key={i}>
            <div className="calendar-month__item-num">{i + 1}</div>

            { descr }
            
            { classes.includes('event') && 
              (<img src={eventIcon} alt="rectangle lines" />)
            }
          </div>
        );
      })}
    </div>
  );
}

export default CalendarMonth;
