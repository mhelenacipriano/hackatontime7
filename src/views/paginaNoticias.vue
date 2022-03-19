<template>

  <v-container class="fundo">
    <h2 class="text-h5 text-center mb-3 mt-5">
      <strong>Serviços de Checagem de Fake News</strong>
      <p class="text-subtitle-2">Nessa página você encontra várias ferramentas de Fact Checking para conferir a veracidade da notícia que você recebeu.</p>
    </h2>

    <div class="editando-flex">
      <v-simple-table class="orange lighten-4">
         <template v-slot:default>
          <thead>
            <tr v-for="dados of newsLlista" :key="dados.id">

            </tr>
          </thead>

          <tbody>
            <tr v-for="dados of newsLlista" :key="dados.id">
              <th>
                <v-img> 
                    <img :src="dados.imagem">
                    
                </v-img> 
              
                <a :href=dados.site class="text-uppercase">{{dados.nome}} </a>       
              </th>
              <td>
                {{dados.descricao}}  
              </td>
              <td>
                
              </td>
              <td>
                
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
  text-align: justify;
}
img { 
  width: 10vh;
}
/* unvisited link */
a:link {
  color: #f57c00;
}


a:hover {
  color: #D84315;
}

.fundo{
  background-color: #FFF3E0;
}
</style>