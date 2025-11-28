export default function MyProjects(){
    return(
        <>
            <div id="projects" className="projectsBox">
                <h4 className="myProjectsText">Projects</h4>
                <div className="myProjectsComp">
                    <a target="_blank" href="https://weather-app-ya99.vercel.app/" className="project">
                            <img className="imgProject" src="/myProjectsPhoto/firstProject.png" alt="" />
                            <p className="projectDes">Responsive Weather App build for both mobile and desktop screens, with a more polished layout on desktop view.</p>    
                        <div className="iconsProjects">
                            <a href="https://react.dev/" target="_blank" className="linkIcon" ><img className="iconsOneProject" src="/stackIcons/physics.png" alt="" /></a>
                            <a href="https://www.typescriptlang.org/" target="_blank" className="linkIcon" ><img className="iconsOneProject" src="/stackIcons/typescript.png" alt="" /></a>
                            <a href="https://www.typescriptlang.org/" target="_blank" className="linkIcon" ><img className="iconsOneProject" src="/stackIcons/css-3.png" alt="" /></a>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}