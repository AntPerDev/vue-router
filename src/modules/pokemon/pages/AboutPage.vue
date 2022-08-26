<template>
    <h1>About Page</h1>
    <hr>
    <!-- <h2>{{name}}</h2> -->
    <button @click="onChangeName">Cambiar nombre</button>
</template>
<script>
export default {

    //Si estas en el composition API te daras cuenta pq tienes un setup
    // setup(){ },

    data() {
        return {
            name: 'Antonio!'
        }
    },

    methods: {
        onChangeName() {
            console.log('Se cambiará el nombre a Mari');
            this.name = " Mari ";
        }
    },

    beforeCreate() {
        console.log(' beforeCreate ')
    },
    created() {
        this.name = " Juan Carlos "
        console.log(' created ')
        // Peticiones HTTP
    },
    beforeMount() {
        console.log(' beforeMount ')
    },
    mounted() {
        console.log(' mounted ')
    },
    beforeUpdate() {
        console.log(' beforeUpdate ')
    },
    updated() {
        console.log(' updated ')
    },
    activated() {
        console.log(' activated ')
    },
    deactivated() {
        console.log(' deactivated ')
    },
    beforeUnmount() {
        console.log(' beforeUnmount ')
    },
    unmounted() {
        console.log(' unmounted ')
    },
    errorCaptured() {
        console.log(' errorCaptured ')
    },
    renderTracked() {
        console.log(' renderTracked ')
    },
    renderTriggered() {
        console.log(' renderTriggered ')
    },
}
</script>