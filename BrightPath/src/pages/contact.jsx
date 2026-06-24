import Team from "../components/team"
import TeamMember from "../components/teammembers"
import Email from "../components/email"

const Contact = () => {
    return (
        <div>
            <Email />
            <h1 className="teamGreet" >Meet our team!</h1>
            <Team />
        </div>
    )
}

export default Contact