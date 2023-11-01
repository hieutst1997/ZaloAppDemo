<template>
  <div>
    <main class = 'content-view'>
      <router-view></router-view>
    </main>
    <footer>
        <SideBar />
    </footer>
  </div>
</template>

<script>
import SideBar from '@/components/Controls/sideBar.vue'
export default {
  components: {
    SideBar
  },
  name: 'mainLayout'
}
</script>

<style>
.content-view{
  width: 100%;
  height: calc(100vh - 76px);
  overflow-y: auto;
  background-color: #FCFCFC;
}
</style>
