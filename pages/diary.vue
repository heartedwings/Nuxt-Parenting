<template >
<div class="container">
  <no-ssr>
  <div class=" diary-title">Baby Diary</div>

  <div><img class="diary-hr" :src="require(`~/assets/hr.png`)" alt="" width="400%" height="30px"></div>

  <i class="fab fa-twitter"></i>
  <div class="flame-diary">
        <div class="diary-flower"/>

 <div class="drop_area">
   日時：<input  v-model="diary.date" type="date"> <br><i class="fab fa-facebook-f"></i>
       <textarea
       v-model="diary.message" class="textarea" cols="30"  rows="5"  name="Memo" placeholder=" タップしてテキストを入力"
        maxlength="500"/><br>
         <input type="file" @change="upload">
         <div class="picture">
         </div>
        </div>
        <ul class="snsbtniti">
          <!-- Twitterリンク -->
          <li><a  href="https://twitter.com/share?url=https://nuxt-parenting.web.app/&text=『３歳以下の子供に使える子育てアプリ』" 
           rel="nofollow" target="_blank" class="flowbtn6 fl_tw1">
           <img src="~/assets/twitter.jpg" width="50px" height="50px" class="pic" alt="twitterアイコン"></a></li>
           <!-- LINEリンク -->
          <a href="//timeline.line.me/social-plugin/share?url=https://nuxt-parenting.web.app/&text=『３歳以下の子供に使える子育てアプリ』" target="_blank" rel="nofollow noopener noreferrer">
          <img src="~/assets/line.png" width="50px" height="50px" class="pic" alt="LINEアイコン">
</a>
          <!-- FaceBookリンク -->
          <li><a class="js-sns-link" href="//www.facebook.com/sharer/sharer.php?u=https://nuxt-parenting.web.app/&t=『３歳以下の子供に使える子育てアプリ』" target="_blank" rel="nofollow noopener noreferrer">
          <img src="~/assets/fa.jpg" width="50px" height="50px" class="pic" alt="FaceBookアイコン"></a></li>
        </ul>
     <div class="m-3">
    <button @click="add">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
投稿</div></button>

<div class=" diary-title">Baby Diarys</div>
  <div class="containers">
<div v-for="item in getUser.diary" :key="item.index" class="item">
<div class="date">{{item.diarydate}}</div><br>
{{item.message}}<br>
<div v-if="item.img">
 <img :src="item.img" width="300px" height="300px" alt="思い出写真">
 </div>
 <div v-if="!item.img"> 
    <img src="~/assets/noimage.png" width="300px" height="300px" class="pic">
 </div>
 <button @click="clear(item)"> <img src="~/assets/trash.png" width="30px" height="30px" class="pic"></button>
    </div>
    <br>
  </div>
  </div>
</div>
</no-ssr>
</div>
</template>
<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'
import 'firebase/storage'

const db = firebase.firestore()
const UserRef = db.collection(`User`)

