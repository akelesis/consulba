<template>
  <div class="about-container">
    <div class="about">
      <h1>O que é o CONSULBA?</h1>
      <p>
        O CONSULBA é um sistema pensado para conectar médicos e pacientes
        em situações onde há a impossibilidade ou restrição de locomoção.
        Utilizando a tecnologia para facilitar o acesso a um serviço de vital
        importância para a população em tempos de incerteza como este que vivemos
        O CONSULBA busca dirimir as dificuldades de diagnostico da população e, com isso,
        atingir uma maior eficácia na prevenção e combate ao COVID-19.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about-container {
  position: absolute;
  background-image: url("../assets/medico-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 90vh;
  z-index: -1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.about {
  width: 40vw;
  margin-left: 8vw;
  color: #2b729f;
}

.about p {
  text-align: justify;
  font-size: 20px;
}
</style>