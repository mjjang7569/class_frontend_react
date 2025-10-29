import { DataSource } from 'typeorm';
import { Board } from './Board.psetgress';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// APIdocs 만들기
const typeDefs = `#graphql
input CreateBoardInput{
  writer: String
  title: String
  content: String
}

type MyBoard{
  number: Int
  writer:String
  title: String
  content:String
}

type Query{
 fetchBoards: [MyBoard]
 fetchBoard : 
}

type Mutation{
  # createBoard(writer:String, title: String, content: String): String

  # 실무방식
  createBoard(createBoardInput:CreateBoardInput):String
}

`;

//API 만들기
const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find();
      return result;
    },

    // 한 개만 꺼내기
    fetchBoard: async (parent: any, args: any, context: any, info: any) => {
      const result = await Board.findOne({
        where: {
          number: args.number,
        },
      });
      return result;
    },
  },
  Mutation: {
    // createBoard: async (parent: any, args: any, context: any, info: any) => {
    //   await Board.insert({
    //     ...args,
    //     // writer: args.writer,
    //     // title: args.title,
    //     // content: args.content,
    //   });

    //   return '등록에 성공했어요!';
    // },

    //실무 방식
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // content: args.createBoardInput.content,
      });

      return '등록에 성공했어요!';
    },

    // 수정하기
    updateBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.update({ number: args.number }, { writer: `${args.writer}` });
    },

    deleteBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.delete({ number: args.number }); //실무에서는 실제로 삭제하지 않는다..이렇게 안함
      Board.update({ number: args.number }, { isDeleted: true }); // 삭제한 것으로 치고 isDeleted가 false인것만 조회한다(소프트삭제)
      Board.update({ number: args.number }, { deledAt: new Date() }); //삭제한 시간까지 기록되도록 실무에서 쓰이는 방식
    },
  },
};

const 서버설정 = new ApolloServer({
  typeDefs,
  resolvers,
});

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
    //DB접속 해놓고 24시간 백엔드 서버를 작동시킨다.
    //아래는 백엔드 서버를 돌리는 코드
    startStandaloneServer(서버설정).then(() => {
      console.log('그래프큐엘 백엔드서버가 정상적으로 실행되었습니다.'); //포트 : 4000
    });
  })
  .catch((error) => {
    console.log('DB접속에 실패했습니다.');
    console.log(error);
  });
