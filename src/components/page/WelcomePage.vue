<template>
  <div class="welcome-page">
    <section>
      <div class="wlcome-info">
        <div class="wrapper-full">
          <div class="main-content">
            <h2 class="gudao-info">孤 岛</h2>
            <h4>其实难以想象的 并不是黑暗，而是早晨 灯光将怎样延续下去</h4>
            <p>You can either return to the previous page, visit our homepage or contact our support team.</p>
            <!-- buttons -->
            <div class="buttons">
              <button @click="goHome" class="btn brk-btn-bg brk-btn">
                进入主页
              </button>
              <button class="btn brk-btn">
                站长信息
              </button>
            </div>
          </div>
          <div class="bottom-header">
            <!-- copyright -->
            <div class="copyrights text-center">
              <p>&copy; 2020-2021 gudao.ink 版权所有<a target="_blank"></a> </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  methods: {
    goHome () {
      this.$router.replace('/home')
    }
  }
}
</script>

<style scoped>
.gudao-info{
  margin-left: 10px;
}
</style>
