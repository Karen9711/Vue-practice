<template lang="html">
  <div id="cinema-list">
    <ul>
      <li v-for = "cinema in cinemaList">
        <div class="title">
          <span class="cinema-name">{{cinema.nm}}</span>
          <span class="priceInfo"> <span class="price">{{cinema.sellPrice}}</span>元起 </span>
        </div>
        <div class="address">
          <span>{{cinema.addr}}</span>
          <span class="distance">{{cinema.distance}}</span>
        </div>
        <div class="card">
          <div v-show="false">小吃</div>
          <template v-for="(num,key) in cinema.tag">
            <div v-show="num===1">{{key | formatCard(key)}}</div>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from '../../libs/util.js'
export default {
  data(){
    return {
      cinemaList:[],
    }
  },
  mounted(){
    $.ajax.get('cinemaList?cityId=10').then(res=>{
      console.log(res);
      if(res.msg === 'ok'){
        this.cinemaList = res.data.cinemas;
      }
    })
  },
  filters:{
    formatCard(key){
      var card = [
        {key:'allowRefund',value:'改签'},
        {key:'buyout',value:'改签'},
        {key:'cityCardTag',value:'改签'},
        {key:'deal',value:'改签'},
        {key:'endorse',value:'退'},
        {key:'hallTypeVOList',value:'改签'},
        {key:'sell',value:'折扣'},
        {key:'endorse',value:'退'},
        {key:'snack',value:'小吃卡'},
        {key:'vipTag',value:'折扣卡'},
      ];
      for(var i = 0 ; i< card.length;i++){
        if(key === card[i].key){
          return card[i].value;
        }
      }
      return '';
    }
  }
}
</script>

<style lang="css" scoped>
#cinema-list
{
  margin-top:7em;
  margin-bottom: 5em;
  font-size: 14px;
}
#cinema-list li
{
  padding: 10px;
  border-bottom: 1px solid #eeeeee;
  font-size: 15px;
  width:100%;
}
#cinema-list .title,#cinema-list .address,#cinema-list .card
{
  margin-bottom: 5px;
}
#cinema-list .title
{
  width: 100%;
}
#cinema-list .title .cinema-name
{
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  width: 76%;
}
#cinema-list .title .priceInfo
{
  color:#d65a31;
  width: 20%;
  font-size: 14px;
  display: inline-block;
  text-align:left;
}
#cinema-list .title .priceInfo .price
{
  font-size: 16px;
}
#cinema-list .address span
{
  display: inline-block;
  width:70%;
}
#cinema-list .address span.distance
{
  display: inline-block;
  width:20%;
  text-align: right;
  font-size: 14px;
}
#cinema-list .card div
{
  display: inline-block;
  font-size: 12px;
  border:1px solid #ffab00;
  color: #ffab00;
  padding: 0px 2px;
  border-radius: 5px;
  margin-right:5px;
}
</style>
