<template>
  <div class="header-container" id="header">
    <router-link to="/">
      <div class="logo">CONSULBA</div>
    </router-link>
    <nav id="menu" v-if="!user">
      <router-link to="/about">
        <div>O que é?</div>
      </router-link>
      <router-link to="/dashpaciente">
        <div>Para pacientes</div>
      </router-link>
      <router-link to="/login">
        <div>Login Médico</div>
      </router-link>
    </nav>
    <div class="dropdown" v-if="loggedIn()">
      <div class="greeting" @click="toggleMenu()">
        Olá
        <span v-if="user.gender == 'Masc'">Dr.</span>
        <span v-if="user.gender == 'Fem'">Dr.</span>
        {{user.name.split(' ')[0]}}!
        <i class="fas fa-caret-down"></i>
      </div>
      <div :class="dropdownMenu" id="dropdown-menu">
        <router-link to="/dashmed">
          <i class="far fa-calendar-alt"></i> Agenda
        </router-link>
        <router-link to="/agendamed">
          <i class="far fa-clock"></i> Horários
        </router-link>
        <a @click="logOut()">
          <i class="fas fa-sign-out-alt"></i> Logout
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      dropdownMenu: "dropdown-menu-hidden"
    };
  },
  methods: {
    loggedIn() {
      if (localStorage.getItem("__consulba_user")) {
        return true;
      } else {
        return false;
      }
    },
    keepData() {
      if (localStorage.getItem("__consulba_user")) {
        let aux = localStorage.getItem("__consulba_user");
        aux = JSON.parse(aux);
        this.$store.commit("setUser", aux);
      }
    },
    toggleMenu() {
      if (this.dropdownMenu == "dropdown-menu-hidden") {
        this.dropdownMenu = "dropdown-menu";
      } else {
        this.dropdownMenu = "dropdown-menu-hidden";
      }
    },
    logOut() {
      localStorage.removeItem("__consulba_user");
      let aux = null;
      this.$store.commit("setUser", aux);
      this.$router.push("/");
    }
  },
  mounted() {
    this.keepData();
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style>
#header {
  grid-area: header-area;
}

.header-container {
  z-index: 5;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  background-color: #3982b0;
  height: 75px;
  width: 100vw;
  box-shadow: 5px 5px 8px;
}

.header-container .logo {
  cursor: pointer;
  margin-left: 30px;
  font-size: 30px;
  color: white;
}

.header-container a {
  text-decoration: none;
  color: #fff;
}

.header-container a:hover {
  filter: brightness(80%);
}

#menu {
  width: 30vw;
  margin-right: 150px;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  color: white;
  padding-top: 15px;
}

.greeting {
  color: #fff;
  font-size: 20px;
  padding: 20px 5px;
  transition: background-color 0.3s;
}

.greeting:hover {
  background-color: #589bc5;

  cursor: pointer;
}

.dropdown {
  margin-right: 20px;
}

.dropdown-menu {
  position: absolute;
  right: 10px;
  width: 200px;
  height: auto;
  background-color: #78bbe6;
  box-shadow: 2px 1px 10px #333;
  transition: display ease 0.2s;
}

.dropdown-menu-hidden {
  display: none;
  transition: display ease 0.2s;
}

.dropdown-menu a {
  display: block;
  font-size: 20px;
  padding: 10px;
  transition: background-color 0.2s;
}

.dropdown-menu a:hover {
  filter: brightness(100%);
  background-color: #54a6da;
  cursor: pointer;
}

#menu div {
  cursor: pointer;
}
</style>