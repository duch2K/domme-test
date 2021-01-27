const requests = [
  {
    id: 1231, 
    location: 'Квартира',
    status: [ 'В ожидании', 'awaiting'],
    type: 'Жалоба',
    description: '',
    performer: 'Медет Сисенгалиев',
    requestDate: 1583865000,
    endDate: null,
    important: true,
    isNew: true
  },
  {
    id: 1232, 
    location: 'Подъезд',
    status: [ 'Решено', 'solved' ],
    type: 'Предложение',
    description: '',
    performer: null,
    requestDate: 1583865000,
    endDate: 1583865000,
    important: false,
    isNew: true
  },
  {
    id: 1233, 
    location: 'Двор',
    status: [ 'В процессе', 'process' ],
    type: 'Жалоба',
    description: '',
    performer: 'Райымбек Таир',
    requestDate: 1583865000,
    endDate: null,
    important: true,
    isNew: false
  },
  {
    id: 1234, 
    location: 'Паркинг',
    status: [ 'Просроченно', 'expired' ],
    type: 'Предложение',
    description: '',
    performer: null,
    requestDate: 1583865000,
    endDate: 1583865000,
    important: false,
    isNew: false
  },
  {
    id: 1235, 
    location: 'Паркинг',
    status: [ 'Отклонен', 'rejected' ],
    type: 'Предложение',
    description: '',
    performer: null,
    requestDate: 1583865000,
    endDate: null,
    important: false,
    isNew: false
  },
  {
    id: 1236, 
    location: 'Коммерция',
    status: [ 'В ожидании', 'awaiting'] ,
    type: 'Жалоба',
    description: '',
    performer: 'Андро Земский',
    requestDate: 1583865000,
    endDate: null,
    important: false,
    isNew: false
  }
];

export default requests;