import { Links, Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div>
            <div className="landingName">
                <h1>Bright Path Tech</h1>
            </div>
            <div>
                <nav className="landingNav">
                    <Link to="/home" className="navItem">Home</Link>
                    <Link to="/projects" className="navItem">Projects</Link>
                    <Link to="/contact" className="navItem">Contact Us</Link>
                </nav>
            </div>
        </div>
    )
}

export default Landing;