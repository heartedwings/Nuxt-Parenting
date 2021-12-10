import { vuexfireMutations } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const UserRef = db.collection(`User`)
// this.uid = String(uid)

export const state = () => ({
  user: {
    uid: "",
    email: '',
    // ログイン状態の真偽値
    login: false,
  },
  FoodList: [],
  chartData: [50, 51, 53, 55, 56, 58, 61, 63, 65, 68, 70, 71],
  chartDataW: [3, 3.4, 3.7, 4.1, 4.5, 4.8, 5.3, 5.6, 5.8, 6.1, 6.6, 7.4],
  heightDatas: {
    height: [50, 51, 53, 55, 56, 58],
    months: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  },
  // ユーザー情報が入る
UserInfo:"",
  weightDatas: [{ weight: 3.0, months: 0 }],
  // DBから取った全部の情報
  allData: [],
  // 身長のデータ配列たち
  heightLists: [],
  heightLists2: ['aaaa'],
  // heightLists2: ['', '', '42.9', '43.3', '44.0', '', '', '', '', '', '', '46.5'],
  heightLists3: [],
})
export const getters = {
  user: (state) => {
    return state.user.uid
  },
  userid: (state) => {
    return state.user ? state.user.uid : null
  },
  Food: (state) => {
    return state.FoodList
  },
  getChartData: (state) => {
    return state.chartData
  },
  getChartDataW: (state) => {
    return state.chartDataW
  },
  getChartHeight: (state) => {
    return state.heightDatas
  },
  getUnchiLists: (state) => state.unchiLists,
  getAllData: (state) => state.allData,
  getHeightLists2: (state) => state.heightLists2,
  getUserInfo: (state) =>  state.UserInfo
  }

