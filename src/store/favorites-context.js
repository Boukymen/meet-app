import {createContext, useState} from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritesMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {

  const [userFavorites, SetUserFavorites]= useState([]);

  const addFavoriteHandler = (favoritesMeetup) => {
    SetUserFavorites((prevUserFavorites)=>{
      return prevUserFavorites.concat(favoritesMeetup);
    });
  }
  const removeFavoriteHandler = (meetupId) => {
    SetUserFavorites((prevUserFavorites)=>{
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }
  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some(meetup => meetup.id === meetupId);

  }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

   return (
   <FavoritesContext.Provider value = {context}>
     {props.children}
   </FavoritesContext.Provider>
   );
}

export default FavoritesContext;