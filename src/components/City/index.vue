<template lang="html">
  <div id="city">
    <div class="city-detail">
      <div class="hotCity">
        <div class="title">
          热门城市
        </div>
        <div class="content">
          <button type="button" name="button">成都</button>
          <button type="button" name="button">北京</button>
          <button type="button" name="button">上海</button>
          <button type="button" name="button">成都</button>
          <button type="button" name="button">成都</button>
          <button type="button" name="button">成都</button>
          <button type="button" name="button">成都</button>
          <button type="button" name="button">成都</button>
          <button type="button" name="button">成都</button>
          <button type="button" name="button">成都</button>
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
