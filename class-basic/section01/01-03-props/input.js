// 만약 컴포넌트 이름을 영어로 한다면, 대문자로 시작해야함

const 영희의인풋 = (myprops)=>{
    console.log(myprops.철수가방)
    console.log(myprops.영희사과)
    console.log(myprops.직접전달)

    
    const 나만의초기메시지 = "비밀번호를 입력하세요"
    // 한 줄은 소괄호 생략가능
    // babel을 통해 변수까지 합쳐서 JSX를 HTML로 바꿔줌
    return(
        <input type="text" placeholder={나만의초기메시지}/>
    )
}