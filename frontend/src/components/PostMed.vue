<template>
  <div class="postmed-container">
      <p>NOME</p>
      <p>Prox. Vaga:</p>
  </div>
</template>

<script>
export default {
    name: 'PostMed'
}
</script>

<style>
.postmed-container {
    background-color: rgb(125, 166, 199);
    position: relative;
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    height: 120px;
    width: 400px;
    box-shadow: 5px 5px 8px;
}

.postmed-container p{
    color: white;
    font-size: 20px;
    margin-left: 10px;
    width: 100vw;
}

</style>