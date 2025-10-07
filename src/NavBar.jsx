// import {Link} from "react-router-dom";
export default function NavBar(){
    document.getElementsByClassName('homeLink').className = "newLink";
    return(
        <>
        {/* <div className="containerNav"> */}

            <div className="myNavBar">
                
                <div className="myLinks">
                    {/* <Link to="/" className="homeLink">Home</Link> */}
                    <p className="homeLink"><a href="#skills" className="myL" to="/">Skills</a></p>
                    {/* <p className="homeLink"><a href="#about" className="myL" to="/">About</a></p> */}
                    <p className="homeLink"><a href="#projects" className="myL" to="/">Projects</a></p>
                    <p className="homeLink"><a href="#contact" className="myL" to="/">Contact</a></p>
                    

                </div>
            </div>
        {/* </div> */}
        </>
    )
}