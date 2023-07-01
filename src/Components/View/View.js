  import React ,{useEffect,useContext,useState}from 'react';
  import { PostContext } from '../../store/postContext';
  import './View.css';
  import { FirebaseContext } from '../../store/Contexts';
  function View() {
    const [userDetails,setUserDetails]=useState([])
    const {postDetails}= useContext(PostContext)
    const {firebase}=useContext(FirebaseContext)
    useEffect(()=>{
      const {userId }=postDetails
      firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
        res.docs.forEach(doc => {
          setUserDetails(doc.data())
        });
      })
    },[postDetails, firebase])
    return (
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          {postDetails && postDetails.url ? <img
            src={postDetails.url}
            alt=""
          />: (
            <p>Loading image...</p>
          )}
        </div>
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9; {postDetails.price}</p>
            <span>YAMAHA R15V3</span>
            <p>Two Wheeler</p>
            <span>Tue May 04 2021</span>
          </div>
           <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.userphone }</p>
          </div>
        </div>
      </div>
    );
  }
  export default View;
