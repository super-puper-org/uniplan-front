<template>
   <div class="wrapper_crsl">

      <div class="up-carousel" :style="{
         'margin-left': '-' + (100 * currentSlideIndex) + '%'
      }">
         <up-carousel-item
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"
         />
      </div>

      <div class="carousel_pagination">
         <button @click="prevSlide"><img src="../assets/icons/left-arrow.png" alt=""/></button>
         <p>  {{ currentSlideIndex + 1 }} / {{ carousel_data.length }}  </p>
         <button @click="nextSlide"><img src="../assets/icons/right-arrow.png" alt=""/></button>
      </div>
      

   </div>
</template>

<script>
import upCarouselItem from "./up-carousel-item.vue"
export default{
   name: "up-carousel",
   components:{
      upCarouselItem
   },
   props: {
      carousel_data:{
         type: Array,
         default: () => []
      },
      interval:{
         type: Number,
         default: 0
      }
   },
   data(){
      return {
         currentSlideIndex: 0,
      }
   },
   computed: {},
   methods:{
      prevSlide(){
         if (this.currentSlideIndex > 0){
            this.currentSlideIndex--;
         } else {
            this.currentSlideIndex = 2;
         }
      },
      nextSlide(){
         if (this.currentSlideIndex >= this.carousel_data.length - 1){
            this.currentSlideIndex = 0;
         } else {
            this.currentSlideIndex++;
         }
      }
   },
   mounted(){
      if (this.interval > 0){
         let vm = this;
         setInterval(function(){
            vm.nextSlide();
         }, vm.interval)
      }
   }
}
</script>

<style>
   .wrapper_crsl{
      width:100%;
      overflow: hidden;
      margin: 0px auto;
   }

   .up-carousel{
      display: flex;
      transition: all ease .5s;
   }

   .carousel_pagination button{
      background: none;
      border: none;
      margin: 2px;
      filter: brightness(10);
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.3);
      transition: all 0.2s;
      padding: 4px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
   }

   .carousel_pagination button:hover{
      background-color: rgba(255, 255, 255, 0.7);
   }

   .carousel_pagination button img{
      filter: brightness(10);
   }

   .carousel_pagination{
      display: flex;
      margin-left: 30px;
      color: rgba(82, 183, 197, 0.4);
      justify-content: space-between;
   }
</style>
