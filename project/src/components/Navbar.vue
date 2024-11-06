<script>

</script>

<template>
    <div class="navbar">
      <router-link class="navbar-img-item" to="/"><img class="navbar-img" alt="logo" src="/images/logo%20redesign_V03SMALL.png"></router-link>
      <div class="navbar-text-items">
        <router-link class="navbar-item" to="/characters">Characters</router-link>
        <router-link class="navbar-item" to="/vehicles">Vehicles</router-link>
        <router-link class="navbar-item" to="/planets">Planets</router-link>
      </div>
    </div>
  <router-view></router-view>
</template>

<style scoped>
  *{
    font-family: Arial, sans-serif;

  }
  .navbar{
    background-color: #181818;
    opacity: 90%;
    color: #f2f2f2;
    display: flex;
    width: 100vw;
    font-weight: normal;
    font-size: 20px;
    height: 60px;
    position: sticky;
    top: 0;
  }
  .navbar-item{
    padding-right: 30px;
    color: #f2f2f2;
    text-decoration: none;
    align-items: center;
  }
  .navbar-img-item{
    padding-right: 30px;
    padding-left: 30px;
    color: #f2f2f2;
    text-decoration: none;
  }
  .navbar-img{
    width: 100px;
    height: 100px;
    overflow: visible;
  }
  .navbar-text-items{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>