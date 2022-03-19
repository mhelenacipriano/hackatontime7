<template>
  <div>
    <v-container class="home">
      <h2 class="text-h5 text-center mb-3 mt-5">
        <strong>Aqui você pode confiar</strong>
      </h2>
      <v-img
        class="img-inicio text-center mb-4"
        src="https://www.camara.leg.br/midias/image/2020/07/img20191024124354009-1-768x428.jpg"
      >
      </v-img>
      <p class="p-style">
        No aplicativo 'True or False' você contará com o serviço de
        monitoramento e checagem de conteúdos duvidosos que esclarece o que é
        falso ou verdadeiro em mensagens disseminadas pelo celular e pela
        internet.
      </p>

      <h4 class="h4-decor">
        Se você quer se informar, separamos alguns sites confiáveis para você:
      </h4>
      <ul> 
          <li><a href="https://g1.globo.com/">G1</a></li>
          <li><a href="https://www.cnnbrasil.com.br/">CNN</a></li>
          <li><a href="https://www.folha.uol.com.br/">Folha de São Paulo</a></li>
          <li><a href="https://veja.abril.com.br/">Veja</a></li>
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
</style>
