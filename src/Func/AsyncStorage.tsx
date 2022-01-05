import AsyncStorage from "@react-native-async-storage/async-storage"


export const storeData = async(key:string,value:any) =>{
    try{
        await AsyncStorage.setItem (key, JSON.stringify(value))
    }
    catch(e) {
        console.log(e)
        
    }
}

export const getData =async (key:string) =>{
    try{
        const res = await AsyncStorage.getItem(key)
    
        return res != null ? JSON.parse(res) : null
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
    
    try{
        let keys =  await AsyncStorage.getAllKeys()
        return keys

    }   
    catch(e){
        console.log(e)
    }
}