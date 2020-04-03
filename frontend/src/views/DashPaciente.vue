<template>
  <div class="dashpaciente-container">
      <span>Lista de Médicos</span>
      <div class="med-container">
          <PostMed/>
          <PostMed/>
          <PostMed/>
          <PostMed/>
          <PostMed/>
          <PostMed/>
          <PostMed/>
          <PostMed/>
          <PostMed/>
      </div>
      <div class="dashpaciente-page">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
      </div>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.dashpaciente-container span{
    margin-top: 50px;
    color: rgb(58, 113, 158);
    font-size: 35px;
    width: 100vw;
}

.med-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80vw;
    height: auto;
}

.med-container div {
    margin-top: 40px;
}

.dashpaciente-page {
    display: flex;
    width: 100vw;
    justify-content: center;
    margin-top: 30px;
}

.dashpaciente-page p {
    font-size: 25px;
    margin-left: 10px;
    margin-right: 10px;
    color: rgb(125, 166, 199);
}
</style>