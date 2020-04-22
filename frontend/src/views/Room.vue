<template>
  <div class="room-container">
    <h1
      class="title-room"
    >ATENDIMENTO EM ANDAMENTO - {{ this.$store.state.appointment.patient_name.toUpperCase() }}</h1>
    <div class="call-container">
      <div class="conference-container" id="conference-container"></div>
    </div>
    <Button class="room-button" text="FINALIZAR ATENDIMENTO" @click.native="finalizaAtendimento()" />
  </div>
</template>

<script>
import Button from "../components/Button";
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  components: {
    Button
  },
  data() {
    return {
      roomName: `${this.$store.state.appointment.patient_name.split(" ")[0]}`
    };
  },
  methods: {
    initializeMedia() {
      let moment = Date.now();
      const domain = "meet.jit.si/";
      const options = {
        roomName: this.roomName + moment,
        width: 700,
        height: 500,
        parentNode: document.querySelector("#conference-container"),
        noSSL: false
      };
      const api = new window.JitsiMeetExternalAPI(domain, options);

      let mail = {
        patient_email: this.$store.state.appointment.patient_email,
        subject: "[CONSULBA] LINK DE CONSULTA DISPONÍVEL",
        text: `Olá ${
          this.$store.state.appointment.patient_name
        }\nO link da sua consulta já está disponível e deve ser acessado imediatamente, basta clicar no link a seguir\n\nhttps://meet.jit.si//${this
          .roomName + moment}`
      };

      console.log(api);

      axios
        .post(baseApiUrl + "/mail", mail)
        .then(() => {})
        .catch(err => {
          alert(err);
        });
    },
    finalizaAtendimento() {
      this.$store.state.appointment.done = true;
      axios
        .put(baseApiUrl + "/appointment", this.$store.state.appointment)
        .then(() => {
          alert("Atendimento finalizado!");
          this.$router.push("/dashmed");
        })
        .catch(err => {
          alert(err);
        });
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

.call-container {
  position: relative;
  height: auto;
}

.conference-container {
  width: 100vw;
  height: auto;
}

.room-button {
  position: relative;
  top: 20px;
}
</style>