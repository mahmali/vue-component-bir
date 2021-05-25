import Vue from 'vue'
import App from './App.vue'

//export const yeniVue = new Vue(); //bu sayede parentteki veri degişmedi childler kendi aralarında veri gönderme işemleri yapdılar (evetBus = yenivue)
//yukarıdaki yorum satırının diger versyonu aşagıdadır.
export const yeniVue = new Vue({
  methods:{
    data:{ //burası obje olmak zorunda

    },
    degisenYas(yas) {
      this.$emit("yasDegisti",yas)
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
