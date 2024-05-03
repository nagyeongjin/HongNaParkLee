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
