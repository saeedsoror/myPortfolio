import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function MyProjects(){
    useEffect(()=>{
            AOS.init({duration : 500})
        },[]);
    return(
        <>
            <div id="projects" className="projectsBox">
                <h4 className="myProjectsText">Projects</h4>
                <div className="myProjectsComp">
                    <a target="_blank" href="https://weather-app-ya99.vercel.app/" className="project" data-aos="fade-up">
                            <img className="imgProject" src="/myProjectsPhoto/firstProject.png" alt="" />
                            <p className="projectDes">Responsive Weather App build for both mobile and desktop screens, with a more polished layout on desktop view.</p>    
                        <div className="iconsProjects">
                            <a href="https://react.dev/" target="_blank" className="linkIcon" ><img className="iconsOneProject" src="/stackIcons/physics.png" alt="" /></a>
                            <a href="https://www.typescriptlang.org/" target="_blank" className="linkIcon" ><img className="iconsOneProject" src="/stackIcons/typescript.png" alt="" /></a>
                            <a href="https://www.typescriptlang.org/" target="_blank" className="linkIcon" ><img className="iconsOneProject" src="/stackIcons/css-3.png" alt="" /></a>
                        </div>
                    </a>
                    <a target="_blank"  className="project" data-aos="fade-up" data-aos-delay="100">
                            <img className="imgProject" src="/imgProjects/3.png" alt="" style={{height:"100%",width:"100%"}} />
                            {/* <p className="projectDes">Responsive Weather App build for both mobile and desktop screens, with a more polished layout on desktop view.</p>     */}
                        <div className="iconsProjects">
                            {/* <a href="https://react.dev/" target="_blank" className="linkIcon" ><img className="iconsOneProject" src="/stackIcons/physics.png" alt="" /></a>
                            <a href="https://www.typescriptlang.org/" target="_blank" className="linkIcon" ><img className="iconsOneProject" src="/stackIcons/typescript.png" alt="" /></a>
                            <a href="https://www.typescriptlang.org/" target="_blank" className="linkIcon" ><img className="iconsOneProject" src="/stackIcons/css-3.png" alt="" /></a> */}
                        </div>
                    </a>
                </div>
                {useEffect(()=>{AOS.refresh()},[])}
            </div>
        </>
    )
}