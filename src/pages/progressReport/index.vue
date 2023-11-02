<template>
	<div class = 'px-6 w-full'>
		<div class = 'mt-5'>
            <HeadTitle :data="{colorBorder: 'red', text: 'Customer order progress'}" />
        </div>
		<div class = "mt-5">
            <SearchForm />
        </div>
		<div class = 'mt-8 relative'>
			<div v-for="(item, index) in dataProgress" :key="index">
				<ProgressBar :data="item" />
			</div>
        </div>
	</div>
</template>
<script>
import { defineComponent, ref } from "vue";
import ProgressBar from "@/components/Field/progress.vue";
import HeadTitle from '@/components/Field/headTitle.vue';
import SearchForm from '@/components/Tools/searchForm.vue';
export default defineComponent({
	name: "Progress",
	components: {
		ProgressBar,
		HeadTitle,
		SearchForm
	},
	setup() {
		const dataProgress = ref([
			{
				title: 'MAIA 222TS010B:',
				percentCurrent: 80,
				backgroundBox: '#F5F5F5',
				backgroundBar: '#4252C6',
			},
			{
				title: 'MAIA 222TS010B:',
				percentCurrent: 70,
				backgroundBox: '#F5F5F5',
				backgroundBar: '#FF827B',
			},
			{
				title: 'MAIA 222TS010B:',
				percentCurrent: 100,
				backgroundBox: '#F5F5F5',
				backgroundBar: '#FFD054',
			},
			{
				title: 'MAIA 222TS010B:',
				percentCurrent: 60,
				backgroundBox: '#F5F5F5',
				backgroundBar: '#90C6FF',
			},
			{
				title: 'MAIA 222TS010B:',
				percentCurrent: 30,
				backgroundBox: '#F5F5F5',
				backgroundBar: '#FF827C',
			},
			{
				title: 'MAIA 222TS010B:',
				percentCurrent: 65,
				backgroundBox: '#F5F5F5',
				backgroundBar: '#FFD155',
			},
			{
				title: 'MAIA 222TS010B:',
				percentCurrent: 45,
				backgroundBox: '#F5F5F5',
				backgroundBar: '#93C6FF',
			},
			{
				title: 'MAIA 222TS010B:',
				percentCurrent: 90,
				backgroundBox: '#F5F5F5',
				backgroundBar: '#4252C6',
			}
			
		])
		return {
			dataProgress
		};
	},
});
</script>
<style lang="scss" scoped></style>
