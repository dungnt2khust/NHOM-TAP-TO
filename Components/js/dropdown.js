var dropdown = document.querySelector(".dropdown");
var dropdownList = document.querySelector(".dropdown-list");
var iconDown = document.querySelector(".icon-down");
var iconUp = document.querySelector(".icon-up");
var dropdownValue = document.querySelector(".dropdown-value");
var state = false;

var currVal = 4;


var dropdownData = [
    "Tổng giám đốc",
    "Giám đốc",
    "Bố giám đốc",
    "Người yêu giám đốc",
    "Giám đốc giả vờ và cái kết"
];


render();


function render() {
    var dropdownListHTML = '';
    dropdownValue.innerText = dropdownData[currVal];

    for (var i = 0; i < dropdownData.length; i++) {
        if (i != currVal) {
            dropdownListHTML += `<li data-id=${i} class="dropdown-item"> ${dropdownData[i]} </li>`;
        } else {
            dropdownListHTML += `<li data-id=${i} class="dropdown-item active"> ${dropdownData[i]} </li>`;
        }
    }

    dropdownList.innerHTML = dropdownListHTML;

    var items = dropdownList.querySelectorAll('.dropdown-item');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            var dataId = item.getAttribute('data-id');
            this.currVal = dataId;
            this.render();
        });
    });
}




// CÁCH 1
// dropdown.addEventListener('click', function () {
//     if (state == false) {
//         dropdownList.style.display = "block";
//         iconDown.style.display = "none";
//         iconUp.style.display = "inline";
//         state = true;
//     } else {
//         dropdownList.style.display = "none";
//         iconDown.style.display = "inline";
//         iconUp.style.display = "none";
//         state = false;
//     }
// });


// CÁCH 2:
// dropdown.addEventListener('click', function () {
//     if (dropdownList.classList.contains('show')) {
//         dropdownList.classList.remove('show');
//         iconDown.classList.add('show');
//         iconUp.classList.remove('show');
//     } else {
//         dropdownList.classList.add('show');
//         iconDown.classList.remove('show');
//         iconUp.classList.add('show');
//     }
// });

// CÁCH 3: 
dropdown.addEventListener('click', function () {
    dropdownList.classList.toggle('show');
    iconUp.classList.toggle('show');
    iconDown.classList.toggle('show');
});
