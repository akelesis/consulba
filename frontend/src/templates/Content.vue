<template>
  <div class="content-container" id="content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style>
#content {
  grid-area: content-area;
}
</style>