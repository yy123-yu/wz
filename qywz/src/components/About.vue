<template>
  <div class="news">
    <div class="newsbg">
      <h1>新闻资讯</h1>
      <p>追求艺术与商业的结合</p>
    </div>
    <div class="newcontent">
      <!-- <div class="newtit">
 </div> -->
<!-- 新闻内容 -->
<div class="connew">
  <div class="wow animate__animated animate__fadeIn animate__delay-0.7s">
    <div class="card" >
      <div v-for="(item,index) in newList" :key="index" class="cardimg">
       <div>
        <el-divider></el-divider>
        <a href="#">{{item.title}}</a>
        <img :src="item.src" >
        <el-divider></el-divider>
        <p >{{item.word}}</p>
      </div>
    </div>
      <div></div>
    </div>
  </div>
</div>
<div class="page">
<el-pagination
  background
  layout="prev, pager, next"
  :total="100">
</el-pagination></div>
    </div>
<Footer></Footer>
  </div>
</template>
<script>
import { WOW } from 'wowjs'
export default {
data(){
  return{
    newList:[
    {
          "id":1,
          "src":require("../assets/img/img15.jpg") ,
          "title":"贴近客户，打造优质服务现场",
          "word":"客户是企业生存的根本，也是企业持续发展的保障，在当前严峻的市场情况下，服务的好坏同产品的质量一样，关乎着企业的发展。作为公司的窗口岗位，营销中心更是服务的第一现..."
        },
        {
          "id":2,
          "src":require("../assets/img/img8.jpg") ,
          "title":"让时间停留在相片里 这种方法才是你所需要的",
        "word":"如今的生活也是越来越丰富，周边的环境也变得多姿多彩，很多时候人们总是想要去留下这非常美好的一瞬间，说到这里不得不说的就是，时下人们都喜欢中的一个物品那就是手机或者..."
        },
        {
          "id":3,
          "src":require("../assets/img/img4.jpg") ,
          "title":"如何提升风光摄影作品的情感表现力",
          "word":"风光摄影 作为一种艺术形式，不是机械地记录景观，也不是客观还原场景，而是人与自然独特的对话方式，用艺术的角度阐述自身对大自然的感悟。摄影作品只有当它承载了人类的精神..."
        },
        {
          "id":4,
          "src":require("../assets/img/img2.jpg") ,
          "title":"心理案例：改变自己 改变未来",
          "word":"梦想这东西，如果做不到养家糊口，那么他就仅仅只是梦想而已。 最近接到一个案例，是一位年轻有为的小伙子（至少在我看来是的），感觉自己失去了目标，连养家糊口都成问题了，..."
        },
        {
          "id":5,
          "src":require("../assets/img/img21.jpg") ,
          "title":"4个拍摄美食常用的构图技巧|美食摄影",
          "word":"拍人像有构图法则，拍美食同样也有构图法则。今天小编告诉大家，4个拍摄美食常用的构图技巧，让你的食物瞬间变网红。 构图 构图是指拍摄对象在画面中的放置方式,通俗来讲就是拍..."
        },
        {
          "id":6,
          "src":require("../assets/img/img22.jpg") ,
          "title":"户外怎样把产品图片拍摄好",
          "word":"最初进入商业摄影的朋友，对产品拍摄还是比较陌生的。不知如何应用好光线去拍摄产品，怎样可以拍出效果更好的产品，想要拍摄出好的产品图片，不管用闪光灯还是现场灯光还是其..."
        },
         {
          "id":7,
          "src":require("../assets/img/img24.jpg") ,
          "title":"静物拍摄方法技巧",
          "word":"一提到静物，人们就会想到一瓶花，一盘水果，一瓶酒，一块奶酪......而实际上，静物摄影的范围远远超出了这些。一管牙膏是静物，一盒“万宝路”香烟或一盒“凯洛格”爆米花是静物，..."
        }
    ],
    mounted() {
      new WOW().init()
     },
  }
}
}
</script>

<style>
.news{
  /* width: 1500px; */
  margin: 0 auto;
}
.newsbg{
  min-width: 1220px;
    height: 400px;
    overflow: hidden;
    position: relative;
    background-image: url(../assets/img/p1.jpg);
    background-position: center;
    background-repeat:no-repeat;
}
.newsbg h1{
  color: #ececec;
  font-size: 47px;
  position: relative;
  top: 100px;
  left: 42%;font-family: serif;
}
.newsbg p{
  color: #ececec;
  position: relative;
  top: 100px;
  left: 50%;
  font-size: 20px;
  font-family: serif;
}
.newtit{
margin-top: 2%;
width: 200px;
height: 100px;
}
.newtit h2{
margin: 0 auto;
}
/* 新闻内容 */
.newcontent{
  margin: auto;
  width: 1200px;
}
.newcontent h2{
  margin-left: 9%;
}
/* 单张图片样式 */
.newcontent img{
width: 250px;
height: 190px;
margin: 0 auto;
/* transition: all 1s ease; */
}
/* .newcontent img:hover{
  transform: scale(1.1);
} */
/* 新闻卡片 */
.card{
  width: 1000px; 
  height: 1600px;
  margin: 0 auto;
/* display: flex; */
margin-top: 2%;
}
.card a{
  display: block;
  position: absolute;
    left: 20%;
    margin-left: 20%;
    margin-top: 20px;
    font-size: 18px;
    color: #6f6f6f;
}
.card a:hover{
 color: rgb(65, 93, 151);
}
.card p{
  width: 500px;
  position: absolute;
    left: 20%;
    margin-left: 20%;
    margin-top: -120px;
    font-size: 13px;
}
.cardimg{
  margin-top: 2%;

}
.cardimg:hover{
  background: #ececec;

}
/* 分页 */
.el-divider{
  width: 1000px;
  margin: 0 auto;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #3c3c3c;
}
.page{
  height: 100px;
margin-left: 31%;
}
.connew{
  margin-top: 100px;
}
</style>