<template lang="">
    <div id="container">
         <div class="container__header">
          <div class="container__header-left">
            <span class="table-name">Danh sách nhân viên</span>
            <div class="table-filter">
              <div class="table-search">
                <div class="table-search__icon">
                  <img src="../../assets/icon/search.png" alt="" />
                </div>
                <input tabindex="1" class="table-search__input" placeholder="Tìm theo mã, họ tên hoặc số điện thoại" type="text" />
              </div> 
              <!-- DEPARTMENT -->
              <BaseDropdown
                :dropdownValue="departmentValue"
                :id="'department'" 
                :APIurl="'http://cukcuk.manhnv.net/api/Department'"
                :dropdownName="'Department'"
                />

               <!-- POSITION -->
              <BaseDropdown
                :dropdownValue="positionValue"
                :id="'position'" 
                :APIurl="'http://cukcuk.manhnv.net/v1/Positions'"
                :dropdownName="'Position'"
              />
            </div>
          </div>
          <div class="container__header-right">
            <button class="button button-addemployee">
              <div class="button__img">
                <img src="../../assets/icon/add.png" alt="" />
              </div>
              <span class="button__name"> Thêm nhân viên </span>
            </button>
            <div class="button-f5-delete">
              <button id="button-delete" class="button"> <i class="fas fa-minus-square"></i> Xoá nhân viên</button>
              <div class="refresh">
                <img src="../../assets/icon/refresh.png" alt="" />
              </div>
            </div>
          </div>
        </div> 
        <div class="container__main">
            <div class="table-wrapper">
    <table class="table-employee">
            <thead class="table-employee__head">
            <tr>
                <th class="table-employee__header">#</th>
                <th fieldName="EmployeeCode" class="table-employee__header">Mã nhân viên</th>
                <th fieldName="FullName" class="table-employee__header">Họ và tên</th>
                <th fieldName="GenderName" class="table-employee__header">Giới tính</th>
                <th fieldName="DateOfBirth" class="table-employee__header">Ngày sinh</th>
                <th fieldName="PhoneNumber" class="table-employee__header">Điện thoại</th>
                <th fieldName="Email" class="table-employee__header">Email</th>
                <th fieldName="PositionName" class="table-employee__header">Chức vụ</th>
                <th fieldName="DepartmentName" class="table-employee__header">Phòng ban</th>
                <th fieldName="Salary" class="table-employee__header">Mức lương cơ bản</th>
                <th fieldName="WorkStatus" class="table-employee__header">Tình trạng công việc</th>
            </tr>
            </thead>
            <tbody class="table-employee__body">
                <tr @click="employeeRowClick($event)" v-for="(employee, index) in employees" :index="index" :key="index" class="table-employee__row">
                    <td><input type="checkbox" name="" id="" class="table-employee__checkbox"></td>
                    <td fieldName="EmployeeCode">{{employee.EmployeeCode}}</td>
                    <td fieldName="FullName">{{employee.FullName}}</td>
                    <td fieldName="GenderName">{{employee.GenderName}}</td>
                    <td fieldName="DateOfBirth">{{ formatDateTable(employee.DateOfBirth)}}</td>
                    <td fieldName="PhoneNumber">{{employee.PhoneNumber}}</td>
                    <td fieldName="Email">{{employee.Email}}</td>
                    <td fieldName="PositionName">{{employee.PositionName}}</td>
                    <td fieldName="DepartmentName">{{employee.DepartmentName}}</td>
                    <td fieldName="Salary">{{ formatSalary(employee.Salary)}}</td>
                    <td fieldName="WorkStatus">{{employee.WorkStatus}}</td>
                </tr>
            </tbody>
        </table>    
    </div>  
    <div class="pagination">
        <p class="pagination__text">Hiển thị 1-10/1000 nhân viên</p>
        <ul class="pagination__list">
            <li class="pagination__item">
                <img class="pagination__item-img" src="../../assets/icon/btn-firstpage.svg" alt="" />
            </li>
            <li class="pagination__item">
                <img class="pagination__item-img" src="../../assets/icon/btn-prev-page.svg" alt="" />
            </li>
            <li class="pagination__item active">1</li>
            <li class="pagination__item">2</li>
            <li class="pagination__item">3</li>
            <li class="pagination__item">4</li>
            <li class="pagination__item">
                <img class="pagination__item-img" src="../../assets/icon/btn-next-page.svg" alt="" />
            </li>
            <li class="pagination__item">
                <img class="pagination__item-img" src="../../assets/icon/btn-lastpage.svg" alt="" />
            </li>
        </ul>
        <div class="input__number-wrapper">
            <label for="input__number">Số nhân viên/trang: </label>
            <input type="number" name="" id="input__number" value="10" class="input__number">
        </div>
    </div> 
        </div>
    </div>
</template>
<script>
import BaseDropdown from '../base/BaseDropdown.vue'

export default {
    name: 'TheContainer',
    data() {
      return {
        positionValue: 'Fresher Web',
        departmentValue: 'Phòng nhân sự'
      }
    },
    props: {
      employees: Array
    },
    methods: {
      employeeRowClick(event) {
        var currIndex = event.target.parentElement.getAttribute('index');
        this.$emit('employeeRowClick', currIndex);
      },
      formatDateTable(value) {
        if (value) {
          var date = new Date(value);
          var day = date.getDate();
          day = day < 10 ? '0' + day : day;
          var month = date.getMonth() + 1;
          month = month < 10 ? '0' + month : month;
          var year = date.getFullYear();
          return `${day}/${month}/${year}`;
        } else {
          return '';
        }
      },
      formatSalary(value) {
        if (value) {
          return value.toLocaleString(undefined);
        } else {
          return '';
        }
      }

    },
    components: {
      BaseDropdown
    }
}
</script>
<style scoped>
</style>