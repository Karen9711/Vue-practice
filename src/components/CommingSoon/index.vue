<template lang="html">
  <div id="commingSoon">
    <ul>
      <li v-for="item in comingList">
        <div class="movie-pic">
          <img :src="item.img | setWH('190.269')" alt="电影图片">
        </div>
        <div class="movie-info">
          <h3>
            {{item.nm}}
            <span v-show="item.version==='v3d imax'" class="threeD">3D <span class="max">MAX</span> </span>
          </h3>
          <p> <span class="wish">{{item.wish}}</span>人想看 </p>
          <p>主演：{{item.star}}</p>
          <p>{{item.showInfo}}</p>

        </div>
        <div class="buyTicket">
          <button type="button" name="button">预售</button>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
import $ from '../../libs/util.js'
export default {
  name:'NowPlaying',
  data(){
    return {
      comingList:[],
    }
  },
  methods:{

  },
  mounted(){
    $.ajax.get('movieComingList?cityId=10').then(res=>{
      // console.log(res);
      if(res.msg === 'ok'){
        this.comingList = res.data.comingList;
      }
    });
  }
}
</script>

<style lang="css" scoped>
#commingSoon
{
  margin-top: 8em;
  margin-bottom: 5em;
}
#commingSoon li
{
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 5px;
  border-bottom: 1px solid #eeeeee;
}
#commingSoon .movie-pic,#commingSoon .movie-info,#commingSoon .buyTicket
{
  display: inline-block;
}
#commingSoon .movie-pic
{
  width:20%;
}
,#commingSoon .movie-pic img
{
  width: 100%;
}
#commingSoon .movie-info
{
  width: 50%;
  height:100%;
  margin-left:5px;
}
#commingSoon .movie-info h2
{
  font-size: 18px;
}
#commingSoon .movie-info p
{
  font-size: 14px;
  padding-bottom: 3px;
}
#commingSoon .movie-info span.wish
{
  color:rgb(255, 176, 0);
}
#commingSoon .buyTicket
{
  width: 15%;
}
.buyTicket button
{
  padding: 3px;
  outline: none;
  background-color: rgb(79, 135, 189);
  border:0;
  color:#eeeeee;
  border-radius: 5px;
}
span.threeD
{
  font-size: 10px;
  background-color: #eeeeee;
  color: #393e46;
  padding-left: 2px;
  border-radius: 3px;
  margin-left:3px;
  border:1px solid #393e46;
}
span.threeD span.max
{
  background-color: #393e46;
  color:#eeeeee;
}
</style>
