<template lang="html">
  <div id="city">
    <div class="city-detail">
      <div class="hotCity">
        <div class="title">
          热门城市
        </div>
        <div class="content">
          <button type="button" name="button" v-for="hotCity in hotCityList">{{hotCity.nm}}</button>
        </div>
      </div>
      <div class="normalCity"  ref="city_sort">
        <ul>
          <template v-for="city in cityList">
            <li>
              <div class="title">
                {{city.index}}
              </div>
              <ul class="city-list">
                <li v-for="item in city.list">{{item.nm}}</li>
              </ul>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="sideBar">
      <ul>
        <li v-for="(city,index) in cityList" :key="city.index" @touchstart="handleToIndex(index)">{{city.index}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from '../../libs/util.js'
export default {
  name:'City',
  data(){
    return {
      cityList:[],
      hotCityList:[]
    }
  },
  mounted(){
      $.ajax.get('cityList').then(res => {
        if (res.msg === 'ok') {
          var cities = res.data.cities;
          // console.log(cities);
          var {cityList,hotCityList}=this.formatCities(cities);
          this.cityList = cityList;
          this.hotCityList = hotCityList;
        }
    })
  },
  methods:{
    handleToIndex(index){
      var title = this.$refs.city_sort.getElementsByClassName('title');
      document.documentElement.scrollTop = title[index].offsetTop - 7*14;
    },
    formatCities(cities){
      var cityList = [];
      // [{index:'A',list:[{nm:'qaa',id:''}]}]结构
      var hotCityList = [];
      for(var i=0;i<cities.length;i++){
        var firstLetter = cities[i].py.substring(0,1).toUpperCase();
        if(cities[i].isHot===1){
          hotCityList.push(cities[i]);
        }

        if(toCom(firstLetter)){//如果还不存在这个index值，新添加
          cityList.push({index:firstLetter,list:[{nm:cities[i].nm,id:cities[i].id}]})
        }
        else{//如果已经存在，累加
          for(var j = 0; j < cityList.length ; j++){
            if(cityList[j].index === firstLetter){
              cityList[j].list.push({nm:cities[i].nm,id:cities[i].id})
            }
          }
        }
      }
      cityList.sort((n1,n2)=>{
        if(n1.index > n2.index){
          return 1;
        }
        else if(n1.index < n2.index){
          return -1;
        }
        else{
          return 0;
        }
      });

      // console.log(cityList);
      // console.log(hotCityList);
      function toCom(firstLetter){
        for(var i=0 ;i<cityList.length;i++){
          if(firstLetter === cityList[i].index){
            return false;
          }
        }
        return true;
      }

      return {
        cityList,
        hotCityList
      };
    }

  }
}
</script>

<style lang="css" scoped>
#city
{
  margin-top:7em;
  margin-bottom: 5em;
  font-size: 14px;
  overflow: scroll;
}
#city .city-detail
{
  display: inline-block;
  width: 94%;
}
#city .sideBar
{
  position: fixed;
  display: inline-block;
  width:5%;
  right:0;
  margin-top: 20px;
}
.title
{
  background-color: #eeeeee;
  line-height: 2em;
  padding: 3px;
  font-weight: 700;
}
.city-list li
{
  padding: 3px;
  font-size: 14px;
  margin-bottom: 3px;
  margin-left: 5px;
}
.hotCity .content button
{
  outline: none;
  border:1px solid #eee;
  border-radius: 8px;
  padding: 8px;
  font-style: 14px;
  width: 4em;
  margin: 5px 15px;
  background-color: #fff;
}
.hotCity .content
{
  display: flex;
  flex-wrap:wrap;
  justify-content: flex-start;
  align-items:flex-start;
}
</style>
