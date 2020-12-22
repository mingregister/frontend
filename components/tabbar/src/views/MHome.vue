<template>
  <div>
    <router-view></router-view>
    <MainTarBar/>
  </div>
</template>

<script>
import MainTarBar from '@/components/MainTarBar';
export default {
    components: {
        MainTarBar
    }
}
</script>
<style>
/* @import "../assets/css/base"; */
body {
    padding: 0;
    margin: 0;
}


</style>