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
          <input type="string" class="form-control" v-model="education.start_date" />
        </div>
        <div class="form-group">
          <label>End Date:</label>
          <input type="text" class="form-control" v-model="education.end_date" />
        </div>
        <div class="form-group">
          <label>Degree:</label>
          <input type="string" class="form-control" v-model="education.degree" />
        </div>
        <div class="form-group">
          <label>University:</label>
          <input type="string" class="form-control" v-model="education.university" />
        </div>
        <div class="form-group">
          <label>Detials:</label>
          <input type="text" class="form-control" v-model="education.details" />
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
      errors: [],
      student_id: localStorage.getItem("student_id")
    };
  },

  created: function() {
    axios.get("/api/educations/" + this.$route.params.id).then(response => {
      this.education = response.data;
      console.log(this.education);
    });
  },

  methods: {
    submit: function() {
      var params = {
        start_date: this.education.startDate,
        end_date: this.education.endDate,
        degree: this.education.degree,
        university: this.education.university,
        deatils: this.education.deatils
      };
      axios
        .post("/api/educations" + this.education.id, params)
        .then(response => {
          this.$router.push("/students/" + this.student_id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    destoryExperience: function(experience) {
      axios.delete("/api/educations/" + this.education.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/students/" + this.student_id);
      });
    }
  }
};
</script>
