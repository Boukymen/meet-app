import React, {useState, useEffect} from 'react'
import MeetupList from '../components/meetups/MeetupList'
 function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);


  
  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-meetup-app-74c6e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
  {
    method: 'GET'
  }).then(response => {
     return response.json();
  }).then( data => {
    const meetups = [];
    for(const key in data) {
      const newMeetup = {
        id:key,
        ...data[key]
      }

      meetups.push(newMeetup);

    }
    setIsLoading(false);
    setLoadedMeetups(meetups)
  });
  },[]);

  if(isLoading){
    return (
      <section>
        <p>Loading... </p>
      </section>
    )
  }
  return (
    <section className="dummy-data">
      <h1 >All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
      
    </section>
  )
}

export default AllMeetups
