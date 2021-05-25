<template>
  <div class="UserD">
    <h3>Çocuk component 1 (UserDetails)</h3>
    <p>Ben User.vue isimli Parent Componentin içerisindeki bir child componentim</p>
    <p>kullanıcı adı (userdan geldi) : {{ name}}</p>
    <p>ismin tesrten yazılmış hali : {{terstenYaz()}}</p>
    <button @click="ParenteGönder()">Veriyi parant'a Gönder (User)</button>
    <p>kullanıcı yaşı :{{yas}}</p>

  </div>
</template>

<script>
import {yeniVue} from "@/main";
export default {
  name: "UserDetails",
  //props:["name"], //başka parantten veri almak için kullanılır. data nın kullanımından bir farkı yoktur. (1. kullanım)
  props:{
    //name :[String, Array] //gelen name verisinin string yada array olması gerektigini söylüyor (2. kullanım)
    name :{ //(3. kullanım)
      type:String, //veri türü belirtildi
      default : "dafault gelen veri" //veri gelmediği zaman default un ne olacagı belirtilmiş oldu
    },
    yas : String
  },
  methods:{
    terstenYaz (){
      return this.name.split("").reverse().join("") //props'un içindeki verilerlede oynayabiliriz.
    },
    ParenteGönder(){
      this.$emit("data","child'den gönderilen veri (UserDetails)"); //veri yaymayı sağlar
    }
  },
  created() {
    yeniVue.$on("yasDegisti",(yas) =>{ //userEdit deki key ve value yi aldık
      this.yas=yas;

    }) //event leri dinlemek için kullanılır
  }

}
</script>

<style scoped>
.UserD{
  padding: 25px;
  background-color: aliceblue;
  width: 45%;
  float: left;
}
</style>