"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="h-screen bg-background-color flex flex-col justify-center items-center text-foreground-text">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <Image
            src="/images/logo-with-text.svg"
            alt="Logo"
            height={60}
            width={220}
          />
        </div>

        <div className="px-5 mt-5 flex flex-col gap-4">
          <h4 className="text-center font-bold text-3xl">
            We couldn't find what you were looking for
          </h4>
          <div>
            <button
              onClick={() => router.push("/")}
              className="h-[36px] w-full px-4 rounded-2xl cursor-pointer bg-primary-dark font-medium"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
