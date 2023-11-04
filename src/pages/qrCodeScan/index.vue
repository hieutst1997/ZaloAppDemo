<template>
	<div>
		<div v-if="cameraReady" class="relative">
			<StreamBarcodeReader
				@decode="onDecode"
				@loaded="onLoaded"
				class="relative"
			></StreamBarcodeReader>
			<div v-if="!isStreamReady" class="pending-qr">
				<Loading />
			</div>
			<div>Scanned QR Code: {{ scannedData }}</div>
		</div>
		<div v-else class="pending-qr">
			<img :src="icQrScan" alt="sadasd" class="w-60 h-auto" />

			<p class="pt-3 text-sm">Please allow camera devices to scan</p>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";
import icQrScan from "@/assets/images/ic_qr_scan.svg";
import Loading from "@/components/Loading/loadingStyleOne.vue";

export default defineComponent({
	name: "QrCodeScan",
	components: {
		StreamBarcodeReader,
		Loading,
	},
	setup() {
		const scannedData = ref(null);
		const cameraReady = ref(false);
		const isStreamReady = ref(false);

		function onDecode(text) {
			console.log(`Decode text from QR code is ${text}`);
			scannedData.value = text;
		}

		function onLoaded() {
			console.log(`Ready to start scanning barcodes`);
			isStreamReady.value = true;
		}

		onMounted(async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true,
				});
				cameraReady.value = true;
				stream.getTracks().forEach((track) => track.stop());
			} catch (error) {
				cameraReady.value = false;
			}
		});

		return {
			onDecode,
			onLoaded,
			scannedData,
			cameraReady,
			icQrScan,
			isStreamReady,
		};
	},
});
</script>
<style lang="scss" scoped>
.scanner-container video {
	width: 100% !important;
}

.pending-qr {
	width: 100%;
	height: calc(100vh - 76px);
	overflow-y: auto;
	background-color: #fcfcfc;
	padding-bottom: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
