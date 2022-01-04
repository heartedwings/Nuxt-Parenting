// import { firestoreAction } from 'vuexfire'
// import firebase from '~/plugins/firebase'

// const db = firebase.firestore()
// const UserRef = db.collection(`User`)

// export const state = () => ({
//   User: [],
// })

// // stateのUser配列とfirebaseのUserコレクションを連携する処理
// // index.vueのcreatedで呼び出す予定
// export const actions = {
//   init: firestoreAction(({ bindFirestoreRef }) => {
//     bindFirestoreRef('User', UserRef)
//   }),
//   adduserinfo: firestoreAction((info) => {
//     // console.log(doc)
//     UserRef.doc(info.id).update({
//       id,
//       babyname:`78`,
//       birthday:`8`,
//       gender:`8`,
//     })
//     // console.log(doc)
//   }),
// }
