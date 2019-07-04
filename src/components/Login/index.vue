<template lang="html">
  <div id="login">
    <div class="account-box">
      <input type="text" name="account" value="" placeholder="账户名/手机号/Email">
    </div>
    <div class="password-box">
      <input type="password" name="password" value="" placeholder="请输入您的密码">
    </div>
    <button type="submit" name="login">登录</button>
    <div class="others">
      <a id="signin" href="#">立即注册</a>
      <a id="findPassword" href="#">找回密码</a>
    </div>
  </div>
</template>

<script>
export default {
  name:'Login'
}
</script>

<style lang="css" scoped>
#login
{
  margin-top: 4em;
  margin-bottom: 5em;
}
#login .account-box,#login .password-box
{
  width: 100%;
}
#login .account-box input,#login .password-box input
{
  width: 98%;
  font-size: 16px;
  height: 3em;
  border:1px solid #eeeeee;
  margin:3px;
  transition-property: box-shadow;
  transition-duration: 300ms;
}
#login .account-box input:focus,#login .password-box input:focus
{
  box-shadow: 0 0 5px 2px rgb(255, 188, 74);
}
#login button[name="login"]
{
  display: block;
  width: 98%;
  margin:0 auto;
  font-size: 16px;
  line-height: 3em;
  border:0;
  background-color: #d65a31;
  outline:none;
  border-radius: 10px;
  color:#fff;
  margin-top:10px;
  transition-property: all;
  transition-duration: 200ms;
}
#login button[name="login"]:active
{
  background-color: rgba(214, 90, 49, 0.55);
}

#login div.others a
{
  color:#d65a31;
  margin-top:8px;
  font-size: 14px;
  display: inline-block;
  width: 49%;
  transition-property: all;
  transition-duration: 300ms;
}
#login div.others a#findPassword
{
  text-align: right;
}
#login div.others a:active
{
  color:rgb(255, 156, 0);
}
</style>
