<template>
  <div class="experiences-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>
          <New>Edit Experience</New>
        </h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Start Date:</label>
          <input type="string" class="form-control" v-model="experience.start_date" />
        </div>
        <div class="form-group">
          <label>End Date:</label>
          <input type="text" class="form-control" v-model="experience.end_date" />
        </div>
        <div class="form-group">
          <label>Job Title:</label>
          <input type="string" class="form-control" v-model="experience.job_title" />
        </div>
        <div class="form-group">
          <label>Company:</label>
          <input type="string" class="form-control" v-model="experience.company" />
        </div>
        <div class="form-group">
          <label>Detials:</label>
          <input type="text" class="form-control" v-model="experience.details" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
    <div>
      <button v-on:click="destoryExperience()">Destroy</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      experience: {},
      errors: [],
      student_id: localStorage.getItem("student_id")
    };
  },

  created: function() {
    axios.get("/api/experiences/" + this.$route.params.id).then(response => {
      this.experience = response.data;
      console.log(this.experience);
    });
  },

  methods: {
    submit: function() {
      var params = {
        start_date: this.experience.startDate,
        end_date: this.experience.endDate,
        job_title: this.experience.jobTitle,
        company: this.experience.company,
        deatils: this.experience.deatils,
        student_id: this.experience.studentId
      };
      axios
        .patch("/api/experiences/" + this.experience.id, params)
        .then(response => {
          this.$router.push("/students/" + this.student_id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    destoryExperience: function(experience) {
      axios.delete("/api/experiences/" + this.experience.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/students/" + this.student_id);
      });
    }
  }
};
</script>
