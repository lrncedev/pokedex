<template>
  <div class="lds-dual-ring"></div>
</template>
<script>
export default {
  name: "LoaderComponent",
};
</script>
<style>
.lds-dual-ring {
  position: absolute;
  z-index: 10;
  /* top: 0; */
  /* right: 50%; */
  width: 100%;
  height: 100%;
  /* transform: translateX(-50%); */
  /* background-color: black; */
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 150px;
  height: 150px;
  margin: 8px;
  position: absolute;
  right: 45%;
  top: 30%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 20px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>