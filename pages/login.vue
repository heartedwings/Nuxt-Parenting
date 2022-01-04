<template>
  <div class="login-main">
      <div class="login-title">
         LOGIN
      </div>
      <div class="login">
    メールアドレス<br /><input
      v-model="email"
      type="email"
      placeholder="email"
       style="width: 250px;height: 30px;"
    /><br />パスワード<br />
    <input v-model="password" type="password" placeholder="password"  style="width: 250px;height: 30px;"/>
    <div v-if="!isLogin" class="loginOut-btn">
      <button class="logins" @click="login">ログイン</button>
    </div>
    <div  v-if="isLogin" class="loginOut-btn">
      <button class="logins" @click="logout">ログアウト</button>
    </div>
    <p v-if="user.login">ログインに成功<br /></p>
    <!-- <button @click="aa"> aa</button> -->
  </div>
  </div>
</template>

<script>
import { mapActions, } from 'vuex'
import firebase from '~/plugins/firebase'

export default {
  components: {
  },
  data() {
    return {
      email: '',
      password: '',
      isLogin: true,
      userData: null,
    }
  },
    computed: {
    user() {
      return this.$store.getters.user
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.isLogin = true
        this.userData = user.uid
        this.$store.dispatch('fetchUser',this.userData)
        console.log(this.$store.state)
      } else {
        this.isLogin = false
        this.userData = null
      }
    })
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
      this.$router.push({ name: 'index' })
    },
    logout() {
      this.$store.dispatch('logout')
      this.email = ''
      this.password = ''
    },
    ...mapActions(["adds","fetchUser"])
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');
.login-title {
  text-align: center;
  font-size: 200%;
  margin-top: 2%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
}
.login-main {
    text-align: center;
    margin: 7% 0 5% 0
}
.logins {
  // border: 2px solid #000;
  border-radius: 0;
   background:rgb(180, 98, 98);
  margin: 5% 0 5% 0;
    width: 250px;
    padding: 5px;
    border-radius:30px;
  &:hover {
    // color: #fff;
  background: rgb(177, 90, 90);
  }
}
.loginOut-btn {
  margin-top: 2%;
}
</style>