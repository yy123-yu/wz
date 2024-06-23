<template>
  <div class="boxx"> 
    <Nav></Nav>
    <router-view />
  </div>
</template>
<script>
import { WOW } from 'wowjs'
export default {
  data(){
    return{
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
  }
}
</script>
<style>
.boxx{
	/* width: 100%; */
  min-width: 1200px;
margin: 0 auto;

}
</style>
