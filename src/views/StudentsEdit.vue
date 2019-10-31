<template>
  <div class="students-edit">
    <form v-on:submit.prevent="submit()">
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>

      <div>
        First Name:
        <input type="text" v-model="student.first_name" />
      </div>

      <div>
        Last Name:
        <input type="text" v-model="student.last_name" />
      </div>

      <div>
        Email:
        <input type="text" v-model="student.email" />
      </div>

      <div>
        Phone Number:
        <input type="text" v-model="student.phone_number" />
      </div>

      <div>
        Bio:
        <input type="text" v-model="student.bio" />
      </div>

      <div>
        Linkedin:
        <input type="text" v-model="student.linkedin" />
      </div>

      <div>
        Twitter:
        <input type="text" v-model="student.twitter" />
      </div>

      <div>
        Website:
        <input type="text" v-model="student.website" />
      </div>

      <div>
        Resume:
        <input type="text" v-model="student.resume" />
      </div>

      <div>
        Github:
        <input type="text" v-model="student.github" />
      </div>

      <div>
        Photo:
        <input type="text" v-model="student.photo" />
      </div>

      <div>
        <input type="submit" value="Update Student Info" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      student: {},
      errors: [],
      student_id: localStorage.getItem("student_id")
    };
  },
  created: function() {
    axios.get("api/students/" + this.$route.params.id).then(response => {
      this.student = response.data;
      console.log(this.student);
    });
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.student.first_name,
        last_name: this.student.last_name,
        email: this.student.email,
        phone_number: this.student.phone_number,
        bio: this.student.bio,
        linkedin: this.student.linkedin,
        twitter: this.student.twitter,
        website: this.student.website,
        resume: this.student.resume,
        github: this.student.github,
        photo: this.student.photo
      };

      axios
        .patch("/api/students/" + this.student_id, params)
        .then(response => {
          this.$router.push("/students/" + this.student_id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
