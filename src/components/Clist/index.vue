<template lang="html">
  <div id="cinema-list">
    <ul>
      <li>
        <div class="title">
          <span class="cinema-name">XX影院</span>
          <span class="priceInfo"> <span class="price">XX</span>元起 </span>
        </div>
        <div class="address">
          <span>XXXXX大厦三层</span>
          <span class="distance">XXX km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div class>折扣卡</div>
        </div>
      </li>

      <li>
        <div class="title">
          <span class="cinema-name">XX影院</span>
          <span class="priceInfo"> <span class="price">XX</span>元起 </span>
        </div>
        <div class="address">
          <span>XXXXX大厦三层</span>
          <span class="distance">XXX km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div class>折扣卡</div>
        </div>
      </li>

      <li>
        <div class="title">
          <span class="cinema-name">XX影院</span>
          <span class="priceInfo"> <span class="price">XX</span>元起 </span>
        </div>
        <div class="address">
          <span>XXXXX大厦三层</span>
          <span class="distance">XXX km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div class>折扣卡</div>
        </div>
      </li>

      <li>
        <div class="title">
          <span class="cinema-name">XX影院</span>
          <span class="priceInfo"> <span class="price">XX</span>元起 </span>
        </div>
        <div class="address">
          <span>XXXXX大厦三层</span>
          <span class="distance">XXX km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div class>折扣卡</div>
        </div>
      </li>

      <li>
        <div class="title">
          <span class="cinema-name">XX影院</span>
          <span class="priceInfo"> <span class="price">XX</span>元起 </span>
        </div>
        <div class="address">
          <span>XXXXX大厦三层</span>
          <span class="distance">XXX km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div class>折扣卡</div>
        </div>
      </li>

      <li>
        <div class="title">
          <span class="cinema-name">XX影院</span>
          <span class="priceInfo"> <span class="price">XX</span>元起 </span>
        </div>
        <div class="address">
          <span>XXXXX大厦三层</span>
          <span class="distance">XXX km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div class>折扣卡</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
  width: 20%;
}
#cinema-list .title .priceInfo
{
  color:#d65a31;
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
  width:40%;
}
#cinema-list .address span.distance
{
  display: inline-block;
  width:55%;
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
}
</style>
