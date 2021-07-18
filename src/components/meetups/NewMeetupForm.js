import {useRef} from 'react';
import classes from './NewMeetupForm.module.css';

import Card from '../ui/Card';
function NewMeetupForm(props) {

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault(); 
    const enteredTitle = titleInputRef.current.value; 
    const enteredImage = imageInputRef.current.value; 
    const enteredAdress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAdress,
      description: enteredDescription
    };
    // console.log(meetupData);

    props.onAddMeetup(meetupData);


  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className = {classes.control}>
          <label htmlFor="title"> Meetup title</label>
          <input type="text" className={classes.input} required placeholder="...Meetup title here" id="title" ref={titleInputRef} />
        </div>
        <div className = {classes.control}>
          <label htmlFor="image"> Meetup Image</label>
          <input type="url" className={classes.input} required placeholder="...Meetup image url" id="image" ref={imageInputRef}/>
        </div>
        <div className = {classes.control}>
          <label htmlFor="address"> Address</label>
          <input type="text" className={classes.input} required placeholder="...Address" id="address" ref={addressInputRef}/>
        </div>
        <div className = {classes.control}>
          <label htmlFor="description"> Description</label>
          <textarea  required rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className = {classes.actions}>
          <button type="submit" >Submit</button>
         </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
