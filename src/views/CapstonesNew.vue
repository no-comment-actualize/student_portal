<template>
  <div class="capstones-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>
          <New>Add Capstone</New>
        </h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label>
          <input type="string" class="form-control" v-model="name" />
        </div>
        <div class="form-group">
          <label>Description:</label>
          <input type="text" class="form-control" v-model="description" />
        </div>
        <div class="form-group">
          <label>Url:</label>
          <input type="string" class="form-control" v-model="url" />
        </div>
        <div class="form-group">
          <label>Screenshot:</label>
          <input type="string" class="form-control" v-model="screenshot" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      description: "",
      url: "",
      screenshot: "",
      errors: [],
      student_id: localStorage.getItem("student_id")
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        description: this.description,
        url: this.url,
        screenshot: this.screenshot
      };
      axios
        .post("/api/capstones", params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/students/" + this.student_id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
