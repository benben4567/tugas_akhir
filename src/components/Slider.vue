<template>
    <div id="carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item" v-for="(sliders, id) in sliders" :class="{ active: id==0 }" :key='sliders.id'>
                <img :src="'http://127.0.0.1:8000/storage/produks/'+sliders.image" class="d-block w-100 rounded-lg">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" ariahidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" ariahidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>
<script>
    import {
        computed,
        onMounted
    } from 'vue'
    import {
        useStore
    } from 'vuex'
    export default {
        setup() {
            //store vuex
            const store = useStore()
            //onMounted akan menjalankan action "getSliders" di module "slider"
            onMounted(() => {
                store.dispatch('slider/getSliders')
            })
            //computed properti digunakan untuk mendapatkan data dari state "sliders" di module "slider"
            const sliders = computed(() => {
                return store.state.slider.sliders
            })
            return {
                store,
                sliders
            }
        }
    }
</script>