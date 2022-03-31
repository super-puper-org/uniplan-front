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

      <div class="description-module">
         <div class="text-description">
            <h1>Uniplan</h1>
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eum saepe corrupti optio similique aliquam possimus officiis molestiae neque reprehenderit quas ea odit provident, labore quos rem. Sed, sint quia.</h3>
         </div>
      </div>

      <div class="second-module">
         <div class="stat1">
            <h2>40%</h2>
            <p>Тратят треть времени на личные нужды.</p>
         </div>
         <div class="stat2">
            <h2>40%</h2>
            <p>Тратят треть времени на личные нужды.</p>
         </div>
         <div class="stat3">
            <h2>40%</h2>
            <p>Тратят треть времени на личные нужды.</p>
         </div>
         <div class="stat4">
            <h2>40%</h2>
            <p>Тратят треть времени на личные нужды.</p>
         </div>
      </div>


      <div class="third-module">
         <div class="some_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt iste amet praesentium ducimus asperiores quis dolorem nostrum delectus. Perspiciatis odit aliquid repudiandae? Error id deserunt voluptate incidunt tempora esse commodi perspiciatis deleniti pariatur ipsa explicabo saepe ab quibusdam, reiciendis nemo porro! Enim impedit delectus atque eum voluptatem recusandae accusamus!
         </div>
         <div class="image">
            img
         </div>
      </div>
   </div>
</template>


<script>
/* import regPage from "./registration.vue" */

export default{
   name: "up_landing",
   components:{
      /* regPage */
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
      width: 100%;
      /* background-color: var(--dark); */
      margin-top: 100px;

      display: grid;
      gap: 20px;

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
      width: 100%;
      /* background-color: var(--dark); */
      margin-top: 100px;

      display: grid;
      gap: 20px;

      grid-template-columns: 1fr 1fr;

      font-size: 20px;
   }

   .third-module div{
      display: grid;
      place-items: center;
      color: rgba(255, 255, 255, 0.4);
   }
</style>