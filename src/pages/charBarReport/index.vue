<template lang="html">
	<div class="px-6">
		<div class="mt-5">
			<HeadTitle
				:data="{ colorBorder: 'red', text: 'Sewing line output' }"
			/>
		</div>
		<div class="mt-5">
			<SearchForm />
		</div>
		<div class="mt-8 relative">
			<Bar :data="chartData.data" :options="chartData.options" />
		</div>
		<div class="mt-8 relative">
			<Table :data="dataTable" />
		</div>
	</div>
</template>
<script>
import { defineComponent, ref } from "vue";
import HeadTitle from "@/components/Field/headTitle.vue";
import SearchForm from "@/components/Tools/searchForm.vue";
import Table from "@/components/Field/table.vue";
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
export default defineComponent({
	name: "ChartBarReport",
	components: {
		HeadTitle,
		SearchForm,
		Table,
		Bar,
	},
	setup() {
		const chartData = ref({
			data: {
				labels: [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December",
				],
				datasets: [
					{
						label: "Data One",
						backgroundColor: [
							"rgba(255, 99, 132, 1)",
							"rgba(255, 159, 64, 1)",
							"rgba(255, 205, 86, 1)",
							"rgba(75, 192, 192, 1)",
							"rgba(54, 162, 235, 1)",
							"rgba(153, 102, 255, 1)",
							"rgba(201, 203, 207, 1)",
						],
						data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
					},
				],
			},
			options: {
				indexAxis: "y",
				responsive: true,
				barPercentage: 2,
				categoryPercentage: 1,
				barThickness: 20,
				maintainAspectRatio: true, // Disable aspect ratio maintenance
				aspectRatio: 0.7,
				scales: {
					x: {
						ticks: {
							font: {
								size: 10, // Set the font size for the x-axis labels
							},
						},
					},
					y: {
						ticks: {
							font: {
								size: 12, // Set the font size for the y-axis labels
							},
						},
						grid: {
							display: false, // Hide the horizontal grid lines
						},
					},
				},

				plugins: {
					legend: {
						display: false,
					},
				},
			},
		});

		const dataTable = ref({
			headContent: ["STT", "Field1", "Field2", "Field3", "Field4"],
			dataContent: [
				{
					STT: "1",
					Field1: "Field2",
					Field2: "Field2",
					Field3: "Field3",
					Field4: "Field4",
				},
				{
					STT: "2",
					Field1: "Field2",
					Field2: "Field2",
					Field3: "Field3",
					Field4: "Field4",
				},
				{
					STT: "3",
					Field1: "Field2",
					Field2: "Field2",
					Field3: "Field3",
					Field4: "Field4",
				},
				{
					STT: "4",
					Field1: "Field2",
					Field2: "Field2",
					Field3: "Field3",
					Field4: "Field4",
				},
				{
					STT: "5",
					Field1: "Field2",
					Field2: "Field2",
					Field3: "Field3",
					Field4: "Field4",
				},
			],
			backgroundHeader: "#FFD154",
			borderColor: "#FFE07D",
			theadTitleColor: "#fff",
			tbodyTitleColor: "#393433",
		});
		return {
			dataTable,
			chartData,
		};
	},
});
</script>
<style lang="scss" scoped></style>
