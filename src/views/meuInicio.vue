<template>
  <div class="fundo">
    <v-container class="home">
      <h2 class="text-h5 text-center mb-3 mt-5">
        <strong>Você não deve acreditar em tudo que vê na internet!</strong>
      </h2>
      <v-img
        class="img-inicio text-center mb-4"
        src="https://www.camara.leg.br/midias/image/2020/07/img20191024124354009-1-768x428.jpg"
      >
      </v-img>
      <p class="p-style text-justify" >
        No aplicativo <b>True or False</b> você encontrará tanto portais de notícia confiáveis como serviços de
        checagem de fake news. Verifique o que é
        verdade e o que é mentira nas mensagens disseminadas pelo celular e pela
        internet. Fuja da desinformação!
      </p>

      <h4 class="h4-decor">
        Se você quer se informar, separamos alguns sites confiáveis para você:
      </h4>
      <ul>
        <li><a href="https://g1.globo.com/" target=_blank>G1</a></li>
        <li><a href="https://www.cnnbrasil.com.br/" target=_blank>CNN</a></li>
        <li><a href="https://www.folha.uol.com.br/" target=_blank>Folha de São Paulo</a></li>
        <li><a href="https://veja.abril.com.br/" target=_blank>Veja</a></li>
      </ul>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "meuInicio",
};
</script>

<style scoped>
.img-inicio {
  border-radius: 10px;
}
.h4-decor {
  color: #f57c00;
}
a:visited {
    color: #f57c00;
}
a:link {
  color: #f57c00;
}
a:hover {
  color: #f57c00;
}
a:active {
  color: red;
}
.fundo{
  background-color: #FFF3E0;
}
</style>
