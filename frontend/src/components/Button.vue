<template>
  <button class="main-button" :style="color">{{text}}</button>
</template>

<script>
export default {
  props: {
    text: String,
    color: String
  }
};
</script>

<style>
.main-button {
  border: none;
  width: 440px;
  height: 67px;
  font-size: 27px;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px #444;
  transition: filter 0.2s;
  transition: box-shadow 0.2s;
  outline: none;
  background-color: #3982b0;
}

.main-button:hover {
  filter: brightness(110%);
}

.main-button:active {
  filter: brightness(90%);
  box-shadow: 0 1px 2px #222;
}
</style>