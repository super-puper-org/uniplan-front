<template>
   <div class="wrapper">
      <nav>
         <h1 class="header"><img src="../assets/logo.png" class="logo"/>Uniplan</h1> 

         <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">How to use</a></li>
            <li><a href="#">Lets start</a></li>
         </ul>
         <button class="signIn">Sign in</button>
         <!-- <button class="signUp">Sign up</button> -->
      </nav>

      <!-- <dialog
      :sync="regFormDialogVisible">
         <reg-page/>
      </dialog> -->


      <div class="description-module">
         <div class="text-description">
            <h1>Uniplan</h1>
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eum saepe corrupti optio similique aliquam possimus officiis molestiae neque reprehenderit quas ea odit provident, labore quos rem. Sed, sint quia.</h3>
         </div>
      </div>

      <div class="second-module">
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
            <p>of people don't know how to spend there free time.</p>
         </div>
      </div>


      <div class="third-module">
         <div class="some_text">
            <h2>Why should you use it?</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt iste amet praesentium ducimus asperiores quis dolorem nostrum delectus. Perspiciatis odit aliquid repudiandae? Error id deserunt voluptate incidunt tempora esse commodi perspiciatis deleniti pariatur ipsa explicabo saepe ab quibusdam, reiciendis nemo porro! Enim impedit delectus atque eum voluptatem recusandae accusamus!
         </div>
         <div class="image">
            <img src="../assets/clock_image.png"/>
         </div>
      </div>

      <footer>
         <div>
            <h1 class="header-footer"><!-- <img src="../assets/logo.png" class="logo"/> -->Uniplan</h1> 
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
               <li><a href="#">Lina</a> <p>- backend</p> </li>
               <li><a href="#">Artem</a> <p>- database</p> </li>
            </ul>
         </div>
      </footer>
   </div>
</template>


<script>
/* import regPage from "./registration.vue" */

export default{
   name: "up_landing",
   components:{
      /* regPage */
   },
   data(){
      return{
         regFormDialogVisible: false,
      };
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
      /* background: red; */
      margin: 0px auto;

      display: flex;
      height: 100%;
      flex-direction: column;

      width: 100%;

      height: 100%;
      /* background-color: var(--medium); */
      padding: 0 2%;


      background: rgb(13,18,38);
      background: linear-gradient(0deg, rgba(13,18,38,1) 0%, rgba(26,36,76,1) 40%);
   }

   /* @media (max-width: 1200px){
      .wrapper{
         max-width: 970px;
      }
   }

   @media (max-width: 992px){
      .wrapper{
         max-width: 750px;
      }
   }

   @media (max-width: 767px){
      .wrapper{
         max-width: none;
      }
   } */

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

      border: 2px solid var(--accent);
   }

   /* .signUp{
      background-color: var(--accent);
      color: var(--dark);
      border: 1px solid var(--accent)
   }

   .signUp:hover{
      background-color: var(--medium);
      color: var(--accent);
   } */

   .description-module{
      height: 100vh;
      margin-top: 30px;
      margin-left: 60px;
      /* background-color: var(--dark); */

      
      
      background-image: url(../assets/first_module_background_image.png);
      background-repeat: no-repeat;
      
      background-position-x: 360px;
      background-position-y: 40px;
   }

   .text-description{
      padding-top: 34%;
      color: var(--accent);
      /* background: rgba(255, 255, 255, 0.2); */
      height:100%;
      
      backdrop-filter: blur(8px);
      /* background-color:var(--light); */
   }

   .text-description h1{
      font-size: 80px;
      font-family: 'Bungee', cursive;
      animation-duration: 1.5s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      /* animation-iteration-count: 2; */
      animation-name: slideInLeft;
   }

   .text-description h3{
      width: 30%;
      animation-duration: 2s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      /* animation-iteration-count: 2; */
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
      /* background-color: var(--dark); */
      margin-top: 100px;

      display: grid;
      gap: 60px;

      margin-left: 3%;

      grid-template-columns: 1fr 1fr 1fr 1fr;
   }

   .second-module div{
      display: grid;
      place-items: left;
      /* border: 2px dashed lightgray; */
      margin: 10px;
      padding: 10px; 
      /* color: var(--accent); */
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
      /* background-color: var(--dark); */
      margin-top: 100px;

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
   }

   .third-module h2{
      color: rgba(255, 255, 255, 0.6);
      font-size: 40px;
      
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
      /* display: flex; */
      /* align-items: center; */
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
      /* flex: 1; */
      text-align: right;
      padding-right: 30px;
   }

   footer div ul li{
      /* display: inline-block; */
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