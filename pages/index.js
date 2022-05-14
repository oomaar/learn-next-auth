import { FcGoogle } from "react-icons/fc";
import { signIn, signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  console.log("🚀 ~ file: index.js ~ line 6 ~ Home ~ session", session);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-50">
      <div
        className="flex cursor-pointer w-64 h-auto px-4 py-2 border rounded-md border-gray-300 items-center justify-center"
        onClick={signIn}
      >
        <FcGoogle fontSize={30} className="mr-4" />
        <span>Sign in with Google</span>
      </div>
    </div>
  );
};

export default Home;
