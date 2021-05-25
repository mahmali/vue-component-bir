<template>
  <div class="UserE">
    <h3>Çocuk component 2 (UserEdit)</h3>
    <p>User.vue isimli componentin içerisindeki bir diger child component</p>
    <p>kullanıcı yaşı: {{yas}}</p>
    <button @click="degisenYas">Yaşı değiştir (diger childen gelen veri)</button>
  </div>
</template>

<script>
import {yeniVue} from "@/main";

export default {
  name: "UserEdit",
  props:["yas"],
  methods :{
    degisenYas(){
      this.yas=30
      //this.$emit("yasDegisti",this.yas) //(1. yol)
      //yeniVue.$emit("yasDegisti",this.yas) //kendi emit imiz ile yaptık (main.js içinde tanımladık) (2. yol)
      yeniVue.degisenYas(this.yas)
    }
  }

}
</script>

<style scoped>
.UserE{
  padding: 25px;
  background-color: darkorange;
  width: 45%;
  float: right;
}
</style>