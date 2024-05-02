document.addEventListener("DOMContentLoaded", function() {
    
    let searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', function(event) {
        event.preventDefault();
        // 검색어 가져오기
        let searchInput = document.querySelector('.search-txt').value;

        //  장르 가져오기
        let selectedGenres = [];
        let genreCheckboxes = document.querySelectorAll('.genre-check-box .btn-check');
        genreCheckboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selectedGenres.push(checkbox.textContent.trim());
            }
        });

        //  연도 가져오기
        let selectedYears = [];
        let yearCheckboxes = document.querySelectorAll('.yearBox1 .btn-check');
        yearCheckboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selectedYears.push(checkbox.textContent.trim());
            }
        });

        // 검색 실행
        console.log('검색어:', searchInput);
        console.log('선택된 장르:', selectedGenres);
        console.log('선택된 연도:', selectedYears);

    
    });
});
