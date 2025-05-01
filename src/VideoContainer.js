import './VideoContainer.css';

export const VideoContainer = ({scrollToProducts})=> {




    return(
        <div>
               <div className='videoContainer'>
                   <video muted autoPlay loop playsInline
                          preload="auto"
                          fetchPriority="high"
                          width="100%" >
                     <source src='https://res.cloudinary.com/dx8o0homn/video/upload/v1745700768/video_u8buxd.mp4' type='video/mp4'/>
                   </video>
                   <button className='btnLogo' onClick={()=>scrollToProducts()}>SHOP NOW</button>
                   <h1>ELEGANCE &middot; IDENTITY &middot; SCORPIO</h1>
                 </div>  
        </div>
    )
}