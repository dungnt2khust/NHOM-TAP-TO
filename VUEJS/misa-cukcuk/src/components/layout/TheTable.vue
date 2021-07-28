<template lang="">
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
                <tr v-on:click="tableRowClick($event)" v-for="(item, index) in employees" v-bind:index="index" :key="index" class="table-employee__row">
                  <td><input type="checkbox" name="" id="" class="table-employee__checkbox"></td>
                  <td fieldName="EmployeeCode">{{item.EmployeeCode}}</td>
                  <td fieldName="FullName">{{item.FullName}}</td>
                  <td fieldName="GenderName">{{item.GenderName}}</td>
                  <td fieldName="DateOfBirth">{{item.DateOfBirth}}</td>
                  <td fieldName="PhoneNumber">{{item.PhoneNumber}}</td>
                  <td fieldName="Email">{{item.Email}}</td>
                  <td fieldName="PositionName">{{item.PositionName}}</td>
                  <td fieldName="DepartmentName">{{item.DepartmentName}}</td>
                  <td fieldName="Salary">{{item.Salary}}</td>
                  <td fieldName="WorkStatus">{{item.WorkStatus}}</td> 
                </tr>
            </tbody>
          </table> 
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: "TheTable",
    data() {
        return {
            employees: []
        }
    },
    methods: {
      tableRowClick(event) {
        var index = event.target.parentElement.getAttribute('index');
        console.log([this.employees[index]]);
        this.$emit('handleTableRow', [this.employees[index]]);
      }
    },
    created() {
        axios.get('http://cukcuk.manhnv.net/v1/Employees')
          .then((res) => {
            this.employees = res.data;
          })
          .catch((res) => {
            console.log(res);
          });
    }
}
</script>
<style lang="">
    
</style>