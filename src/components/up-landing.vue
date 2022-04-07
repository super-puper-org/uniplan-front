<template>
   <div class="wrapper">
      <nav>
         <h1 class="header"><img src="../assets/logo.png" class="logo"/>Uniplan</h1> 

         <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">How to use</a></li>
            <li><a href="#">Lets start</a></li>
         </ul>
         <button 
            class="signIn"
            @click="regFormOpen">Sign in</button>
      </nav>

      <!-- <reg-page --------------------- Форма регистрации
         v-show="regFormVisible"
         @close="regFormClose">

      </reg-page> -->


      <div class="description-module">
         <div class="text-description">
            <h1>Uniplan</h1>
            <h3>
               Study sessions, work meetings, walks with friends will never go out of your head if they are recorded. Uniplan is your own personal planner right in the browser.
            </h3>
         </div>
      </div>

      <div class="second-module"
         data-aos="slide-up"
         data-aos-ease = 'ease'
         data-aos-duration="1500"
         data-aos-once=true>
         <div class="stat1">
            <h2>40%</h2>
            <p>of people complain about the lack of time.</p>
         </div>
         <div class="stat2">
            <h2>~2h</h2>
            <p>per day man doing nothing.</p>
         </div>
         <div class="stat3">
            <h2>>3%</h2>
            <p>of people use time-managment.</p>
         </div>
         <div class="stat4">
            <h2>2.3MM</h2>
            <p>of people don't know how to spend their free time.</p>
         </div>
      </div>


      <div class="third-module"
         data-aos="slide-up"
         data-aos-ease = 'ease'
         data-aos-duration="1500"
         data-aos-once=true>
         <div class="some_text">
            <h2>Why should you use it?</h2>
            <p>
            In order to better remember any information, you need to write it down. The diary works in this direction. But this diary will also remind you of the upcoming event. In uniplan you can not only add an event, but also adjust its frequency. You can also attach additional parameters: for example, a link to a studying session. Create your uniplan and see how easy it is!
            </p>
         </div>
         <div class="image">
            <img src="../assets/clock_image.png"/>
            <!-- <up-clock/> -->
         </div>
      </div>

      <div class="forth-module"
         data-aos="slide-up"
         data-aos-ease = 'ease'
         data-aos-duration="1500"
         data-aos-once=true>
         <up-carousel
            :carousel_data="sliderItems"
            :interval="10000"
         />
      </div>

      <footer>
         <div>
            <h1 class="header-footer">Uniplan</h1> 
         </div>
         <div>
            <h3 class="sub-header">Main:</h3>
            <ul>
               <li><a href="#">About</a></li>
               <li><a href="#">How to use</a></li>
               <li><a href="#">Lets start</a></li>
            </ul>
         </div>

         <div>
            <h3 class="sub-header">Additionally:</h3>
            <ul>
               <li><a href="#">Personal area</a></li>
               <li><a href="#">FAQ</a></li>
            </ul>
         </div>


         <div>
            <h3 class="sub-header">How to reach us:</h3>
            <ul class="reach-ul">
               <li><a href="#"><img src="../assets/gh-logo.png"/></a></li>
               <li><a href="#"><img src="../assets/tg-logo.png"/></a></li>
               <li><a href="#"><img src="../assets/vk-logo.png"/></a></li>
            </ul>
         </div>

         <div>
            <h3 class="sub-header">Developers:</h3>
            <ul>
               <li><a href="#">Boris</a> <p>- frontend</p> </li>
               <!-- <li><a href="#">Lina</a> <p>- backend</p> </li>
               <li><a href="#">Artem</a> <p>- database</p> </li> -->
            </ul>
         </div>
      </footer>
   </div>
</template>


<script>
import upCarousel from './up-carousel.vue';
/* import upClock from './up-clock.vue' */

/* import regPage from "./registration.vue" -------------Импорт компонента регистрации */

export default{
   name: "up_landing",
   components:{
      /* regPage, ---------------Подключение компоненте */
      upCarousel,
      /* upClock */
   },
   data(){
      return{
         sliderItems: [
            {
               id: 1,
               name: "Time-managment", 
               text: "Time management is one of the most important techniques in the modern world. Mastering it is not always easy, but it is always worth taking small steps that will lead to big changes. Feel free to spice all your plans out of your head in uniplan!",
               image: "timemanagment.png"
            },
            {
               id: 2, 
               name: "Deadlines", 
               text: "Say no to deadlines. To save your nervous system, you need to gradually complete the task, and not a couple of hours before the end of time. In the future, uniplan will help to effectively perform the upcoming tasks.",
               image: "deadline.png"
            },
            {
               id: 3, 
               name: "Create actions", 
               text: "Add your events, change their colors: by category or in random order (here only you are the boss). Set up places, make appointments - all this is possible right now with uniplan.",
               image: "calendar.png"
            },
         ],
         regFormVisible: false,
      };
   },
   mounted(){},
   methods:{
      regFormOpen(){
         this.regFormVisible = true;
      },
      regFormClose(){
         this.regFormVisible = false;
      }
   }
}
</script>

