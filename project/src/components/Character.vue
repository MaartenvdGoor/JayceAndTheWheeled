<script>
export default {
  name: "Character",
  props: {
    name: {required: true},
    faction: {required: true},
    age: {required: true},
    vehicle: {required: true},
    description: {required: true},
    images: {required: true},
    planet:{required:true},
    gender:{required:true},
    left:{required:true},
    isActive: {required: true}
  },
  data(){
    return{
      animPlaying: false,
      isActive: false
    }
  },
  methods:{
    playAnimation(){
      if (this.animPlaying) return
      this.isActive = true
      this.animPlaying = true;
      setTimeout(() => {
        this.$refs.charIMG.src = this.images[1]
      },200)
      setTimeout(() => {
        this.$refs.charIMG.src = this.images[2]
      },400)
      setTimeout(() => {
        this.$refs.charIMG.src = this.images[0]
        this.animPlaying = false
        this.isActive = false
      },600)
    },
  }

}
</script>

<template>
  <div id="characterContainer">
    <div id="border">
      <div @click="playAnimation" v-if="left" class="img-hover">
        <img ref="charIMG" id="characterImage" :src="images[0]" alt="">
        <p v-if="!isActive" class="centered-text">Click me!</p>
      </div>
      <div id="characterInfoContainer">
        <div id="characterName">
          <h3>{{name}}</h3>
        </div>
        <p id="characterDescription"> {{description}}</p>
        <div id="characterDetails">
          <p class="characterDetail"> {{age}}</p>
          <p class="characterDetail"> {{faction}}</p>
          <p class="characterDetail"> {{vehicle}}</p>
          <p class="characterDetail"> {{planet}}</p>
          <p class="characterDetail"> {{gender}}</p>
        </div>
      </div>
      <div @click="playAnimation" v-if="!left" class="img-hover">
        <img ref="charIMG" id="characterImage" :src="images[0]" alt="">
        <p v-if="!isActive" class="centered-text ">Click Me!</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
*{
  font-family: Arial, sans-serif;
}

.centered-text{
  visibility: hidden;
  color: white;
  position: absolute;
  margin-left: 126px;
  font-size: xx-large;
  font-family: Arial, sans-serif;
  transform: translate(-50%, -50%);
}
.img-hover{
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-hover:hover .centered-text{
  visibility: visible;
}

.invisible{
  visibility: hidden;
}

#characterImage {
  width:225px;
  height: 225px;
  background-color: rgba(24, 24, 24, 0.5);
}
#characterContainer{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}
#characterInfoContainer{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 700px;
  background-color: rgba(24, 24, 24, 0.5);
  color: white;
}

#border{
  border: 1px solid;
  border-radius: 10px;
  display: inline-flex;
  overflow: hidden;
}
#characterDetails{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#characterName{
  text-align: center;
  margin-bottom: 0;
}

#characterDescription{
  margin-left: 15px;
  margin-right: 10px;
  text-align: left;
  margin-top: 0;
}
.characterDetail{
  border: 1px solid;
  margin-right: 5px;
  margin-left: 5px;
  padding: 10px;
  border-radius: 5px;
}
</style>