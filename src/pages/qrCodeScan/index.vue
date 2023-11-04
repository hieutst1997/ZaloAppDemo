<template>
	<div>
		<div v-if="cameraReady">
			<StreamBarcodeReader
				@decode="onDecode"
				@loaded="onLoaded"
			></StreamBarcodeReader>
			<div>Scanned QR Code: {{ scannedData }}</div>
		</div>
		<div v-else>please allow camera to your device</div>
	</div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";

export default defineComponent({
	name: "QrCodeScan",
	components: {
		StreamBarcodeReader,
	},
	setup() {
		const scannedData = ref(null);
		const cameraReady = ref(false);

		function onDecode(text) {
			console.log(`Decode text from QR code is ${text}`);
			scannedData.value = text;
		}

		function onLoaded() {
			console.log(`Ready to start scanning barcodes`);
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
		};
	},
});
</script>
<style lang="scss" scoped>
.scanner-container video {
	width: 100% !important;
}
</style>
