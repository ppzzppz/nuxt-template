<template>
  <div>
    <div class="app--offline" v-show="$nuxt.isOffline">You have been offline</div>
    <nuxt />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";


@Component({
})
export default class App extends Vue {
}

</script>
<style>
.app--offline {
  text-align: center;
  color: #fff;
  background: #333;
  position: relative;
  z-index: 40;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #f5f5f5;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  word-break: break-word;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
