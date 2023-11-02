<template lang="html">
	<div>
		<div class="main-sider-bar flex fixed">
			<div class="flex items-center w-full">
				<div class="col-4 flex items-center justify-between px-6">
					<button @click="redirect('/')">
						<i class="fas fa-home"></i>
					</button>

					<button class="ml-5">
						<i class="fas fa-list-alt"></i>
					</button>
				</div>

				<div class="col-4 flex items-center justify-center">
					<button class="qr">
						<i class="fas fa-qrcode"></i>
					</button>
				</div>

				<div class="col-4 flex items-center justify-between px-6">
					<button>
						<i class="fas fa-warehouse"></i>
					</button>

					<button class="ml-5">
						<i class="fas fa-user"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import constants from "@/constants";
export default defineComponent({
	name: "SideBar",

	setup() {
		const router = useRouter();
		const store = useStore();
		const sideBarActive = ref("");

		watch(
			() => store.getters.getSieBarActive,
			(value) => (sideBarActive.value = value)
		);

		async function redirect(url) {
			await router.replace(url);
		}

		return {
			redirect,
		};
	},
});
</script>
<style lang="scss">
.main-sider-bar {
	height: 76px;
	bottom: 0;
	left: 0;
	border-top: 1px solid #dddddd;
	background-color: #fff;
	width: 100%;

	button {
		font-size: 31px;
		color: #727272;
		width: 45px;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: center;
		&.qr {
			font-size: 66px;
			color: #c22573;
			width: auto;
			height: auto;
		}
	}
}
</style>
