/*
  This will result in $store.state.user.user,
  but can't think of a better way of doing this
*/
const user = {
  state() {
    return {
      user: null,
    }
  },
  mutations: {
    setUser(state, fireUser) {
      state.user = {
        displayName: fireUser.displayName,
        email: fireUser.email,
        photoUrl: fireUser.photoUrl,
        uid: fireUser.uid,
        providerData: fireUser.providerData,
      }
    },
    clearUser(state) {
      state.user = null
    },
  },
}

export default user
