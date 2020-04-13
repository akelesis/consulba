<template>
  <div class="postmed-container">
      <p id="medico-post">{{ nome }}</p>
  </div>
</template>

<script>
export default {
    name: 'PostMed',
    props: {
        nome: String,
        vaga: String
    }
}
</script>

<style>
.postmed-container {
    display: flex;
    background-color: rgb(125, 166, 199);
    flex-wrap: wrap;
    text-align: left;
    align-items: center;
    cursor: pointer;
    min-height: 100px;
    width: 400px;
    box-shadow: 1px 1px 5px;
}

.postmed-container p{
    color: white;
    font-size: 25px;
    margin-left: 15px;
    width: 100vw;
    margin-top: 0;
    margin-bottom: 0;
}

#medico-post {
    font-size: 35px;
}

</style>