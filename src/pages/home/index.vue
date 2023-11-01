<template lang="">
    <div>
        <CardLogin />
        <MenuHome />
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import CardLogin from '@/components/User/cardLogin.vue'
import MenuHome from '@/components/Controls/menuHome.vue'
export default defineComponent({
  name: 'Home',
  components: {
    CardLogin,
    MenuHome
  },

  setup () {
    return {

    }
  }
})
</script>

<style lang="">

</style>
