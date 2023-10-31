<template>
    <div class = 'flex items-center bg-main'>
        <div class = 'user-card'>
            <img 
                src="@/assets/images/avatar_1.png" 
                alt="alt">
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'CardLogin',
    
    setup() {
        return {

        };
    },
});
</script>
<style lang="scss">
    .user-card{
        width: 62px;
        height: 62px;
        border-radius: 100%;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>