import { Links, Link } from 'react-router-dom'

const Heading = () => {
    return (
        <header>
            <div className="companyName">
                <h1><Link to="/">Bright Path Tech</Link></h1>
            </div>
            <nav className="navBar">
                <Link to="/home"><span className="hiddenIcon" >{'> '} </span>Home</Link>
                <Link to="/projects"><span className="hiddenIcon" >{'> '} </span>Projects</Link>
                <Link to="/contact"><span className="hiddenIcon" >{'> '} </span>Contact Us</Link>
            </nav>
        </header>
    )
}

export default Heading;