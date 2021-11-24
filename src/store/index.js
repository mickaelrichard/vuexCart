import { createStore } from "vuex";
import carts from "../data";
// const url = "https://course-api.com/react-useReducer-cart-project";

export default createStore({
  state: {
    cart: carts,
    amount: 0,
    total: 0,
    loading: false,
  },
  mutations: {
    clearCart(state) {
      state.cart = [];
    },
    removeItem(state, payload) {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
    },
    increase(state, payload) {
      state.cart = state.cart.map((item) => {
        if (item.id === payload.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      console.log(state.cart);
    },

    decrease(state, payload) {
      state.cart = state.cart
        .map((item) => {
          if (item.id === payload.id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      console.log(state.cart);
    },
    getTotals(state) {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      console.log("total,amount", total, amount);
      state.total = total;
      state.amount = amount;
    },
    setLoading(state) {
      state.loading = true;
    },
    setLoadingFalse(state) {
      state.loading = false;
    },
    displayItems(state, payload) {
      state.cart = payload;
      state.loading = false;
    },
  },
  actions: {
    async fetchData({ commit, state }) {
      commit("setLoading");
      const response = await fetch(url);
      const cart = await response.json();
      commit("displayItems", cart);
    },
  },
  modules: {},
});
