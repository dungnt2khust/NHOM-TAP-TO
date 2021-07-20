
// RENDER TABLE

var tableBodyEmployee = $('.table-employee__body');


var tableEmployeeData;
$(document).ready(function () {
    $.ajax({
        url: 'http://cukcuk.manhnv.net/v1/Employees',
        method: 'GET'
    }).done(function (res) {
        tableEmployeeData = res;
        renderTable(tableEmployeeData);
        handleEventTableRow(tableEmployeeData);
    }).fail(function (res) {
        console.log('fail');
    });
});


function renderTable(tableData) {
    var tableHTML = '';
    for (var i = 0; i < tableData.length; i++) {
        tableHTML += `<tr data-id=${i} class="table-employee__row">
                  <td class="table-employee__check"><input type="checkbox" name="" id=""></td>
                  <td class="table-employee__code">${tableData[i].EmployeeCode}</td>
                  <td class="table-employee__name">${tableData[i].FullName}</td>
                  <td class="table-employee__gender">${tableData[i].GenderName}</td>
                  <td class="table-employee__dob">${tableData[i].DateOfBirth}</td>
                  <td class="table-employee__phone">${tableData[i].PhoneNumber}</td>
                  <td class="table-employee__email">${tableData[i].Email}</td>
                  <td class="table-employee__position">${tableData[i].PositionName}</td>
                  <td class="table-employee__department">${tableData[i].DepartmentName}</td>
                  <td class="table-employee__salary">${tableData[i].Salary}</td>
                  <td class="table-employee__status">${tableData[i].WorkStatus}</td>
                </tr>`;
    }
    tableBodyEmployee.append(tableHTML);
}

// RENDER POPUP (DETAIL INFORMATIONS FORM)
var employeeCode = $('#employee__code')[0];
var employeeFullname = $('#employee__fullname')[0];
var employeeDob = $('#employee__dob')[0];
var employeeGender = $('#employee__gender')[0];
var employeeIdnumber = $('#employee__idnumber')[0];
var employeeIddate = $('#employee__iddate')[0];
var employeeIdplace = $('#employee__idplace')[0];
var employeeEmail = $('#employee__email')[0];
var employeePhone = $('#employee__phone')[0];
var employeePosition = $('#employee__position')[0];
var employeeDepartment = $('#employee__department')[0];
var employeeTaxcode = $('#employee__taxcode')[0];
var employeeBasesalary = $('#employee__basesalary')[0];
var employeeJoindate = $('#employee__joindate')[0];
var employeeWorkstatus = $('#employee__workstatus')[0];
var popupOverlay = $('.popup-overlay')[0];

console.log(popupOverlay);
function handleEventTableRow(tableData) {
    var tableRows = document.querySelectorAll('.table-employee__row');

    tableRows.forEach(function (tableRow) {
        tableRow.addEventListener('click', function () {
            var index = tableRow.getAttribute('data-id');
            popupOverlay.style.display = "block";
            popupOverlay.style.opacity = 1;
            var currentRow = tableData[index];
            // console.log(typeof currentRow.DateOfBirth);
            employeeCode.value = resolveValue(currentRow.EmployeeCode);
            employeeFullname.value = resolveValue(currentRow.FullName);
            employeeDob.value = (currentRow.DateOfBirth).substring(0, 10);
            employeeGender.value = resolveValue(currentRow.GenderName);
            employeeIdnumber.value = resolveValue(currentRow.IdentifyNumber);
            employeeIddate.value = resolveValue(currentRow.IdentifyDate);
            employeeIdplace.value = resolveValue(currentRow.IdentifyPlace);
            employeeEmail.value = resolveValue(currentRow.Email);
            employeePhone.value = resolveValue(currentRow.PhoneNumber);
            employeePosition.value = resolveValue(currentRow.PositionName);
            employeeDepartment.value = resolveValue(currentRow.DepartmentName);
            employeeTaxcode.value = resolveValue(currentRow.PersonalTaxCode);
            employeeBasesalary.value = resolveValue(currentRow.Salary);
            employeeJoindate.value = currentRow.JoinDate;
            employeeWorkstatus.value = resolveValue(currentRow.WorkStatus);
        })
    })
}

function resolveValue(value) {
    return value == null ? '' : value;
}
