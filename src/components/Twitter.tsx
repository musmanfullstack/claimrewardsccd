import { Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BackButton from "./BackButton";

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
          active
            ? number === 2
              ? "bg-[#ece2cd] text-black" // Step 2 color when active
              : number === 3
              ? "bg-[#b6ade6] text-black" // Step 3 color when active
              : "bg-[#a7f2ec] text-black" // Default active color for other steps
            : "bg-[#7a7a7a] text-black" // Inactive color
        }`}
      >
        {number}
      </div>
      {number < 3 && (
        <div
          className={`h-[2px] w-12 sm:w-24 md:w-32 ${
            active
              ? number === 2
                ? "bg-[#ece2cd]"
                : number === 3
                ? "bg-[#a7f2ec]" // Step 3 line color when active
                : "bg-[#a7f2ec]"
              : "bg-[#7a7a7a]"
          }`}
        ></div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#14181D] text-gray-100 pt-[64px]  flex flex-col">
      <BackButton />
      <main className="flex-grow flex flex-col items-center  max-w-2xl mx-auto w-full">
        <div className="flex justify-center ">
          <ProgressStep number={1} active={true} />
          <ProgressStep number={2} active={true} />
          <ProgressStep number={3} active={false} />
        </div>

        <h1 className="text-[24px] mt-[32px] mb-[24px] font-medium text-center font-[family-name:var(--font-satoshi-sans)]">
          Submit X Post Link
        </h1>

        <div className="w-full max-w-[339px] space-y-4">
          <div className="bg-transparent px-[14px] pb-[12px] pt-[8px] border-[#71797E] border rounded-[12px]  ">
            <label
              htmlFor="post-link"
              className="block text-[12px] font-normal text-gray-400 "
            >
              Paste link here
            </label>
            <input
              type="text"
              id="post-link"
              className="w-full bg-transparent text-white outline-none text-[14px] font-medium font-[family-name:var(--font-satoshi-sans)]  rounded-md"
              placeholder="https://x.com/coingecko/status/181499..."
            />
          </div>

          <div className="bg-transparent w-[339px]  border border-[#71797E]  py-[12px] px-[12px]  rounded-[14px] ">
            <h2 className="text-[16px] font-medium font-[family-name:var(--font-satoshi-sans)]">
              Details
            </h2>
            <ul className="list-disc list-inside  space-y-[3px] text-gray-300 text-[14px] font-[family-name:var(--font-satoshi-sans)]">
              <li>
                Your post should contain the{" "}
                <span className="text-blue-500 ">#ConcordiumNet</span>{" "}
                <span className="ml-5">hashtag and mention</span>{" "}
                <span className="text-blue-500 ">@ConcordiumNet</span>
              </li>
              <li>The text can be anything you want</li>
              <li>Use the template below or write your own</li>
            </ul>

            <div className="p-[16px] bg-[#1A1F21] mt-[12px] rounded-lg relative">
              <button className="flex justify-center items-center gap-1 absolute top-2 right-2 bg-[#383E40] p-2 text-[12px] font-medium rounded-md hover:bg-gray-500 transition-colors">
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
                  <p className="font-semibold font-[family-name:var(--font-satoshi-sans)] text-[11px]">
                    Yourname
                  </p>
                  <p className="text-gray-400 text-[11px] font-[family-name:var(--font-satoshi-sans)]">
                    @yournickname
                  </p>
                </div>
              </div>
              <p className="text-[12px] font-normal font-[family-name:var(--font-satoshi-sans)]">
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
        <Link href="/proof">
          <button className="bg-white w-[240px] mt-[80px] text-gray-900 font-semibold py-2 sm:py-3 px-6 rounded-full hover:bg-gray-200 transition-colors  max-w-xs">
            Continue
          </button>
        </Link>
      </main>
    </div>
  );
}
