import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

export default function ProofOfEligibility() {
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
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 flex flex-col">
      <header className="mb-8">
        <button className="text-gray-400 hover:text-gray-200 transition-colors">
          <ArrowLeft size={24} />
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center space-y-8 max-w-md mx-auto w-full">
        <div className="flex justify-center w-full mb-8">
          <ProgressStep number={1} active={true} />
          <ProgressStep number={2} active={true} />
          <ProgressStep number={3} active={true} />
        </div>

        <h1 className="text-[24px] font-medium mb-8">Proof of eligibility</h1>

        <div className="w-full space-y-2">
          <div>
            <p className="text-sm text-gray-400">User name</p>
            <p className="text-lg">John Douglas</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Passport number</p>
            <p className="text-lg">US991298</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Age</p>
            <div className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <p className="text-lg">Over 18 years old</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-400">Your country</p>
            <div className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <p className="text-lg">Eligible nationality</p>
            </div>
          </div>
        </div>

        <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors w-full max-w-xs mt-8">
          <Link href="/final">Finish</Link>
        </button>
      </main>
    </div>
  );
}
