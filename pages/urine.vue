<template>
  <div class="urine-main">
    <div class="urine-title">URINE PAGE</div>

    <div><img class="urine-hr" :src="require(`~/assets/hr.png`)" alt="" /></div>

    <div class="urine-container">
      <div class="flame-urine">
        <div class="urine-flower" />
      <div>
        日時 : <input v-model="urinedate" type="datetime-local" name="Date" />
      </div>
      <textarea
        v-model="urinememo"
        class="textarea"
        cols="30"
        rows="5"
        name="Memo"
        placeholder="タップしてテキストを入力"
        maxlength="150"
      />
      <p>{{ urinememo.length }}/150 文字</p>
      <div>
        </div>
              <div class="container">
        </div>
        <div class="m-3">
    <button  @click="addurine">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>
<div class="save">保存</div></div></button></div>
        <div class="m-3">
    <button  @click="back">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
</svg>
<div class="back">戻る</div></div></button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {

  },
  data() {
    return {
      urinememo: '',
      urinedate: '',
    }
  },
  head: {
    title: 'おしっこ管理',
  },
created(){
 console.log(this.$store.state)
 console.log(this.$store.state.UserInfo)
},
  methods: {
    saveUrine () {
      this.$router.push({ name: 'index' })
    },
    back() {
      this.$router.push({ name: 'index' })
    },
    addurine() {
      if(this.$store.state.UserInfo){
      confirm(`この内容で登録してもよろしいでしょうか`)
      const urines = {
        urinememo: this.urinememo,
        urinedate: this.urinedate,
        UserInfo:this.$store.state.UserInfo
      }
      this.urineupdate(urines)
      this.$router.push({ name: 'index' })
      this.urinememo=""
      this.urinedate=""
      }else{
        alert(`ログインしてください`)
        console.log(`ログインしていません`)
      }
    },
    ...mapActions(['urineupdate']),
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');

.save {
  text-align: center;
  margin: 0 40% 0 auto;
}
.back {
  text-align: center;
  margin: 0 40% 0 auto;
}
.urine-title {
  text-align: center;
  font-size: 200%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
}

.urine-hr {
  width: 40%;
  margin: -5% auto 5% auto;
  // text-align: center;
}

.urine-flower {
  &::before {
    content: '❋ *'; /*花に見せかけるためのアスタリスク*/
    color: #fff; /* アスタリスクの色 */
    display: inline-block;
    font-size: 35px; /* アスタリスクの大きさ */
    font-weight: bold;
    left: 20%;
    top: 80%;
    position: absolute;
    transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    -o-transform: rotate(20deg);
    text-shadow: 0px 0px 6px #fff2f2e5, 0px 0px 10px #fff6f9, 0 0 10px #e4c2ce; /* アスタリスク周りの影 */
    transform: rotate(45deg);
  }
}

.flame-urine {
  margin: 0 auto 3% auto;
  background-color: #fff2f2e5;
  padding: 5%;
  width: 80%;
  border-left: 5px dotted rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0 5px #fff2f2e5;

  &::before {
    content: '✻'; /*花に見せかけるためのアスタリスク*/
    color: #fff; /* アスタリスクの色 */
    display: inline-block;
    font-size: 40px; /* アスタリスクの大きさ */
    font-weight: bold;
    left: 75%;
    top: 45%;
    position: absolute;
    transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    -o-transform: rotate(20deg);
    text-shadow: 0px 0px 6px #fff2f2e5, 0px 0px 10px #fff6f9, 0 0 10px #e4c2ce; /* アスタリスク周りの影 */
  }
}

.urine-container {
  text-align: center;
  margin: 2%;
}
.container{
  display: flex;
  flex-wrap: wrap;
  display:inline-block
}
.button {
  display: flex;
  // border: 2px solid #000;
  border-radius: 0;
   background:rgb(180, 98, 98);
  margin: 5% 0 5% 0;
    width: 200px;
    padding: 5px;
    border-radius:30px;
  &:hover {
    // color: #fff;
  background: rgb(177, 90, 90);
}
}
</style>
