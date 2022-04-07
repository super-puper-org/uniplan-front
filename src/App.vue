<template>
  <div class="container">
    <up_landing/>
    <!-- <regPage/> -->
  </div>
</template>

<script>
import up_landing from "./components/up-landing.vue"
/* import regPage from "./components/registration.vue" */

export default {
  name: 'app',
  components:{
    up_landing,
    /* regPage, */
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
      /* background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url("http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/500px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg");
      background-size: 20%; */
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
