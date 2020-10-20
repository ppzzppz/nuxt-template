<template>
  <div>Hello {{name}}</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import config from "@/project"
import { AutoCatchAndShowAnError } from "@/caught/caught";
import { helloApi } from "@/api/hello";

@Component({})
export default class Helloworld extends Vue {
  name = config.name 

  mounted(){
    this.installData()
  }
  @AutoCatchAndShowAnError()
  async installData(){
    let hello = await helloApi()
    // Some logic ...
  }
}
</script>
<style lang="scss" scoped>
</style>