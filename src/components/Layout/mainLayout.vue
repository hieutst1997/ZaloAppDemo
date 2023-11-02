<template>
  <div>
    <main class="content-view relative">
      <Loading v-if="store.getters.getLoading" />
      <router-view></router-view>
    </main>
    <footer>
      <SideBar />
    </footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SideBar from "@/components/Controls/sideBar.vue";
import Loading from "@/components/Loading/loadingStyleOne.vue";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    SideBar,
    Loading,
  },
  name: "mainLayout",
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
});
</script>

<style scoped>
.content-view {
  width: 100%;
  height: calc(100vh - 76px);
  overflow-y: auto;
  background-color: #fcfcfc;
  padding-bottom: 40px;
}
</style>
