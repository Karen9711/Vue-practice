<template lang="html">
  <div id="now-playing">
    <ul>
      <li>
        <div class="movie-pic">
          <img src="@/assets/images/sample.jpg" alt="电影图片">
        </div>
        <div class="movie-info">
          <h2>
            电影名
            <span v-show="true" class="threeD">3D <span class="max">MAX</span> </span>
          </h2>
          <p>观众评分</p>
          <p>主演</p>
          <p>今天XXxv家电影院放映XX场</p>

        </div>
        <div class="buyTicket">
          <button type="button" name="button">购票</button>
        </div>
      </li>
      <li>
        <div class="movie-pic">
          <img src="@/assets/images/sample.jpg" alt="电影图片">
        </div>
        <div class="movie-info">
          <h2>
            电影名
            <span v-show="true" class="threeD">3D <span class="max">MAX</span> </span>
          </h2>
          <p>观众评分</p>
          <p>主演</p>
          <p>今天XXxv家电影院放映XX场</p>

        </div>
        <div class="buyTicket">
          <button type="button" name="button">购票</button>
        </div>
      </li>
      <li>
        <div class="movie-pic">
          <img src="@/assets/images/sample.jpg" alt="电影图片">
        </div>
        <div class="movie-info">
          <h2>
            电影名
            <span v-show="true" class="threeD">3D <span class="max">MAX</span> </span>
          </h2>
          <p>观众评分</p>
          <p>主演</p>
          <p>今天XXxv家电影院放映XX场</p>

        </div>
        <div class="buyTicket">
          <button type="button" name="button">购票</button>
        </div>
      </li>
      <li>
        <div class="movie-pic">
          <img src="@/assets/images/sample.jpg" alt="电影图片">
        </div>
        <div class="movie-info">
          <h2>
            电影名
            <span v-show="true" class="threeD">3D <span class="max">MAX</span> </span>
          </h2>
          <p>观众评分</p>
          <p>主演</p>
          <p>今天XXxv家电影院放映XX场</p>

        </div>
        <div class="buyTicket">
          <button type="button" name="button">购票</button>
        </div>
      </li>
      <li>
        <div class="movie-pic">
          <img src="@/assets/images/sample.jpg" alt="电影图片">
        </div>
        <div class="movie-info">
          <h2>
            电影名
            <span v-show="true" class="threeD">3D <span class="max">MAX</span> </span>
          </h2>
          <p>观众评分</p>
          <p>主演</p>
          <p>今天XXxv家电影院放映XX场</p>

        </div>
        <div class="buyTicket">
          <button type="button" name="button">购票</button>
        </div>
      </li>
      <li>
        <div class="movie-pic">
          <img src="@/assets/images/sample.jpg" alt="电影图片">
        </div>
        <div class="movie-info">
          <h2>
            电影名
            <span v-show="true" class="threeD">3D <span class="max">MAX</span> </span>
          </h2>
          <p>观众评分</p>
          <p>主演</p>
          <p>今天XXxv家电影院放映XX场</p>

        </div>
        <div class="buyTicket">
          <button type="button" name="button">购票</button>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name:'NowPlaying',
}
</script>

<style lang="css" scoped>
#now-playing
{
  margin-top: 8em;
  margin-bottom: 5em;
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
#now-playing .buyTicket
{
  width: 20%;
}
.buyTicket button
{
  padding: 5px;
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
