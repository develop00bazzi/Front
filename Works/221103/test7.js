'use strict';

function regexCheck() {
    // 정규 표현식을 만든다.

    const regex1= /atom/gm;   // 'atom'이라는 문자열이 포함되어있다면 true, 없다면 false
    const regex2= /mbc|kbs|sbs/g;   // mbc 또는 kbs 또는 sbs 문자열 포함
    const regex3= /홍길(동|순)/g;   // 홍길동, 홍길순 이 있는지
    const regex4= /[a-z]/g;   // 영문 소문자를 포함하고 있는지
    const regex5= /[^a-z]/g;   // 영문 소문자 외에 다른 문자를 포함하고 있는지
    const regex6= /[A-Z]/g;                 // 영문 대문자를 포함하고 있는지
    const regex7= /[^A-Z]/g;                 // 영문 대문자 외에 다른 문자를 포함하고 있는지
    const regex8= /[0-9]/g;                 // 숫자를 포함하고 있는지
    const regex9= /[^0-9]/g;                 // 숫자 외에 다른 문자를 포함하고 있는지
    const regex10= /[가-힣]/g;                 // 한글을 포함하고 있는지
    const regex11= /[a-zA-Z0-9]/g;                 // 영문 '대/소문자'나 '숫자'가 포함되어 있는지
    const regex12= /[^a-zA-Z0-9]/g;                 // 영문 '대/소문자'나 '숫자' 외 다른 문자가 포함되어 있는지
    const regex13= /[a-z][A-Z][0-9][^가-힣]/g;                 // 영문 '대/소문자'와 '숫자' 만 입력받도록
    const regex14= /\./g; // 문자열 중에서 '.'이 있는지
    const regex15= /\d/g; // 숫자를 포함하고 있는지
    const regex16= /\D/g; // 숫자를 포함하고 있지 않은지
    const regex17= /\w/g; // 영문자/숫자/_(언더바)를 포함하고 있는지
    const regex18= /\W/g; // 영문자/숫자/_(언더바)를 포함하고 있지 않은지
    const regex19= /\s/g; // 문장 안에 공백 또는 탭을 포함하고 있는지
    
    // 와일드카드: 1개 글자에 대한 포함 유무(?), 복수개 문자의 포함 유무(+,*)
    const regex20= /홍길동?안녕/g;      // '홍길동'의 '동' 1개 글자의 포함 여부(있어도 되고, 없어도 되는)
    const regex21= /홍길동+안녕/g;      // '홍길동'의 '동' 1개 이상 글자의 포함 여부(있어도 되고, 없어도 되는)
    const regex22= /홍길동*안녕/g;      // '홍길동'의 '동' 0개 이상 글자의 포함 여부(있어도 되고, 없어도 되는)

    // d{2,3}, [a-z]{2,20} 2글자에서 3글자 가능


    let content=document.getElementById("content").value;

    if(content.trim()=="") {
        alert("문자열을 입력하세요.");
        // return false;
        return;
    }

    // else if(!content.match(regex1)) {
    //     alert("1. 'atom' 문자열을 포함하고 있지 않습니다.'");
    //     return;
    // }   

    // else if(!content.match(regex2)) {
    //     alert("2. 'mbc/kbs/sbs' 문자열을 포함하고 있지 않습니다.");
    //     return;
    // }

    // else if(!content.match(regex3)) {
    //     alert("3. '홍길동' 또는 '홍길순' 문자열을 포함하고 있지 않습니다.");
    //     return;
    // }

    // else if(!regex4.test(content)) {
    //     alert("4. '영문 소문자' 문자열을 포함하고 있지 않습니다.");
    //     return;
    // }

    // else if(regex5.test(content)) {
    //     alert("5. '영문 소문자' 외에 다른 문자열을 포함하고 있습니다.");
    //     return;
    // }

    // else if(!regex6.test(content)) {
    //     alert("6. '영문 대문자' 를 포함하고 있지 않습니다.");
    //     return;
    // }

    // else if(regex7.test(content)) {
    //     alert("7. '영문 소문자' 외에 다른 문자열을 포함하고 있습니다.");
    //     return;
    // }

    // else if(!regex8.test(content)) {
    //     alert("8. '숫자'를 포함하고 있지 않습니다.");
    //     return;
    // }

    // else if(regex9.test(content)) {
    //     alert("9. '숫자' 외에 다른 문자열을 포함하고 있습니다.");
    //     return;
    // }

    // else if(!regex10.test(content)) {
    //     alert("10. '한글'을 포함하고 있지 않습니다.");
    //     return;
    // }

    // else if(!regex11.test(content)) {
    //     alert("11.영문 '대/소문자'나 '숫자'가 포함되어 있지 않습니다. ");
    //     return;
    // }

    // else if(regex12.test(content)) {
    //     alert("12. 영문 '대/소문자'나 '숫자' 외 다른 문자가 포함되어 있습니다.");
    //     return;
    // }

    // else if(regex13.test(content)) {
    //     alert("13. 영문 '대/소문자'와 '숫자'만 정상적으로 입력되었습니다!");
    //     return;
    // }

    else if(!regex14.test(content)) {
        alert("14. '.'이 포함되어 있지 않습니다.");
        return;
    }


    alert("작업 끝!");
    document.getElementById("content").focus();
}