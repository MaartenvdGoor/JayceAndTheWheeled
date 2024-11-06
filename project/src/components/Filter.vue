<script>
export default {
  name: "Filter",
  props: {
    categoryOptions:{required:true}

  },
  data() {
    return {
      show: false,
      closing: false,
      selected: []
    }
  },
  methods: {
    showDropdown() {
      if (this.show){
        this.closing = true;
        setTimeout(() => {
          this.show = false;
        }, 752)
      }
      else {
        this.show = true
        this.closing = false
      }
    },
    updateSelection(item, category){
      let newFilter = {filterCat: category, filterItem: item}
      let existIndex = -1;
      let filterExist = this.selected.some(function (value,index){

        if (value.filterCat === newFilter.filterCat && value.filterItem === newFilter.filterItem){
          existIndex = index
          return true
        }
        else{
          return false
        }

      })
      if(filterExist){
        this.selected.splice(existIndex,1)
      }
      else{
        this.selected.push(newFilter);
      }
      console.log(this.selected)
      this.$emit('selectionUpdated',this.selected)
    }
  },
  emits:['selectionUpdated']
}
</script>

<template>
  <div id="filter">
    <button @click="showDropdown"> Filters </button>
    <div id="multiselect" :class="{OpenFilterAnim: show, CloseFilterAnim: closing}"  v-show="show">
      <div id="category" v-for="category in categoryOptions">
        <p>{{category.name}}</p>
        <div v-for="(option,index) in category.options">
          <input type="checkbox" :id="index" @click="updateSelection(option,category.name)">
          <label :for="index">{{option}}</label>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
#multiselect{
  width: 100%;
  border: black 1px solid;
  display: flex;
  max-height: 200px;
  background-color: rgba(24, 24, 24, 0.5);
  overflow: hidden;
  color: white;

}
#category{
  width: 50%;
  padding:0px 10px 10px 10px;
}


#filter{
  display: flex;
  flex-direction: column;
  width: 25%;
}

.OpenFilterAnim{
  animation: openFilter;
  animation-duration: 0.75s;
  max-height: 180px;
  transition: max-height 0.75s;
  transition-timing-function: cubic-bezier(1, 0, 0.68, 0.99);
}
.CloseFilterAnim{
  animation: closeFilter;
  animation-duration: 0.75s;
  max-height: 0px;
  transition: max-height 0.75s;
  transition-timing-function: cubic-bezier(1, 0, 0.68, 0.99);
}

@keyframes openFilter {
  0%{
    max-height: 0;
  }
  100%{
    max-height: 180px;
  }
}
@keyframes closeFilter {
  0%{
    max-height: 200px;
  }
  100%{
    max-height: 0px;
  }
}

#filter button{
  margin-bottom: 5px;
  border-radius: 5px;
}

</style>