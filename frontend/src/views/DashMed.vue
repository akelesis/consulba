<template>
  <div class="dashmed-container">
    <span>Painel de Atendimentos</span>
    <div class="atendimentos-div">
        <div class="pacientes-div">
        </div>
    </div>
    <div class="button-box-dashmed">
        <Button
        text="ABRIR ATENDIMENTO"
        color="background-color: rgb(71, 129, 175);"
        />
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'

export default {
    name: "DashMed",
    components: {
        Button
    }
}
</script>

<style>
.dashmed-container {
    display: flex;
    flex-wrap: wrap;
}

.dashmed-container span {
    margin-top: 50px;
    color: rgb(58, 113, 158);
    font-size: 35px;
    width: 100vw;
    height: auto;
}

.atendimentos-div {
    display: flex;
    justify-content: center;
    width: 100vw;
}

.pacientes-div{
    overflow: hidden;
    overflow-y: scroll;
    background-color: #ccc7;
    margin-top: 50px;
    width: 70vw;
    height: 50vh;
}

.button-box-dashmed{
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-top: 3vw;
}
</style>