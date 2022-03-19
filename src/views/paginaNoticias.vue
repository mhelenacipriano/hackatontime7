<template>

  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Serviços de checagem de Fake News
    </h2>

    <div class="editando-flex">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr v-for="dados of newsLlista" :key="dados.id">

            </tr>
          </thead>

          <tbody>
            <tr v-for="dados of newsLlista" :key="dados.id">
              <th>
                <a :href=dados.site>{{dados.nome}} </a>       
              </th>
              <td>
                {{dados.descricao}}  
              </td>
              <td>
                
              </td>
              <td>
                <v-img> 
                    <img :src="dados.imagem">
                </v-img>   
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

    
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
            console.log(this.newsLlista)    
          });
    },
    computed: {
    dadosListaOrdenada() {
        const listaOrdenada = this.listaPaises.slice(0).sort(
            (a, b) => a.pontos > b.pontos ? -1 : 1
        )
        return listaOrdenada
      }
    },
}
</script>


<style scoped>
.editando-flex{
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 25%;
}
img { 
  width: 10vh;
}
</style>