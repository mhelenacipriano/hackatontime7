<template class = "fundo">
  <v-container class="home">
    <h2 class="text-h6 text-left mb-3 mt-5">
      Recebeu alguma notícia falsa? Denuncie!
    </h2>

    <template>

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="30"
      :rules="nameRules"
      label="Nome"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

        <v-text-field
      v-model="link"
      label="Link da Fake News"
      required
    ></v-text-field>

    

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    
    >
      Denunciar
 
    </v-btn>

    <p id="imprime"></p>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Limpar
    </v-btn>
    
       
  </v-form>
</template>

  </v-container>
</template>

<script>
export default {
  name: 'paginaDenuncias',


  data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    
     
      
     data () {
    
    
  },  
    
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
        this.$refs.form.reset()
        this.printSubmissao();
      },
      reset () {
        this.$refs.form.reset()
      },
      
      printSubmissao(){
        var submissaoOk = "Sua denuncia foi recebida!";
        document.getElementById("imprime").innerHTML = submissaoOk;
      }
      
      
  
  }}
</script>



<style scoped>
.home-image {
  border-radius: 3px;
}
.fundo{
  background-color: #FFF3E0;
}
</style>
