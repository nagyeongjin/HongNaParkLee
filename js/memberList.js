// 첫 번째 체크박스를 선택하면 전체 체크박스를 선택하거나 해제하는 함수
document.getElementById('selectAll').addEventListener('change', function() {
    let checkboxes = document.querySelectorAll('.memberCheckbox');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = this.checked;
    }, this);
});