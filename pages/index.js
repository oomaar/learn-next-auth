import { FcGoogle } from "react-icons/fc";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Home = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-50">
      {!session ? (
        <div
          className="flex cursor-pointer w-64 h-auto px-4 py-2 border rounded-md border-gray-300 items-center justify-center"
          onClick={() => router.push("/signin")}
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
          <button
            className="border border-gray-400 text-gray-500 px-8 py-2 rounded-md mt-5 
            hover:bg-gray-500 hover:border-transparent transition-all delay-400 hover:text-white"
            onClick={() => signOut()}
          >
            Log out
          </button>
        </>
      )}
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
