<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>BUrası parent component yani her şeyin import edildiği component</p>
    <button @click="tikla">Adımı degiştir.</button>
    <p>User Details (child component) den gelen veri: {{childData}}</p>
    <hr>
    <p>kullanıcı yası: {{yas}}</p>
    <div class="row">
      <appUserDetail id="UserD" :yas="yas" @data="childData = $event" v-bind:name="title"></appUserDetail>
      <appUserEdit id="UserE" :yas="yas" @yasDegisti="yas=$event"></appUserEdit>
    </div>
  </div>

</template>

<script>
import UserDetail from "./UserDetails";
import UserEdit from "@/components/UserEdit";
export default {
  components:{
    appUserDetail :UserDetail,
    appUserEdit : UserEdit,
  },
  data:function (){
    return{
      title: "muhammed ali akkaya (Userdan gönderildi)",
      childData: "",  //boş string veri
      yas:25
    }
  },
  methods:{
    tikla(){
      this.title="ahmet zahit akkaya (butona tıklama işlemi gerçekleştirildi.)"
    }
  }
}
</script>

<style scoped>
  .container{
    margin-top: 30px;
    margin-left: 100px;
    margin-right: 100px;
    background-color: #42b983;
    padding: 25px;
    height: 500px;
  }


</style>