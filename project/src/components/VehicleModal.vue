<script>

export default {
  name: "VehicleModal",
  props:{
    title: {required: true},
    src:{required:true}
  },
  methods: {
    close() {
      this.$emit('close');
    },
    test(){
      console.log(this.title)
    }
  },
  data() {
    return {
      isMounted: false,
    }
  },
  mounted() {
    this.isMounted = true;
    this.loadComponent();
  },

  computed: {
    loadComponent() {
      return () => import('@google/model-viewer');
    }
  },
  emits:["close"]
}
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header" >
          {{ title.name }}
        </slot>
        <button
            type="button"
            class="btn-close"
            @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <model-viewer id="model-viewer-item" v-if="isMounted" :src="src" auto-rotate rotation-per-second=300% camera-controls disable-pan quality="high"></model-viewer>
        </slot>
      </section>
    </div>
  </div>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: black;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 825px;
  height: 550px;
}

.modal-header {
  padding: 15px;
  display: flex;
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: white;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
  color: white;
}
#model-viewer-item{
  height: 450px;
  width: 800px;
  background-image: url("/images/achtergrond gedraaid.png");
  background-size: cover;

}
</style>