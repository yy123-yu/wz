<template>
  <div>
    <div class="titzhan">
     <div class="titwen"><i>作品展示</i>
     <h4>Display of works</h4></div>
    </div>
     <div class="contazhan" >
    <div class="images" >
      <div v-for="(item, index) in info" :key="index" class="image-middle">  
        <el-card shadow="hover" :body-style="{ padding: '10px' }">   <div >
          <div class="imgkuang">
          <el-image  :src="info[index].src"  class="image" :preview-src-list="info[index].srcList"></el-image>
        </div>
        </div>
          <div style="text-align:center;padding-top:12px">
        <span class="wow animate__animated animate__fadeIn animate__delay-1s">{{info[index].name}}</span> 
        </div>      
        </el-card> 
   </div>
  </div>   
  </div>
  <!-- <div>
  <el-backtop></el-backtop>
      </div> -->
  <Footer></Footer>
 
   </div>
</template>
<script>
import { WOW } from 'wowjs'
export default {
  data() {
    return {
      info:[
        {
          "id":1,
          "name":"userHead",
          "src":require("../assets/img/img1.jpg") ,
          "srcList":[require("../assets/img/img1.jpg"),
          require("../assets/img/img2.jpg"),
          require("../assets/img/img3.jpg")]
        },
        {
          "id":2,
          "name":"user",
          "src":require("../assets/img/img4.jpg") ,
          "srcList":[require("../assets/img/img4.jpg"),
          require("../assets/img/img5.jpg"),
          require("../assets/img/img6.jpg")]
        },
        {
          "id":3,
          "name":"haha",
          "src":require("../assets/img/img7.jpg") ,
          "srcList":[require("../assets/img/img7.jpg"),
          require("../assets/img/img8.jpg")]
        },
        {
          "id":4,
          "name":"astronaut",
          "src":require("../assets/img/img9.jpg") ,
          "srcList":[require("../assets/img/img9.jpg")]
        },
        {
          "id":5,
          "name":"build",
          "src":require("../assets/img/img10.jpg") ,
          "srcList":[require("../assets/img/img10.jpg")]
        },
        {
          "id":6,
          "name":"custom",
          "src":require("../assets/img/img12.jpg") ,
          "srcList":[require("../assets/img/img12.jpg")]
        },
         {
          "id":7,
          "name":"sea",
          "src":require("../assets/img/img13.jpg") ,
          "srcList":[require("../assets/img/img13.jpg")]
        },
         {
          "id":8,
          "name":"tree",
          "src":require("../assets/img/img17.jpg") ,
          "srcList":[require("../assets/img/img17.jpg")]
        },
         {
          "id":9,
          "name":"Curry",
          "src":require("../assets/img/img15.jpg") ,
          "srcList":[require("../assets/img/img15.jpg")]
        }
      ],
     
    }
  }, mounted() {
        new WOW.WOW().init()
     },
};
</script>
 <style scoped>
 .contazhan{
  width: 1200px;
  height: 1200px;
  margin: auto;
  margin-top: 100px;
 
}
.titzhan{
  text-align: center;
  height: 250px;
  width: 1600px;
  background-image: url(../assets/img/img41.png);
margin:0 auto;
  background-repeat: no-repeat;
  overflow: hidden;
}
.titzhan i{
 font-size: 45px; color:white; font-style: normal; font-family: serif;
 position: relative;
 top: 100px;
 font-weight: bold;
}
.titzhan h4{
  position: relative;
 top: 90px;
 left:50px;
color: white;
font-family: Georgia, 'Times New Roman', Times, serif;
}
 /* “Tissue Search”字体样式 */
 .position {
  margin-left: 15px;
  font-size: 30px;
  font-weight: 600;
}
/* 图片总布局，样式 */
.images{
  display: flex;
  margin-top: 20px;
  margin-left: 21px;
  margin-right: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
/* 图片之间 */
.image-middle{
  margin-right: 15px;
  margin-bottom: 15px;
}
/* 单张图片样式 */
/* .imgkuang{
  width:300px;
  height: 250px;
  overflow: hidden;
} */
.image{
  width:340px;
  height: 250px;
  overflow: hidden;
  transition: all 1s ease-out;
}
.image:hover{
  /* transform: scale3d(1.1, 1.1, 1); */
  transform:scale(1.05);
  opacity: 0.8;
}
.el-card{
  border-radius: 5%;
}
 </style>