export const actions = {
  // ユーザー情報更新
  userupdate(commit, {users,userData}) {
    UserRef.doc(userData)
    console.log(userData)
      .update({
        users: firebase.firestore.FieldValue.arrayUnion({
          babyname: users.babyname,
          gender: users.gender,
          birthday: users.birthday,
          // picture: users.picture,
        }),
      })
      .then(() => {
        commit('userupdate', users)
      })
  },
  // アレルギー更新
  allergyupdate({commit}, allergys) {
    UserRef.doc(`Z3h6iFpa2jPFY8A2w9z3`)
    // console.log(userData)
      .update({
        allergy: firebase.firestore.FieldValue.arrayUnion({
          newallergy: allergys.newallergy,
        }),
      })
      .then(() => {
        commit('allergyupdate', allergys)
      })
  },
  // 日記投稿
  diaryupdate(commit, diarys) {
    UserRef.doc(`Z3h6iFpa2jPFY8A2w9z3`)
      .update({
        diary: firebase.firestore.FieldValue.arrayUnion({
          diarydate: diarys.date,
          message: diarys.message,
          photo: diarys.photo,
        }),
      })
      .then(() => {
        commit('diaryupdate', diarys)
      })
  },
  // ご飯更新
  foodupdate({commit,state}, foods,) {
    console.log(state.UserInfo)
    UserRef.doc(state.UserInfo)
    console.log(state.UserInfo)
      .update({
        food: firebase.firestore.FieldValue.arrayUnion({
          foodmemo: foods.foodmemo,
          kinds: foods.kinds,
          fooddate: foods.fooddate,
          ml: foods.ml,
        }),
      })
      .then(() => {
        commit('foodupdate', foods)
      })
  },
  // 身長更新
  heightupdate(commit, heights) {
    UserRef.doc(`Z3h6iFpa2jPFY8A2w9z3`)
      .update({
        height: firebase.firestore.FieldValue.arrayUnion({
          height: heights.height,
          heightdate: heights.heightdate,
          babyyear: heights.babyyear,
        }),
      })
      .then(() => {
        commit('heightupdate', heights)
      })
  },
  // 体重更新
  weightupdate(commit, weights) {
    UserRef.doc(`Z3h6iFpa2jPFY8A2w9z3`)
      .update({
        weight: firebase.firestore.FieldValue.arrayUnion({
          weight: weights.weight,
          weightdate: weights.weightdate,
          babyyear: weights.babyyear,
        }),
      })
      .then(() => {
        commit('weightupdate', weights)
      })
  },
  // うんち更新
  unchiupdate(commit, unchis) {
    UserRef.doc(`Z3h6iFpa2jPFY8A2w9z3`)
      .update({
        unchi: firebase.firestore.FieldValue.arrayUnion({
          unchishape: unchis.unchishape,
          unchicolor: unchis.unchicolor,
          unchimemo: unchis.unchimemo,
          unchidate: unchis.unchidate,
          start: unchis.unchidate,
        }),
      })
      .then(() => {
        commit('unchiupdate', unchis)
      })
  },
  // おしっこ更新
  urineupdate(commit, urines) {
    UserRef.doc(`Z3h6iFpa2jPFY8A2w9z3`)
      .update({
        urine: firebase.firestore.FieldValue.arrayUnion({
          urinememo: urines.urinememo,
          urinedate: urines.urinedate,
        }),
      })
      .then(() => {
        commit('urineupdate', urines)
      })
  },
  // 初期情報追加
  adds({ getters }) {
    console.log('ugoi')
    console.log(getters.getUserInfo)
    db.collection(`User`).doc(getters.userid)
    console.log(getters.userid).add({
      users: [{ babyname: '', birthday: '', gender: '' }],
      allergy: [],
      food: [{ kinds: '', foodmemo: '', fooddate: '', ml: '' }],
      height: [{ height: '', heightdate: '' }],
      weight: [{ weight: '', weightdate: '' }],
      unchi: [{ unchiecolor: '', shape: '', unchimemo: '', unchidate: '' }],
      urine: [{ urinecolor: '', urinememo: '', urinedate: '' }],
      diary: [{ diarydate: '', message: '', photo: '' }],
    })
  },
  // 新規登録
  register({ dispatch, commit }, payload) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        console.log(user)
        dispatch('checklogin')
        dispatch('sendemail').catch((error) => {
          alert(error)
        })
      })
  },
  // ログインが正常にされているかチェックする
  checklogin({ commit }) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        commit('getData', { uid: user.uid, email: user.email })
        console.log(uid)
        commit('switchlogin')
      }
    })
  },
  // ログイン
  login({ getters }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        dispatch('checklogin')
        $nuxt.$router.push(`/SignUp`)
        console.log(getters.userid)
      })
      .catch((error) => {
        alert(error)
      })
  },
  // ログアウト
  logout({ context }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log(`ログアウト`)
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  // 全部のデータ DBから取り出し
  fetchAllData({ commit }) {
    UserRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        commit('fetchItems', doc.data())
      })
    })
  },
  // ユーザー情報取得
  fetchUser({commit},userData ) {
   console.log(`ff`)
   commit('fetchUser',userData)
  //  console.log(userData)
  },
  // 新規登録ユーザーに確認のメールを送信する
  sendemail(commit) {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        commit('sendemail')
      })
  },
  setHeightLists2({ commit }, height2) {
    commit('setHeightLists2', height2)
  },
}
export const mutations = {
  ...vuexfireMutations,
  // データをpayloadに代入
  getData(state, payload) {
    console.log(payload)
    console.log(state.user.uid)
    state.user.uid = payload.uid
    console.log(state.user.uid)
    state.user.email = payload.email
  },
  switchlogin(state) {
    state.user.login = true
    console.log(state.user.login)
  },
  // adds(state, { info }) {
  //   state.UserInfo = info
  //   // console.log(UserInfo)
  // },
  FoodList(state, foods) {
    state.FoodList.push(foods)
  },
  // DBからの取り出し
  fetchItems(state, Item) {
    state.allData = Item
    console.log(Item)
  },
   // ユーザー情報取得
  fetchUser(state,userData){
    console.log(`m`)
    state.UserInfo=userData
    console.log(state.UserInfo)
    console.log(userData)
  }
}
