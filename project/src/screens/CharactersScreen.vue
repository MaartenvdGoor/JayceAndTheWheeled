<script>
import character from "@/components/Character.vue";
import testFetch from "@/components/testFetch.vue";
import Filter from "@/components/Filter.vue";

export default {
  name: "CharactersScreen",
  components: {Filter, testFetch, character},

  data(){
    return{
      characters: [{
        description:"",
        images:[]
      }],
      factions:[{
        faction: ""
      }],
      planets:[{
        name: ""
      }],
      filters:[]
    }
  },
  methods:{
    updateCharacters(characters){
      this.characters = characters
      this.updateFactions(characters)
      this.updatePlanets(characters)
      this.filterCharacters()
    },
    updateFactions(characters){
      this.factions = [];
      for (const characterFaction of characters){
        if (!this.factions.includes(characterFaction.faction)){
          this.factions.push(characterFaction.faction);
        }
      }

    },
    updatePlanets(characters){
      this.planets = [];
      for (const characterPlanet of characters){
        if (!this.planets.includes(characterPlanet.planet)){
          this.planets.push(characterPlanet.planet);
        }
      }
    },
    imgPos(index){
      if (index % 2 === 0 ){
        return true
      }else{
        return false
      }
    },
    filterCharacters(){
      if (this.filters.length <= 0) return
      const newCharArr = []
      for (let character of this.characters){
        let charIndex = -1
        let filterApplies = this.filters.some(function (value,index){
         return character[value.filterCat] === value.filterItem
        })
        if (filterApplies) newCharArr.push(character)
      }
      this.characters = newCharArr
    },
    updateFilters(filters){
      this.filters = filters
      this.$refs.fetch.fetchCharacters()
    }
  },
  mounted() {
    this.$refs.fetch.fetchCharacters();
  }
}
</script>

<template>
  <div id="titleFilter">
    <h1>Characters</h1>
    <Filter id="filter" @selection-updated="updateFilters" :category-options="[
      {name:'planet',options:planets},
      {name:'faction',options:factions}
      ]"/>

  </div>

  <test-fetch @characterFetched="updateCharacters" ref="fetch"/>
  <div v-for="(character, index) in this.characters">
    <character
        :left="imgPos(index)"
        :images="character.images"
        :description="character.description"
        :vehicle="character.vName"
        :age="character.age"
        :faction="character.faction"
        :name="character.name"
        :planet="character.planet"
        :gender="character.gender"/>
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
#filter{

}
</style>