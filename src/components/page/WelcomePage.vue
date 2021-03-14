<template>
  <div>
    <div class="wlcome-info">
      <div class="wrapper-full">
        <div class="main-content">
          <h2 class="gudao-info">孤 岛</h2>
          <h4 class="gudao-motto">其实难以想象的 并不是黑暗，而是早晨 灯光将怎样延续下去</h4>
          <p>Personal blog platform, record their own learning experience, share their growth process.</p>
          <!-- buttons -->
          <div class="buttons">
            <button @click="goHome" class="btn brk-btn-bg brk-btn">
              进入主页
            </button>
            <button @click="goInfo" class="btn brk-btn">
              站长信息
            </button>
          </div>
        </div>
        <div class="bottom-header">
          <!-- copyright -->
          <div class="text-center">
            <p>&copy; 2020-2021 gudao.ink 版权所有 | 作者: <a href="http://gudao.ink" target="_blank">TrailGudao</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  methods: {
    goHome () {
      this.$router.push('/home')
    },
    goInfo () {
      this.$router.push('/info')
    }
  }
}
</script>

<style scoped>
/* 标题向左偏移 */
.gudao-info {
  margin-left: 10px;
}

/* 座右铭行间距 */
.gudao-motto{
  line-height: 40px;
}
</style>
