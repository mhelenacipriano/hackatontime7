<template>

  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Serviços de checagem de Fake News
    </h2>

    <v-simple-table>
      <template>
        <thead>
          <tr>
            <th>
              (Nome) G1 - Fato ou Fake
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              (Descrição)
            </td>
            <td>
              link
            </td>
            <td>
              link
            </td>
          </tr>
        </tbody>

      </template>
    </v-simple-table>
  </v-container>  
</template>

<script>
  export default {
    name: 'paginaNoticias',

    
export default {
  name: 'NewsLista',
  data() {
      return {
        newsLlista: [
        ]
      }
    },
    created() {
      fetch('https://it3-hbn-default-rtdb.firebaseio.com/fakeNews.json')
          .then(resposta => resposta.json())
          .then(json => {
            this.newsLlista = json;
            console.log(this.newsLlista);
          });
    }
  }
</script>
