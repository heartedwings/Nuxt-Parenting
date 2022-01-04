import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'ユーザー情報',
    state: {
      UserInfo: "",
    },
    getters:{
      user: (state) => {
        return state.user.uid
      },
      getUserInfo: state =>  state.UserInfo ? state.UserInfo.uid : null, 
    }
  })(store)
}