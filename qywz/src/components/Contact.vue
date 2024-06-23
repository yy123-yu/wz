<template>
  <div class="conall">
    <div class="conbg">
    </div>
   <div class="conus">
    <!-- <div class="conusti"> -->
    <h1>联系我们</h1>
    <i>- Contact us</i>
     <div class="contactus">
         <div class="phone">
        <img src="../assets/img/phone.png" alt="">
        <h3>联系电话</h3>
        <p>1112225555</p>
     </div>  
     <div class="qqq">
        <img src="../assets/img/qq.png" alt="">
        <h3>QQ在线</h3>
      <p>12345678</p>
      </div>              
     <div class="email">
        <img src="../assets/img/email.png" alt="">
        <h3>发送邮件</h3>
      <p>12345678@qq.com</p>
      </div>
      
      
  </div>
    </div>
<div class="address">
  <img src="../assets/img/address.png" alt="">
  <div class="address1">
<p>热线电话：
020-00000000</p><p>
工作时间：
周一到周五09:00-18:00</p><p>
办公地址：
XXX市XXXX区XXX大道XX号</p></div>
</div>
  <Footer></Footer>
</div> 

</template>

<script>
export default {

}
</script>

<style>
.conall{
    margin: 0;
    padding: 0;

}
.conus h3{
  text-align: center;
margin-top:10px ;
}
.conus{
  height: 380px;
  margin-top: 5%;
 
}
.conus h1{
  text-align: center;
  margin: 0;
  font-size: 30px;

}
.conus p{
width: 400px;
  text-indent: 2em;
 font-size: 16px;
 text-align: justify;
margin:auto;
margin-top: 20px;

}
.conus i{
  display: block;
  margin-left: 50%;
  padding-top: 12px;
  padding-bottom: 30px;
  font-style: normal;
  color: #a3a3a3;
}
.conbg{
  height: 300px;
    width: 100vw;
    background-image: url(../assets/img/p2.jpg);
    background-repeat:no-repeat;
    background-position: center;
}
.contactus{
    display: flex;
    justify-content: center;
 
}
.contactus img{
    height: 100px;
    width: 100px;
margin-left: 38%;
}
.contactus h3{
text-align: center;
margin: 0 auto;
}
.contactus p{
  text-align: center;
  margin-left: -4%;
  }
.phone img:hover{
    content: url(../assets/img/phone1.png);
  }
.address {
text-align: center;
height: 600px;
background: #efefef;
}
.address img{
  width: 650px;
  height: 400px;
  margin-left: -450px;
  margin-top: 100px;
}
.address1{
  position: relative;
  top: -300px;
  left: 350px;
}
</style>