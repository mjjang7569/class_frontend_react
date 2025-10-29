const App = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    //handleChangeEmail 함수명도 많이 쓰임
    // 이벤트 핸들러 함수
    const onChangeEmail = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)

    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const onClickSignup = (event) => { 
        console.log(email) //저장이 잘 되었는지 확인
        console.log(password) //저장이 잘 되었는지 확인
        if(email.includes("@")){
            // 1. 정상이므로 백엔드 컴퓨터에 정보를 전달함 => 추 후 학습예정
            alert("회원가입을 축하합니다.")
        }else{
            alert("이메일 형식이 올바르지 않습니다.")
        }
    }

    return (
        <div className="철수의App">
            이메일 : <input type="text" onChange={onChangeEmail}/><br/>
            비밀번호 :  <input type="password" onChange={onChangePassword}/><br/>
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}