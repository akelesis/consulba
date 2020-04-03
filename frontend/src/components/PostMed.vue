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
    cursor: pointer;
    height: auto;
    width: 400px;
    box-shadow: 1px 1px 5px;
}

.postmed-container p{
    color: white;
    font-size: 20px;
    margin-left: 15px;
    width: 100vw;
}

</style>