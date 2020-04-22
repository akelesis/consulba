<template>
  <div class="agendamed-container">
    <span>CALENDÁRIO MÉDICO</span>
    <div class="agendamed">
      <div class="date-container">
        <p>SELECIONE O DIA</p>
        <input id="data" type="date" v-model="actualDate" />
        <Button
          text="CADASTRAR AGENDA DO DIA"
          color="background-color: rgb(71, 129, 175);"
          @click.native="cadastraAgenda()"
        />
      </div>
      <div class="hour-container">
        <p>SELECIONE OS HORÁRIOS DISPONÍVEIS</p>
        <div class="hours-med">
          <div class="hours-med-box">
            <TextBoxCheck
              v-for="hora in horas"
              :key="hora.appoint_id"
              :option="'hora_' + hora.appoint_id"
              :text="hora.time"
              :checkValue="hora.time"
              @click.native="addToHorasDisponiveis(hora.time)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import TextBoxCheck from "../components/TextBoxCheck";
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  name: "AgendaMed",
  components: {
    Button,
    TextBoxCheck
  },
  data() {
    return {
      actualDate: String,
      horasDisponiveis: [],
      auxHorasDisponiveis: [],
      horas: [
        { appoint_id: 1, time: "7:00" },
        { appoint_id: 2, time: "7:20" },
        { appoint_id: 3, time: "7:40" },
        { appoint_id: 4, time: "8:00" },
        { appoint_id: 5, time: "8:20" },
        { appoint_id: 6, time: "8:40" },
        { appoint_id: 7, time: "9:00" },
        { appoint_id: 8, time: "9:20" },
        { appoint_id: 9, time: "9:40" },
        { appoint_id: 10, time: "10:00" },
        { appoint_id: 11, time: "10:20" },
        { appoint_id: 12, time: "10:40" },
        { appoint_id: 13, time: "11:00" },
        { appoint_id: 14, time: "11:20" },
        { appoint_id: 15, time: "11:40" },
        { appoint_id: 16, time: "12:00" },
        { appoint_id: 17, time: "12:20" },
        { appoint_id: 18, time: "12:40" },
        { appoint_id: 19, time: "13:00" },
        { appoint_id: 20, time: "13:20" },
        { appoint_id: 21, time: "13:40" },
        { appoint_id: 22, time: "14:00" },
        { appoint_id: 23, time: "14:20" },
        { appoint_id: 24, time: "14:40" },
        { appoint_id: 25, time: "15:00" },
        { appoint_id: 26, time: "15:20" },
        { appoint_id: 27, time: "15:40" },
        { appoint_id: 28, time: "16:00" },
        { appoint_id: 29, time: "16:20" },
        { appoint_id: 30, time: "16:40" },
        { appoint_id: 31, time: "17:00" },
        { appoint_id: 32, time: "17:20" },
        { appoint_id: 33, time: "17:40" },
        { appoint_id: 34, time: "18:00" },
        { appoint_id: 35, time: "18:20" },
        { appoint_id: 36, time: "18:40" },
        { appoint_id: 37, time: "19:00" }
      ],
      appoint: {},
      flagHora: true,
      flagFunction: false
    };
  },
  methods: {
    setDate() {
      const data = new Date();

      this.actualDate =
        data.getFullYear() +
        "-" +
        ("0" + (data.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + data.getDate()).slice(-2);
    },
    async cadastraAgenda() {
      let horasFinais = [];

      this.horasDisponiveis.forEach(element => {
        if (element != 0) {
          horasFinais.push(element);
        }
      });

      horasFinais.sort();

      this.horasDisponiveis = horasFinais;

      this.appoint.doctor_id = this.$store.state.user.id;
      this.appoint.date = this.actualDate;
      this.appoint.patient_name = " ";
      this.appoint.patient_email = " ";

      let teste;

      for (let i = 0; i < this.horasDisponiveis.length; i++) {
        this.appoint.time = this.horasDisponiveis[i];

        teste = await axios.post(baseApiUrl + "/appointment", this.appoint);
      }

      alert("AGENDA DO DIA CADASTRADA COM SUCESSO!");

      return teste;
    },
    addToHorasDisponiveis(hora) {
      if (!this.flagFunction) {
        for (let i = 0; i < this.horasDisponiveis.length; i++) {
          if (this.horasDisponiveis[i] == hora) {
            this.horasDisponiveis[i] = 0;
            this.flagHora = false;
          }
        }
        if (this.flagHora) {
          this.horasDisponiveis.push(hora);
        }
        this.flagHora = true;
        this.flagFunction = true;
      } else {
        this.flagFunction = false;
      }
    }
  },
  mounted() {
    this.setDate();
  }
};
</script>

<style>
.agendamed-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.agendamed-container span {
  margin-top: 50px;
  color: rgb(58, 113, 158);
  font-size: 30px;
  width: 100vw;
  height: auto;
}

.agendamed {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80vw;
}

.agendamed input {
  color: #777;
}

.agendamed-container p {
  font-size: 25px;
  color: rgb(58, 113, 158);
}

.date-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 35vw;
  height: 50vh;
}

.date-container #data {
  font-size: 30px;
  width: 20vw;
  border: none;
  border-bottom: 2px solid;
}

.hours-med {
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  background-color: #ccc7;
  width: 30vw;
  height: 60vh;
}

.hours-med div {
  margin-top: 10px;
}
</style>