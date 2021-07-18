import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import {useHistory} from 'react-router-dom';


function NewMeetup() {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch('https://react-meetup-app-74c6e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', 
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(()=>{
      history.replace('/'); // navigate from this last history page
    })
  }
  return (
    <div>
        <h1> New meet ups page </h1>
        <NewMeetupForm  onAddMeetup={addMeetupHandler}/>
    </div>
  )
}

export default NewMeetup
