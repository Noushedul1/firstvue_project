import { createStore } from 'vuex'
import products from './modules/product'
import subjects from './modules/subjects'

export default createStore({
  modules: {
    products,
    subjects
  }
})
