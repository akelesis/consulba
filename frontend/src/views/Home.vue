<template>
  <div class="home">
    <div class="button-box">
      <Button
        text="Quero marcar a minha consulta"
        @click.native="redirectConsul()"
        color="background-color: #78BBE6;"
      />
      <Button
        text="Sou médico e quero me cadastrar"
        @click.native="redirectReg()"
        color="background-color: #467695;"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "../components/Button";
export default {
  name: "Home",
  components: {
    Button
  },
  methods: {
    redirectReg() {
      this.$router.push("/register");
    },
    redirectConsul() {
      this.$router.push("/dashpaciente")
    }
  }
};
</script>

<style>
.home {
  position: absolute;
  background-image: url("../assets/medico-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 90vh;
  z-index: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.button-box {
  margin-left: 10vw;
  width: 40vw;
  height: 40vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
}
</style>
