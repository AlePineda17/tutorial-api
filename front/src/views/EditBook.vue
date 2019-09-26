<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Editar Libro</h2>
      </div>
    </div>
  

    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">

            <form @onSubmit="onSubmit">
              <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">
                  Titulo
                </label>
                <div class="col-sm-6">
                  <input type="text" placeholder="titulo" 
                  name="title" class="form-control" v-model.trim="form.title"> 
                </div>
              </div>

              <div class="form-group row">
                <label for="description" class="col-sm-2 col-form-label">
                  Descripcion
                </label>
                <div class="col-sm-6">
                  <textarea placeholder="descipcion" 
                        name="description" class="form-control" rows="3"
                        v-model.trim="form.description">
                  </textarea> 
                </div>
              </div>

              <div class="rows">
                <div class="col text-left">
                  <b-button type="submit" variant="primary">
                    Editar
                  </b-button> 
                  <b-button type="submit" class="btn-large-space" 
                            :to="{ name: 'booklist' }">Cancelar
                  </b-button> 
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      bookId: this.$route.params.bookId,
      form: {
        title: '',
        description: '',
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      const path = `https://localhost:8000/api/v1.0/books/${this.bookId}`
      axios.put(path, this.form).then((response) => {
        this.form.title = response.data.title
        this.form.description = response.data.description

        alert("libro actualizado exitosamente")
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getBook(){
      const path = `https://localhost:8000/api/v1.0/books/${this.bookId}`
      axios.get(path).then((response) => {
        this.form.title = response.data.title
        this.form.description = response.data.description
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  created(){
    this.getBook()
  }
}
</script>

<style>

</style>