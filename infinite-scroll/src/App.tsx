import { useState } from "react";

interface IUserData {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  bloodGroup: string;
}

const App = () => {
  const [userData, setUserData] = useState<IUserData[]>([
    {
      id: 1,
      firstName: "Terry",
      lastName: "Medhurst",
      maidenName: "Smitham",
      age: 50,
      gender: "male",
      email: "atuny0@sohu.com",
      phone: "+63 791 675 8914",
      birthDate: "2000-12-25",
      bloodGroup: "A-",
    },
  ]);
  return (
    <ul className="flex flex-col items-center m-10 gap-20">
      {userData.length === 0
        ? Array.from({ length: 5 }).map((_, index) => {
            return (
              <li key={index} className="h-52 shadow-md rounded-md w-full" />
            );
          })
        : userData.map((user) => {
            return (
              <li
                key={user?.id}
                className="shadow-md rounded-md w-full p-5 flex flex-col gap-2"
              >
                <p>
                  Name :{" "}
                  {`${user?.firstName} ${user?.maidenName} ${user?.lastName}`}
                </p>
                <p>Age : {user?.age}</p>
                <p>Gender : {user?.gender}</p>
                <p>Email : {user?.email}</p>
                <p>Phone : {user?.phone}</p>
                <p>DOB : {user?.birthDate}</p>
                <p>Blood Group : {user?.bloodGroup}</p>
              </li>
            );
          })}
    </ul>
  );
};

export default App;
