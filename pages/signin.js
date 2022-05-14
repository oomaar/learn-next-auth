import { getProviders, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function SignIn({ providers }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-50">
      {Object.values(providers).map((provider) => (
        <button
          className="flex cursor-pointer w-64 h-auto px-4 py-2 border rounded-md border-gray-300 items-center justify-center"
          key={provider.name}
          onClick={() => signIn(provider.id)}
        >
          <FcGoogle fontSize={30} className="mr-4" /> Sign in with{" "}
          {provider.name}
        </button>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
