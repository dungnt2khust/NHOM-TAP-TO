<template>
  <div id="app"> 
    <TheMain 
      :employees="employees"
      @employeeRowClick="employeeRowClick($event)"
      />
    <ThePopupInfo
      :popupData="popupData"
      :popupShow="popupShow"

      @popupCancelClick="popupCancelClick()"
      />
  </div>
</template>

<script>
import TheMain from './components/layout/TheMain.vue'
import ThePopupInfo from './components/layout/ThePopupInfo.vue'
import axios from 'axios'
import {EventBus} from './main'

export default {
  name: 'App',
  data() {
      return {
          employees: [],
          popupShow: false,
          popupData: {}
      }
  },
  methods: {
    employeeRowClick(event) {
      this.popupData = this.employees[event];
      this.popupShow = true;
    },
    popupCancelClick() {
      this.popupShow = false;
    },
    itemClick(data) {
      console.log('app', data);
    }
  },
  created() {
      const vm = this;
      axios.get('http://cukcuk.manhnv.net/v1/Employees').then(res => {
          vm.employees = res.data;
      }).catch(res => {
          console.log(res.data);
      });
      EventBus.$on('itemClick', (data) => {
        console.log(data);
      });
  },
  components: {
    TheMain,
    ThePopupInfo
  }
}
</script>

<style>
@import url('./css/main.css');
</style>
