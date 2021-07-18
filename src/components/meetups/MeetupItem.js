import React, {useContext} from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context'
function MeetupItem(props) {

  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if(itemIsFavorite){
      favoritesCtx.removeFavorite(props.id);
    }else{
      favoritesCtx.addFavorite({
        id : props.id, 
        title:props.title,
        address:props.address,
        description:props.description,
        image:props.image
      });
    }
  }
  return (
    <Card >
      <li className={classes.item}>
        <div className={classes.image}>
        <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address} </address>
          <p> {props.description} </p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler} >{itemIsFavorite ?'Remove from Favorite':  'To Favorites'}</button>
        </div>
      </li>
    </Card>
    
  )
}

export default MeetupItem
