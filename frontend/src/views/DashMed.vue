<template>
  <div class="dashmed-container">
    <span>Painel de Atendimentos</span>
    <div class="atendimentos-div">
      <div class="pacientes-div">
        <div class="pacientes-box">
          <TextBoxRadio
            v-for="paciente in pacientes"
            :key="paciente.appoint_id"
            :option="'paciente_' + paciente.appoint_id"
            :text="paciente.time + ' - ' + paciente.patient_name"
            @click.native="setAppointment(paciente)"
          />
        </div>
      </div>
    </div>
    <div class="button-box-dashmed">
      <Button
        text="ABRIR ATENDIMENTO"
        color="background-color: rgb(71, 129, 175);"
        @click.native="saveAppointment()"
      />
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import TextBoxRadio from "../components/TextBoxRadio";
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  name: "DashMed",
  components: {
    Button,
    TextBoxRadio
  },
  data() {
    return {
      pacientes: [],
      pacientesAux: [],
      appointment: this.$store.state.appointment
    };
  },
  methods: {
    setAppointment(paciente) {
      this.appointment = paciente;
    },
    saveAppointment() {
      this.$store.state.appointment = this.appointment;
      this.$router.push(`/room/${this.$store.state.user.id}`);
    },
    getAppointments() {
      axios
        .get(`${baseApiUrl}/appointment/${this.$store.state.user.id}`)
        .then(res => {
          this.pacientesAux = res.data;
          this.setPacientes();
        })
        .catch(err => {
          alert(err);
        });
    },
    setPacientes() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0");
      let yyyy = today.getFullYear();

      today = yyyy + "-" + mm + "-" + dd;

      for (let i = 0; i < this.pacientesAux.length; i++) {
        if (
          this.pacientesAux[i].patient_name != " " &&
          this.pacientesAux[i].date == today &&
          !this.pacientesAux[i].done
        ) {
          this.pacientes.push(this.pacientesAux[i]);
        }
      }
    }
  },
  mounted() {
    this.getAppointments();
  }
};
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

.pacientes-div {
  overflow-y: scroll;
  background-color: #ccc7;
  margin-top: 50px;
  width: 75vw;
  height: 50vh;
}

.pacientes-div div {
  margin: 10px;
}

.pacientes-box {
  display: flex;
  flex-wrap: wrap;
  height: auto;
}

.button-box-dashmed {
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 3vw;
}
</style>