<template>
  <div>
      {{users}}
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
   ...userMethods,
  },

  mounted(){
    this.loadList()
  }
}
</script>

<style>

</style>