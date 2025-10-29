const App = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [email_validation, setEmailValidation] = React.useState("")
    const [password_validation, setPasswordValidation] = React.useState("")
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
            // alert("이메일 형식이 올바르지 않습니다.")
            setEmailValidation("이메일 형식이 올바르지 않습니다.")
            // console.log("이메일에러", email_validation, typeof(email_validation))
            // // document.getElementById("이메일유효성검사메시지").innerText= String(email_validation)
        }
    }

    return (
        <div className="철수의App">
            이메일 : <input type="text" onChange={onChangeEmail}/><br/>
            <div>{email_validation}</div>
            {/* <div id="이메일유효성검사메시지"></div> */}
            비밀번호 :  <input type="password" onChange={onChangePassword}/><br/>
            <div className=""></div>
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}