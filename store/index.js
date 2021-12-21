import { vuexfireMutations } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const UserRef = db.collection(`User`)

export const state = () => ({
  user: {
    uid: "",
    email: '',
    // ログイン状態の真偽値
    login: false
  },
  UserInfo: "",
  FoodList: [],
  months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  // DBから取った全部の情報
  allData: [],
  userlist:null,
  Users:[]
  // ユーザーの情報が入る配列
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
  getAllData: state => state.allData,
  getUserInfo: state =>  state.UserInfo ? state.UserInfo.uid : null, 
  getUser: state => state.Users,
  }

export const actions = {
  // モジュール
  nuxtClientInit ({ commit ,dispatch},) {
    const data = JSON.parse(localStorage.getItem('ユーザー情報')) || []
    console.log(data.UserInfo)
    if (data.UserInfo) {
      dispatch('fetchAllData',data.UserInfo)
      commit('fetchUser', data.UserInfo)
    }
  },
  // アレルギー更新
  allergyupdate({commit},allergys) {
    UserRef.doc(allergys.UserInfo)
      .update({
        allergy: firebase.firestore.FieldValue.arrayUnion({
          newallergy: allergys.newallergy,
        }),
      }).then(() => {
      commit('allergyupdate',allergys,{root: true} )
      })
  },

  // ご飯更新
  foodupdate({commit}, foods) {
    // console.log(foods.UserInfo)
    UserRef.doc(foods.UserInfo)
      .update({
        food: firebase.firestore.FieldValue.arrayUnion({
          foodmemo: foods.foodmemo,
          kinds: foods.kinds,
          fooddate: foods.fooddate,
          ml: foods.ml,
        }),
      })
      .then(() => {
        commit('foodupdate', foods,{root: true} )
      })
  },
  // 身長更新
  heightupdate({commit}, heights) {
    UserRef.doc(heights.UserInfo)
      .update({
        height: firebase.firestore.FieldValue.arrayUnion({
          height: heights.height,
          heightdate: heights.heightdate,
          babyyear: heights.babyyear,
        }),
      })
      .then(() => {
        commit('heightupdate', heights,{root: true} )
      })
  },
  // 体重更新
  weightupdate({commit}, weights) {
    UserRef.doc(weights.UserInfo)
      .update({
        weight: firebase.firestore.FieldValue.arrayUnion({
          weight: weights.weight,
          weightdate: weights.weightdate,
          babyyear: weights.babyyear,
        }),
      })
      .then(() => {
        commit('weightupdate', weights,{root: true} )
      })
  },
  // うんち更新
  unchiupdate({commit}, unchis) {
    UserRef.doc(unchis.UserInfo)
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
        commit('unchiupdate', unchis,{root: true} )
      })
  },
  // おしっこ更新
  urineupdate({commit}, urines) {
    UserRef.doc(urines.UserInfo)
      .update({
        urine: firebase.firestore.FieldValue.arrayUnion({
          urinememo: urines.urinememo,
          urinedate: urines.urinedate,
        }),
      })
      .then(() => {
        commit('urineupdate', urines,{root: true} )
      })
  },
  // 初期情報追加
  adds({commit},UserInfo) {
    db.collection(`User`)
    .doc(UserInfo)
    .set({
      // usersSign: [{ babyname: '', birthday: '', gender: '', picture:'' }],
      // allergy: [''],
      // food: [{ kinds: '', foodmemo: '', fooddate: '', ml: '' }],
      // height: [{ height: '', heightdate: '' }],
      // weight: [{ weight: '', weightdate: '' }],
      // unchi: [{ unchiecolor: '', shape: '', unchimemo: '', unchidate: '' }],
      // urine: [{ urinecolor: '', urinememo: '', urinedate: '' }],
      // diary: [{ diarydate: '', message: '', photo: '' }],
      usersSign: [],
      allergy: [],
      food: [],
      height: [],
      weight: [],
      unchi: [],
      urine: [],
      diary: [],
    })
  },
  // 新規登録
  register({ dispatch }, payload) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        console.log(user)
        dispatch('adds',user.user.uid,{root: true} )
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
        commit('getData', { uid: user.uid, email: user.email },{root: true} )
        commit('switchlogin')
      }
    })
  },
  // ログイン
  login({dispatch},payload) {
    console.log(payload)
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then( () => {
        dispatch('checklogin')
        console.log(`ログイン`)
        // $nuxt.$router.push(`/SignUp`)
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
      })
      .catch((error) => {
        console.log(error)
      })
  },
  // 全部のデータ DBから取り出し
  fetchAllData({ commit},UserInfo) {
    console.log(UserInfo)
    firebase.firestore()
    .collection(`User/`)
    .doc(UserInfo)
    .get().then((doc) => {
      // commitしてstoreにデータを入れる
      commit('fetchAllData',doc.data())
        console.log(doc.data());
      })
  },

  // うんちデータの消去機能
  deleteUnchiData( { commit }, unchisD) {
    // console.log(unchisD);
    firebase
    .firestore()
    db
    .collection(`User`)
    .doc(unchisD.UserInfo)
    .update({
      unchi : firebase.firestore.FieldValue.arrayRemove(unchisD.unchiList)
    })
    .then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
  },
  // おしっこデータの消去機能
  deleteUrineData( { commit }, urinesD) {
    // console.log(urinesD);
    firebase
    .firestore()
    db
    .collection(`User`)
    .doc(urinesD.UserInfo)
    .update({
      urine : firebase.firestore.FieldValue.arrayRemove(urinesD.urineList)
    })
    .then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
  },

  // ご飯データの消去機能
  deleteFoodData( { commit }, foodsD) {
    // console.log(foodsD);
    firebase
    .firestore()
    db
    .collection(`User`)
    .doc(foodsD.UserInfo)
    .update({
      food : firebase.firestore.FieldValue.arrayRemove(foodsD.foodList)
    })
    .then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
  },
    // 日記の消去機能
    deleteDiaryData( { commit }, diarysD) {
      firebase
      .firestore()
      db
      .collection(`User`)
      .doc(diarysD.UserInfo)
      .update({
        diary : firebase.firestore.FieldValue.arrayRemove(diarysD.diaryList)
      })
      .then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    },
  // ユーザー情報取得
  fetchUser({commit},userData ) {
   commit('fetchUser',userData)
  },
  // 新規登録ユーザーに確認のメールを送信する
  sendemail() {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        // commit('sendemail')
      })
  },
}
export const mutations = {
  ...vuexfireMutations,
  // データをpayloadに代入
  getData(state, payload) {
    // console.log(payload)
    // console.log(state.user.uid)
    state.user.uid = payload.uid
    // console.log(state.user.uid)
    state.user.email = payload.email
  },
  switchlogin(state) {
    state.user.login = true
  },
  FoodList(state, foods) {
    state.FoodList.push(foods)
  },
  // DBからの取り出し
  fetchItems(state, Item) {
    state.allData = Item
    // console.log(Item)
  },
  // ユーザー情報取得
  fetchAllData(state,user){
    state.Users=user
  },
   // ユーザー情報取得
  fetchUser(state,userData){
    state.UserInfo=userData
  }
}
