<script>
import vehicle from "@/components/Vehicle.vue";
import testFetch from "@/components/testFetch.vue";
import Filter from "@/components/Filter.vue";

export default {
  name: "VehiclesScreen",
  components: {Filter, testFetch, vehicle},

  data(){
    return{
      vehicles: [{
        description:"",

      }],
      filters:[],
      factions:[]
    }
  },
  methods:{
    updateVehicles(vehicles){
      this.vehicles = vehicles
      this.updateFactions(vehicles)
      this.filterVehicles()
      console.log(vehicles[0].renderURL)
    },
    imgPos(index){
      if (index % 2 === 0 ){
        return true
      }else{
        return false
      }
    },

    updateFactions(vehicles){
      this.factions = [];
      for (const vehicleFaction of vehicles){
        if (!this.factions.includes(vehicleFaction.faction)){
          this.factions.push(vehicleFaction.faction);
        }
      }

    },
    updateFilters(filters){
      this.filters = filters
      this.$refs.fetch.fetchVehicles()
    },
    filterVehicles(){
      if (this.filters.length <= 0) return
      const newCharArr = []
      for (let vehicle of this.vehicles){
        let charIndex = -1
        let filterApplies = this.filters.some(function (value,index){
          return vehicle[value.filterCat] === value.filterItem
        })
        if (filterApplies) newCharArr.push(vehicle)
      }
      this.vehicles = newCharArr
    },
  },
  mounted() {
    this.$refs.fetch.fetchVehicles();
  }
}
</script>

<template>
  <div id="titleFilter">
    <h1>Vehicles</h1>
    <Filter id="filter" @selection-updated="updateFilters" :category-options="[
      {name:'faction',options:factions}
      ]"/>
  </div>
  <test-fetch @vehicleFetched="updateVehicles" ref="fetch"/>
  <div v-for="(vehicle, index) in this.vehicles">
    <vehicle :left="imgPos(index)" :model-url="vehicle.modelURL" :render-u-r-l="vehicle.renderURL" :faction="vehicle.faction" :name="vehicle.name" :description="vehicle.description" :character="vehicle.cName"/>
  </div>
</template>

<style scoped>
*{
  font-family: Arial, sans-serif;
}

h1{
  color: white;
}

#titleFilter{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
}
</style>