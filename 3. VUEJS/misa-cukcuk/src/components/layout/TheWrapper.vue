<template>
    <div id="wrapper">
        <TheMenu/> 
        <TheContainer 
            :employees="employees"

            @employeeRowClick="employeeRowClick($event)"/>
    </div>
</template>
<script>
import TheMenu from './TheMenu.vue';
import TheContainer from './TheContainer.vue';

export default {
    name: 'TheWrapper',
    props: {
        employees: Array
    },
    methods: {
        employeeRowClick(event) {
            this.$emit('employeeRowClick', event);
        }
    },
    components: {
        TheMenu,
        TheContainer
    }
}
</script>
<style>
    
</style>