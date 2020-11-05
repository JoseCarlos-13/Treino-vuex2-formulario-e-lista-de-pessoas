<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-navbar-brand>Test</b-navbar-brand>

        <div class="separator ml-0 mr-3"></div>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mr-auto">
            <b-nav-item><router-link to="/usuarios">Usuários</router-link></b-nav-item>
            <b-nav-item><router-link to="/">Cadastro</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>

export default {

}
</script>

<style>
  a{
    color: white !important;
  }

  a:hover{
    text-decoration: none !important;
  }

  .separator{
    height: 30px;
    border: 1px solid white;
  }
</style>