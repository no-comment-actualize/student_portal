<template>
  <div class="experiences-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>
       <New>Add Education</New>
        </h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Start Date:</label>
          <input type="string" class="form-control" v-model="educations.start_date" />
        </div>
        <div class="form-group">
          <label>End Date:</label>
          <input type="text" class="form-control" v-model="educations.end_date" />
        </div>
        <div class="form-group">
          <label>Degree:</label>
          <input type="string" class="form-control" v-model="educations.degree" />
        </div>
        <div class="form-group">
          <label>University:</label>
          <input type="string" class="form-control" v-model="educations.university" />
        </div>
        <div class="form-group">
          <label>Detials:</label>
          <input type="text" class="form-control" v-model="educations.details" />
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
      start_date: "",
      end_date: "",
      degree: "",
      university: "",
      deatils: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        start_date: this.startDate,
        end_date: this.endDate,
        degree: this.degree,
        university: this.university,
        deatils: this.deatils
      };
      axios
        .post("/api/educations", params)
        .then(response => {
          this.$router.push("/students/" + this.student.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
