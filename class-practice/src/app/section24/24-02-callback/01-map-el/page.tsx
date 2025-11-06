"use client"

export default function MapElPage(){
    //1. 기본방법
    ["철수", "영희", "훈이"].map((el, index) =>{
        console.log("el : ", el)
        console.log("index : ", index)
    })
    console.log("=============================");

    //2. 매개변수 변경방법
    ["철수", "영희", "훈이"].map((qwer, asdf) =>{
        console.log("qwer : ", qwer)
        console.log("asdf : ", asdf)
    })
    console.log("=============================");

    //3.함수 선언식 방법
    ["철수", "영희", "훈이"].map(function (qwer, asdf){
        console.log("qwer : ", qwer)
        console.log("asdf : ", asdf)
    })
    console.log("=============================");

    //4. el과 index를 바꾸기
    ["철수", "영희", "훈이"].map((index, el) =>{
        console.log("index : ", index)
        console.log("el : ", el)
    })
    return <></>
}