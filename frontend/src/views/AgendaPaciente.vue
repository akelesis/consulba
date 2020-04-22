<template>
  <div class="agendapaciente-container">
    <span>{{ this.$store.state.medico.doctor_name }}</span>
    <div class="agendapaciente">
      <div class="date-paciente-container">
        <p>SELECIONE O DIA</p>
        <input id="data" type="date" v-model="actualDate" @change="showTimeOptions()" />
        <Button
          text="MARCAR CONSULTA"
          color="background-color: rgb(71, 129, 175);"
          @click.native="openModal()"
        />
      </div>
      <div class="hour-paciente-container">
        <p>SELECIONE UM HORÁRIO DISPONÍVEL</p>
        <div v-if="horas.length != 0" class="hours-paciente">
          <div class="hours-paciente-box">
            <TextBoxRadio
              v-for="hora in horas"
              :key="hora.appoint_id"
              :option="'hora_' + hora.appoint_id"
              :text="hora.time"
              @click.native="getHora(hora)"
            />
          </div>
        </div>
        <div v-if="horas.length == 0" class="hours-paciente">
          <div class="hours-paciente-box">
            <p id="without-schedules">Sem horários no dia</p>
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-if="flagModal"
      id="patient-modal"
      text="CONFIRMAR CONSULTA"
      warning="*É necessário o uso de um email válido pois o link da video-consulta será enviado para este email no horário marcado"
    />
    <div v-if="flagModal" id="overlay" @click="closeModal"></div>
  </div>
</template>

<script>
import Button from "../components/Button";
import TextBoxRadio from "../components/TextBoxRadio";
import axios from "axios";
import Modal from "../components/Modal";
import { baseApiUrl } from "../global";

export default {
  name: "AgendaPaciente",
  components: {
    Button,
    TextBoxRadio,
    Modal
  },
  data() {
    return {
      actualDate: "",
      horas: [],
      horasAux: [],
      horaPaciente: "",
      medico: {},
      idHora: "",
      flagModal: false,
      flagFunction: false
    };
  },
  methods: {
    getHorarios() {
      axios
        .get(`${baseApiUrl}/appointment/${this.$store.state.medico.doctor_id}`)
        .then(res => {
          this.horasAux = res.data;
        })
        .catch(err => {
          alert(err);
        });
    },
    showTimeOptions() {
      this.horas = [];
      for (let i = 0; i < this.horasAux.length; i++) {
        if (
          this.horasAux[i].date == this.actualDate &&
          this.horasAux[i].patient_name == " "
        ) {
          this.horas.push(this.horasAux[i]);
        }
      }
      this.$forceUpdate();
    },
    getHora(hora) {
      if (!this.flagFunction) {
        this.horaPaciente = hora.time;
        this.idHora = hora.appoint_id;
        this.flagFunction = true;
      } else {
        this.flagFunction = false;
      }
    },
    openModal() {
      if (this.actualDate != "" && this.horaPaciente != "") {
        let appoint = {
          appoint_id: this.idHora,
          doctor_id: this.$store.state.medico.doctor_id,
          date: this.actualDate,
          time: this.horaPaciente
        };
        this.$store.state.appointment = appoint;
        this.flagModal = true;
      }
    },
    closeModal() {
      this.flagModal = false;
    }
  },
  mounted() {
    this.getHorarios();
  }
};
</script>

<style>
.agendapaciente-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: hidden;
}

.agendapaciente-container span {
  margin-top: 50px;
  color: rgb(58, 113, 158);
  font-size: 30px;
  width: 100vw;
  height: auto;
}

.agendapaciente {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80vw;
}

.agendapaciente input {
  color: #777;
}

.agendapaciente-container p {
  font-size: 25px;
  color: rgb(58, 113, 158);
}

.date-paciente-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 35vw;
  height: 50vh;
}

.date-paciente-container #data {
  font-size: 30px;
  width: 20vw;
  border: none;
  border-bottom: 2px solid;
}

.hours-paciente {
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  background-color: #ccc7;
  width: 30vw;
  height: 60vh;
}

.hours-paciente div {
  margin-top: 10px;
}

#without-schedules {
  font-size: 40px;
}

#patient-modal {
  animation-name: open-modal;
  animation-duration: 0.5s;
  top: 10vw;
  z-index: 4;
}

#overlay {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #d1d1d1;
  opacity: 0.5;
  z-index: 3;
}

@keyframes open-modal {
  from {
    visibility: hidden;
    top: 15vw;
    background-color: #efefef00;
  }
  to {
    visibility: visible;
    top: 10vw;
    background-color: #efefef;
  }
}
</style>