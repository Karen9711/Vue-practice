<template lang="html">
  <div id="now-playing" ref="movie_body">
    <ul>
      <li class="pullDown">{{pullDownMessage}}</li>
      <li v-for="movie in movieList" :key = "movie.id">
        <div class="movie-pic">
          <img :src="movie.img | setWH('190.269')" alt="电影图片" @tap="handleTap">
        </div>
        <div class="movie-info">
          <h3>
            {{movie.nm}}
            <span v-show="movie.version==='v3d imax'"  class="threeD">3D <span class="max">MAX</span> </span>
          </h3>
          <p>观众评分：<span class="sc">{{movie.sc}}</span></p>
          <p>主演：{{movie.star}}</p>
          <p>{{movie.showInfo}}</p>

        </div>
        <div class="buyTicket">
          <button type="button" name="button">购票</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from '../../libs/util.js';
import BScroll from 'better-scroll';
export default {
  name:'NowPlaying',
  data(){
    return {
      movieList:[],
      pullDownMessage:'',
      prevCity:-1
    };
  },

  activated(){
    // console.log(123);
    var cityId = this.$store.state.city.id;
    if(this.prevCity === cityId){ return ;}
    $.ajax.get('movieOnInfoList?cityId=' + cityId).then(res=>{
      var msg = res.msg;
      // console.log(res);
      if(msg==='ok'){
        this.movieList = res.data.movieList;
        this.prevCity = cityId;
        this.$nextTick();//vue自带，保证数据赋值以后，渲染完毕后再往下执行
        var scroll = new BScroll(this.$refs.movie_body,{
          tap:true,
          probeType:1
        });
        scroll.on('scroll',(pos)=>{
          // console.log('scroll');
          this.pullDownMessage = "正在更新数据"
        });
        scroll.on('touchEnd',(pos)=>{
          if(pos.y>30){
            $.ajax.get('movieOnInfoList?cityId=12').then(res => {
              var msg = res.msg;
              if(msg === 'ok'){
                this.pullDownMessage = '更新成功';

                  this.movieList = res.data.movieList;
                  this.pullDownMessage = '';

              }
            })
          }
        })

      }
    })
  },
  methods:{
    handleTap(){
      console.log('tap');
    }
  },
}
</script>

<style lang="css" scoped>
#now-playing
{
  position: absolute;
  top: 8em;
  height:75vh;
}
#now-playing li
{
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 5px;
  border-bottom: 1px solid #eeeeee;
}
#now-playing li.pullDown
{
  border: 0;
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#now-playing .movie-pic,#now-playing .movie-info,#now-playing .buyTicket
{
  display: inline-block;
}
#now-playing .movie-pic
{
  width:20%;
}
,#now-playing .movie-pic img
{
  width: 100%;
}
#now-playing .movie-info
{
  width: 50%;
  height:100%;
  margin-left:5px;
}
#now-playing .movie-info h2
{
  font-size: 18px;
}
#now-playing .movie-info p
{
  font-size: 14px;
  padding-bottom: 3px;
}
#now-playing span.sc
{
  color:rgb(255, 161, 0);
}
#now-playing .buyTicket
{
  width: 16%;
}
.buyTicket button
{
  padding: 3px;
  outline: none;
  background-color: #d65a31;
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
