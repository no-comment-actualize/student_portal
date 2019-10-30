<template>
  <div class="experiences-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>
       <New>Add Experience</New>
        </h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Start Date:</label>
          <input type="string" class="form-control" v-model="experiences.start_date" />
        </div>
        <div class="form-group">
          <label>End Date:</label>
          <input type="text" class="form-control" v-model="experiences.end_date" />
        </div>
        <div class="form-group">
          <label>Job Title:</label>
          <input type="string" class="form-control" v-model="experiences.job_title" />
        </div>
        <div class="form-group">
          <label>Company:</label>
          <input type="string" class="form-control" v-model="experiences.company" />
        </div>
        <div class="form-group">
          <label>Detials:</label>
          <input type="text" class="form-control" v-model="experiences.details" />
        </div>
        <div class="form-group">
          <label>Student ID:</label>
          <input type="integer" class="form-control" v-model="experiences.student_id" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
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
      job_title: "",
      company: "",
      deatils: "",
      student_id: ""
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        start_date: this.startDate,
        end_date: this.endDate,
        job_title: this.jobTitle,
        company: this.company,
        deatils: this.deatils,
        student_id: this.studentId
      };
      axios
        .post("/api/experiences", params)
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
