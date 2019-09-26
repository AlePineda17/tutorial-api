<template>
    <div class="container">
        <div class="row">
            <div class="col">

                <h3>Estas seguro que quieres eliminiar este libro?</h3>
                <p>Titulo: {{ this.element.title }}</p>
                <p>Descripcion: {{ this.element.descripcion }}</p>

            </div>
        </div>

        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteBook" variant="danger">Delete</b-button>
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
            element: {
                title: '',
                description:  ''
            }
        }
    },
    methods: {
        getBook(){
            const path = `https://localhost:8000/api/v1.0/books/${this.bookId}`
            axios.get(path).then((response) => {
                this.element.title = response.data.title
                this.element.description = response.data.description
            })
            .catch((error) => {
                console.log(error)
            })
        },
        deleteBook() {
            const path = `https://localhost:8000/api/v1.0/books/${this.bookId}`
            axios.delete(path).then((response) =>{
                location.href = '/books'
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
    
}
</script>

<style>

</style>