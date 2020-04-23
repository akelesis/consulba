<template>
  <div class="register-container">
    <div class="overlay">
      <div class="register-form">
        <h1>Cadastro Médico</h1>
        <form>
          <div class="input-group">
            <input type="text" placeholder="Nome Completo" v-model="doctor.name" />
          </div>
          <div class="input-group">
            <input type="email" placeholder="Email" v-model="doctor.email" />
          </div>
          <div class="input-group">
            <input type="text" placeholder="CRM" v-model="doctor.crm" />
            <select id="city-select" v-model="gender">
              <option disabled="disabled" value="null">Sexo</option>
              <option value="Masc">Masculino</option>
              <option value="Fem">Feminino</option>
            </select>
          </div>
          <div class="input-group">
            <select id="uf-select" v-model="state" @change="getCities()">
              <option disabled="disabled" value="null">UF</option>
              <option v-for="state in states" :key="state.id" :value="state">{{state.sigla}}</option>
            </select>
            <select id="city-select" v-model="city">
              <option disabled="disabled" value="null">Cidade</option>
              <option v-for="city in cities" :key="city.id" :value="city.nome">{{city.nome}}</option>
            </select>
          </div>
          <div class="input-group">
            <input type="password" placeholder="Senha" v-model="doctor.password" />
            <input
              type="password"
              placeholder="Confirmação de senha"
              v-model="doctor.confirm_password"
            />
          </div>
        </form>
        <button class="register-button" @click="register()">ENVIAR CADASTRO</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";
export default {
  data() {
    return {
      cities: [],
      states: [],
      city: null,
      state: null,
      gender: null,
      doctor: {}
    };
  },
  methods: {
    register() {
      this.doctor.city = this.city;
      this.doctor.uf = this.state.nome;
      this.doctor.gender = this.gender;

      axios
        .post(baseApiUrl + "/doctor", this.doctor)
        .then(() => {
          alert("Cadastro realizado com sucesso!");
          this.$router.push("/");
        })
        .catch(err => {
          alert(err);
        });
    },
    getStates() {
      axios
        .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
        .then(res => {
          this.states = res.data;
        });
    },
    getCities() {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.state.id}/municipios`
        )
        .then(res => {
          this.cities = res.data;
        });
    }
  },
  mounted() {
    this.getStates();
  }
};
</script>

<style>
.register-container {
  position: absolute;
  background-image: url("../assets/medico-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.overlay {
  height: 100%;
  width: 100%;
  background-color: #78bbe6aa;
  display: flex;
}

.register-form {
  width: 40vw;
  margin-left: 10vw;
  margin-top: 10vh;
  display: block;
  height: 40vh;
}

.register-form h1 {
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
}

.register-form form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
}

.input-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.input-group input:only-child {
  width: 100%;
}
.input-group input,
select {
  margin-top: 20px;
  width: 45%;
  height: 44px;
  border-radius: 5px;
  border: none;
  font-size: 25px;
  padding: 0 5px;
  background-color: #eeeeee;
  color: #444;
}

select {
  color: #777;
}

.register-button {
  width: 100%;
  margin-top: 20px;
  padding: 10px 0;
  font-size: 25px;
  border: none;
  border-radius: 5px;
  background-color: #3982b0;
  color: #ffffff;
  transition: filter 0.3s;
}

.register-button:hover {
  filter: hue-rotate(10deg) brightness(110%);
  cursor: pointer;
}
</style>