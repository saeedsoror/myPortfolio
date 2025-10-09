export default function MyProjects(){
    return(
        <>
            <div id="projects" className="projectsBox">
                <h4 className="myProjectsText">Projects</h4>
                <div className="myProjectsComp">
                    <div className="project">
                        <div className="imgPoject">
                            <img className="imgProject" src="/imgProjects/3.png" alt="" />
                        </div>
                        <div className="iconsProjects">
                            {/* <a href="https://getbootstrap.com/" target="_blank" className="linkIcon" ><img className="iconsOneProject" src="/stackIcons/bootstrap.png" alt="" /></a> */}
                            {/* <a href="" className="linkIcon"><img className="iconsOneProject" src="/stackIcons/bootstrap.png" alt="" /></a> */}
                        </div>
                    </div>
                    {/* <div className="project"></div> */}
                </div>
            </div>
        </>
    )
}