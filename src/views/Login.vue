<template>
  <div class="loginPage">
    <div class="content">
      <div class="left"></div>
      <div class="right">
        <div class="tab">
          <a-tabs
            :activeKey="loginWay"
            :tabBarStyle="{ border: 'unset', textAlign: 'center' }"
            @change="onChangeLoginWay"
          >
            <a-tab-pane key="MOBILE" tab="密码登录"> </a-tab-pane>
            <a-tab-pane key="MOBILE_CODE" tab="验证码登录"> </a-tab-pane>
          </a-tabs>
        </div>
        <div class="form">
          <div class="form-block">
            <div class="form-item">
              <span>中国 +86</span>
              <input type="text" class="input" placeholder="请输入登录手机号码" v-model="mobile" />
            </div>
          </div>
          <div class="form-block" v-if="loginWay === 'MOBILE'">
            <div class="form-item">
              <div class="icon">
                <i class="iconfont icon-mima" />
              </div>
              <input
                type="password"
                class="input"
                placeholder="请输入登录密码"
                v-model="login_password"
              />
            </div>
          </div>
          <div class="form-block" v-if="loginWay === 'MOBILE_CODE'">
            <div class="form-item">
              <input type="text" class="input" placeholder="请输入登录密码" v-model="code" />
              <div class="other">
                <span>获取验证码</span>
              </div>
            </div>
          </div>
          <div class="form-block">
            <a-button
              type="primary"
              block
              @click="onLogin"
              :style="{ height: '50px', width: '100% !important' }"
              size="large"
            >
              登录
            </a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ajax, url } from '../api'
import { setStorage, StorageKey } from '@/utils/storage'

export default {
  data() {
    return {
      loginWay: 'MOBILE',
      mobile: '',
      login_password: '',
      code: ''
    }
  },
  methods: {
    toLogin() {
      this.$router.push({
        path: '/admin'
      })
      sessionStorage.setItem('isLogin', true)
    },
    onChangeLoginWay(key) {
      this.loginWay = key
    },
    onLogin() {
      const { mobile, login_password, loginWay } = this
      ajax({
        url: url.login,
        data: {
          mobile,
          login_password,
          login_way: loginWay
        }
      })
        .then(res => {
          const { data, msg, token_info, menu } = res
          setStorage(StorageKey.USER_INFO, data)
          setStorage(StorageKey.TOKEN_INFO, token_info)
          setStorage(StorageKey.MENU, menu)
          this.$store.dispatch('init/changeUserInfo', data)
          this.$store.dispatch('init/changeTokenInfo', token_info)
          this.$store.dispatch('init/changeMemu', menu)
          this.$message.success(msg)
          this.$router.push('/admin')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="less">
.loginPage {
  width: 100%;
  // background-image: url('../assets/background.svg');
  background-image: url('../assets/background.svg');
  height: 100%;
  > .content {
    user-select: none;
    width: 1200px;
    height: 600px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    @media only screen and (max-width: 1440px) {
      width: 900px;
      height: 450px;
    }
    &::before {
      clear: both;
      content: ' ';
      display: table;
    }
    > .left {
      background: url('../assets/image/leftBg.png') no-repeat;
      background-size: cover;
      height: 100%;
      width: 50%;
      float: left;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    > .right {
      height: 100%;
      width: 50%;
      float: right;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background: #fff;
      padding: 60px;
      > .form {
        width: 100%;
        > .form-block {
          margin-top: 25px;
          @media only screen and (max-width: 1440px) {
            margin-top: 20px;
          }
          display: flex;
          align-items: center;
          > .form-item {
            flex: 1;
            transition: all 0.3s;
            height: 58px;
            font-size: 16px;
            @media only screen and (max-width: 1440px) {
              height: 50px;
              font-size: 14px;
            }
            border-radius: 4px;
            color: #555555;
            border: 1px solid #c9c9c9;
            display: flex;
            align-items: center;
            padding: 1px 20px;
            position: relative;
            > .icon {
              border-right: 1px solid #ddd;
              padding-right: 10px;
              height: 18px;
              line-height: 18px;
            }
            > .input {
              letter-spacing: 1px;
              margin-left: 10px;
              border: none !important;
              padding-left: 10px;
              flex: 1;
              outline: 0 !important;
              text-shadow: none;
              box-shadow: none;
              &.code {
                margin: 0;
                padding: 0;
                border-left: none;
              }
            }
          }
        }
      }
    }
  }
}
.box {
  width: 350px;
  padding: 30px;
  background-color: #ddd;
  margin: 0 auto;
  border-radius: 4px;
  .top {
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
  }
  .item {
    height: 40px;
    line-height: 40px;
    background-color: #ddd;
    padding-left: 45px;
    position: relative;
    // margin-bottom: 30px;
    border-radius: 4px;
    > i {
      width: 45px;
      height: 40px;
      line-height: 40px;
      position: absolute;
      text-align: center;
      left: 3px;
      background-color: #f6f6f6;
      font-size: 22px;
      padding-top: 5px;
    }
    > input {
      height: 40px;
      background-color: #fff;
      width: 100%;
      text-indent: 1em;
    }
  }
}
.colRed {
  color: red;
}
.ant-btn {
  width: 290px !important;
}
</style>
