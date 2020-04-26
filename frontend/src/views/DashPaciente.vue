<template>
  <div class="dashpaciente-container">
    <span>Lista de Médicos</span>
    <div class="med-container">
      <PostMed
        v-for="medico in medicos"
        :key="medico.doctor_id"
        :nome="medico.doctor_name"
        @click.native="agendaConsulta(medico)"
      />
    </div>
  </div>
</template>

<script>
import PostMed from "../components/PostMed";
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  name: "DashPaciente",
  data() {
    return {
      medicos: []
    };
  },
  components: {
    PostMed
  },
  methods: {
    agendaConsulta(medico) {
      this.$store.state.medico = medico;
      this.$router.push("/agendapaciente");
    },
    getMedico() {
      axios
        .get(baseApiUrl + "/doctor")
        .then(res => {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].doctor_active) {
              this.medicos.push(res.data[i]);
            }
            console.log(JSON.stringify(res.data[i]))
          }
          
          for (let i = 0; i < this.medicos.length; i++) {
            if (this.medicos[i].doctor_gender == "Masc") {
              this.medicos[i].doctor_name =
                "Dr. " + this.medicos[i].doctor_name;
            } else {
              this.medicos[i].doctor_name =
                "Dra. " + this.medicos[i].doctor_name;
            }
          }
        })
        .catch(err => {
          alert(err);
        });
    }
  },
  mounted() {
    this.getMedico();
  }
};
</script>

<style>
.dashpaciente-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.dashpaciente-container span {
  margin-top: 50px;
  color: rgb(58, 113, 158);
  font-size: 35px;
  width: 100vw;
}

.med-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 80vw;
  height: auto;
}

.med-container div {
  margin-top: 40px;
  margin-right: 45px;
}

/* .dashpaciente-page {
    display: flex;
    width: 100vw;
    justify-content: center;
    margin-top: 30px;
}

.dashpaciente-page p {
    font-size: 25px;
    margin-left: 10px;
    margin-right: 10px;
    color: rgb(125, 166, 199);
} */
</style>