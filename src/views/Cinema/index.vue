<template lang="html">
  <div class="">
    <Header />
    <div class="content">
      <div class="cinema-menu">
        <div   class="roundTown">
          全城
          <Icon type="md-arrow-dropdown" />
        </div>
        <div class="brand">
          品牌
          <Icon type="md-arrow-dropdown" />
        </div>
        <div   class="feature">
          特色
          <Icon type="md-arrow-dropdown" />
        </div>
      </div>
    </div>
    <Clist />
    <tabBar />
  </div>
</template>

<script>
import Header from '@/components/Header';
import tabBar from '@/components/tabBar';
import Clist from '@/components/Clist'
export default {
  components:{
    Header,
    tabBar,
    Clist
  }
}
</script>

<style lang="css" scoped>
.content
{
  position: fixed;
  top: 4em;
  left:0;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 10px;
  background-color: #fff;
  line-height: 3em;
  box-shadow: 0px 2px 10px rgba(0,0,0,.2);
  z-index: 4;
}
.roundTown,.feature,.brand
{
  display: inline-block;
  font-size: 16px;
  width: 30%;
  padding-left: 10px;
  text-align: center;
  color: #222831;
}

</style>
