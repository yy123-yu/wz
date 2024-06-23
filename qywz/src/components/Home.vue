<template>
  <div class="box">
<div class="block">
  <!-- 轮播图 -->
    <el-carousel height="400px">
      <el-carousel-item v-for="(item,index) in bannerList" :key="index">
            <img :src="item.url">
      </el-carousel-item>
    </el-carousel>
  </div>
  <!-- 内容 -->
  <div class="content">
    <div class="con1"><div class="wow animate__fadeInLeftBig" data-wow-duration="0.8s" data-wow-delay="0.5s">
  <div class="pho1"><img src="../assets/img/img33.jpg"></div>
</div> 
      <div class="conta">
      <h2 class="theme">我们做的一件事提升视觉效果</h2>
      <p class="theme1">ABOUT -enhance visual effects</p><i></i>
<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
  <div class="concon">
  <p class="conn">
              In the flood of darkness, hope is the light. It brings comfort,
              faith, and confidence. It gives us guidance when we are lost, and
              gives support when we are afraid. And the moment we give up hope,
              we give up our lives. The world we live in is disintegrating into
              a place of malice and hatred, where we need hope and find it
              harder. In this world of fear, hope to find better, but easier
              said than done, the more meaningful life of faith will make life
              meaningful.
  </p></div></div></div>
  
  </div>
<div class="con2">
<div class="wow fadeInUp" data-wow-duration="1.1s" data-wow-delay="1.3s">
<div class="quan">
<div class="box2">
  <img src="../assets/img/img29.jpg">
<p class="wow animate__fadeInLeftBig" data-wow-duration="1s" data-wow-delay="1s">We provide door-to-door photography services and a complete set of photography services, suitable for babies at full moon, family photos, etc.</p>
</div>
<div class="box3">
  <img src="../assets/img/img32.jpg">
  <p class="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="1.3s">
    We have established long-term cooperative relationships with multiple e-commerce platforms and can provide modeling and other services.</p>
</div>
<div class="box4">
    <img src="../assets/img/img35.jpg" > 
    <p class="wow animate__fadeInRightBig" data-wow-duration="1s" data-wow-delay="1s">
      We have specially launched travel tracking services for couples, friends, family, and others to ensure original creativity. 
  </p>
</div>
</div></div>
  </div>
  <div class="con3">
    <h2>Our Services</h2>
    <i>-Business Finance</i>
  <p class="wow animate__fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">In the flood of darkness, hope is the light. It brings comfort,
              faith, and confidence. It gives us guidance when we are lost, and
              gives support when we are afraid. And the moment we give up hope,
              we give up our lives. The world we live in is disintegrating into
              a place of malice and hatred, where we need hope and find it
              harder. In this world of fear, hope to find better, but easier
              said than done, the more meaningful life of faith will make life
              meaningful.</p>
  </div>
  <div class="con4">
    <img src="../assets/img/img43.png" class="wow animate__fadeIn" data-wow-duration="0.8s" data-wow-delay="0.5s">
    <div class="conwen">
    <h1>精英团队</h1>
<i>ELITE GROWTH TEAM</i>
    <p class="wow animate__fadeInRight" data-wow-duration="1s" data-wow-delay="1s">
我们的团队成员不追求数量、追求质量 。我们经验丰富并且专业，我们之间合作时就好像一个人，协同一致毫无保留。
我们珍视想法，同时也看重过程转化带来的冲击力和影响力，在我们眼中，任何细节都不容小觑。</p>
</div></div>
</div>
 <Footer></Footer>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: "Home",
  data() {
    return {
      bannerList:[{
        id:0,
        url:require("../assets/img/p1.jpg")
      },
     { id:1,
        url:require("../assets/img/p2.jpg")
    },
      {id:2,
        url:require("../assets/img/p3.jpg")}
      
      ]
    }
  },
  mounted() {
        var wow = new WOW({
        boxClass: "wow",    //需要执行动画的元素的 class
        animateClass: "animated", // animation.css 动画的 class
        offset: 0, // 距离可视区域多少开始执行动画
        mobile: true, // 是否在移动设备上执行动画
        live: true // 异步加载的内容是否有效
        })
        wow.init();
     },
}
</script>

<style>

.box{
  margin: 0;
padding: 0;
width: 100vw;
  height: 100vh;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
 
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  a{
    text-decoration: none;
  }

  .con1{
    height: 500px;
width: 100vw;
background: #ffffff;
display: flex;
justify-content: center;
  }
  .theme{
   text-align: center;
   margin-top: 110px;
  }
  .theme1{
    text-align: center;
    font-weight: bolder;
    font-size: 15px;
    margin-bottom: 52px;
    color: #a3a3a3;
    font-style: italic;
    font-style: normal;
  }
  .conta{
   margin-left: 150px;
   /* margin-top: 120px; */
  }
  .conn{
  text-indent: 2em;
 font-size: 16px;
 margin-top: -30px;
  }
  .concon{
    height: 300px;
    width: 600px; 
    text-align: justify;
margin:auto; 

  }
.pho1{
position: relative;
left: 15%;
top: 15%;
height: 300px;
width: 300px;
background: url(../assets/img/p3.jpg) no-repeat;
overflow: hidden;
background-size: 100% 100%;
border-radius: 50%;
}

  .con2{
    height: 500px;
width: 100vw;
    background: #efefef;
    /* display:flex;
    justify-content:center; */
  }
  .quan{
    display:flex;
    justify-content:center;
  /* margin-top: 50px; */
  }
  .box2{
margin-top: 40px;
height: 250px;
  width: 250px;
    /* float: left; */
    /* background: url(../assets/img/p3.jpg); */
}
.box3{
  height: 250px;
  width: 250px;
  /* background-image: url(../assets/img/p2.jpg);
  border-radius: 50%; */
  margin-top: 40px;
  margin-left: 100px;
  
}
.box4{
  height: 250px;
  width: 250px;
  /* background-image: url(../assets/img/p3.jpg);
  border-radius: 50%; */
  margin-top: 40px;
  margin-left: 100px;
}
.con3{
  height: 500px;
   width: 100%;
/* background-image: url(../assets/img/img44.png);
background-position:0; */

}
img{
height: 100%;
    width: 100%;
    object-fit: cover;
    /* 调整替换内容的大小，以在填充元素的整个内容框时保持其长宽比。该对象将被裁剪以适应。 */
}
.quan img{
  border-radius: 5%;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}
.quan img:hover{
  transform: scale3d(1.1, 1.1, 1);
}
.con3 h2{
  text-align: center;
  margin: 0;
  padding-top: 100px;
  font-size: 30px;
  }
.con3 p{
  width: 500px;
  text-indent: 2em;
 font-size: 16px;
 text-align: justify;
margin:auto;
margin-top: 17px;
}
.con3 i{
  display: block;
  text-align: center;
  margin: 0;
  margin-top:5px;
  font-size: 15px;
  margin-left: 18%;
  color: #a3a3a3;
  font-style: normal;
}
.con4{
  height: 500px;
  background-image: url(../assets/img/img48.png);
background-position:0 500px;
}
.con4 img{
  width: 400px;
 height: 300px;
 position: relative;
 top: 90px;
 left: 200px;
}
.conwen{
  width: 500px;
  height:300px;
  text-align: justify;
  margin: 0 auto;
  position: relative;
    top: -200px;
    left: 260px;
   
}
.conwen i{
  font-style: normal;
  color: #a3a3a3;
}
.text {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 将文字居中显示 */
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}
</style>
