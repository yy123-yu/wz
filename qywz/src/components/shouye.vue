<template>
  <div class="full-page" ref="page">
    <div
      class="list"
      ref="container"
      @mousewheel="mouseWheel"
      @DOMMouseScroll="mouseWheel"
    >
      <div class="item red">
        <!-- <h1>Page 1.</h1> -->
        <div class="content">
          <p style="font-size: 35px; color: white; font-family: 'Times New Roman" >Iridescent</p>
<p style="font-size: 35px; color: white;font-family: serif;">自然展现,瞬间永恒。</p>
<i style="font-size: 15px; color: white; font-family: Cursive;font-style: normal;">There are moments that have a certain flavor of eternity</i>
        </div>
      </div>
      <div class="item blue">
        <!-- <h1>Page 2.</h1> -->
        <div class="content">
       <div class="page2">
            <img src="../assets/img/img33.jpg" >
          </div>
            <div class="pageword">

           <h2 style="">提供高端定制化服务</h2>
           <i style="font-size: 10px;font-style: normal;color: rgb(101, 101, 101);">Provide high-end customized services</i>
           <p >以高端定制创作为企业目标，致力于缔造有价值的视觉，为每个客户量身定制更合适的方案，为客户，为生活纪录点滴美好瞬间，深度洞察每一个细节。</p>
           <el-divider></el-divider>
           <h3>企业文化</h3>
         <p>摄影是由多位资深摄影师合力创建的摄影公司具有十余年的摄影经验。多年来，摄影凭着专业的技术、专注的服务态度和高标准的要求....</p></div>
        </div>
      </div>
      <div class="item green">
        <!-- <h1>Page 3.</h1> -->
        <div class="content">
          <div class="greenwen">
<h1>我们的优势</h1>
<el-divider></el-divider>
<p>多年专注品牌视觉系统整合服务</p>
<p >photography|自创始以来，致力于商业摄影，不断为提升品牌视觉形象而努力!在挖掘专属于你品牌的印记，用独特的方式表达品牌活力!为客户创造价值，为自身创造品质！</p>
     </div>  <div class="greenimg"><img src="../assets/img/img27.jpg" style="height: 400px; width: 600px;"></div> 
</div>

      </div>
      <div class="item gray">
        <!-- <h1>Page 4.</h1> -->
        <div class="content">
        <h1 style="color: aliceblue;">合作伙伴</h1>
         <div class="logoimg">
          <ul>
            <li v-for="(item,index) in inforList" :key="index"><img :src="item.src"></li>
          </ul>
         </div>
        </div>
      </div>
    </div>
    <div class="points">
      <div
        v-for="(e, i) in 4"
        class="item"
        :key="e"
        :class="itemIndex === i + 1 ? 'item-act' : ''"
      ></div>
    </div>
  </div>
