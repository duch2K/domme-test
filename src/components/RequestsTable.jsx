import alertIcon from '../img/alert-circle.svg';
import alertIconP from '../img/alert-circle-purple.svg';
import mailIcon from '../img/mail.svg';

import requests from './requestsData';

function RequestsTable({ sort }) {
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

          const dateFormat1 = `${date1.getDate()}.${date1.getMonth()}.${date1.getFullYear()} в ${date1.getHours()}:${date1.getMinutes()}`,
            dateFormat2 = `${date2.getDate()}.${date2.getMonth()}.${date2.getFullYear()} в ${date2.getHours()}:${date2.getMinutes()}`;

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
                <span>{requestDate ? dateFormat1 : '--/--'}</span>
              </td>
              <td>
                <span>{endDate ? dateFormat2 : '--/--'}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default RequestsTable;
