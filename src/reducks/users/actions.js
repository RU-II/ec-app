export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username
    }
  }
}

export const SIGN_OUT = "SIGN_OUT";
// SIGN_OUT時はuserの状態の初期化するだけ->引数受け取らない
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      username: ""
    }
  }
}
