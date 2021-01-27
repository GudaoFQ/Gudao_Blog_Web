<template>
  <div>
    <!-- 首页左半部分 -->
    <el-container>
      <el-aside width="280px">
        <div>
          <img class="portrait" src="~@/assets/images/portrait.jpg"/>
          <h1 class="gudao-info">孤岛</h1>
        </div>
      </el-aside>
      <!-- 首页右半部分 -->
      <el-main>右半部分</el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'home page'
    }
  }
}
</script>

<style scoped>
/* 左区域 */
.el-aside {
  position: absolute;
  top: 0px; /* 距离上面50像素 */
  left: 0px; /* 距离左边0像素 */
  bottom: 0px; /* 距离底部0像素 */
  background-image: url("~@/assets/images/left.jpg");
  background-size: cover;
}

.portrait {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: 90px;
  margin-top: 45px;
  box-shadow: 0 0 10px 10px rgba(4, 4, 4, .2); /* 添加阴影 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

/* 主区域 */
.el-main {
  position: absolute;
  top: 0px;
  left: 280px;
  bottom: 0px;
  right: 0px; /* 距离右边0像素 */
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
