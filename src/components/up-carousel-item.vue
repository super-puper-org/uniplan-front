<template>
   <div class="up-carousel-item">
      <div class="item__content">

         <div class="text">
            <h1>{{ item_data.name }}</h1>
            <p>{{ item_data.text }}</p>
         </div>

         <div class="img">
            <img :src=" require('../assets/icons/' + item_data.image) " alt=""/>
         </div>

      </div>
      
   </div>
</template>

<script>
export default{
   name: "up-carousel-item",
   props: {
      item_data:{
         type: Object,
         default: () => {}
      }
   },
   data(){
      return {
         progress: 0,
      }
   },
   computed: {},
   components:{ }
}
</script>

<style>
   @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

   .up-carousel-item{
      min-width: 1300px;
      padding: 30px;
   }

   .item__content{
      padding: 10px;
      display: grid;

      grid-template-columns: 1fr 1fr;
   }

   .item__content .img{
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .up-carousel-item h1{
      color: rgba(255, 255, 255, 1);
      font-size: 40px;  
      margin-bottom: 20px;
      font-family: 'Pacifico', cursive;
   }

   .up-carousel-item p{
      color: rgba(255, 255, 255, 0.7);
      font-size: 20px;  
   }
</style>