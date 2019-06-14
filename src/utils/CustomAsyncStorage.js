// import { AsyncStorage } from "react-native";

// export const USER_DATA='user_data';
// export const setUserData=(data)=>
//   {
//    storeItem(USER_DATA,data);
//   }
//   export const getUserData= ()=>
//   {
// console.log('retrieveItem  getUserData  called : ');
// return    retrieveItem(USER_DATA).then((data) => {
//           //this callback is executed when your Promise is resolved
//           console.log('userData Value retrieveItem  : '+JSON.stringify(data));
//           }).catch((error) => {
//           //this callback is executed when your Promise is rejected
//           console.log('Promise is rejected with error: ' + error);
//           })
//   }



//   export const retrieveItem = async (key) => {
//     console.log('retrieveItem called'+key);
//      try {
//        const retrievedItem =  await AsyncStorage.getItem(key);
//        const item = JSON.parse(retrievedItem);
//        return item;
//      } catch (error) {
//        console.log('retrieveItem called error'+error.message);
//      }
//      return
//    }

// export const storeItem = async(key, item)=> {
//        try {
//            //we want to wait for the Promise returned by AsyncStorage.setItem()
//            //to be resolved to the actual value before returning the value
//            var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
//            return jsonOfItem;
//        } catch (error) {
//          console.log('error storeItem '+error.message);
//        }
//      }

// export const clearData = async () => {
//   try {
//      await AsyncStorage.clear();
//    } catch (error) {
//      // Error retrieving data
//    }
// }
