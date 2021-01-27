import alertIcon from '../img/alert-circle.svg';
import alertIconP from '../img/alert-circle-purple.svg';
import mailIcon from '../img/mail.svg';

import requests from './requestsData';

function RequestsTable({ filter }) {
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
        {requests.map(({ id, location, status, type, performer, requestDate, endDate, important, isNew }) => {

          const date1 = new Date(requestDate * 1000),
            date2 = new Date(endDate * 1000);

          const dateForm1 = `${String('0' + date1.getDate()).slice(-2)}.` +
                `${String('0' + date1.getMonth() + 1).slice(-2)}.${date1.getFullYear()} в ` +
                `${String('0' + date1.getHours()).slice(-2)}:${String('0' + date1.getMinutes()).slice(-2)}`;

          const dateForm2 = `${String('0' + date2.getDate()).slice(-2)}.` +
                `${String('0' + date2.getMonth() + 1).slice(-2)}.${date2.getFullYear()} в ` +
                `${String('0' + date2.getHours()).slice(-2)}:${String('0' + date2.getMinutes()).slice(-2)}`;

          return (
            <tr key={id}>
              <td>
                <div>
                  <img src={important ? alertIconP : alertIcon} alt="alert"/>
                  <div className={isNew ? 'new-mail' : ''}>
                    <img src={mailIcon} alt="mail"/>
                  </div>
                </div>
              </td>
              <td>
                <span>{id}</span>
              </td>
              <td>
                <span>{location}</span>
              </td>
              <td>
                <span className={`status ${status[1]}`}>{status[0]}</span>
              </td>
              <td>
                <span>{type}</span>
              </td>
              <td>
                <span className="descr">Открыть</span>
              </td>
              <td>
                <span className={`performer ${!performer && 'appoint'}`}>
                  {performer ? performer : 'Назначить'}
                  </span>
              </td>
              <td>
                <span>{requestDate ? dateForm1 : '--/--'}</span>
              </td>
              <td>
                <span>{endDate ? dateForm2 : '--/--'}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default RequestsTable;
