let update=document.getElementById("update_pw_window")
let id_window=document.getElementById("id_window")


function certiBtnHide(){
    let certi_btn = document.getElementById("certi_btn");
    certi_btn.hidden = false;
}

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


function updateOpen(){
    update.style.display="flex";
}
  function updateClose(){
    update.style.display="none";
}
function idOpen(){
    id_window.style.display="flex";
}
function idClose(){
    id_window.style.display="none";
}
document.getElementById("find_id_btn").addEventListener("click", function() {
    if (findId()) {
        idOpen();
    }
});
document.getElementById("find_pw_btn").addEventListener("click", function() {
    if (findPassword()) {
        updateOpen();
    }
});