import React from 'react'

const VideoBG = () => {
  return (
   
         <div className="video-bg">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MWOlnZSnXJo?si=wpi0dQvBHizYtzq2&autoplay=1&mute=1&controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="video-gradient-overlay"></div>
        </div>
    
  )
}

export default VideoBG