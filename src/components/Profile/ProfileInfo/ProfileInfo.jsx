import Dana from '../Myposts/Post/Dana.jpg';
import classes from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
   <div>
   
    <div>
      <img src='https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/b6494d0eccc83b39187016f377c799d677b9f274-1000x319.jpg' />
    </div> 
    < div>
       <img src={Dana}
       className={classes.item}
        alt='Dana' />


    </div>

   
  </div>

)

}

export default ProfileInfo;