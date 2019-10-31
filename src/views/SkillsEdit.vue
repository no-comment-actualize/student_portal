<template>
  <div class="skills-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>
          <New>Edit Skills</New>
        </h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label>
          <input type="string" class="form-control" v-model="skill.name" />
        </div>
        <div class="form-group">
          <label>Student ID:</label>
          <input type="integer" class="form-control" v-model="skill.student_id" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
    <div>
      <button v-on:click="destorySKills()">Destroy</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      skill: {},
      errors: [],
      student_id: localStorage.getItem("student_id")
    };
  },

  created: function() {
    axios.get("/api/skills/" + this.$route.params.id).then(response => {
      this.skill = response.data;
      console.log(this.skill);
    });
  },

  methods: {
    submit: function() {
      var params = {
        name: this.skill.name,
        student_id: this.skill.studentId
      };
      axios
        .post("/api/skills", params)
        .then(response => {
          this.$router.push("/students/" + this.student_id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    destorySkill: function(skill) {
      axios.delete("/api/skills/" + this.education.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/students/" + this.student_id);
      });
    }
  }
};
</script>
