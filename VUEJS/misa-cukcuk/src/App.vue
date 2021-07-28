<template>
  <div id="app">
    <TheHeader/>
    <TheWrapper v-on:handleTableRow2="handleTableRow2($event)"/>
    <ThePopupInfo v-bind:employees="employees" v-bind:popupShow="popupShow" v-on:handleCancelForm="handleCancelForm()"/>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheWrapper from './components/layout/TheWrapper.vue'
import ThePopupInfo from './components/layout/ThePopupInfo.vue'
export default {
  name: 'App',
  data() {
    return {
      popupShow: false,
      employees: []
    }
  },
  methods: {
    handleTableRow2(event) {
      this.popupShow = true;
      this.employees = event; 
      console.log(event)
    },
    handleCancelForm() {
      this.popupShow = false;
    }
  },
  components:{
    TheHeader,
    TheWrapper,
    ThePopupInfo
  }
}
</script>

<style>
  @import url('./css/main.css');
</style>
