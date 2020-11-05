<template>
  <div>
    <b-row>
      <b-col xs="6" sm="6" md="6" lg="6" 
        offset-md="3">
        <div class="m-5">
          <img src="@/assets/png-avatar-logo.png" width="150">
          <h2>Cadastrar Pessoa</h2>
        </div>
        <b-form class="m-5" >
          <b-form-group>
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
  </div>
</template>

<script>
import { userComputed, userMethods } from '@/../helpers'
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
    ...userComputed
  },

  methods: {
   ...userMethods,
   cleanForm(){
    return this.user = {}  
   },

   addUser(){
     this.createUser(this.user).then(() => {
       this.cleanForm()
     })
   }
  }
}
</script>

<style>

</style>