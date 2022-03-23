<template>
  <div class="container">
    <div class="form">
       <h1 class="header">Registration</h1>
       <input placeholder="name" class="input_data" />
       <input placeholder="second name" class="input_data" />
       <input placeholder="@email" class="input_data" />
       <input placeholder="password" type="password" class="input_data" />
    </div>
  </div>
</template>


<script>
export default {
  name: "regPage",
};
</script>


<style>
   @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300&display=swap");

   :root {
      --dark: #0d1226;
      --medium: #1a244c;
      --blue: #263673;
      --light: #31479b;
      --accent: #52b7c5;
   }

   

   .container {
      display: flex;
      align-items: center;
      justify-content: center;
      /* background-color: var(--medium); */

      /* position: fixed;

      top: 50%;
      left: 50%; */
   }

   .form {
      width: 400px;
      background-color: var(--dark);
      border: 1px solid var(--blue);
   }

   .header{
      margin: 40px;

      color: var(--light);
   }

   .input_data {
      border: none;
      border-bottom: 1px solid var(--light);

      padding: 5px;
      font-size: 20px;

      margin: 40px;

      font-family: "Red Hat Mono", monospace;

      background-color: var(--dark);

      color: var(--accent);

      width: 300px;

      transition: border-bottom 0.4s;
   }

   .input_data:focus {
      outline: none;
      border-bottom: 1px solid var(--accent);
   }

   .input_data:hover {
      border-bottom: 1px solid var(--accent);
   }
</style>
