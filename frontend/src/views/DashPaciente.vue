<template>
  <div class="dashpaciente-container">
      <h1>Lista de Médicos</h1>
      <PostMed/>
  </div>
</template>

<script>
import PostMed from '../components/PostMed'

export default {
    name: "DashPaciente",
    components: {
        PostMed
    }
}
</script>

<style>
.dashpaciente-container {
    position: relative;
}

</style>