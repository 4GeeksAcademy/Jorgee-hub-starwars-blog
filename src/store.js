export const initialStore=()=>{
  return{
    characters:[],
    planets:[],
    favorites:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_characters':


      return {
        ...store,
        characters:action.payload
      };
    case 'add_favorite':
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };
    case 'remove_favorite':
      return{
        ...store,
        favorites: store.favorites.filter((fav) => !(fav.uid === action.payload.uid && fav.category === action.payload.category))
      };
    case 'add_planet':
      return {
        ...store,
        planets:action.payload
      }
    default:
      throw Error('Unknown action.');
  }    
}
