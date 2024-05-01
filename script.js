document.addEventListener("DOMContentLoaded", function() {
    // 검색 버튼에 대한 이벤트 처리
    let searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', function(event) {
        event.preventDefault(); // 폼 전송 방지

        // 검색어 가져오기
        let searchInput = document.querySelector('.search-txt').value;

        // 선택된 장르 가져오기
        let selectedGenres = [];
        let genreCheckboxes = document.querySelectorAll('.genre-check-box .btn-check');
        genreCheckboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selectedGenres.push(checkbox.textContent.trim());
            }
        });

        // 선택된 연도 가져오기
        let selectedYears = [];
        let yearCheckboxes = document.querySelectorAll('.yearBox1 .btn-check');
        yearCheckboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selectedYears.push(checkbox.textContent.trim());
            }
        });

        // 검색어, 선택된 장르, 연도를 사용하여 검색 실행
        console.log('검색어:', searchInput);
        console.log('선택된 장르:', selectedGenres);
        console.log('선택된 연도:', selectedYears);

        // 여기서 검색을 실행하는 로직을 추가하면 됩니다.
        // 예를 들어, 검색어를 서버로 전송하여 검색 결과를 받아오는 등의 동작을 수행할 수 있습니다.
    });
});
