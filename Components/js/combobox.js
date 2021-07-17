// BEGIN DECLARE VARIABLES
var combobox = document.querySelector('.combobox');
var comboboxDropdown = document.querySelector('.combobox__dropdown');
var comboboxList = document.querySelector('.combobox__list');
var comboboxIcon = document.querySelector('.combobox__icon');
var comboboxInput = document.querySelector('.combobox__input');
var comboboxInputCancel = document.querySelector('.combobox__input-cancel');

var statusComboboxList = false;

// END DECLARE VARIABLES



// BEGIN HANDLE EVENTS
comboboxDropdown.addEventListener('click', function () {
    if (statusComboboxList) {
        comboboxList.style.display = "none";
        statusComboboxList = false;
        comboboxIcon.style.transform = "rotate(0)";
        comboboxIcon.style.transition = "all 0.3s ease";
        combobox.style.border = "2px solid #bbb";
        comboboxDropdown.style.borderLeft = "2px solid #bbb";
    } else {
        comboboxList.style.display = "block";
        statusComboboxList = true;
        comboboxIcon.style.transform = "rotate(180deg)";
        comboboxIcon.style.transition = "all 0.3s ease";
        combobox.style.border = "2px solid #019160";
        comboboxDropdown.style.borderLeft = "2px solid #019160";
    }
});

comboboxList.addEventListener('click', function () {
    if (statusComboboxList) {
        comboboxList.style.display = "none";
        statusComboboxList = false;
        comboboxIcon.style.transform = "rotate(0)";
        comboboxIcon.style.transition = "all 0.3s ease";
        comboboxInputCancel.style.display = "none";
        combobox.style.border = "2px solid #bbb";
        comboboxDropdown.style.borderLeft = "2px solid #bbb";
    } else {
        comboboxList.style.display = "block";
        statusComboboxList = true;
        comboboxIcon.style.transform = "rotate(180deg)";
        comboboxIcon.style.transition = "all 0.3s ease";
        combobox.style.border = "2px solid #bbb";
        comboboxDropdown.style.borderLeft = "2px solid #019160";
    }
});

comboboxInput.addEventListener('focus', function () {
    console.log('input focusing');
    comboboxList.style.display = "block";
    statusComboboxList = true;
    comboboxIcon.style.transform = "rotate(180deg)";
    comboboxIcon.style.transition = "all 0.3s ease";
    comboboxInputCancel.style.display = "block";
    combobox.style.border = "2px solid #019160";
    comboboxDropdown.style.borderLeft = "2px solid #019160";
});


comboboxInput.addEventListener('input', function () {
    renderInput();
});

comboboxInputCancel.addEventListener('click', function () {
    comboboxInput.value = '';
    comboboxInput.focus();
    renderInput();
});

window.addEventListener('keydown', function (e) {
    if (e.code == "Enter") {
        comboboxList.style.display = "none";
        statusComboboxList = false;
        comboboxIcon.style.transform = "rotate(0)";
        comboboxIcon.style.transition = "all 0.3s ease";
        comboboxInputCancel.style.display = "none";
        combobox.style.border = "2px solid #bbb";
        comboboxDropdown.style.borderLeft = "2px solid #bbb";
        comboboxInput.blur();
        resolveInputValue();
    }
});
// END HANDLE EVENTS




// BEGIN MAIN PROGRAM
var comboboxData = [
    "Tất cả vị trí",
    "Giám đốc",
    "Trưởng phòng",
    "Fresher Web",
    "Intern HR"
];

var currentValue = 0;
renderCombobox();

// END MAIN PROGRAM






// BEGIN FUNCTIONS
function renderCombobox() {
    var comboboxListHTML = '';
    for (var i = 0; i < comboboxData.length; i++) {
        if (i == currentValue) {
            comboboxListHTML += `<li data-id=${i} class="combobox__item combobox__item--active"><i class="fas fa-check combobox__check"></i> ${comboboxData[i]}</li>`;
        } else {
            comboboxListHTML += `<li data-id=${i} class="combobox__item"><i class="fas fa-check combobox__check"></i> ${comboboxData[i]}</li>`;
        }

    }
    comboboxInput.value = comboboxData[currentValue];
    comboboxList.innerHTML = comboboxListHTML;

    var comboboxItems = comboboxList.querySelectorAll('li');

    comboboxItems.forEach(function (comboboxItem) {
        comboboxItem.addEventListener('click', function () {
            currentValue = comboboxItem.getAttribute('data-id');
            renderCombobox();
        });
    });
}

// RENDER BY SEARCHING TEXT
function renderInput() {
    var comboboxListHTML = '';
    var inputValue = comboboxInput.value;
    var inputValueLowercase = inputValue.toLowerCase().trim();

    for (var i = 0; i < comboboxData.length; i++) {
        var comboboxDataLowerCase = comboboxData[i].toLowerCase().trim();
        if (comboboxDataLowerCase.includes(inputValueLowercase)) {
            if (i == currentValue) {
                comboboxListHTML += `<li data-id=${i} class="combobox__item combobox__item--active"><i class="fas fa-check combobox__check"></i> ${comboboxData[i]}</li>`;
            } else {
                comboboxListHTML += `<li data-id=${i} class="combobox__item"><i class="fas fa-check combobox__check"></i> ${comboboxData[i]}</li>`;
            }
        }
    }
    comboboxList.innerHTML = comboboxListHTML;

    var comboboxItems = comboboxList.querySelectorAll('li');

    comboboxItems.forEach(function (comboboxItem) {
        comboboxItem.addEventListener('click', function () {
            console.log(comboboxItem)
            currentValue = comboboxItem.getAttribute('data-id');
            console.log(currentValue);
            renderCombobox();
        });
    });
}

// RESOLVE INPUT VALUE
function resolveInputValue() {
    var inputValue = comboboxInput.value;
    var check = comboboxData.find(function (data) {
        return data == inputValue;
    });

    if (check == undefined) {
        combobox.style.border = "2px solid rgb(255, 73, 73)";
        comboboxDropdown.style.borderLeft = "2px solid rgb(255, 73, 73)";
    }
}

// END FUNCTIONS