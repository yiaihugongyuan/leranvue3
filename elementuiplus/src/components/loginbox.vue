
<script setup>
import { defineProps, ref } from 'vue'
import { setToken } from '@/utils/auth'
import { postData } from '@/apis'
import { Promotion, Refresh } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import MaterialSymbolsSecurityRounded from '~icons/material-symbols/security-rounded'
import MaterialSymbolsPerson from '~icons/material-symbols/person'
import IcBaselineLock from '~icons/ic/baseline-lock'
defineProps({
  showTitle: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: '欢迎登录'
  },
  popUp: {
    type: Boolean,
    default: false
  },
  loginTitle: {
    type: String,
    default: '登录'
  },
  resetTitle: {
    type: String,
    default: '重置'
  },
  labelWidth: {
    type: String,
    default: '6em'
  }
})
const profileData = ref({
  'username': '',
  'password': '',
  'secode': '',
})
const rules = {
  username: [{
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入用户名'
  }],
  password: [{
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入密码'
  }],
  secode: [{
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入验证码'
  },
  {
    validator: (rule, value, callback) => {
      postData('secodecheck', {
        secode: profileData.value.secode
      }).then(res => {
        if (typeof res !== 'object') {
          callback(new Error('验证码验证失败。'))
          return
        }
        if (res.code > 0) {
          callback()
        } else {
          callback(new Error(res.msg))
          refreshSecode()
        }
      })
    },
    trigger: 'blur'
  }
  ]
}

const secodeurl = ref(import.meta.env.VITE_BASE_URL + '/secode')
const logging = ref(false)
const refLoginForm = ref()
const router = useRouter()
const route = useRoute()
const doLogin = () => {
  logging.value = true
  refLoginForm.value.validate(
    (valid) => {
      if (!valid) {
        console.log('验证失败')
        ElMessage({
          type: 'warning',
          message: '登录失败，请检查用户名、密码和验证码。',
          title: '系统通知'
        })
        logging.value = false
        return
      }
      let data = {
        'username': profileData.value.username,
        'password': profileData.value.password,
        'secode': profileData.value.secode,
      }
      postData('login', data).then(res => {
        logging.value = false
        reset(refLoginForm.value)
        if (typeof res !== 'object') {
          ElMessage({
            type: 'error',
            message: res?.msg || '登录失败',
            title: '系统通知'
          })
          return
        }
        if (res.code <= 0) {
          ElMessage({
            type: 'error',
            message: res?.msg || '登录失败',
            title: '系统通知'
          })
          return
        } else {
          ElMessage({
            type: 'success',
            message: '登陆成功，欢迎您回来！',
            title: '系统通知'
          })
          if (res.code > 0) {
            const jwt = res.data['auth_code'] || ''
            setToken(jwt)
            if (route.path == '/login') router.push('/home')
          }
        }
      })
    }
  )

}
const reset = (formEl) => {
  if (!formEl) return
  refreshSecode()
  formEl.resetFields()
  logging.value = false
}
const refreshSecode = () => {
  secodeurl.value = import.meta.env.VITE_BASE_URL + '/secode/t/' + Math.random();
}
const keyDown = (e) => {
  if (e.keyCode == 13 || e.keyCode == 100) {
    doLogin()
  }

}


</script>
<template>
  <div class="login-position-set">
    <div class="login-box bantouming-box">
      <h4 class="login-title">账号登录</h4>
      <el-form :status-icon="true" :model="profileData" :rules="rules" ref="refLoginForm" class="login-form"
        label-width="auto" @keyup.enter="doLogin">
        <el-form-item prop="username">
          <el-input v-model="profileData.username" type="input" class="inputLine"  placeholder="请输入用户名">
            <template #prepend><MaterialSymbolsPerson/>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="profileData.password" type="password" class="inputLine" placeholder="请输入密码">
            <template #prepend>
              <IcBaselineLock/>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="secode">
          <el-input v-model="profileData.secode" type="input" class="inputLine" placeholder="完成右边的等式">
            <template #prepend>
              <MaterialSymbolsSecurityRounded></MaterialSymbolsSecurityRounded>
            </template>
            <template #append>
              <el-image
              style="box-size:border-box;cursor:pointer;width:4em;height:98%;"
              :src="secodeurl" fit="fill" @click="refreshSecode"></el-image>
            </template>
          </el-input>
          
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="logging" @click="doLogin" :icon="Promotion"
            @keydown.enter="keyDown()">登录</el-button>
          <el-button type="info" @click="reset(refLoginForm)" :icon="Refresh">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style>
.login-form {
  padding: 1em;
  max-width: 30em;
}

.bantouming-box {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 3px 3px 9px rgba(0, 0, 0, .3);
  border-radius: 0.3em;
  margin: 0 auto;
  width: 30em;
}

.login-title {
  height: 1.8em;
  line-height: 1.8em;
  color: #0694ff;
  font-size: 1.5em;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.2em;
  border-bottom: 1px solid rgb(212, 211, 211);
  margin: 0;
}

.el-input-group__prepend {
  width: 3em;
}

.el-form-item__content {
  color: #0694ff !important
}
.el-input-group__append, .el-input-group__prepend{
  padding:0;
}
</style>
