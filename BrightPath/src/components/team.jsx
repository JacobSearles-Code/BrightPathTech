import TeamMember from "./teammembers.jsx";

const Team = () => {

  const members = [
    {
      name: "Jacob Searles",
      role: "Developer",
      skills: "React, HTML, Javascript"
    },
    {
      name: "Darwin Wagar",
      role: "Developer",
      skills: "C#, C++, Python"
    },
    {
      name: "Jarrod Hoddinott",
      role: "Team Lead",
      skills: "Node.js, Databases, APIs"
    },
    {
      name: "Maxwell Schriner",
      role: "Developer",
      skills: "Node.js, Databases, APIs"
    }
  ];


  return (
    <section className="team-section">

      {members.map((member, index) => (
        <TeamMember
          key={index}
          name={member.name}
          role={member.role}
          skills={member.skills}
        />
      ))}

    </section>
  );
}

export default Team;