import Heading from '../components/heading.jsx'

const Home = () => {
    return (
        <div>
            <div className="mission">
                <h2>Our Mission:</h2>
                <p>We aim to provide no-cost or low-cost technology support to charities, non-profits, and community-serving organizations while creating meaningful paid work experience for students and recent graduates.</p>
            </div>
            <div className="images">
                <img className="homeImg" src="./src/assets/images/temp.jpg" alt="Image 1 Placeholder" />
            </div>
            <div className="addInfo">
                <h2>Why Choose Us?</h2>
                <p>We are committed to making a positive impact in our community by bridging the gap between technology and those who need it most. Our team of dedicated volunteers works tirelessly to ensure that every organization we support receives the best possible service.</p>
            </div>
        </div>
    )
}

export default Home;