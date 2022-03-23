<template>
  <div class="container">
    <up_landing/>
  </div>
</template>

<script>
import up_landing from "./components/up-landing.vue"

export default {
  name: 'app',
  components:{
    up_landing
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap');

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

    font-family: 'Josefin Sans', sans-serif;
  }

  html, body {
      background-color: var(--dark);
      height: 100%;
      width: 100%;
   }

   .container {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 100%;
   }

   #app{
     height: 100%;
   }
</style>
