<template>
  <div class="footer">
    <div class="footer-alignment">
      <div class="text">
        <h4>2024</h4>
      </div>
      <div class="img">
        <img src="/images/InktFinity_Logo_DEF_OL.png" width="105" height="70"  />
      </div>
    </div>
  </div>
</template>
<style>

.footer{
  padding: 10px;
  width: 100%;
  height: 30px;
  background-color: rgba(80, 76, 118,50%);
  //background-color: rgba(0, 0, 0, 0);
  color: white;
  text-align: center;
}
.footer-alignment{
  display: flex;
  flex-direction: row;
}
.img{
  position: absolute;
  right: 50px;
  bottom: 5px;
}
.text{
  font-family: Arial, sans-serif;
  font-size: larger;
  position: absolute;
  left: 10px;
  bottom: -16px;
}
</style>
<script setup>
</script>