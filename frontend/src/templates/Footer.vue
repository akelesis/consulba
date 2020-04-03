<template>
  <div class="footer-container" id="footer">
    <span>Desenvolvido por MVTech Solutions</span>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
#footer {
  grid-area: footer-area;
}

.footer-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: rgb(126, 150, 167);
  height: 75px;
  width: 100vw;
}

.footer-container span {
  color: white;
}
</style>