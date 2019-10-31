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
          <input type="text" class="form-control" v-model="skills.name" />
        </div>
        <div class="form-group">
          <label>Student ID:</label>
          <input type="integer4" class="form-control" v-model="skills.student_id" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      student_id: ""
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        student_id: this.studentId
      };
      axios
        .post("/api/skills", params)
        .then(response => {
          this.$router.push("/students/:id");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
