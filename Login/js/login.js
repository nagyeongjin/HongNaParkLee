function login(){
	let id = document.getElementById("id").value;
	let pw = document.getElementById("pw").value;
	let pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/; //아이디 특수문자 체크
	let pattern_chk2 = /[0-9]/;
	let pattern_chk3 = /[a-zA-Z]/;
	let pattern_chk4 = /[~!@#$%^&*()_+|<>?:{}]/;

    let pw_chk = pattern_chk2.test(pw) || !pattern_chk3.test(pw) || !pattern_chk4.test(pw) || pw.length <8 || pw.includes(' ')
    

	if (id.trim().length == 0) {
		alert("아이디를 잘못 입력하셨습니다.");
		return;
	}
	else if(id.length <5 || id.length>10){
		alert("아이디는 5~10자리 이어야 합니다.");
	}
	
	else if (pattern_chk1.test(id)) { //아이디 특수문자 체크
		alert("아이디에 특수문자는 들어갈 수 없습니다.");
		return;
	}
	else if(pw.trim().length == 0){
		alert("비밀번호를 입력하시기 바랍니다.");
		return;
	}	
	else if (!pw_chk) {
		alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.");
		return;
	}
	else{
		alert(id + "님 반갑습니다");          
		window.location.href="메인페이지 예정"
	}
}