<template>
  <div class="experiences-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>
          <New>Edit Education</New>
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
    <div>
      <button v-on:click="destoryEducation()">Destroy</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      education: {},
      errors: []
    };
  },

  created: function() {
    axios.get("/api/educations/" + this.education.id).then(response => {
      this.education = response.data;
      console.log(this.education);
    });
  },

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
          this.$router.push("/students/:id");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    destoryExperience: function(experience) {
      axios.delete("/api/experiences/" + this.experience.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/students/:id");
      });
    }
  }
};
</script>
