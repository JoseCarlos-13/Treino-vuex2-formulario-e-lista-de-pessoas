<template>
  <div>
    <b-col xs="6" sm="6" md="6" lg="6" 
      offset-md="5">
      <tr>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
      <tr v-for="u in users" :key="u.id">
        <td>{{u.user.name}}</td>
        <td>{{u.user.age}}</td>
      </tr>
    </b-col>
    
    
  </div>
</template>

<script>
import { userComputed, userMethods, userState } from '@/../helpers'

export default {
  computed:{
    ...userState,
    ...userComputed
  },

  methods: {
   ...userMethods
  },

  mounted(){
    this.loadList()
  }
}
</script>

<style>

</style>