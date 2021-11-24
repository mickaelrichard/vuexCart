<template>
  <div v-if="loading" className="loading">
    <h1>Loading...</h1>
  </div>
  <div v-else>
    <Navbar />
    <CartContainer />
  </div>
</template>

<script>
import "./assets/style.css";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  components: { CartContainer, Navbar },
  data() {
    return {};
  },
  computed: {
    ...mapState(["loading"]),
  },
  methods: {
    ...mapMutations(["getTotals"]),
  },
  mounted() {
    this.getTotals();
  },
};
</script>

<style></style>
