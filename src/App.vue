<template>
  <div id="app">
    <div id="nav">
      <router-link :to="`/students/${student_id}`">Student</router-link>
      |
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link>
      |
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
      |
      <br />
      <router-link :to="`/students/${student_id}/edit`">Student Edit</router-link>
      |
      <br />
      <router-link to="/educations/new">Education New</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      student_id: localStorage.getItem("student_id")
    };
  },
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
