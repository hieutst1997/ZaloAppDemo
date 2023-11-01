<template lang="html">
    <div class = 'px-6'>
        <div class = 'mt-4'>
            <HeadTitle :data="{colorBorder: 'red', text: 'Order analysis - by customer'}" />
        </div>
        <div class = 'mt-7 relative'>
            <Pie :data="chartData.data" :options="chartData.options" />
        </div>
        
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import HeadTitle from '@/components/Field/headTitle.vue'
ChartJS.register(ArcElement, Tooltip, Legend)
export default defineComponent({
    name: 'ChartPieReport',
    components: {
        Pie,
        HeadTitle
    },
    setup() {
        const chartData = ref({
            data: {
                labels: ['Field1', 'Field2', 'Field3', 'Field4'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 80, 10]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            marginTop: 30,
                            useBorderRadius: true,
                            borderRadius: 100,
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                },
            }
        })
        return {
            chartData
        }
    }
})
</script>
<style lang="scss" scoped>
   
</style>