<style>
   @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
   @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');

   :root{
      --dark: #0d1226;
      --medium: #1a244c;
      --blue: #263673;
      --light: #31479b;
      --accent: #52b7c5;

      --accent-pink: #7668cb;

      --platinum: #DFE0DC;
   }

   .wrapper{
      margin: 0px auto;

      display: flex;
      height: 100%;
      flex-direction: column;

      width: 100%;

      height: 100%;
      
      padding: 0 2%;


      background: rgb(13,18,38);
      background: linear-gradient(0deg, rgba(13,18,38,1) 0%, rgba(26,36,76,1) 40%);
   }

   .header{
      font-family: 'Bungee', cursive;
      display: flex;
      align-items: center;
      cursor: pointer;
   }

   .logo{
      width: 50px;
   }

   nav{
      display: flex;
      width: 100%;
      align-items: center;
      flex-wrap: wrap;
      padding: 20px 0;
      color: var(--accent);
   }

   nav ul{
      flex: 1;
      text-align: right;
      padding-right: 30px;
   }

   nav ul li{
      display: inline-block;
      list-style: none;
      margin: 10px 30px;
   }

   nav ul li a{
      color: var(--accent);
      text-decoration: none;
      position: relative;
   }

   nav ul li a::after{
      content: '';
      width: 0;
      height: 3px;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--accent);
      transition: width 0.3s;
   }

   nav ul li a:hover::after{
      width: 100%;
   }

   nav button{
      padding: 10px;
      margin: 5px;
      border-radius: 5px;
      font-size: 16px;
      transition-duration: 0.4s;
   }

   .signIn{
      color: var(--accent);
      border: 1px solid var(--accent);
      
      background: none;
   }

   .signIn:hover{
      background-color: rgba(13,18,38,0.7);
      color: var(--accent);

      transform: scale(1.05) perspective(1px);

      border: 1px solid var(--accent);
   }

   .description-module{
      height: 100vh;
      margin-top: 30px;
      margin-left: 60px;
      
      margin-bottom: 100px;
      
      background-image: url(../assets/landing-background.png);
      background-repeat: no-repeat;
      
      background-position-x: 360px;
      background-position-y: 30px;
   }

   .text-description{
      padding-top: 34%;
      color: var(--accent);
      height:100%;
      
      backdrop-filter: blur(8px);
   }

   .text-description h1{
      font-size: 80px;
      font-family: 'Bungee', cursive;
      animation-duration: 1.5s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      
      animation-name: slideInLeft;
   }

   .text-description h3{
      width: 30%;
      animation-duration: 2s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      
      animation-name: slideInLeft;
   }

   @keyframes slideInLeft {
      0% {
         transform: translateX(-200%);
      }
      100% {
         transform: translateX(0);
      }
   }

   .second-module{
      height: 40vh;
      width: 94%;
      
      margin-top: 100px;
      margin-bottom: 100px;

      display: grid;
      gap: 60px;

      margin-left: 3%;

      grid-template-columns: 1fr 1fr 1fr 1fr;
   }

   .second-module div{
      display: grid;
      place-items: left;
      
      margin: 10px;
      padding: 10px; 
      
   }

   .second-module h2{
      font-family: 'Ubuntu', sans-serif;  
      color: var(--platinum);
      border-bottom: 1px solid var(--accent-pink);
      font-size: 40px;
      padding-bottom: 20px;
   }

   .second-module p{
      margin-top: 20px;
      color: rgba(255, 255, 255, 0.4);
   }

   .third-module{
      height: 40vh;
      width: 94%;
      margin-left: 3%;
      
      margin-top: 100px;
      margin-bottom: 100px;

      display: grid;
      gap: 20px;

      grid-template-columns: 2fr 1fr;

      font-size: 20px;
   }

   .third-module div{
      display: grid;
      place-items: center;
      color: rgba(255, 255, 255, 0.4);
   }

   .third-module img{
      width: 200px;
      filter: invert(1);
   }

   .third-module p{
      font-size: 23px;
   }

   .third-module h2{
      color: rgba(255, 255, 255, 0.6);
      font-size: 40px;
      
   }


   .forth-module{
      /* min-height: 40vh; */
      width: 94%;


      /* background: var(--accent-pink); */
      
      margin-top: 100px;
      margin-bottom: 100px;

      margin-left: 3%;
   }

   footer{
      width: 94%;
      margin-left: 3%;
      margin-top: 100px;
      padding-top: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      height: 200px;

      color: rgba(255, 255, 255, 0.9);

      padding-bottom: 20px;
   }

   footer div{
      display: grid;
   }

   .footer-header{
      font-family: 'Bungee', cursive;
      
      cursor: pointer;

      margin: 10px;
      padding-top: 0px;

      text-align: right;
      padding-right: 30px;
   }

   .sub-header{
      text-align: right;
      padding-right: 30px;
      margin: 10px 30px;
   }

   footer div ul{
      text-align: right;
      padding-right: 30px;
   }

   footer div ul li{
      list-style: none;
      margin: 10px 30px;
   }

   .reach-ul{
      flex: 1;
      text-align: right;
   }

   .reach-ul li{
      display: inline-block;
      list-style: none;
      margin: 10px 15px;
   }

   .reach-ul li a{
      padding: 2px;
   }

   .reach-ul a img{
      width: 30px;
      filter: invert(1);
   }

   .reach-ul img{
      transition-duration: 0.5s;
      border-radius: 5px;
   }

   .reach-ul img:hover{
      background-color: rgba(0, 0, 0, 0.4);
   }

   footer div ul li a{
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      position: relative;
   }

   footer div ul li p{
      color: rgba(255, 255, 255, 0.4);
   }
</style>