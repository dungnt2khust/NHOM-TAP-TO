//DROPDOWN 1
// var dropdown = document.querySelector(".dropdown");
var dropdownList = document.querySelector(".dropdown-list");
var dropdownValue = document.querySelector(".dropdown-value");


//DROPDOWN 2
// var dropdown2 = document.querySelector(".dropdown-2");
var dropdownList2 = document.querySelector(".dropdown-list-2");
var dropdownValue2 = document.querySelector(".dropdown-value-2");


//DROPDOWN 3
var dropdownList3 = document.querySelector(".dropdown-list-3");
var dropdownValue3 = document.querySelector(".dropdown-value-3");

// var iconDown = document.querySelector(".icon-down");
// var iconUp = document.querySelector(".icon-up");

console.log(dropdownList3);
console.log(dropdownValue3);

var state = false;

var currVal = 0;

var dropdownData = [
    "Tổng giám đốc",
    "Giám đốc",
    "Bố giám đốc",
    "Người yêu giám đốc",
    "Giám đốc giả vờ và cái kết"
];



var dropdownRestaurant = [
    "Nhà hàng Trung Quốc",
    "Nhà hàng Tàu Khựa",
    "Nhà hàng Việt Nam",
    "Nhà hàng Nhật bổn"
];

var dropdownGender = [
    "Nam",
    "Nữ",
    "Không xác định"
];




function renderDropdown(dropdownValue, dropdownList, dropdownData) {

    render();


    function render() {
        var dropdownListHTML = '';
        dropdownValue.innerText = dropdownData[currVal];

        for (var i = 0; i < dropdownData.length; i++) {
            if (i == currVal) {
                dropdownListHTML += `<li data-id=${i} class="dropdown-item dropdown-item--active"><i class="fas fa-check dropdown-item__icon"></i> ${dropdownData[i]} </li>`;
            } else {
                dropdownListHTML += `<li data-id=${i} class="dropdown-item"><i class="fas fa-check dropdown-item__icon"></i> ${dropdownData[i]} </li>`;
            }
        }

        dropdownList.innerHTML = dropdownListHTML;

        var items = dropdownList.querySelectorAll('.dropdown-item');

        items.forEach((item) => {
            item.addEventListener('click', () => {
                var dataId = item.getAttribute('data-id');
                this.currVal = dataId;
                render();
            });
        });
    }
}

renderDropdown(dropdownValue, dropdownList, dropdownData);

renderDropdown(dropdownValue2, dropdownList2, dropdownRestaurant);

renderDropdown(dropdownValue3, dropdownList3, dropdownGender);


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
// dropdown.addEventListener('click', function () {
//     dropdownList.classList.toggle('show');
//     iconUp.classList.toggle('show');
//     iconDown.classList.toggle('show');
// });

// dropdown2.addEventListener('click', function () {
//     dropdownList2.classList.toggle('show');
//     iconUp.classList.toggle('show');
//     iconDown.classList.toggle('show');
// });

var dropdowns = document.querySelectorAll(".dropdown");

// dropdowns[0].addEventListener('click', function () {
//     dropdowns[0].querySelector('.dropdown-list').classList.toggle('show');
//     iconUp.classList.toggle('show');
//     iconDown.classList.toggle('show');
// })

// dropdowns[1].addEventListener('click', function () {
//     dropdowns[1].querySelector('.dropdown-list').classList.toggle('show');
//     iconUp.classList.toggle('show');
//     iconDown.classList.toggle('show');
// })

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', function () {
        dropdown.querySelector('.dropdown-list').classList.toggle('show');
        dropdown.querySelector('.icon-up').classList.toggle('show');
        dropdown.querySelector('.icon-down').classList.toggle('show');
    });
});

