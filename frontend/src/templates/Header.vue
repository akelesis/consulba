<template>
  <div class="header-container">
    <div class="logo">
      CONSULBA
    </div>
    <nav id="menu">
      <div>O que é?</div>
      <div>Para médicos</div>
      <div>Para pacientes</div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header-container {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(71, 129, 175);
  height: 75px;
  width: 100vw;
  box-shadow: 5px 5px 8px;
}

.header-container .logo{
  cursor: pointer;
  margin-left: 30px;
  font-size: 30px;
  color: white;
}

#menu{
  width: 30vw;
  margin-right: 150px;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  color: white;
  padding-top: 15px;
}

#menu div{
  cursor: pointer;
}
</style>