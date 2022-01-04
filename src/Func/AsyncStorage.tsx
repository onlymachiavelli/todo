import { AsyncStorage } from "@react-native-async-storage/async-storage"


export const storeDate = async(key:string,value:JSON) =>{
    try{
        await AsyncStorage.setItem (key, JSON.stringify(value))
    }
    catch(e) {
        console.log(e)
    }
}

export const getData =async (key:string) =>{
    try{
        return JSON.parse(await AsyncStorage.getItem(key))
    }
    catch(e){
        console.log(e)
    }

}

export const deleteItem = async (key:string) =>{
    try {
        await AsyncStorage.removeItem(key)
    }
    catch(e){
        console.log(e)
    }
}


export const clearStorage = async () =>{
    try{
        await AsyncStorage.clear()
    }
    catch(e){
        console.log(e)
    }
}



export const getAll = async () =>{
    let keys = []
    try{
        keys =  AsyncStorage.getAllKeys()
        return keys

    }   
    catch(e){
        console.log(e)
    }
}