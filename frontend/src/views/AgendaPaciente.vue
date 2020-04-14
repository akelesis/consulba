<template>
  <div class="agendapaciente-container">
    <span>{{ this.$store.state.medico.doctor_name }}</span>
    <div class="agendapaciente">
      <div class="date-paciente-container">
        <p>SELECIONE O DIA</p>
        <input id="data" type="date" v-model="actualDate" @change="showTimeOptions()"/>
        <Button text="MARCAR CONSULTA" color="background-color: rgb(71, 129, 175);" />
      </div>
      <div class="hour-paciente-container">
        <p>SELECIONE UM HORÁRIO DISPONÍVEL</p>
        <div class="hours-paciente">
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
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import TextBoxRadio from "../components/TextBoxRadio";
import axios from "axios";

export default {
  name: "AgendaPaciente",
  components: {
    Button,
    TextBoxRadio
  },
  data() {
    return {
      data: String,
      actualDate: String,
      horas: [],
      horasAux: [],
      medico: {}
    };
  },
  methods: {
    getHorarios() {
      axios
        .get(`http://localhost:3000/appointment/${this.$store.state.medico.doctor_id}`)
        .then(res => {
          this.horasAux = res.data
        })
        .catch(err => {
          alert(err);
        });
    },
    showTimeOptions(){
      this.horas = []
      for(let i = 0; i < this.horasAux.length; i++){
        if(this.horasAux[i].date == this.actualDate && this.horasAux[i].patient_name == " "){
          this.horas.push(this.horasAux[i])
        }
      }
      this.$forceUpdate()
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
</style>