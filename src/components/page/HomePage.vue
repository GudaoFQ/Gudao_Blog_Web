<template>
  <div>
    <!-- 首页左半部分 -->
    <el-container>
      <el-aside id="aside-size" width="280px">
        <div>
          <img class="portrait" src="~@/assets/images/portrait.jpg" alt=""/>
          <h1 class="gudao-info">孤岛</h1>
        </div>
      </el-aside>
      <!-- 首页右半部分 -->
      <el-main>
        <ul class="home-ul">
          <li class="move-top">
            <div class="top-trapezium" style="border-right-color: rgb(38,38,47)"/>
            <div class="mid-top-trapezium" style="background: rgb(38,38,47)">
              <div></div>
            </div>
            <div class="bttom-top-trapezium" style="border-right-color: rgb(38,38,47)"/>
          </li>
          <li class="mirror-rotate-level">
            <div class="top-trapezium" style="border-right-color: rgb(29,29,36)"/>
            <div class="mid-top-trapezium" style="background: rgb(29,29,36)">
              <div class="fh5co-text">
                <h3>Strategy</h3>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div class="bttom-top-trapezium" style="border-right-color: rgb(29,29,36)"/>
          </li>
          <li class="move-top">
            <div class="top-trapezium" style="border-right-color: rgb(24,24,29)"/>
            <div class="mid-top-trapezium" style="background: rgb(24,24,29)">
              <div></div>
            </div>
            <div class="bttom-top-trapezium" style="border-right-color: rgb(24,24,29)"/>
          </li>
        </ul>
      </el-main>
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

/* 头像区域设置 */
.portrait {
  position: relative;
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
  overflow-x: hidden;
  background: #151212;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 0px;
}

.home-ul{
  list-style-type: none;
  margin-top: 280px;
}

.move-top{
  margin-top: -82px;
}

.fh5co-text {
  position: relative;
  padding-left: 120px;
  width: 100%;
  transform: rotateY(180deg);
}

.el-container{
  width: auto;
  overflow: hidden;
  position: revert;
}
</style>
