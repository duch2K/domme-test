import alertIcon from '../img/alert-circle.svg';
import mailIcon from '../img/mail.svg';

function RequestsTable() {
  return (
    <table className="requests-table" border="0" cellSpacing="0">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>№</th>
          <th>Локация</th>
          <th>Статус</th>
          <th>Тип</th>
          <th>Описание</th>
          <th>Исполнитель</th>
          <th>Дата заявки</th>
          <th>Дата завершения</th>
        </tr>
      </thead>

      <tbody>
        {[...Array(8)].map((e, i) => (
          <tr>
            <td>
              <img src={alertIcon} alt="alert"/>
              <img src={mailIcon} alt="mail"/>
            </td>
            <td>123{i}</td>
            <td>Квартира</td>
            <td>В ожидании</td>
            <td>Жалоба</td>
            <td>Открыть</td>
            <td>Медет Сисенгалиев</td>
            <td>03.10.20 в 18:00</td>
            <td>03.10.20 в 18:00</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RequestsTable;
