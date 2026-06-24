const Projects = () => {
    return (
        <div>
            <div className="pageDesc">
                <h1>Previous Projects</h1>
                <p>Here is a list of projects we have worked upon in the past</p>
            </div>  
            <ul className="carousel">
                <li data-accname="Item 1">
                    <div className="previous-projects">
                        <img src="./src/assets/images/GananoqueFoodBandPfp.png" alt="GananoqueFoodBandPfp" />
                        <div>
                            <h2>name of app</h2>
                            <h3>Made for: Gananoque FoodBank</h3>
                        </div>
                        <img src="./src/assets/images/temp.jpg" alt="temp" />
                    </div>
                    <p className="appDesc">web app meant to help efficiently manage data, with added functionality to read text from a page and store it on the site</p>
                    <p className="appDesc">technical details about the development process</p>
                </li>
                <li data-accname="Item 2">
                    <h2>Page 2</h2>
                </li>
                <li data-accname="Item 3">
                    <h2>Page 3</h2>
                </li>
                <li data-accname="Item 4">
                    <h2>Page 4</h2>
                </li>
            </ul>
        </div>
    )
}

export default Projects