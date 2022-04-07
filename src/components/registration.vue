<template>

   <transition name="modal-transition">
      <div class="container">
         <form id="sign-in-form" v-on:submit.prevent="submit">
            <h1 class="header">Registration</h1>
            <input placeholder="name" class="input_data" v-model.trim="v$.firstName.$model"/>
            <div v-if="!v$.firstName.required" class="invalid-feedback">The first name field is required.</div>
            <input placeholder="second name" class="input_data" v-model.trim="lastName"/>
            <input placeholder="@email" class="input_data" v-model.trim="email"/>
            <input placeholder="password" type="password" class="input_data" v-model.trim="password"/>

            <button 
               class="button"
               @click="close"> Sign in </button>
         </form>
      </div>
   </transition>
  
</template>


<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: "regPage",
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  validations () {
    return {
      firstName: { required }, // Matches this.firstName
      lastName: { required }, // Matches this.lastName
      email: { required, email }, // Matches this.contact.email
      password: { required }
    }
  },
  methods:{
     submit: function(){
        this.v$.touch();
        if (this.v$.pendding || this.v$.error) return;

     },
     close(){
        this.$emit('close');
     }
  }
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

   .modal-transition-enter,
   .modal-transition-leave-to {
      opacity: 0;
   }

   .modal-transition-enter-active,
   .modal-transition-leave-active {
      transition: opacity .5s ease;
   }

   .container {
      position: fixed;

      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.3);

      display: flex;
      justify-content: center;
      align-items: center;

      z-index: 100;
   }

   form {
      width: 400px;
      background-color: var(--dark);
      border: 1px solid var(--blue);

      overflow-x: auto;
      display: flex;
      flex-direction: column;
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

   form .button{
      padding: 5px;
      font-size: 20px;

      margin: 40px;

      font-family: "Red Hat Mono", monospace;

      background-color: var(--dark);

      color: var(--accent);

      width: 300px;

      transition: border-bottom 0.4s;

      border: none;
   }
</style>
