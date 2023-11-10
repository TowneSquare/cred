import { UserType } from "../../../type/userType";
import UserItem from "./userItem";

const UserList = () => {
  return (
    <div className="mt-32  py-5 w-full  flex flex-col items-center">
      <p className="text-center text-3xl">Top 500 addresses by CRED score</p>
      <div className="mt-2 w-8 h-px border border-secondary-default" />
      <div className="mt-8 w-full border border-gray-light-1 rounded-md bg-black">
        <div className="w-full h-full flex flex-col">
          {Users.map((user, index) => (
            <UserItem data={user} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;

const Users: UserType[] = Array(500).fill({
  ranking: 1,
  walletAddress: '0x4414d542b0...aee870281F',
  score: 22870
});
