<template>
  <div class="bottom">
    <el-footer>
      <div class="infor">
        <div class="line">
          <p>商务合作</p>
        <div class="infor1">
          <ul>
            <li>商务合作微信</li>
            <li>wansjniaw</li>
          </ul>
          <ul>
            <li>商务合作邮箱</li>
            <li>12345678@qq.com</li>
          </ul>
          <ul>
            <li>广告合作QQ</li>
            <li>12345678</li>
          </ul>
        </div>
        </div>
        <div class="line1">
          <p>客户服务</p>
        </div>
        <div class="line2">
          <p>关注我们</p>
          <img src="../assets/img/111.gif" alt="">
        </div>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {};
</script>
<style>
.infor {
  display: flex;
  width: 1200px;
  height: 200px;
  padding-top: 30px;
justify-content: center;
  color: white;
  position: relative;
  left: 11%;
  margin: 0 auto;
}
.infor1{
  margin-left: -40px;
}
.line {
  width: 400px;
  height: 200px;
 
}
.line1 {
  width: 400px;
  height: 200px;
}
.line2 {
  width: 400px;
  height: 200px;
}
.bottom {
  height: 300px;
  background: #252525;
  /* margin-top: -25px; */
  bottom: 0;
  width: 100%;
  margin: 0 auto;
}
ul{
  list-style: none;
}
li{
  font-size: 13px;
}
.line2 img{
  height: 100px;
  width: 100px;
}
</style>
