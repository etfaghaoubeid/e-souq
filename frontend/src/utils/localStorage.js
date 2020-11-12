export const updateLocalStorageItem = (value, itemToUpdate)=>{
   localStorage.removeItem(itemToUpdate) ;
  return JSON.parse(localStorage.setItem(itemToUpdate, JSON.stringify(value)));
    
}
export const setLocalStorageItem = (value , itemName)=>{
    localStorage.removeItem(itemName) ;
    localStorage.setItem(itemName, JSON.stringify(value))
    return JSON.parse( localStorage.getItem(itemName));
}
export const getLocalStorageItem = ( itemToGet)=>{
  return JSON.parse(localStorage.getItem(itemToGet));
}
export const  deleteLoacalStorageItem=(itemToDelete)=>{
    localStorage.removeItem(itemToDelete)
}