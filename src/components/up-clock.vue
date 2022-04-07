<template>
   <div class="clock">
      <div class="hour">
         <div class="hours">

         </div>
      </div>

      <div class="minute">
         <div class="minutes">

         </div>
      </div>

      <div class="second">
         <div class="seconds">

         </div>
      </div>
   </div>
</template>

<script>
export default{
   methods:{
      clock(){
         const hoursBlock = document.querySelector(".hours");
         const minutesBlock = document.querySelector(".minutes");
         const secondsBlock = document.querySelector(".seconds");
         const deg = 6;
         let secs = 0;

         setInterval(() => {
            var hs = Math.floor(secs / 3600) * deg;
            var ms = Math.floor(secs / 60 - hs * 60) * deg;
            var ss = secs % 60 * deg;

            hoursBlock.style.transform = `rotateZ(${hs + (ms/12)}deg)`;
            minutesBlock.style.transform = `rotateZ(${ms}deg)`;
            secondsBlock.style.transform = `rotateZ(${ss}deg)`;
         }, 10)
      }
   },
   mounted(){
      this.clock()
   }
}
</script>

<style>
   .clock{
      width: 350px;
      height: 350px;

      display: flex;
      justify-content: center;
      align-items: center;

      background: url('../assets/clock_background.png') center/cover;

      border: 4px solid #fff;
      border-radius: 50%;

      position: relative;
   }

   .clock:before{
      content: '';
      position: absolute;

      width: 15px;
      height: 15px;

      border-radius: 50%;
      background:#fff;

      z-index: 111;
   }

   .hour{
      position: absolute;
   }

   .hour .hours{
      width:160px;
      height: 160px;

      display: flex;
      justify-content: center;
      position: relative;

      border-radius: 50%;
   }

   .hour .hours:before{
      content: '';
      position: absolute;
      width: 8px;
      height: 80px;
      background: yellow;
      z-index: 10;
      border-radius: 6px 6px 0 0;
   }

   .minute{
      position: absolute;
   }

   .minute .minutes{
      width:190px;
      height: 190px;

      display: flex;
      justify-content: center;
      position: relative;

      border-radius: 50%;
   }

   .minute .minutes:before{
      content: '';
      position: absolute;
      width: 4px;
      height: 90px;
      background: blue;
      z-index: 11;
      border-radius: 6px 6px 0 0;
   }

   .second{
      position: absolute;
   }

   .second .seconds{
      width: 230px;
      height: 230px;

      display: flex;
      justify-content: center;
      position: relative;

      border-radius: 50%;
   }

   .second .seconds:before{
      content: '';
      position: absolute;
      width: 2px;
      height: 150px;
      background: red;
      z-index: 12;
      border-radius: 6px 6px 0 0;
   }
</style>
