<template lang="html">
  <div id="header">

    <h1>
      <Icon type="ios-moon-outline" />
      <Icon type="ios-star-outline" />
       {{title}}
       <Icon type="ios-star-outline" />
       <Icon type="ios-moon-outline" />
     </h1>
  </div>
</template>

<script>
export default {
  name:'Header',
  props:{
    title:{
      type:String,
      default:'要你好看电影'
    }
  }
}
</script>

<style lang="css" scoped>
#header
{
  background-color: #222831;
  line-height:4em;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
#header h1
{
  text-align: center;
  color:#eeeeee;
  font-size: 20px;
}
</style>
