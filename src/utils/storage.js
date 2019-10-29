import store from 'store'
const USER_INFO='user_info';
export default {
    saveUser(user){
        store.set(USER_INFO,user)
    },
    getUser(){
        return store.get(USER_INFO)||{}
    },
    removeUser(){
        store.remove(USER_INFO)
    }
}