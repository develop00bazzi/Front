'use strict';

// 오늘 날짜를 전역 변수로 생성

const today=new Date();

const year=today.getFullYear(); // 연도 4자리
const month=today.getMonth()+1;   // 월(기존 월보다 1자리 작다)
const date=today.getDate(); // 일
const hour=today.getHours();
const minute=today.getMinutes();    //분
const second=today.getSeconds();    //초
const yymmdd=year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;

// 표준날짜 출력 함수   

function fCheck1() {
    let date1=new Date();
    document.getElementById("demo").innerHTML=date1;
}

// 편집 날짜 함수

function fCheck2() {
    let strDate=yymmdd;
    demo.innerHTML=strDate;
}

// 쉬운 날짜 함수

function fCheck3() {
    let str="";
    str+=year+"년 ";
    str+=month+"월 ";
    str+=date+"일 ";
    // 요일: 0~6 순서로 일~토 순서 구성
    // str+= today.getDay()+"요일";   // 요일: getDay();

    let week=["일","월","화","수","목","금","토"];
    str+=week[today.getDay()]+"요일 ";
    str += hour+"시 ";
    str += minute+"분 ";
    str += second+"초";
    

    let strDate=str;
    demo.innerHTML=strDate;
}

// 시간 출력

function fCheck4() {
    // let strDate=today.getTime();
    // let strTime=today.getMilliseconds();
    // strTime=((today.getMilliseconds()/1000)%60)+"초";
    // let strDate=strTime;
    // demo.innerHTML=strDate;

    let startDate = today.getTime();
    let lastDate = new Date();
    let elapsedTime  = lastDate.getTime() - today.getTime();
    let strDate = elapsedTime / (60*60*24*1000);
    demo.innerHTML = strDate;
}
// 해당 월 마지막 일자 출력

function fCheck5() {
    let strDate=new Date(2022,11,0); // new Date(년,월,일,시,분,초);
    strDate+="해당 월의 마지막 일자는?"+strDate.getDate();
    demo.innerHTML=strDate;
}

// 선택한 년,월 의 마지막 날짜 출력
function fCheck6() {
    let year=document.getElementById("year").value;
    let month=document.getElementById("month").value;

    console.log(year);
    console.log(month);

    let str=new Date(year,month,0);
    let strDate=str.getFullYear()+"-";
    strDate+=(str.getMonth()+1)+"-";
    strDate+=str.getDate();
    strDate="해당월의 마지막 일자는? "+strDate;
    demo.innerHTML=strDate;
}

// 오늘 날짜 yyyy-mm-dd 형식으로 출력

function fCheck8() {
    let mon;
    let dat;
    if(parseInt(date)<10) {
        dat="0"+date;
    }
    if(parseInt(month)<10) {
        mon="0"+month;
    }

    let strDate=year+"-"+mon+"-"+dat;
    demo.innerHTML=strDate;

    // 선생님 방식

    // let strDate = year + "-" + month + "-" + date;
    // let fmtDate = strDate.split("-");
    // let yy = fmtDate[0];
    // let mm = ('0' + fmtDate[1]).slice(-2);    // 2월 --> 02월 : 02 --> 002
    // let dd = ('0' + fmtDate[2]).slice(-2)
    // strDate = yy + "-" + mm + "-" + dd;

    // demo.innerHTML = strDate;
}
