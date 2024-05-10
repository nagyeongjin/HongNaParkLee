let update=document.getElementById("update_pw_window")
let id_window=document.getElementById("id_window")


function findId(){
    let name = document.getElementById("find_name").value;
    let phone = document.getElementById("find_phone").value;
    if (!name || !phone) {
        alert("빈칸 없이 모두 입력해주세요.");
        return false;
    } else {
        return true;
    }
}

function findPassword() {
    let id = document.getElementById("find_id").value;
    let name = document.getElementById("find_name2").value;
    let phone = document.getElementById("find_phone2").value;

    if (!id || !name || !phone) {
        alert("빈칸 없이 모두 입력해주세요.");
        return false;
    } else {
        return true;
    }
}

document.getElementById("find_id_btn").addEventListener("click", function() {
    if (findId()) {
        window.open('findId.html','open','width=400,height=400')
    }
});
document.getElementById("find_pw_btn").addEventListener("click", function() {
    if (findPassword()) {
        window.open('findPw.html','open','width=400,height=400')
    }
});
function idClose(){
    window.close()
}

function updateClose(){
    window.close()
}