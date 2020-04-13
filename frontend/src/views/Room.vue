<template>
  <div class="room-container">
    <h1 class="title-room">ATENDIMENTO EM ANDAMENTO - [NOME DO PACIENTE]</h1>
    <div class="conference-container" id="conference-container"></div>
    <Button text="FINALIZAR ATENDIMENTO" />
  </div>
</template>

<script>
import Button from "../components/Button";
export default {
  components: {
    Button
  },
  data() {
    return {
      roomName: null
    };
  },
  methods: {
    initializeMedia() {
      const domain = "meet.jit.si/";
      const options = {
        roomName: "teste",
        width: 700,
        height: 500,
        parentNode: document.querySelector("#conference-container"),
        noSSL: false
      };
      const api = new window.JitsiMeetExternalAPI(domain, options);

      console.log(api);
    }
  },
  mounted() {
    this.initializeMedia();
  }
};
</script>

<style>
.room-container {
  width: 100vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.title-room {
  width: 99vw;
}

.conference-container {
  width: 100vw;
  height: 50vh;
}

.button-box {
  height: auto;
  margin-top: 20px;
  width: 50vw;
  display: flex;
  justify-content: center;
}
</style>