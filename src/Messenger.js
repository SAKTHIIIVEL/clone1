import React, { useState } from 'react';
import "./MessageSender.css";
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import db from './firebase';


function Messenger() {
    const [{user},dispatch] = useStateValue();
    const[input ,setinput] = useState('');
    const[imageurl,setimageurl] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();

        //database stuff
         addDoc(collection(db, 'posts'), {
            message: input,
            timestamp: serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageurl
          });

        setinput("");
        setimageurl('');

    }
  return (
    <div className='messengerSender'>
        <div className='messageSender_top'>
            <Avatar src={user.photoURL}/>
            <form>
                <input value={input} onChange={(e) => setinput(e.target.value)} className='messageSender_input' type='text' placeholder='Write some text here.....' />
                <input value={imageurl} onChange={(e)=>setimageurl(e.target.value)}  placeholder='Image Url (optional)'/>
                <button type='submit' onClick={handleSubmit}>Hidden Submit</button>
            </form>
           
        </div>
        <div className='messageSender_bottom'>
            <div className='messageSender_option'>
                <VideocamIcon style={{color:"green"}} />
                <h3>Live Video</h3>
            </div>
            <div className='messageSender_option'>
                <PhotoLibraryIcon style={{color:"red"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className='messageSender_option'>
                <InsertEmoticonIcon style={{color:"orange"}} />
                <h3>Photo/Video</h3>
            </div>
        </div>


    </div>
  )
}

export default Messenger