<script>
import planet from "@/components/Planet.vue";
import testFetch from "@/components/testFetch.vue";

export default {
  name: "PlanetScreen",
  components: {testFetch, planet},

  data(){
    return{
      planets: [{
        description:"",

      }]
    }
  },
  methods:{
    updatePlanets(planets){
      this.planets = planets
    }
  },
  mounted() {
    this.$refs.fetch.fetchPlanets();
  }
}
</script>

<template>
  <h1 class="title">Planets</h1>
  <test-fetch @planetFetched="updatePlanets" ref="fetch"/>
  <div class="item-placementcontainer">
      <div v-for="(planet) in this.planets">
        <planet :images="planet.image_url" :description="planet.description" :name="planet.name"/>
      </div>
  </div>

</template>

<style scoped>
*{
  font-family: Arial, sans-serif;
}

h1{
  color: white;
}

.title{
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-placementcontainer{
  margin-bottom: 88px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>