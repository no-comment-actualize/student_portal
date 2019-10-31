<template>
  <div class="skills-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>
          <New>Add Skill</New>
        </h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="skill.name" />
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
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        name: this.name
      };
      axios
        .post("/api/skills", params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/students/:id");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
