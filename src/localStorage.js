

export function setLocalStorageValue(key,value){
   return  localStorage.setItem(key,value)
}

export function getLocalStorageValue(key){
    return localStorage.getItem(key)
}