export default {
  data() {
    return {
    diary:{date: '', message: '', img: '' },
    data:[],
    lastdata:[]
    }
  },
  head: {
    title: '思い出',
  },
    computed: {
    ...mapGetters(['getUser']),
  },
  created() {
  // データ表示
  console.log(this.$store.state.UserInfo)
  db.collection(`User`)
  .get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    this.data = doc.data().diary
    const newdata= this.data
    console.log(this.data)
  
    const diarys= {
      img: this.data.img ? this.data.img : '/noimage.png',
      diarydate: this.data.diarydate? this.data.diarydate : '',
      message: this.data.message ? this.data.message : 0,
    }
    console.log(diarys)
    this.diary.push(diarys)
  })
})
    },
  methods: {
    // firebaseへ追加処理
    add() {
      if(this.$store.state.UserInfo){
        confirm(`この内容で登録をしてもよろしいでしょうか`)
       UserRef
       .doc(this.$store.state.UserInfo)
       .update({
        diary: firebase.firestore.FieldValue.arrayUnion({
        diarydate: this.diary.date,
        message: this.diary.message,
        img:this.diary.img,
        })
        })
        .then((ref) => {
          console.log(this.$store.state.UserInfo)
          this.diary.date= ''
          this.diary.message = ''
          this.diary.img = ''
        })
      }else {
          alert(`ログインをしてください`)
        }
    },
    // 画像のパス取得&storageへアクセスし保存
    upload(e) {
      const file = e.target.files[0]
      console.log(file)
      if (!file.type.includes('image')) {
        this.errorMessage = '画像を指定してください'
        return
      }
     firebase.storage().ref(file.name).put(file).then(() => {
      console.log(file)
        firebase
          .storage()
          .ref(file.name)
          .getDownloadURL()
          .then((url) => {
            this.diary.img = url
            console.log(this.diary.img)
          })
      }) 
  },
  clear(i) {
      if (this.$store.state.UserInfo) {
          confirm(`消去しますか？`)
          const diarysD = {
            diaryList: i,
            UserInfo: this.$store.state.UserInfo,
          }
      this.deleteDiaryData(diarysD)
      }
    },
   ...mapActions(['deleteDiaryData']),
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');

.containerss{
  display: flex;
}
.container {
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.containers{
  display: flex;
  flex-wrap: wrap;
   justify-content: center; 
}
.button {
  display: flex;
}
.diary-title {
  text-align: center;
  font-size: 200%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
}

.diary-hr {
  width: 40%;
  margin: -5% auto 5% auto;
  // text-align: center;
}

.diary-flower {
  &::before {
    content: '❋ *'; /*花に見せかけるためのアスタリスク*/
    color: #fff; /* アスタリスクの色 */
    display: inline-block;
    font-size: 35px; /* アスタリスクの大きさ */
    font-weight: bold;
    left: 16%;
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

.flame-diary {
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
    left: 80%;
    top: 45%;
    position: absolute;
    transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    -o-transform: rotate(20deg);
    text-shadow: 0px 0px 6px #fff2f2e5, 0px 0px 10px #fff6f9, 0 0 10px #e4c2ce; /* アスタリスク周りの影 */
  }
}

.days {
  font-size: 40px;
}
.buttons {
  text-align: center;
  display: inline-block;
  padding: 0.6em 1em 0.6em 2.5em;
  margin: 0 0 0.4em;
  background-color: #55acee;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &::after {
  position: absolute;
  content: '\f099';
  font-family: 'Font Awesome 5 Brands';
  font-weight: 400;
  top: 50%;
  left: 0.5em;
  transform: translateY(-50%);
  font-size: 1.2em;
}
}
.enter {
  border: 10px dotted powderblue;
}
.button {
  display: flex;
  border-radius: 0;
  background: rgb(180, 98, 98);
  margin: 5% 0 5% 0;
  width: 250px;
  padding: 5px;
  border-radius: 30px;
  &:hover {
    background: rgb(177, 90, 90);
  }
}
/* ボタン全体 */
.flowbtn6{
border-radius:13px;		
position:relative;
display:inline-block;
width:50px;
height:50px;
font-size:33px;
color:#fff!important;
transition:.5s;
text-decoration:none;
}
// /* アイコンをど真ん中に*/
.flowbtn6 i{
position:absolute;
top:50%;
left:50%;
-ms-transform:translate(-50%,-50%);
-webkit-transform:translate(-50%,-50%);
transform:translate(-50%,-50%);
}
/* ulタグの内側余白を０にする */
ul.snsbtniti{
padding:0!important;
}
// /* アイコンボタン全体の位置 */
.snsbtniti{
display:flex;
flex-wrap: wrap;
 justify-content: center; 
}
/* アイコンボタン同士の余白 */
.snsbtniti li{
flex:20% 0 20%;
text-align:center!important;
}
/* アイコンボタンにマウスを乗せた時 */
.flowbtn6:hover{
-webkit-transform:translateY(-5px);
-ms-transform:translateY(-5px);
transform:translateY(-5px);
}
/* Twitter */
.fl_tw1{
background:#55acee;
}
/* LINE@ */
.fl_li6{
background:#00c300;			
}
/* Instagram紫グラデ背景 */
.insta_btn6 {
background:-webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
background:linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
overflow:hidden;	
}
/* LINE@ */
.fl_li6{
background:#00c300;			
}
.picture{
  margin: 5% 0 5% 0;
}
.date{
  font-weight: bold;
}

.textarea {
  width:80%;
  height:30%;
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>
