<template>
  <div class="capstones-edit">
    <form v-on:submit.prevent="submit()">
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>

      <div>
        Name:
        <input type="text" v-model="capstone.name" />
      </div>

      <div>
        Description:
        <input type="text" v-model="capstone.description" />
      </div>

      <div>
        URL:
        <input type="text" v-model="capstone.url" />
      </div>

      <div>
        Screenshot:
        <input type="text" v-model="capstone.screenshot" />
      </div>

      <div>
        <input type="submit" value="Update Capstone Info" />
      </div>

      <div class="destroy">
        <button v-on:click="destroyCapstone()">Delete This Capstone</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      capstone: {},
      errors: [],
      student_id: localStorage.getItem("student_id")
    };
  },
  created: function() {
    axios.get("api/capstones/" + this.$route.params.id).then(response => {
      this.capstone = response.data;
      console.log(this.capstone);
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.capstone.name,
        description: this.capstone.description,
        url: this.capstone.url,
        screenshot: this.capstone.screenshot
      };

      axios
        .patch("/api/capstones/" + this.capstone.id, params)
        .then(response => {
          this.$router.push("/students/" + this.student_id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    destroyCapstone: function() {
      axios.delete("/api/capstones/" + this.capstone.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/students/");
      });
    }
  }
};
</script>
