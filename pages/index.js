import { FcGoogle } from "react-icons/fc";
import { signIn, signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-50">
      {!session ? (
        <div
          className="flex cursor-pointer w-64 h-auto px-4 py-2 border rounded-md border-gray-300 items-center justify-center"
          onClick={signIn}
        >
          <FcGoogle fontSize={30} className="mr-4" />
          <span>Sign in with Google</span>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center mb-10">
            <img
              className="border rounded-full w-40"
              src={user?.image}
              alt="User Image"
            />
            <p className="text-2xl font-semibold">
              Loged in as: <span className="text-green-700">{user?.name}</span>
            </p>
            <p className="text-2xl font-semibold">
              Email: <span className="text-green-700">{user?.email}</span>
            </p>
          </div>
          <p>Logged In</p>
        </>
      )}
    </div>
  );
};

export default Home;
