<template>
  <div class="students-show">
    First name:
    <h1>{{ student.first_name }}</h1>
    Last Name:
    <h1>{{ student.last_name }}</h1>
    Email:
    <h2>{{ student.email }}</h2>
    Number:
    <h2>{{ student.phone_number }}</h2>
    bio:
    <h2>{{ student.bio }}</h2>
    LinkedIn
    <h2>{{ student.linkedin }}</h2>
    Twitter
    <h2>{{ student.twitter }}</h2>
    Website:
    <h2>{{ student.website }}</h2>
    Resume:
    <h2>{{ student.resume }}</h2>
    Github:
    <h2>{{ student.github }}</h2>
    Photo:
    <h2>{{ student.photo }}</h2>
    <router-link :to="`/students/${student.id}/edit`">Edit Student Information</router-link>

    <h1>Capstones</h1>
    <div v-for="capstone in student.capstones">
      Name:
      <h2>{{ capstone.name }}</h2>
      Description:
      <h2>{{ capstone.description }}</h2>
      Url:
      <h2>{{ capstone.url }}</h2>
      Screenshot:
      <h2>{{ capstone.screenshot }}</h2>
      StudentID:
      <h2>{{ capstone.student_id }}</h2>
      <router-link :to="`/capstones/${capstone.id}/edit`">Edit Capstone Information</router-link>
      |
      <router-link to="/capstones/new">New Capstone Information</router-link>
    </div>
    <h1>Education</h1>
    <div v-for="education in student.educations">
      StartDate:
      <h2>{{ education.start_date }}</h2>
      EndDate:
      <h2>{{ education.end_date }}</h2>
      Degree
      <h2>{{ education.degree }}</h2>
      University:
      <h2>{{ education.university }}</h2>
      Details:
      <h2>{{ education.details }}</h2>
      StudentID:
      <h2>{{ education.student_id }}</h2>
      <router-link :to="`/educations/${education.id}/edit`">Edit Education Information</router-link>
      |
      <router-link to="/educations/new">New Education Information</router-link>
    </div>
    <h1>Experience</h1>
    <div v-for="experience in student.experiences">
      StartDate:
      <h2>{{ experience.start_date }}</h2>
      EndDate:
      <h2>{{ experience.end_date }}</h2>
      Company:
      <h2>{{ experience.company }}</h2>
      JobTitle:
      <h2>{{ experience.job_title }}</h2>
      Details:
      <h2>{{ experience.details }}</h2>
      Experience:
      <h2>{{ experience.student_id }}</h2>

      <router-link :to="`/experiences/${experience.id}/edit`">Edit Experience Information</router-link>
      |
      <router-link to="/experiences/new">New Experience Information</router-link>
    </div>
    <h1>Skill</h1>
    <div v-for="skill in student.skills">
      Name:
      <h2>{{ skill.name }}</h2>
      StudentID:
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
