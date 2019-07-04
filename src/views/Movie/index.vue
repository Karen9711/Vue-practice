<template lang="html">
  <div class="">
    <Header />
    <div class="content">
      <div class="movie-menu">
        <router-link tag="div" to="/movie/city" class="city">
          成都
          <Icon type="md-arrow-dropdown" />
        </router-link>
        <router-link tag="div" to="/movie/nowPlaying" class="nowPlaying">
          热映中
        </router-link>
        <router-link tag="div" to="/movie/commingSoon" class="commingSoon">
          即将上映
        </router-link>
        <router-link tag="div" to="/movie/search" class="search">
          <Icon type="md-search" size="30" />
        </router-link>
      </div>
    </div>
    <keep-alive>
    <router-view/>
    </keep-alive>
    <tabBar />
  </div>
</template>

<script>
import Header from '@/components/Header';
import tabBar from '@/components/tabBar';
export default {
  components:{
    Header,
    tabBar,
  }
}
</script>

<style lang="css" scoped>
.content
{
  position: fixed;
  /* margin-top: 4em; */
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
.content .city,.content .nowPlaying,.content .commingSoon,.content .search
{
  display: inline-block;
  font-size: 16px;
  width: 23%;
  padding-left: 10px;
  text-align: center;
  color: #222831;
}
.movie-menu .nowPlaying.router-link-active,.movie-menu .commingSoon.router-link-active,.movie-menu .city.router-link-active,.movie-menu .search.router-link-active
{
  border-bottom:3px solid #d65a31;
  color:#d65a31;
}

</style>
