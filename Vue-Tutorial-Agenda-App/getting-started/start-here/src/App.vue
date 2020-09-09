<template>
  <div class="app">
    <ul>
      <li>{{number + 1}}</li>
      <li>{{ok ? 'true' : 'false'}}</li>
      <li>Original message : {{message}}</li>
      <li>Reverse message : {{reversedMessage}}</li>
      <ol>
        <li v-for="todo in todos" v-bind:key="todo">{{ todo.text }}</li>
      </ol>
    </ul>
    <span v-if="visible">Now you see me</span>
    <HelloWorld />
  </div>
</template>



<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data: () => ({
    message: "Powered by MDB!",
    number: 5,
    ok: true,
    visible: false,
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ],
  }),
  computed: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>

<style>
.app {
  margin: 0 auto;
  font-family: sans-serif;
  background-color: #ccf7e2;
  padding: 10px;
  border-radius: 5px;
  max-width: 500px;
}
</style>

<style scpoped>
</style>