import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function Component() {
  return (
    <div
      className="min-h-screen bg-[#14181D] text-gray-100 p-6 flex flex-col"
    >
      <header className="mb-8">
        <button className="text-gray-400 hover:text-gray-200 transition-colors">
          <ArrowLeft size={24} />
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center space-y-8">
        <h1 className="text-4xl font-bold text-[#A2CAC1] text-center">
          Concordium Rewards
        </h1>

        <div className=" relative flex items-center space-x-9">
          <div className="bg-[#A2CAC1] rounded-full p-4 absolute ">
            <Image
              src="/Images/twitter.png"
              alt="twitter"
              width={24}
              height={24}
              className="text-gray-900"
            ></Image>
          </div>
          <div className="bg-gray-700 rounded-full p-4">
            <Image
              src="/Images/logo.png"
              alt="Concordium logo"
              width={24}
              height={24}
              className="text-gray-300"
            />
          </div>
        </div>

        <div className="max-w-md w-full">
          <h2 className="text-xl font-semibold text-[#A2CAC1] mb-4">
            Create post on X and get 1,000 CCD:
          </h2>
          <ol className="space-y-3 list-decimal list-inside">
            <li>Connect your wallet</li>
            <li>
              Post about Concordium on X (Twitter) with the #Concordium hashtag
            </li>
            <li>Confirm that you are of eligible age and nationality</li>
          </ol>
        </div>

        <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors">
          <a href="/connnectwallet">Get started</a>
        </button>
      </main>
    </div>
  );
}
