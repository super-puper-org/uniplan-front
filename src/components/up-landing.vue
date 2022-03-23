<template>
   <div class="main">
      <nav>
         <h1 class="header"><img src="../assets/logo.png" class="logo"/>Uniplan</h1> 
         
         <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">How to use</a></li>
            <li><a href="#">Lets start</a></li>
         </ul>
         <button class="signIn">Sign in</button>
         <button class="signUp">Sign up</button>
      </nav>

      <div class="text-description">
         <h1>Uniplan</h1>
         <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eum saepe corrupti optio similique aliquam possimus officiis molestiae neque reprehenderit quas ea odit provident, labore quos rem. Sed, sint quia.</h3>
         <img src="../assets/landing-background.png" class="example-image"/>
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

   :root{
      --dark: #0d1226;
      --medium: #1a244c;
      --blue: #263673;
      --light: #31479b;
      --accent: #52b7c5;
   }

   .main{
      height: 100vh;
      width: 100%;
      background-color: var(--medium);

      /* background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(../assets/landing-background.png);
      background-repeat: no-repeat;
      background-position: bottom right; */

      background: linear-gradient(rgba(26,36,76, 0), rgba(26,36,76, 0.7));

      padding: 0 8%;
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
      cursor: pointer;
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
      cursor: pointer;
      transition-duration: 0.4s;
   }

   .signIn{
      color: var(--accent);

      border: 1px solid var(--accent);
      
      background: none;
   }

   .signIn:hover{
      background-color: var(--accent);
      color: var(--dark);
   }

   .signUp{
      background-color: var(--accent);
      color: var(--dark);
      border: 1px solid var(--accent)
   }

   .signUp:hover{
      background-color: var(--medium);
      color: var(--accent);
   }

   .text-description{
      color: var(--accent);
      position: absolute;
      /* margin-top: 30%; */
      bottom: 8%;

      /* animation-duration: 2s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      animation-iteration-count: 2;
      animation-name: slideInLeft; */
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

      float: left;

      animation-duration: 2s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      /* animation-iteration-count: 2; */
      animation-name: slideInLeft;
   }

   .example-image{
      position: absolute;
      /* border: 1px solid var(--accent); */
      bottom: -50%;

      animation-duration: 1.5s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      /* animation-iteration-count: 2; */
      animation-name: slideInTop;
   }

   @keyframes slideInLeft {
      0% {
         transform: translateX(-200%);
      }
      100% {
         transform: translateX(0);
      }
   }

   @keyframes slideInTop {
      0% {
         transform: translateY(100%);
      }
      100% {
         transform: translateX(0);
      }
   }
</style>