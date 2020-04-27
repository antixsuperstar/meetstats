<template>
    <b-container>
        <b-row no-gutters>
            <b-col v-if="!status" :key="'csv-select'" cols="12">
                First, select your file: <input type="file" ref="gcsv" accept="text/csv" />
            </b-col>
            <b-col v-else :key="'cdv-loaded'" cols="12">
                <span v-html="status"></span>
                <a @click="status = null">Restart</a>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="3">
                Select the columns that we'll work with:
            </b-col>
            <b-col sm="7">

            </b-col>
            <b-col sm="2">
                <b-button variant="primary">123</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    const Papa = require('papaparse');
    const SQL = initSqlJs();

    export default {
        data: () => ({
            status: null,
            colsToExtract: {
                date: 'Fecha',
                // 'Nombre del evento',
                meetingId: 'Código de reunión',
                partyId: 'Identificador del participante',
                // 'Participante ajeno a la organización',
                clientType: 'Tipo de cliente',
                organizerEmail: 'Correo electrónico del organizador',
                // 'Tipo de producto',
                duration: 'Duración',
                // 'Valoración de la llamada (sobre 5)',
                // 'Nombre del participante',
                // 'Dirección IP',
                // 'Ciudad',
                // 'País',
                roundtripTime: 'Promedio de tiempo de ida y vuelta de la red (en ms)',
                // 'Protocolo de transporte',
                // 'Ancho de banda de subida estimado (en kbps)',
                // 'Ancho de banda de descarga estimado (en kbps)',
                // 'Pérdida máxima de paquetes del audio recibido',
                // 'Pérdida media de paquetes del audio recibido',
                // 'Duración de la recepción de audio',
                // 'Promedio de tasa de bits del audio enviado (en kbps)',
                // 'Pérdida máxima de paquetes del audio enviado',
                // 'Pérdida media de paquetes del audio enviado',
                // 'Duración del envío de audio',
                // 'ID de evento de calendario',
                conferenceId: 'ID de conferencia',
                // 'Promedio de fluctuación en la recepción de la red (en ms)',
                // 'Máxima fluctuación en la recepción de la red (en ms)',
                // 'Promedio de fluctuación en el envío de la red (en ms)',
                // 'Promedio de tasa de bits de las capturas de pantalla de vídeo recibidas (en kbps)',
                // 'Promedio de fotogramas por segundo de las capturas de pantalla de vídeo recibidas',
                // 'Promedio del lado largo de las capturas de pantalla de vídeo recibidas',
                // 'Pérdida máxima de paquetes de las capturas de pantalla de vídeo recibidas',
                // 'Pérdida media de paquetes de las capturas de pantalla de vídeo recibidas',
                // 'Duración de la recepción de capturas de pantalla de vídeo',
                // 'Promedio del lado corto de las capturas de pantalla de vídeo recibidas',
                // 'Promedio de tasa de bits de las capturas de pantalla de vídeo enviadas (en kbps)',
                // 'Promedio de fotogramas por segundo de las capturas de pantalla de vídeo enviadas',
                // 'Promedio del lado largo de la captura de pantalla de vídeo enviada',
                // 'Pérdida máxima de paquetes de las capturas de pantalla de vídeo enviadas',
                // 'Pérdida media de paquetes de las capturas de pantalla de vídeo enviadas',
                // 'Duración de las capturas de pantalla de vídeo enviadas',
                // 'Promedio del lado corto de las capturas de pantalla de vídeo enviadas',
                // 'Promedio de fotogramas por segundo del vídeo recibido',
                // 'Promedio del lado largo del vídeo recibido',
                // 'Pérdida máxima de paquetes del vídeo recibido',
                // 'Pérdida media de paquetes del vídeo recibido',
                // 'Duración de la recepción de vídeo',
                // 'Promedio del lado corto del vídeo recibido',
                // 'Índice de congestión de la red',
                // 'Promedio de tasa de bits del vídeo enviado (en kbps)',
                // 'Promedio de fotogramas por segundo del vídeo enviado',
                // 'Promedio del lado largo del vídeo enviado',
                // 'Pérdida máxima de paquetes del vídeo enviado',
                // 'Pérdida media de paquetes del vídeo enviado',
                // 'Duración del envío de vídeo',
                // 'Promedio del lado corto del vídeo enviado',
                // 'Descripción del evento',
            },
        }),
        mounted() {
            const that = this;
            this.$refs.gcsv.addEventListener('change', function () {
                that.status = 'Parsing CSV...';
                try {
                    Papa.parse(this.files[0], {
                        header: true,
                        worker: true,
                        preview: 3,
                        complete: results => {
                            if (results.data.length) {
                                Object.keys(results[0]).forEach(x => {

                                });
                            }
                        }
                    });
                } catch (e) {
                    that.csvStatus = `Error: ${e.toString()}`;
                }
            });
        },
        methods: {
            calculateData: function(rows) {
                console.log(rows);
            },
        }
    }
</script>

<style lang="scss">
    a {
        font-weight: bold;
    }
</style>
