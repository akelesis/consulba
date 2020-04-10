<template>
  <div class="agendapaciente-container">
    <span>{{ this.$store.state.medico.doctor_name }}</span>
    <div class="agendapaciente">
      <div class="date-paciente-container">
        <p>SELECIONE O DIA</p>
        <input id="data" type="date" v-model="actualDate">
        <Button 
          text="MARCAR CONSULTA" 
          color="background-color: rgb(71, 129, 175);"
        />
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
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
import TextBoxRadio from '../components/TextBoxRadio'
//import axios from 'axios'

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
        horas: [
          {appoint_id: 1, time: "7:00"}, 
          {appoint_id: 2, time: "7:20"}, 
          {appoint_id: 3, time: "7:40"}
        ]
      }
    },
    methods: {
      setDate() {
        const data = new Date()

        this.actualDate = data.getFullYear() + 
        '-' + ("0" + (data.getMonth() + 1)).slice(-2) + 
        '-' + ("0" + data.getDate()).slice(-2)
      }
    },  
    mounted() {
      this.setDate()
    }
}
</script>

<style>
.agendapaciente-container{
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

.agendapaciente{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80vw;
}

.agendapaciente-container p{
  font-size: 25px;
  color: rgb(58, 113, 158);
}

.date-paciente-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 35vw;
  height: 50vh;
}

.date-paciente-container #data{
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

.hours-paciente div{
  margin-top: 10px;
}
</style>