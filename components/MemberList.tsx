import Member from "./Member";

const MemberList = ({ members }) => {
  return (
    <div>
      {members.map((member) => (
        <Member member={member} key={member.name}></Member>
      ))}
    </div>
  );
};

export default MemberList;
