const 영희의인풋 = ()=>{
    const 나만의초기메시지 = "비밀번호를 입력하세요"
    // 한 줄은 소괄호 생략가능
    // babel을 통해 변수까지 합쳐서 JSX를 HTML로 바꿔줌
    return(
        <input type="text" placeholder={나만의초기메시지}/>
    )
}