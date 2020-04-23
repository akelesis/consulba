<template>
  <div class="login-container">
    <div class="overlay">
      <div class="login-form">
        <h1>LOGIN</h1>
        <form>
          <div class="input-group-login">
            <input type="email" placeholder="Email" v-model="email" />
          </div>
          <div class="input-group-login">
            <input type="password" placeholder="Password" v-model="password" />
          </div>
          <small class="login-msg">
            <router-link to="/recover">Esqueci a senha</router-link>
          </small>
        </form>
        <button class="login-button" @click="login()">ENTRAR</button>
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
      email: null,
      password: null
    };
  },
  methods: {
    login() {
      axios
        .post(baseApiUrl + "/auth", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          this.$store.commit("setUser", res.data);
          localStorage.setItem("__consulba_user", JSON.stringify(res.data));
          this.$router.push({ path: "/" });
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style>
.login-container {
  position: absolute;
  background-image: url("../assets/medico-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 95vh;
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

.login-form {
  width: 30vw;
  margin-left: 10vw;
  margin-top: 20vh;
  display: block;
  height: 20vh;
}

.login-form h1 {
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
}

.login-form form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.input-group-login + .input-group-login {
  margin-top: 50px;
}

.input-group-login input:only-child {
  width: 100%;
}
.input-group-login input,
select {
  width: 45%;
  height: 44px;
  border-radius: 5px;
  border: none;
  font-size: 25px;
  padding: 0 5px;
  background-color: #eeeeee;
  color: #444;
}

.login-msg {
  text-align: left;
  margin: 10px 0 0 10px;
}

.login-msg a {
  text-decoration: none;
  color: #557ca4;
  font-size: 20px;
}

.login-msg a:hover {
  filter: hue-rotate(-30deg) brightness(120%);
}

.login-button {
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

.login-button:hover {
  filter: hue-rotate(10deg) brightness(110%);
  cursor: pointer;
}
</style>