const TeamMember = ({name, role, skills}) => {
  return (
    <div className="terminal-card">

      <div className="terminal-bar">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>

        <p>{name.toLowerCase().replace(/ /g, "_")}.exe</p>
      </div>


      <div className="terminal-content">

        <p>$ load_profile</p>

        <p>
          NAME: <span>{name}</span>
        </p>

        <p>
          ROLE: <span>{role}</span>
        </p>

        <p>
          SKILLS: <span>{skills}</span>
        </p>

        <p className="online">
          ● ONLINE
        </p>

      </div>

    </div>
  );
}

export default TeamMember;