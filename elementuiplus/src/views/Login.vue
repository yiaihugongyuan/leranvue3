<script setup>
import LoginBox from '@/components/loginbox.vue'

</script>
<template>
  <div>
    <div class="login-page">
      <div class="login-container">
        <div class="sys-logo">
          <svg t="1610826182405" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="74947" width="60" height="60">
            <path
              d="M524.5952 712.41728l96.93184 96.93184-43.43808 43.43808-96.95232-96.93184zM601.2928 635.71968l96.9728 96.95232-43.4176 43.43808-96.9728-96.93184zM675.98336 561.02912l96.95232 96.91136-43.43808 43.45856-96.95232-96.91136z"
              fill="#338cec" p-id="74948" data-spm-anchor-id="a313x.7781069.0.i114" class="selected" />
            <path
              d="M510.83264 918.528a112.27136 112.27136 0 0 1-79.64672-32.93184L69.07904 523.4688a112.72192 112.72192 0 0 1 0-159.27296L291.79904 141.4144a112.7424 112.7424 0 0 1 159.29344 0l80.83456 80.83456-43.43808 43.43808-80.83456-80.83456c-19.21024-19.21024-53.20704-19.21024-72.41728 0L112.51712 407.61344c-9.60512 9.60512-14.88896 22.46656-14.88896 36.20864s5.28384 26.60352 14.88896 36.20864L474.624 842.1376c19.21024 19.21024 53.20704 19.21024 72.41728 0l222.74048-222.72c9.60512-9.60512 14.90944-22.46656 14.90944-36.20864s-5.30432-26.60352-14.90944-36.20864L562.15552 339.39456l43.43808-43.43808 207.62624 207.62624a112.72192 112.72192 0 0 1 0 159.27296L590.47936 885.57568a112.3328 112.3328 0 0 1-79.64672 32.95232z"
              fill="#338cec" p-id="74949" data-spm-anchor-id="a313x.7781069.0.i113" class="selected" />
            <path
              d="M805.31456 668.79488l-43.43808-43.43808 149.62688-149.66784a51.28192 51.28192 0 0 0 0-72.3968L688.76288 180.57216a51.26144 51.26144 0 0 0-72.41728 0L342.24128 454.656l-43.43808-43.43808L572.90752 137.13408C594.1248 115.9168 622.40768 104.2432 652.55424 104.2432s58.44992 11.6736 79.64672 32.89088l222.72 222.72a112.72192 112.72192 0 0 1 0 159.27296l-149.6064 149.66784z"
              fill="#338cec" p-id="74950" data-spm-anchor-id="a313x.7781069.0.i112" class="selected" />
            <path
              d="M414.3104 477.3888a109.568 109.568 0 0 1-11.85792-0.65536c-52.30592-5.71392-80.0768-47.12448-83.06688-51.8144l51.63008-33.28c0.14336 0.22528 14.80704 21.74976 38.6048 24.08448 21.05344 2.10944 46.57152-11.18208 73.70752-38.31808 84.48-84.52096 104.57088-104.20224 104.57088-104.20224l43.008 43.88864c-0.14336 0.16384-20.31616 19.92704-104.12032 103.75168-37.56032 37.56032-75.34592 56.54528-112.47616 56.54528z"
              fill="#338cec" p-id="74951" data-spm-anchor-id="a313x.7781069.0.i115" class="selected" />
          </svg>
        </div>
        <div class="login-position-set">
          <login-box title="欢迎登录" :show-title="true" />
        </div>
      </div>
    </div>
    <div class="login-footer">
      <div class="foot-content">
        <p>主办：黄冈市招商引资工作领导小组办公室 黄冈市招商服务中心</p>
        <p>地址：黄冈市黄州区新港路8号综合办公楼6楼</p>
        <p>电话：0713-8813126</p>
      </div>
    </div>
  </div>
</template>


<style lang="less">
:root {
  box-sizing: border-box;
  font-size: 16px;
}

*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

input {
  background-color: #fff !important;
  cursor: pointer;
}

body {
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;

}

.sys-logo {
  position: absolute;
  top: 2em;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  height: 10vh;
  background: url('../assets/login_images/frant-page-logo.png') no-repeat 90px center;
  background-size: 806px 62px;
  background-color: rgba(163, 205, 243, 0.0);
  /* box-shadow: 0px 3px 3px rgba(163, 205, 243,0.5); */
}

.sys-logo .icon {
  margin-left: 1em;
}

.login-container {
  position: relative;
  height: 90vh;
  background: url(../assets/login_images/login_back.jpg) no-repeat 100%;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, .2);
  --login-box-width: 400px;
  --input-line-height: 2.5em;
  --input-width: 95%;
  --line-indent: 1em;
}

.login-position-set {
  position: absolute;
  right: 5%;
  bottom: 20%;
  /* 预处理变量var(--login-box-width) */

}

.login-footer {
  height: 10vh;
  background-color: rgba(243, 242, 242, 0.7);
  display: flex;
  flex-direction: column;
}

.login-footer .foot-content {
  width: 30em;
  text-align: center;
  margin: auto;
  color: #414346;
}

.login-footer .foot-content p {
  text-align: left;
}
</style>
