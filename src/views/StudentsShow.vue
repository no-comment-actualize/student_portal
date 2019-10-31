<template>
  <div class="students-show">
    <h1>{{ student.first_name }}</h1>
    <h1>{{ student.last_name }}</h1>
    <h2>{{ student.email }}</h2>
    <h2>{{ student.phone_number }}</h2>
    <h2>{{ student.bio }}</h2>
    <h2>{{ student.linkedin }}</h2>
    <h2>{{ student.twitter }}</h2>
    <h2>{{ student.website }}</h2>
    <h2>{{ student.resume }}</h2>
    <h2>{{ student.github }}</h2>
    <h2>{{ student.photo }}</h2>
    <router-link :to="`/students/${student.id}/edit`">Edit Student Information</router-link>

    <h1>Capstones</h1>
    <div v-for="capstone in student.capstones">
      <h2>{{ capstone.name }}</h2>
      <h2>{{ capstone.description }}</h2>
      <h2>{{ capstone.url }}</h2>
      <h2>{{ capstone.screenshot }}</h2>
      <h2>{{ capstone.student_id }}</h2>
      <router-link :to="`/capstones/${capstone.id}/edit`">Edit Capstone Information</router-link>
      |
      <router-link to="/capstones/new">New Capstone Information</router-link>
    </div>
    <h1>Education</h1>
    <div v-for="education in student.educations">
      <h2>{{ education.start_date }}</h2>
      <h2>{{ education.end_date }}</h2>
      <h2>{{ education.degree }}</h2>
      <h2>{{ education.university }}</h2>
      <h2>{{ education.details }}</h2>
      <h2>{{ education.student_id }}</h2>
      <router-link :to="`/educations/${education.id}/edit`">Edit Education Information</router-link>
      |
      <router-link to="/educations/new">New Education Information</router-link>
    </div>
    <h1>Experience</h1>
    <div v-for="experience in student.experiences">
      <h2>{{ experience.start_date }}</h2>
      <h2>{{ experience.end_date }}</h2>
      <h2>{{ experience.company }}</h2>
      <h2>{{ experience.job_title }}</h2>
      <h2>{{ experience.details }}</h2>
      <h2>{{ experience.student_id }}</h2>

      <router-link :to="`/experiences/${experience.id}/edit`">Edit Experience Information</router-link>
      |
      <router-link to="/experiences/new">New Experience Information</router-link>
    </div>
    <h1>Skill</h1>
    <div v-for="skill in student.skills">
      <h2>{{ skill.name }}</h2>
      <h2>{{ skill.student_id }}</h2>

      <router-link :to="`/skills/${skill.id}/edit`">Edit Skills Information</router-link>
      |
      <router-link to="/skills/new">New Skills Information</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student: {}
    };
  },
  created: function() {
    axios.get("/api/students/" + this.$route.params.id).then(response => {
      this.student = response.data;
      console.log(this.student);
    });
  },
  methods: {}
};
</script>
