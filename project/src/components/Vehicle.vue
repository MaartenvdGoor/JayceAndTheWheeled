<script>
import VehicleModal from "@/components/VehicleModal.vue";

export default {
  name: "Vehicle",
  props: {
    name: {required: true},
    character: {required: true},
    description: {required: true},
    faction: {required: true},
    images: {required: true},
    modelUrl:{required:true},
    renderURL:{required:true},
    left: {required: true},
  },
  components:{
    VehicleModal
  },
  methods:{
    showModal() {
      console.log(this.name)
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    test(){
      console.log(this.renderURL)
    }
  },
  data(){
    return{
      isModalVisible: false
    }
  }

}
</script>

<template>
  <div id="vehicleContainer" @click="test">
      <div id="border">
        <a id="viMargin" v-if="left" @click="showModal" class="img-hover">
          <img id="vehicleImage" :src="renderURL" alt="">
          <p class="centered-text">Click me!</p>
        </a>
        <div id="vehicleInfoContainer">
          <h3 id="vehicleName">{{name}}</h3>
          <p id="vehicleDescription"> {{description}}</p>
          <div id="vehicleDetails">
            <p class="vehicleDetail"> {{character}}</p>
            <p class="vehicleDetail"> {{faction}}</p>
          </div>
        </div>
        <a id="viMargin" class="img-hover" v-if="!left" @click="showModal">
          <img id="vehicleImage" :src="renderURL" alt="">
          <p class="centered-text">Click me!</p>
        </a>
      </div>
  </div>
  <VehicleModal :src="modelUrl" :title={name} v-show="isModalVisible" @close="closeModal" />
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
#vehicleImage{
  width:252px;
  height: 252px;
}
#viMargin{
  margin-bottom: -4px;
}
#border{
  border: 1px solid;
  border-radius: 10px;
  background-color: rgba(24, 24, 24, 0.5);
  display: inline-flex;
  overflow: hidden;
}
#vehicleContainer{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}
#vehicleInfoContainer{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 700px;
  color: white;
}

#vehicleDetails{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#vehicleName{
  text-align: center;
}

#vehicleDescription{
  margin-left: 15px;
  margin-right: 10px;
  text-align: left;

}
.vehicleDetail{
  border: 1px solid;
  margin-right: 5px;
  margin-left: 5px;
  padding: 10px;
  border-radius: 5px;
}
</style>