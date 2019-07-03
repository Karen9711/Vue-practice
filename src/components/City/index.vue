<template lang="html">
  <div id="city">
    <div class="city-detail">
      <div class="hotCity">
        <div class="title">
          热门城市
        </div>
        <div class="content">
          成都   成都  成都
        </div>
      </div>
      <div class="normalCity">
        <ul>
          <li>
            <div class="title">
              A
            </div>
            <ul class="city-list">
              <li>鞍山</li>
              <li>鞍山</li>
              <li>鞍山</li>
              <li>鞍山</li>
            </ul>
          </li>
          <li>
            <div class="title">
              A
            </div>
            <ul class="city-list">
              <li>鞍山</li>
              <li>鞍山</li>
              <li>鞍山</li>
              <li>鞍山</li>
            </ul>
          </li>
          <li>
            <div class="title">
              A
            </div>
            <ul class="city-list">
              <li>鞍山</li>
              <li>鞍山</li>
              <li>鞍山</li>
              <li>鞍山</li>
            </ul>
          </li>
          <li>
            <div class="title">
              A
            </div>
            <ul class="city-list">
              <li>鞍山</li>
              <li>鞍山</li>
              <li>鞍山</li>
              <li>鞍山</li>
            </ul>
          </li>
          <li>
            <div class="title">
              A
            </div>
            <ul class="city-list">
              <li>鞍山</li>
              <li>鞍山</li>
              <li>鞍山</li>
              <li>鞍山</li>
            </ul>
          </li>
          <li>
            <div class="title">
              A
            </div>
            <ul class="city-list">
              <li>鞍山</li>
              <li>鞍山</li>
              <li>鞍山</li>
              <li>鞍山</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="sideBar">
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
#city
{
  margin-top:7em;
  margin-bottom: 5em;
  font-size: 14px;
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
}
.title
{
  background-color: #eeeeee;
  line-height: 2em;
}
.city-list li
{
  padding: 3px;
}
</style>
