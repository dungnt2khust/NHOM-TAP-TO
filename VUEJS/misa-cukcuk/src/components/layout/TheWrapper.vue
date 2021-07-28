<template lang="">
    <div id="wrapper">
        <TheMenu/>
        <TheContainer v-on:handleTableRow1="handleTableRow1($event)"/>
    </div>
</template>
<script>
import TheMenu from './TheMenu.vue'
import TheContainer from './TheContainer.vue'

export default {
    name: 'gorappo',
    methods: {
        handleTableRow1(event) {
            this.$emit('handleTableRow2', event);
        }
    },
    components: {
        TheMenu,
        TheContainer
    }
}
</script>
<style lang="">
    
</style>