</template>
<script>
import { WOW } from 'wowjs'
export default {
  name: "FullPageScroll",
  data() {
    return {
      isScroll: false, // 是否能滚动
      itemIndex: 0, // 当前下标
      len: 4, // 总个数
      inforList:[
        { "src":require("../assets/img/service_img2.png")},
        { "src":require("../assets/img/service_img7.png")},
        { "src":require("../assets/img/service_img8.png")},
        { "src":require("../assets/img/service_img9.png")},
        { "src":require("../assets/img/service_img11.png")},
        { "src":require("../assets/img/service_img14.png")},
        { "src":require("../assets/img/service_img13.png")},
        { "src":require("../assets/img/service_img4.png")},
        { "src":require("../assets/img/service_img5.png")},
        { "src":require("../assets/img/service_img10.png")},
    ],
    
    }
    
  }, mounted() {
    new WOW().init()
     },

  methods: {
    handleMove() {
      this.isScroll = true;
      const scrollHeight = this.$refs.page.clientHeight;
      this.$refs.container.style.transform = `translateY(-${
        (this.itemIndex - 1) * scrollHeight
      }px)`;
      setTimeout(() => (this.isScroll = false), 1300); // 防止连续滚动，加延时
    },
    mouseWheel(event) {
      if (this.isScroll) { // 防止连续滚动
        return false;
      }
      if (event.deltaY > 0) {
        if (this.itemIndex === this.len) return; // 最后一个禁止向下滚动
        this.itemIndex += 1;
      } else {
        if (this.itemIndex === 1) return; // 第一个禁止向上滚动
        this.itemIndex -= 1;
      }
      this.handleMove();
    },
  },
  mounted() {
    setTimeout(() => (this.itemIndex += 1), 10); // 初始加一，为了加载第一页动画
  },
};
</script>
<style lang="scss">
.full-page {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  font-family: 'SimSun';
  .list {
    width: 100vw;
    transition: 1s;
    .item {
      height: 100vh;
      transition: 1s all;
      .item-blur {
        opacity: 1 !important;
      }
      &.red {
       
       background-image: url(../assets/img/p1.jpg);
       background-position:0;
        .content {
          width: 1200px;
          margin: 0 auto;
          padding-top: 200px;
          margin-left: 50%;
          .info {
            display: flex;
            align-items: center;
            .avatar {
              width: 80px;
              height: 80px;
              margin-right: 20px;
              background-color: rgba($color: #fff, $alpha: 0.6);
              border-radius: 80px;
              overflow: hidden;
              text-align: center;
              line-height: 80px;
              font-size: 24px;
              color: #999;
              opacity: 0;
              &.avatar-act {
                animation: fadeIn 1s 0s forwards;
              }
            }
            .name {
              font-size: 24px;
              opacity: 0;
              &.name-act {
                animation: fadeIn 1s 0.5s forwards;
              }
            }
          }
          .desc {
            margin-left: 100px;
            font-size: 36px;
            color: white;
            font-weight: bold;
            opacity: 0;
            &.desc-act {
              animation: fadeIn 1s 1s forwards;
            }
          }
        }
      }
      &.blue {
        // background-image: url(../assets/img/p3.jpg);
        // background-position:center;
        .content {
          width: 1200px;
          margin: 0 auto;
          padding-top:100px;
          position: relative;
          .slogan {
         
            height: 80px;
            line-height: 80px;
            text-align: center;
            color: rgba($color: blue, $alpha: 0.5);
            font-size: 38px;
            font-weight: bold;
            opacity: 0;
            &.slogan-act {
              animation: slideRight 0.8s 0.2s forwards;
            }
          }
        }
      }
      &.green {
        // h1 {
        //   color: green;
        // }
        background-image: url(../assets/img/img39.jpg);
        background-position:0;
        .content {
          width: 500px;
          margin: 0 auto;
          padding-top:200px;
          color: white;
.greenwen{
  position: relative;
  left: -300px;
  top: 50px;
}
         
          .post {
            font-size: 16px;
            text-indent: 2rem;
            opacity: 0;
            &.post-act {
              animation: slideDown 0.6s 0.7s forwards;
            }
          }
        }
      }
      &.gray {
        // background-image: url(../assets/img/img47.jpg);
        // background-position:0;
        background: #2b2e35;
        .content {
         text-align: center;
          margin: 0 auto;
          padding-top:100px;
         
        }
      }
    }
  }
  .points {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    .item {
      width: 4px;
      height: 20px;
      margin-bottom: 25px;
      background-color: rgba($color: rgb(122, 122, 122), $alpha: 0.5);
      transition: 1s;
      &.item-act {
        height: 50px;
        background-color: #fff;
      }
    }
  }
}
.logoimg{
  position: relative;
    margin: 0 auto;
    padding: 22px 0;
    width: 1200px;
    height: 300px;
    background-color:rgba(68, 68, 68, 0.2);
}
.logoimg ul{
padding-top: 50px;
overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.logoimg li{
  margin-left: 50px;
}
.page2 img{
position: relative;
top: 80px;
left: -50px;
}
 .pageword{
            width: 400px;
            height: 400px;
            position: absolute;
top: 45%;
right: 5%;
           }    
           .greenimg{
            height: 600px;
            width: 600px;
            position: relative;
            top: -250px;
            left: 300px;
           }
       
</style>