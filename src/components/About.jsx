import video from '../assets/videos/coffee-video.mp4'
const About = () => {
    return ( 
        <>
        <div className="story flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-4 w-[95%] lg:w-[65%] mx-auto">
        <div className="basis-1/2">
          
          <video src={video} autoPlay loop muted className="w-full h-full object-cover min-h-[350px]"></video>
           
        </div>
        <div className="basis-1/2 text-center lg:text-left lg:pl-6">
          <div className="text-3xl leading-10 mb-6 font-">What is your most special coffee?</div>
          <div className="text-gray-500 leading-7 mb-6">The French Press is a brewing method that comes closest to cupping. Cupping is the prescribed method by which coffee should be judged. Nothing separates the water from the coffee. To properly discover the flavours, it is best to drink the coffee this way. Everyone has their favourite brewing method.</div>
          <div className="">
            <a href="/" className="text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400">Read the full Story</a>
          </div>
        </div>
      </div>
      {/* end */}
      
     
     
        </>
     );
}
 
export default About;