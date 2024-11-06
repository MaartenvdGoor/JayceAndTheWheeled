<script>
export default {
  name: "testFetch",

  methods: {
    async fetchCharacters() {
      try {
        const response = await fetch('https://mdprojectservice.onrender.com/characters')
        let characters = await response.json();
        // characters = JSON.parse(characters);
        this.$emit("characterFetched",(characters))

      } catch (error) {
        console.log(error)
      }
    },
    async fetchPlanets() {
      try {
        const response = await fetch('https://mdprojectservice.onrender.com/planets')
        const planets = await response.json();

        this.$emit("planetFetched",planets)
      } catch (error) {
        console.log(error)
      }
    },

    async fetchVehicles() {
      try {
        const response = await fetch('https://mdprojectservice.onrender.com/vehicles')
        const vehicles = await response.json();
        console.log(vehicles);
        this.$emit("vehicleFetched",(vehicles))
      } catch (error) {
        console.log(error)
      }
    }

  },
  mounted() {
  },
  emits:['characterFetched', 'planetFetched','vehicleFetched']
}
</script>

<template>

</template>

<style scoped>

</style>