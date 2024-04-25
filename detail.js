let files=["./css/images/heart.jpg", "./css/images/fullheart.jpg"];

let imgs=[];
for (i=0; i<files.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = files[i];
}

let next = 1;
function jjim(obj) {
    obj.src = imgs[next].src;
    next++;
    next %= imgs.length;
}