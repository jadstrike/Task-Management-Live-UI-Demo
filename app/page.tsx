import Link from "next/link";
export default function Login() {
  return (
    <div className="flex items-center justify-center w-screen h-screen text-white bg-black ">
      <Link href={"/home"}>
        <p className="p-2 text-3xl border border-green-300 rounded-lg hover:text-purple-100">
          Go to Dashboard
        </p>
      </Link>
    </div>
  );
}
