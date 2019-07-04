<template lang="html">
  <div class="">
    <Header title="我最好看" />
    <Login />
    <tabBar />
  </div>
</template>

<script>
import Header from '@/components/Header';
import tabBar from '@/components/tabBar';
import Login from '@/components/Login';
export default {
  components:{
    Header,
    tabBar,
    Login
  }
}
</script>

<style lang="css" scoped>
</style>
