<template>
    <b-container>
        <b-row no-gutters>
            <b-col cols="12">
                <p>{{ msg }}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        data: () => ({
            msg: 'Hola mundo!',
        })
    }
</script>
