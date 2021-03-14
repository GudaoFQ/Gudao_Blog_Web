<template>
  <div>
    <!-- Top box -->
    <!-- Logo & Site Name -->
    <div class="placeholder-header">
      <div class="parallax-window" data-parallax="scroll">
        <div class="tm-header">
          <div class="row tm-header-inner">
            <div class="col-md-4 col-md-6">
              <img src="~@/assets/images/gudao.png" class="logo" alt=""/>
              <div class="tm-site-text-box">
                <h1 class="info-gudao">孤 岛</h1>
                <h6 class="info-moto">个人成长经历展示，如果有意与本人联系可以下载站长简历，期待与您合作</h6>
              </div>
            </div>
            <nav class="col-md-4 col-md-6 tm-nav">
              <ul class="tm-nav-ul">
                <li class="tm-nav-li tm-nav-link" @click="goWelcome">首页</li>
                <li class="tm-nav-li tm-nav-link" @click="goHome">主页</li>
                <li class="tm-nav-li tm-nav-link">下载简历</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div>
      <section class="placeholder-main">

        <div class="wrapper">
          <div class="timeline-content-6">
            <ul class="timeline">
              <li :key="item.number" v-for="item in projects">
                <div v-if="item.number%2==0" class="direction-r">
                  <div class="flag-wrapper">
                    <span class="flag">{{ item.name }}</span>
                    <span class="time-wrapper"><span class="time">{{ item.date }}</span></span>
                  </div>
                  <div class="desc">
                    {{ item.detail }}
                  </div>
                </div>
                <div v-else class="direction-l">
                  <div class="flag-wrapper">
                    <span class="flag">{{ item.name }}</span>
                    <span class="time-wrapper"><span class="time">{{ item.date }}</span></span>
                  </div>
                  <div class="desc">
                    {{ item.detail }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="bottom-header">
            <!-- copyright -->
            <div class="text-center">
              <p>&copy; 2020-2021 gudao.ink 版权所有 | 作者: <a href="http://gudao.ink" target="_blank">TrailGudao</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  data () {
    return {
      projects: [
        {number: '1', name: '项目名', date: '2020-至今', detail: '详情'},
        {number: '2', name: '项目名', date: '2019-2020', detail: '详情'},
        {number: '3', name: '项目名', date: '2018-2019', detail: '详情'}
      ],
      liClass: 'project-class'
    }
  },
  methods: {
    goWelcome () {
      this.$router.push('/')
    },
    goHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.logo {
  position: absolute;
  display: inline-block;
  width: 75px;
  height: 75px;
  margin-right: 5px;
}

.placeholder-header {
  position: absolute;
  width: 100%;
  height: 350px;
  background-image: url("~@/assets/images/info.jpg");
  background-size: cover;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0px 0;
}

.info-gudao {
  margin-left: 5px;
  display: inline-block;
  color: white;
  font-size: 3em;
}

.info-moto {
  font-size: 0.95rem;
  font-weight: 400;
  color: white;
}

.tm-site-text-box {
  margin-left: 90px;
}

.tm-nav-ul {
  position: relative;
  margin-top: 20px;
}

.text-center {
  margin-top: 30px;
}
</style>
