import { ArrowLeft, Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SubmitXPost() {
  const ProgressStep = ({
    number,
    active,
  }: {
    number: number;
    active: boolean;
  }) => (
    <div className="flex items-center">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
          active ? "bg-teal-500 text-gray-900" : "bg-gray-700 text-gray-400"
        }`}
      >
        {number}
      </div>
      {number < 3 && (
        <div
          className={`h-[2px] w-12 sm:w-24 md:w-32 ${
            active ? "bg-teal-500" : "bg-gray-700"
          }`}
        ></div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#14181D] text-gray-100 pt-[64px]  flex flex-col">
      <main className="flex-grow flex flex-col items-center  max-w-2xl mx-auto w-full">
        <div className="flex justify-center ">
          <ProgressStep number={1} active={true} />
          <ProgressStep number={2} active={false} />
          <ProgressStep number={3} active={false} />
        </div>

        <h1 className="text-2xl sm:text-[24px] mt-[32px] mb-[24px] font-bold text-center">
          Submit X Post Link
        </h1>

        <div className="w-full max-w-[339px] space-y-4">
          <div className="bg-transparent px-[14px] pb-[12px] pt-[8px] border-[#71797E] border rounded-[12px]  ">
            <label
              htmlFor="post-link"
              className="block text-[12px] font-medium text-gray-400 "
            >
              Paste link here
            </label>
            <input
              type="text"
              id="post-link"
              className="w-full bg-transparent text-white outline-none  rounded-md"
              placeholder="https://x.com/coingecko/status/181499..."
            />
          </div>

          <div className="bg-transparent w-[339px]  border border-[#71797E]  py-[12px] px-[12px]  rounded-[14px] ">
            <h2 className="text-lg sm:text-xl font-semibold">Details</h2>
            <ul className="list-disc list-inside  text-gray-300 text-[14px] ">
              <li>
                Your post should contain the #Concordium hashtag and mention{" "}
                <span className="text-blue-500 ">@ConcordiumNet</span>
              </li>
              <li>The text can be anything you want</li>
              <li>Use the template below or write your own</li>
            </ul>

            <div className="p-[16px] bg-[#1A1F21] mt-[12px] rounded-lg relative">
              <button className="flex justify-center items-center gap-1 absolute top-2 right-2 bg-[#383E40] p-2 rounded-md hover:bg-gray-500 transition-colors">
                <Copy size={16} />
                <div>Copy</div>
              </button>
              <div className="flex items-center mb-2">
                <Image
                  src="/Images/woman.png"
                  width={40}
                  height={40}
                  alt="Profile picture"
                  className="rounded-full mr-2"
                />
                <div>
                  <p className="font-semibold text-[11px]">Yourname</p>
                  <p className="text-gray-400 text-[11px">@yournickname</p>
                </div>
              </div>
              <p className="text-[12px] font-normal">
                Just created my @ConcordiumNet account and received 1000 $CCD
                reward! Go to concordium.com/wallet to get yours!
              </p>
              <p className="text-teal-500 text-[11px] font-normal">
                #Concordium
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                XX:XX PM · Aug XX, 2024
              </p>
            </div>
          </div>
        </div>

        <button className="bg-white mt-[96px] text-gray-900 font-semibold py-2 sm:py-3 px-6 rounded-full hover:bg-gray-200 transition-colors w-full max-w-xs">
          <Link href="/proof">Continue</Link>
        </button>
      </main>
    </div>
  );
}
