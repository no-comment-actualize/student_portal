<template>
  <div class="home">
    <h1>Student</h1>
    Hello, I am student.
    <p>Edit Me</p>
    <p></p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      products: []
    };
  },
  created: function() {
    axios.get("/api/products").then(response => {
      this.products = response.data;
    });
  },
  methods: {}
};
</script>
