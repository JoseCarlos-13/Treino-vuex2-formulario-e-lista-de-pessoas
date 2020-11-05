<template>
  <div>
    <Topbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from '../components/Topbar/Topbar'

export default {
   components:{
    Topbar
  },
}
</script>

<style>

</style>