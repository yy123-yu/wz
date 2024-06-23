<template>   
<div class="box1">
    <nav> 
  <a class="title1" href="../components/shouye.vue">Iridescent</a>
 <li><a href="../components/shouye.vue">首页</a></li>
 <!-- components/shouye.vue#/home -->
 <li><a href="#" @click="Home">关于我们</a></li>
  <li><a href="#" @click="Anli">案例相关</a></li>
  <li><a href="#" @click="About">新闻资讯</a></li>
    <!-- <li><a href="#" @click="Responsibility">服务中心</a></li> -->
    <li><a href="#" @click="Contact">联系我们</a></li>

</nav></div>
</template> 

<script>

export default {
methods:{
  Home(){
this.$router.push({path:'/home'});
  },
  Anli(){
    this.$router.push({path:"/anli"})
  },
  About(){
this.$router.push({path:'/about'});
  },
  Contact(){
    this.$router.push({path:'/contact'})
  },
  Responsibility(){
    this.$router.push({path:"/responsibility"})
  }
}

}
</script>

<style lang="scss">
// .el-menu{
//   line-height:0;
//   .el-menu-item:hover {
//           color: white !important;
//           background-color: rgb(0, 0, 0) !important;
//         }
// }
// .el-menu-item.is-active {
//           border-bottom: 0 !important;
//         }
       // 水平时，去除底部白边。 
// .el-menu.el-menu--horizontal {
//   border-bottom: 0;
// }


.title1{
  position: relative;
  left: -10%;
  font-size: 26px;
  text-shadow: rgb(170, 170, 170) 0 1px 0; 
  line-height: 60px;
  font-weight:bold;
  color: #000;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.title1:hover{
  color: rgb(107, 107, 107);
}
a{
text-decoration: none;
}

.box1{
  // margin-left: 510px;   
  height: 60px; 
              
}

nav {
  background-color: #ffffff;
  color: #000000;
  display:flex;
  justify-content: center;
line-height: 60px;
}

// nav ul {
//   display: flex;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// }
nav li {
  list-style: none;
  display: block;
  margin-left: 20px;
// padding-left: px;
}

li a {
  display: block;
   height: 60px;
width: 70px;
text-align: center;
  color: #000000;
  text-decoration: none;
  font-size: 15px;
  
}
li a:hover {
 background-color: #000;
  color: #ffffff;
  
}

</style>