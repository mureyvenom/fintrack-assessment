"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen bg-background-color flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <Image
            src="/images/logo-with-text.svg"
            alt="Logo"
            height={60}
            width={220}
          />
        </div>

        <div className="md:min-w-[350px] min-w-[320px] w-full px-5 mt-5 flex flex-col gap-4">
          <div>
            <input
              type="text"
              className="border-primary-light bg-background-color placeholder:text-primary/60 border text-foreground-text sm:text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full px-4 p-2.5 border-"
              placeholder="Authentication ID"
            />
          </div>
          <div>
            <input
              type="password"
              className="border-primary-light bg-background-color placeholder:text-primary/60 border text-foreground-text sm:text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full px-4 p-2.5 border-"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              onClick={() => router.push("/dashboard")}
              className="h-[36px] w-full px-4 rounded-2xl cursor-pointer bg-primary-dark font-medium"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
