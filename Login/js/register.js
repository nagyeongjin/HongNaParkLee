let id = document.getElementById("id").value;
let pw = document.getElementById("pw").value;
let email=document.getElementById("email").value;
let pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/; //아이디 특수문자 체크
let pattern_chk2 = /[0-9]/;
let pattern_chk3 = /[a-zA-Z]/;
let pattern_chk4 = /[~!@#$%^&*()_+|<>?:{}]/;
let pw_chk = pattern_chk2.test(pw) || !pattern_chk3.test(pw) || !pattern_chk4.test(pw) || pw.length <8 || pw.includes(' ')
let email_chk = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
let certi_window = document.getElementById("certi_window");

function certiOpen(){
  certi_window.style.display="flex";
}
function certiClose(){
  certi_window.style.display="none";
}

$(document).ready(function () {
    setDateBox();
});

  // select box 연도 , 월 표시
  function setDateBox() {

    let date = new Date();
    let year = "";
    let com_year = date.getFullYear();

    // 발행 뿌려주기
    $("#user_year").append("<option value=''>년도</option>");

    // 올해 기준으로 -50년부터 +1년을 보여준다.
    for (let y = com_year ; y >= (com_year - 100); y--) {
      $("#user_year").append("<option value='" + y + "'>" + y +"</option>");
    }

    // 월 뿌려주기(1월부터 12월)
    let month;
    $("#user_month").append("<option value=''>월</option>");
    for (let i = 1; i <= 12; i++) {
      $("#user_month").append("<option value='" + i + "'>" + i +"</option>");
    }

    // 일 뿌려주기(1일부터 31일)
    let day;
    $("#user_day").append("<option value=''>일</option>");
    for (let i = 1; i <= 31; i++) {
      $("#user_day").append("<option value='" + i + "'>" + i +"</option>");
    }

}

function checkReg(){
    
	if (id.trim().length == 0) {
		alert("아이디를 잘못 입력하셨습니다.");
		return;
	}	else if(id.length <5 || id.length>10){
		alert("아이디는 5~10자리 이어야 합니다.");
	}	else if (pattern_chk1.test(id)) { //아이디 특수문자 체크
		alert("아이디에 특수문자는 들어갈 수 없습니다.");
		return;
	}	else if(pw.trim().length == 0){
		alert("비밀번호를 입력하시기 바랍니다.");
		return;
	} else if (!pw_chk) {
		alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.");
		return;
	}else if(!email_chk.test(email)){
    alert("이메일형식이 올바르지 않습니다.")
    return;
  }
}


