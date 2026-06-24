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
      skills: "Figma, CSS, UX"
    },
    {
      name: "Jarrod Hoddinott",
      role: "Backend Developer",
      skills: "Node.js, Databases, APIs"
    },
    {
      name: "Maxwell Schriner",
      role: "Backend Developer",
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