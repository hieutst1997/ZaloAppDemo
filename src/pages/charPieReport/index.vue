<template lang="html">
    <div class = 'px-6'>
        <div class = 'mt-5'>
            <HeadTitle :data="{colorBorder: 'red', text: 'Order analysis - by customer'}" />
        </div>
        <div class = "mt-5">
            <SearchForm />
        </div>
        <div class = 'mt-8 relative'>
            <Pie :data="chartData.data" :options="chartData.options" />
        </div>
        <div class = 'mt-8 relative'>
            <Table :data="dataTable" />
        </div>
        
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import HeadTitle from '@/components/Field/headTitle.vue'
import SearchForm from '@/components/Tools/searchForm.vue'
import Table from '@/components/Field/table.vue'
ChartJS.register(ArcElement, Tooltip, Legend)
export default defineComponent({
    name: 'ChartPieReport',
    components: {
        Pie,
        HeadTitle,
        SearchForm,
        Table
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

        const dataTable = ref({
            headContent: [
                'STT',
                'Field1',
                'Field2',
                'Field3',
                'Field4',
            ],
            dataContent: [
                {
                    STT: '1',
                    Field1: 'Field2',
                    Field2: 'Field2',
                    Field3: 'Field3',
                    Field4: 'Field4'
                },
                {
                    STT: '2',
                    Field1: 'Field2',
                    Field2: 'Field2',
                    Field3: 'Field3',
                    Field4: 'Field4'
                },
                {
                    STT: '3',
                    Field1: 'Field2',
                    Field2: 'Field2',
                    Field3: 'Field3',
                    Field4: 'Field4'
                },
                {
                    STT: '4',
                    Field1: 'Field2',
                    Field2: 'Field2',
                    Field3: 'Field3',
                    Field4: 'Field4'
                },
                {
                    STT: '5',
                    Field1: 'Field2',
                    Field2: 'Field2',
                    Field3: 'Field3',
                    Field4: 'Field4'
                },
            ],
            backgroundHeader: '#FFD154',
            borderColor: '#FFE07D',
            theadTitleColor: '#fff',
            tbodyTitleColor: '#393433'
        })
        return {
            chartData,
            dataTable
        }
    }
})
</script>
<style lang="scss" scoped>
   
</style>