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
   </div>
</template>


<script>
export default{
   name: "up_landing",
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

      padding: 0 8%;
   }

   .header{
      font-family: 'Bungee', cursive;
      display: flex;
      align-items: center;
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
</style>