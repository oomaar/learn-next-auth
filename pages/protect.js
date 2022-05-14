import { signOut, useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Protect = () => {
  const { data: session, loading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && !loading) {
      router.push("/");
    }
  }, [session]);

  if (loading) return <h1>Loading...</h1>;

  //   if (!loading && !session) {
  //     return (
  //       <div className="flex flex-col w-screen h-screen items-center justify-center">
  //         <h1 className="mb-10">Access Denied, Please Sign in</h1>
  //         <div
  //           className="flex cursor-pointer w-64 h-auto px-4 py-2 border rounded-md border-gray-300 items-center justify-center"
  //           onClick={() => router.push("/signin")}
  //         >
  //           <span>Sign in</span>
  //         </div>
  //       </div>
  //     );
  //   }

  return (
    <div>
      <h1>Protected</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Protect;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
