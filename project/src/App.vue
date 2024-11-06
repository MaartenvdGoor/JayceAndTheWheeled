<script>

import navbar from "@/components/Navbar.vue";
import character from "@/components/Character.vue";
import Footer from "@/components/Footer.vue";

export default {
  components:{navbar,character, Footer},

}

</script>

<template>
  <div class="background">
    <navbar />
    <Footer id="footer" />
  </div>
</template>

<style scoped>
.background{

}
#footer{
  position: fixed;
  bottom: 0px;
}
</style>
