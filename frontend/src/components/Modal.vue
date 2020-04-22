<template>
  <div class="modal-container">
    <div class="modal-header">
      <p>{{ text }}</p>
      <hr />
    </div>
    <div class="input-group-modal">
      <input type="text" id="patient-name" placeholder="Nome Completo" v-model="name" />
      <input type="email" id="patient-email" placeholder="Email" v-model="email" />
    </div>
    <small>{{ warning }}</small>
    <Button text="Enviar" id="button-modal" @click.native="updateAppoint()" />
  </div>
</template>

<script>
import Button from "./Button";
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  name: "Modal",
  data() {
    return {
      name: "",
      email: ""
    };
  },
  props: {
    text: String,
    warning: String
  },
  components: {
    Button
  },
  methods: {
    updateAppoint() {
      let appoint = this.$store.state.appointment;

      appoint.patient_name = this.name;
      appoint.patient_email = this.email;

      axios
        .put(baseApiUrl + "/appointment", appoint)
        .then(() => {
          alert("Horário Marcado com sucesso!");
          this.$store.state.appointment = {};
          this.$router.push("/");
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style>
.modal-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  width: 50vw;
  height: 60vh;
  border-radius: 5px;
  box-shadow: 0 2px 10px #0005;
  background-color: #efefef;
}

.modal-header {
  width: 42vw;
}

.modal-header hr {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #aaa, #ccc);
}

.input-group-modal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
}

.modal-container input {
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 25px;
  padding: 7px 5px;
  width: 35vw;
  color: #777;
}

.modal-container small {
  font-size: 20px;
  color: #777;
  text-align: justify;
  width: 35vw;
}

#button-modal {
  width: 35vw;
  height: 5vh;
  margin-bottom: 50px;
}
</style>