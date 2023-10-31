<template lang="">
    <div>
        <CardLogin />
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import CardLogin from '@/components/User/cardLogin.vue'
export default defineComponent({
    name: 'Home',
    components: {
      CardLogin,
    },
    
    setup() {
        return {

        };
    },
});
</script>

<style lang="">
    
</style>