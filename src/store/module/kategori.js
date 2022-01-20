//import global API
import Api from '../../api/Api'

const kategori = {

    //set namespace true
    namespaced: true,

    //state
    state: {

        //index categories
        kategoris: [],

        //product in category
        productInCategory: []
    },

    //mutations
    mutations: {

        //set state categories dengan data dari response
        GET_CATEGORIES(state, kategoris) {
            state.kategoris = kategoris
        },
        //set state productInCategory dengan data dari response
        PRODUCT_IN_CATEGORY(state, produks) {
            state.productInCategory = produks
        }
    },

    //actions
    actions: {
        //action getCategories
        getCategories({
            commit
        }) {
            //get data categories ke server
            Api.get('/kategoris')
                .then(response => {

                    //commit ke mutation GET_CATEGORIES dengan response data
                    commit('GET_CATEGORIES', response.data.kategoris)

                }).catch(error => {
                    //show error log dari response
                    console.log(error)
                })
        },

        //action get data product berdasarkan category
        getProductInCategory({ commit }, slug) {

            //get data product by category ke server
            Api.get(`/kategori/${ slug }`)
                .then(response => {

                    //commit ke mutation PRODUCT_IN_CATEGORY dengan response data
                    commit('PRODUCT_IN_CATEGORY', response.data.produk)
                }).catch(error => {
                    console.log(error)
                })
        }
    },
    //getters
    getters: {}
}
export default kategori