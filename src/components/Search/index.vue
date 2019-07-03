<template lang="html">
  <div id="search">
    <div class="search-box">
      <div class="search-sign">
        <Icon type="md-search" size="25" color="#3c4757" />
      </div>
      <div class="search-input">
          <input type="text" name="" value="" placeholder="请输入查找内容">
      </div>
    </div>
    <div class="search-result">
      <h3>电影/电视剧/综艺</h3>
      <ul class="search-list">
        <li>
          <div class="movie-pic">
            <img src="@/assets/images/sample.jpg" alt="电影图片">
          </div>
          <div class="movie-info">
            <h2>
              电影名
            </h2>
            <p>XXXXXX</p>
            <p>分类</p>
            <p>2019-01-01</p>
          </div>
          <div class="movie-grade">
            8.5
          </div>
        </li>

        <li>
          <div class="movie-pic">
            <img src="@/assets/images/sample.jpg" alt="电影图片">
          </div>
          <div class="movie-info">
            <h2>
              电影名
            </h2>
            <p>XXXXXX</p>
            <p>分类</p>
            <p>2019-01-01</p>
          </div>
          <div class="movie-grade">
            8.5
          </div>
        </li>

        <li>
          <div class="movie-pic">
            <img src="@/assets/images/sample.jpg" alt="电影图片">
          </div>
          <div class="movie-info">
            <h2>
              电影名
            </h2>
            <p>XXXXXX</p>
            <p>分类</p>
            <p>2019-01-01</p>
          </div>
          <div class="movie-grade">
            8.5
          </div>
        </li>

        <li>
          <div class="movie-pic">
            <img src="@/assets/images/sample.jpg" alt="电影图片">
          </div>
          <div class="movie-info">
            <h2>
              电影名
            </h2>
            <p>XXXXXX</p>
            <p>分类</p>
            <p>2019-01-01</p>
          </div>
          <div class="movie-grade">
            8.5
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
#search
{
  margin-top: 7em;
  margin-bottom: 5em;
}
#search .search-box
{
  padding: 20px 15px;
  background-color: #eeeeee;
}
#search .search-box .search-sign,#search .search-box .search-input
{
  display: inline-block;

}
#search .search-box .search-sign
{
  width: 25px;
  position: absolute;
  right:14%;
  z-index: 3;
}
#search .search-box .search-input
{
  width: 80%;
  outline: none;
  box-shadow: none;
  margin-left:10%;
}
#search .search-box .search-input input
{
  font-size: 14px;
  height: 2em;
  border:1px solid #eeeeee;
  border-radius: 10px;
  transition-property: all;
  transition-duration: 300ms;
}
#search .search-box .search-input input:focus
{
  font-size: 14px;
  height: 2em;
  /* border:1px solid #d65a31; */
  border-radius: 10px;
  outline: none;
  box-shadow: 0 0 5px 2px rgba(214, 90, 49, 0.68);
}
#search li
{
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 5px;
  border-bottom: 1px solid #eeeeee;
}
#search .movie-pic,#search .movie-info,#search .movie-grade
{
  display: inline-block;
}
#search .movie-pic
{
  width:20%;
}
,#search .movie-pic img
{
  width: 100%;
}
#search .movie-info
{
  width: 50%;
  height:100%;
  margin-left:5px;
}
#search .movie-info h2
{
  font-size: 18px;
}
#search .movie-info p
{
  font-size: 14px;
  padding-bottom: 3px;
}
#search .search-result h3
{
  padding: 10px;
  color: #393e46;
  margin-bottom: 5px;
  border-bottom: 1px solid #eeeeee;
}
#search .movie-grade
{
  width: 20%;
  color:#d65a31;
  font-size: 20px;
}
</style>
