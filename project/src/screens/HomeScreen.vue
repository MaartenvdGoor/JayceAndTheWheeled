<script>
import Footer from "@/App.vue";

export default {
  name: "HomeScreen",
  components: {Footer}
}
</script>

<template>
  <div class="header">
    <div class="headerContainer">
      <img alt="Header Image" class="header-image-container" src="../assets/Titel_art_S_v_Loon.png">
    </div>
  </div>
  <div class="main">
    <div class="mainContainer">
      <h3 class="mainText">Welcome to the Ultimate Guide for Jayce and the Wheeled Warriors!</h3>
      <p class="mainText"> Step into a world where classic animation and epic adventures collide. Our website is dedicated to celebrating the timeless charm and excitement of "Jayce and the Wheeled Warriors," a beloved cartoon series from the 1980s.</p>
      <p class="mainText"> Whether you're a longtime fan or discovering the show for the first time, you've found the perfect place to immerse yourself in the rich universe of Jayce and his valiant fight against the monstrous forces of the evil Saw Boss.</p>
      <p class="mainText">Our writers and designers have worked tirelessly to create engaging and informative content. From detailed guides for our character, vehicles and planets, every piece is crafted with care to honor the legacy of the series.</p>
    </div>
  </div>
  <div class="bottom">
    <a href="/characters" class="bottomContainer">
      <img class="image-opacity" src="/images/Jayce/jayce_frame_1.png" height="250px" width="250px"/>
      <p class="centered-text">Characters</p>
    </a>
    <a href="/vehicles" class="bottomContainer">
      <img class="image-opacity" src="/images/vehicles/jayce-render.png" height="250px" width="250px"/>
      <p class="centered-text">Vehicles</p>
    </a>
    <a href="/planets" class="bottomContainer">
      <img class="image-opacity" src="/images/Planets/planet%201.png" height="250px" width="250px"/>
      <p class="centered-text">Planets</p>
    </a>
  </div>
</template>

<style scoped>
a{
  text-decoration: none;
  color: black;
}

*{
  font-family: Arial, sans-serif;
}

.header-image-container{
  max-height: 150px;
  height: auto;
  max-width: 900px;
  width: auto;
}

.headerContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  max-width: 800px;
  max-height: 120px;
  height: auto;
  width: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}

.mainContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 10px;
  width: 760px;
  max-height: 650px;
  height: auto;
  margin-bottom: 30px;
  padding: 20px;
  background-color: rgba(24, 24, 24, 0.5);
}

.mainText{
  color: white;
  font-size: x-large;
}

.bottomContainer{
  background-color: rgba(24, 24, 24, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  margin: 12px;
  transition: transform 0.5s;
  transform: scaleX(1);
}
.bottomContainer:hover{
  transform: scale(1.05);
}

.header{
  display: flex;
  align-items: center;
  justify-content: center;
}

.main{
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}
.centered-text{
  color: white;
  font-size: xxx-large;
  font-family: Arial, sans-serif;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.image-opacity{
  opacity: 0.50;
}
</style>