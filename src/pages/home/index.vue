<template lang="">
    <div>
        <CardLogin />
        <MenuHome />

        <div>
          <button type="" @click = "test">
            test services
          </button>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import CardLogin from '@/components/User/cardLogin.vue';
import MenuHome from '@/components/Controls/menuHome.vue';
import services from '@/services';
export default defineComponent({
  name: 'Home',
  components: {
    CardLogin,
    MenuHome
  },

  setup () {

    async function test(){
      const response = await services.ZALO.reportStackedBar({
        projectCode: 'adsad',
        userCode: 'sdasd',
        menuType: 'sadasd',
        menuCode: 'ádojaosf',
        dateBegin: '2023-11-01T01:09:41.964Z',
        dateEnd: '2023-11-01T01:09:41.964Z',
        keyword: 'óakdoaskdoa'
      })
    }

    return {
      test
    }
  }
})
</script>

<style lang="">

</style>
