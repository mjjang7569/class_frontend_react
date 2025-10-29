import { DataSource } from 'typeorm';
import { Board } from './Board.psetgress';

const 내DB연결설정 = new DataSource({
  type: 'postgres',
  host: '34.64.158.127',
  port: 5017,
  username: 'postgres',
  password: 'postgres2025',
  database: 'postgres',
  entities: [Board],
  synchronize: true,
  logging: true,
});

내DB연결설정
  .initialize()
  .then(() => {
    console.log('DB접속에 성공했습니다. ');
  })
  .catch((error) => {
    console.log('DB접속에 실패했습니다.');
    console.log(error);
  });
