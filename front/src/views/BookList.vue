<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Listado de libros</h2>
        <!-- <b-button size="sm" :to="{name:'NewBook'}" variant="primary">
          Nuevo Libro
        </b-button> -->

        <div class="col-md-12">
          <b-table stripped hover :items="books" 
                    :fields="fields">

            <template slot:key="{action}">
                <b-button type="submit" variant="primary"
                          :to="{ name:'EditBook', params: {bookId: data.item.id} }">
                  Editar
                </b-button>
                <b-button type="submit" variant="danger"
                          :to="{ name:'DeleteBook', params: {bookId: data.item.id} }">
                  Eliminar
                </b-button>
            </template>

          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      fields: [
        { key: 'title', label: 'Titulo' },
        { key: 'description', label: 'Descripcion' },
        { key: 'action', label: 'Accion' },
      ],
      books: [],
    }
  },
  methods: {
    getBooks() {
      const path = 'http://localhost:8000/api/v1.0/books/'
      axios.get(path).then((response) => {
        this.books = response.data
      }) 
      .catch((error) => {
        console.log(error)
      })
    }
  },
  created() {
    this.getBooks()
  }
}
</script>
