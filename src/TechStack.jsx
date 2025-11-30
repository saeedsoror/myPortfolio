import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function TechStack(){
    useEffect(()=>{
        AOS.init({duration : 1000})
    },[]);
    return(
        <>
          <div id="skills" className="contTechTitle">
                <div className="theTechTitle">
                    {/* <h2 className="TechTitle">Tech Stack</h2> */}
                </div>
                {/* <hr style={{width:"80vw"}}/> */}
                <div className="scrolling">
                    <div  className="Stacks">
                        <img data-aos="fade" data-aos-delay="200" src="/stackIcons/html-5.png" alt="" className="stackIcon" />
                        <img data-aos="fade" data-aos-delay="100" src="/stackIcons/css-3.png" alt="" className="stackIcon" />
                        <img data-aos="fade" data-aos-delay="50" src="/stackIcons/js.png" alt="" className="stackIcon" />
                        <img data-aos="fade" data-aos-delay="100" src="/stackIcons/typescript.png" alt="" className="stackIcon" />
                        <img data-aos="fade" data-aos-delay="200" src="/stackIcons/physics.png" alt="" className="stackIcon" />
                        {/* <img src="/stackIcons/icons8-nextjs-96.png" alt="" className="stackIcon" /> */}
                        {/* <img src="/stackIcons/bootstrap.png" alt="" className="stackIcon" /> */}
                    </div>
                </div>
                {useEffect(()=>{AOS.refresh()},[])}
                {/* <hr style={{width:"80vw"}}/> */}
            </div>
        </>
    )
}