<template>

  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Serviços de checagem de Fake News
    </h2>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr v-for="dados of newsLlista" :key="dados.id">
            <th>
              {{newsLlista.descricao}}             
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="dados of newsLlista" :key="dados.id">
            <td>
              {{dados.nome}}  
            </td>
            <td>
              (site)
            </td>
            <td>
              (imagem)
            </td>
          </tr>
        </tbody>

      </template>
    </v-simple-table>
  </v-container>  
</template>

<script>
    
export default {
  name: 'NewsLista',
  data() {
      return {
        newsLlista: []
      }
    },
    
    created() {
      fetch('https://it3-hbn-default-rtdb.firebaseio.com/fakeNews.json')
          .then(resposta => resposta.json())
          .then(json => {
            this.newsLlista = json;
          });
    },
    computed: {
    clubesOrdenados() {
      const computado = this.newsLlista.slice(0).sort(
        (a, b) =>  a.pontos > b.pontos ? -1 : 1
      );
      return computado;
    }
  }
    
  }
</script>
