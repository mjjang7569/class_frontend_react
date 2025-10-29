//등록하기에서 사용(이름, 나이, 학교가 필수)

interface Iprofile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

//1. partial 타입 => 수정하기에서는 이름, 나이, 학교도 옵셔널
type aaa = Partial<Iprofile>;

//2. hobby까지 필수로 만들려면 : required 타입
type bbb = Required<Iprofile>;

//3. 이름, 나이의 타입만 원하는 것만 고르려면 : pick 타입
type ccc = Pick<Iprofile, 'name' | 'age'>;

//4. omit 타입 : 빼기
type eee = Omit<Iprofile, 'school'>;

//5. 유틸리티타입 조합하기
type ddd = Partial<Pick<Iprofile, 'name' | 'age'>>;

//6. record 타입
type fff = '철수' | '영희' | '훈이'; //union 타입
const child1: fff = '맹구'; //에러
const child2: fff = '영희'; //철수, 영희, 훈이만 됨
const child3: string = '사과'; //모든 문자열이 다됨

type ggg = Record<fff, Iprofile>; //철수의 Iprofile, 영희의 Iprofile, 훈이의 Iprofile을 한번에 씀

//7. 객체의 key를 union 타입 만들기
type hhh = keyof Iprofile;
const myporfile: hhh = 'age';

//8. 타입과 인터페이스 차이 =>핵심 : interface 선언병합
interface Iprofile {
  candy: number; //선업병합으로 name, age, hobby에 candy가 추가됨
}

//9. 적용하기
const profile: Partial<Iprofile> = {
  candy: 10,
};
