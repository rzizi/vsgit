const TokenKey = 'Admin-Token'

export const SET_TOKEN=(token:string)=>{
    uni.setStorageSync(TokenKey,token)
}
export const GET_TOKEN=()=>{
   return uni.getStorageSync(TokenKey)
}
// export const REMOVE_TOKEN=()=>{
//     localStorage.removeItem(TokenKey)
// }