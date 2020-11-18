<template>
  <b-row>
    <b-col xs="6" sm="6" md="6" lg="6" 
      offset-md="3">
      <div class="m-5">
        <img src="@/assets/png-avatar-logo.png" width="150">
        <h2>Cadastrar Pessoa</h2>
      </div>
      <b-form class="m-5" >
        <b-form-group>
          <div>
            <b-alert show variant="success" v-show="alertSuccess">Primary Alert</b-alert>
          </div>
          <b-form-input
            placeholder="Nome"
            v-model="user.name"
            type="text">
          </b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-input
            placeholder="Idade"
            v-model="user.age"
            type="number">
          </b-form-input>
        </b-form-group>

        <b-form-group>
          <b-button @click="addUser()">Criar</b-button>
        </b-form-group>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import { userComputed, userMethods, userState } from '@/../helpers'
export default {
  data(){
    return{
      user:{
        name: "",
        age: ""
      }
    }
  },

  computed:{
    ...userComputed,
    ...userState
  },

  methods: {
   ...userMethods,
   cleanForm(){
    return this.user = {}  
   },

   addUser(){
     this.createUser({user: this.user}).then(response => {
       if(response.status === 200){
         console.log('deu 200')
          this.success()
          this.cleanForm()
       }
     })
   }
  }
}
</script>

<style>

</style>