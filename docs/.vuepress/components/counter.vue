<template>
  <div class="counter">
    <h2>{{ number }}</h2>
    <button @click="increment">Increase</button>
    <button @click="decrement">Decrease</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0
    };
  },
  methods: {
    increment() {
      if (this.number >= 0) {
        this.number++;
      }
    },
    decrement() {
      if (this.number > 0) {
        this.number--;
      }
    }
  }
};
</script>

<style scoped>
.counter {
  display: inline-block;
  margin-left: 30%;
  font-size: 30px;
}

button {
  background-color: #42b883 ; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 2px;
}

h2 {
  text-align: center;
}
</style>