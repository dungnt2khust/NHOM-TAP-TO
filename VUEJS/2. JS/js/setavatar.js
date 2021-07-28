// DECLARE VARIABLES
var avatar = document.querySelector(".popup-avatar__img");
var inputFile = document.querySelector("#avatar-upload");
var buttonSetAvatar = document.querySelector(".btn-setavatar");
var buttonSetAvatarDemo = document.querySelector(".btn-setavatardemo");
var avatarPath = document.querySelector(".avatar-path");

// SLIDE
var slideHorizontal = document.querySelector("#slide-horizontal");
var slideVertical = document.querySelector("#slide-vertical");
var slideScale = document.querySelector("#slide-scale");

var slideX, slideY, slideZ;

inputFile.addEventListener("change", () => {
    setAvatar();
});

slideHorizontal.addEventListener('input', () => {
    console.log('changed horizontal');
    slideX = slideHorizontal.value;
    setAvatar();
}, false);

slideVertical.addEventListener('input', () => {
    console.log('changed vertical');
    slideY = slideVertical.value;
    setAvatar();
}, false);

slideScale.addEventListener('input', () => {
    console.log('changed scale');
    slideZ = slideScale.value;
    setAvatar();
}, false);

buttonSetAvatar.onclick = () => {
    setAvatar();
}

function setAvatar() {
    var pathFile = inputFile.value;
    console.log(pathFile);
    var realPath = '../../content/img/Avatar/' + pathFile.substr(12);
    avatar.style.backgroundImage = `url('${realPath}')`;

    var positionX = slideX === undefined ? 0 : slideX - 50;
    var positionY = slideY === undefined ? 0 : slideY - 50;
    var scale = slideZ === undefined ? 100 : slideZ;

    if (scale < 50) {
        avatar.style.backgroundSize = `${scale * 2}%`;
        avatar.style.backgroundPosition = "center";
    } else if (scale > 50) {
        avatar.style.backgroundSize = `${scale * 2}%`;
        avatar.style.backgroundPosition = "center";
    } else {
        avatar.style.backgroundSize = '100%';
        avatar.style.backgroundPosition = "center";
    }

    avatar.style.backgroundPosition = `${positionX}px ${positionY}px`;

    // console.log(positionX, positionY, scale);
}



