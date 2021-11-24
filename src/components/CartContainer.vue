<template>
  <section class="cart" v-if="cart.length === 0">
    <header>
      <h2>your bag</h2>
      <h4 class="empty-cart">is currently empty</h4>
    </header>
  </section>
  <section class="cart" v-else>
    <header>
      <h2>your bag</h2>
    </header>

    <div>
      <CartItem v-for="item in cart" :key="item.id" :item="item" />
    </div>

    <footer>
      <hr />
      <div class="cart-total">
        <h4>
          total <span>${{ total }}</span>
        </h4>
      </div>
      <button class="btn clear-btn" @click="clear">clear cart</button>
    </footer>
  </section>
</template>
<script>
import CartItem from "./CartItem";
import items from "../data";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CartContainer",
  components: { CartItem },
  data() {
    return {
      carts: null,
    };
  },
  methods: {
    ...mapMutations(["clearCart", "getTotals"]),
    // ...mapActions(["fetchData"]),
    clear() {
      this.clearCart();
      this.getTotals();
    },
  },
  computed: {
    ...mapState(["cart", "total"]),
  },

  //   async beforeMount() {
  //     await this.fetchData();
  //     this.carts = this.cart;
  //   },
};
</script>
