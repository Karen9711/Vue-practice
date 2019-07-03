<template lang="html">
  <div id="tabBar">
    <router-link to='/movie' class="tab" tag="a">
      <Icon type="md-film" size="30"/>
      <div class="">
        电影
      </div>
    </router-link>
    <router-link to="/cinema" class="tab" tag="a">
      <Icon type="md-home" size="30"/>
      <div class="">
        影院
      </div>
    </router-link>
    <router-link to='/mine' class="tab" tag="a">
      <Icon type="md-person" size="30"/>
      <div class="">
        我的
      </div>
    </router-link>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
#tabBar
{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height:5em;
  background-color:#222831;
  color:#eeeeee;
}
#tabBar .tab
{
  display: inline-block;
  text-align: center;
  width: 32%;
  margin-top:0.5em;
  color:#eeeeee;
}
#tabBar .tab.router-link-active
{
  color:#d65a31;
}
</style>
