<template>
	<div class="w-full px-6">
		<!-- This screen will use hardcode to bind data -->

		<div class="mt-5">
			<HeadTitle
				:data="{
					colorBorder: 'red',
					text: 'Report of MES Textile Industry',
				}"
			/>
		</div>
		<div class="mt-5">
			<VueDatePicker v-model="date" range :partial-range="false" />
		</div>

		<section class="bg-yellow-3 rounded-md p-4 text-white mt-6">
			<h2 class="text-center text-base uppercase font-bold">
				ORDER REPORT
			</h2>
			<div class="flex pt-3">
				<i class="fas fa-map-marker-alt mt-1"></i>
				<p class="pl-2">
					Floor 36740, Electric Power Industry Company Limited
				</p>
			</div>

			<p class="text-xs pt-3">
				Orders were received this week for 28 models and 836,740 units
			</p>

			<h4 class="text-center text-base font-bold pt-4">
				2 models of 6,580 pieces
			</h4>
		</section>

		<section class="bg-blue-1 rounded-md p-4 text-white mt-6">
			<h2 class="text-center text-base uppercase font-bold">
				YIELD REPORT
			</h2>
			<div class="flex pt-3">
				<i class="fas fa-map-marker-alt mt-1"></i>
				<p class="pl-2">
					Floor 36740, Electric Power Industry Company Limited
				</p>
			</div>

			<p class="text-xs pt-3">
				88 samples and 6836740 samples completed this month
			</p>

			<p class="text-xs pt-3">
				28 samples and 836,740 products completed this week
			</p>

			<h4 class="text-center text-base font-bold pt-4">
				5 models, 8,580 pieces
			</h4>
		</section>

		<section class="bg-pink-1 rounded-md p-4 text-white mt-6">
			<h2 class="text-center text-base uppercase font-bold">
				ADD/SUBTRACTION REPORT
			</h2>
			<div class="flex pt-3">
				<i class="fas fa-map-marker-alt mt-1"></i>
				<p class="pl-2">
					Floor 36740, Electric Power Industry Company Limited
				</p>
			</div>

			<p class="text-xs pt-3">
				This month there are 12 pieces/5 types of patches and 7 pieces/5
				types of effective relief.
			</p>

			<p class="text-xs pt-3">
				This week's patch is 8 pieces/3 styles, minus 5 pieces/3 styles
			</p>

			<h4 class="text-center text-base font-bold pt-4">
				3 pieces, 2 styles/2 pieces, 1 style
			</h4>
		</section>
	</div>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";
import dayjs from "dayjs";
import HeadTitle from "@/components/Field/headTitle.vue";
export default defineComponent({
	name: "OverView",
	components: {
		HeadTitle,
	},
	setup() {
		const date = ref();
		onMounted(() => {
			const startDate = new Date();
			const endDate = new Date(
				new Date().setDate(startDate.getDate() + 7)
			);
			date.value = [startDate, endDate];
		});
		return {
			date,
		};
	},
});
</script>
<style lang="scss" scoped></style>
