<script>

export default {
  name: "Planet",
  props: {
    name: {required: true},
    description: {required: true},
    images: {required: true},
  },
  methods:{
    displayInfo(){
      this.animplay = true;

      setTimeout(() => {
        this.display = !this.display;
      }, 500)
      setTimeout(() => {
        this.animplay = false;
      }, 1000)
    },
  },
  data(){
    return{
      display: false,
      animplay: false
    }
  },
}

</script>

<template>
  <div :class="{planetAnimation: animplay}" class="planetContainer">
    <a id="planet" @click="displayInfo">
      <div class="background-fixed" v-if="!display">
        <img id="planetImage" :src="images" alt="">

      </div>
      <div v-if="display" class="background-fixed">
        <div class="background-info">
          <img id="planetImage-back" height="400px" width="400px" :src="images" alt="">

          <div id="descText">
            <p class="description" id="planetNameContainer">{{description}}</p>
          </div>

        </div>
      </div>
      <div class="background-text">
        <h3 id="planetNameContainer">{{name}}</h3>
      </div>
    </a>
  </div>
</template>

<style scoped>
*{
  font-family: Arial, sans-serif;
}
.description{
  margin: 0;
  font-size: larger;
  padding-top: 25px;
  padding-right: 20px;
  padding-left: 20px;
}
.planetContainer{
  border: 1px solid;
  border-radius: 10px;
  margin: 15px;
  transition: transform 0.5s;
  transform: scaleX(1);
}
.background-info{
  width: 300px;
  height: 300px;
  font-size: medium;
}
.background-text{
  padding: 5px;
  background-color: rgba(24, 24, 24, 0.5);
}
.background-fixed{
  background-color: rgba(24, 24, 24, 0.5);
}
#descText{
  display: flex;
  flex-direction: column;
  height: 300px;
  color: white;
}
#planetImage {
  border-radius: 10px;
  width: 300px;
  height: 300px;
}
#planetImage-back {
  opacity: 0.15;
  display: block;
  position: absolute;
  content:"";
  bottom: 0;
  left: 0;
  right: 0;
  top:0;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0);
  max-width:300px;
  max-height:300px;
  width: auto;

}
#planetNameContainer{
  text-align: center;
  color: white;
}
.planetAnimation{
  animation-name: planetAnimation;
  animation-duration: 1s;
  transition: transform 0.5s;
  transition-timing-function: ease-in-out;
}

@keyframes planetAnimation {
  50%{
    transform: scaleX(0);
  }
  100%{
    transform: scaleX(1);
  }
}

.planetContainer:hover{
  transform: scale(1.05);
}
</style>