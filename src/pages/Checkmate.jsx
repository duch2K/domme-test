function Checkmate() {
  return (
    <main className="checkmate">
      <div className="checkmate__header filter">
        <ul>
          <li>Жилые помещения</li>
          <li>Не жилые помещения</li>
          <li>Паркинг</li>
          <li>Коммерция</li>
        </ul>
      </div>

      <div className="checkmate__subheader">
        <ul>
          <li>Без долга</li>
          <li>Долг до 30.000тг</li>
          <li>Долг от 30.000тг</li>
          <li>Долг от 100.000тг</li>
        </ul>
      </div>

      <div className="checkmate__main"></div>
    </main>
  );
}

export default Checkmate;
