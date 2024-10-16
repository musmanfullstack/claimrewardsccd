"use client";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
  const [verifyProgress, setVerifyProgress] = useState(false);
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100  flex flex-col">
      <main className="flex-grow pt-[64px] flex flex-col max-w-[339px] items-center space-y-8  mx-auto ">
        <div className="flex justify-center w-full ">
          <ProgressStep number={1} active={true} />
          <ProgressStep number={2} active={true} />
          <ProgressStep number={3} active={false} />
        </div>

        <h1 className="text-[24px] font-medium  mb-4">Proof of eligibility</h1>
        <div className="h-[60vh] flex flex-col justify-between">
          {verifyProgress ? (
            <>
              <div className="w-[339px] space-y-2">
                <div className="">
                  <p className="text-sm text-gray-400">User name</p>
                  <p className="border-b border-white text-lg">John Douglas</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Passport number</p>
                  <p className="text-lg border-b border-white">US991298</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Age</p>
                  <div className="flex items-center border-b border-white">
                    <Check size={20} className="text-green-500 mr-2" />
                    <p className="text-lg ">Over 18 years old</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Your country</p>
                  <div className="flex items-center border-b border-white">
                    <Check size={20} className="text-green-500 mr-2" />
                    <p className="text-lg">Eligible nationality</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full space-y-6">
              <p className="text-gray-300 text-[12px] font-normal ">
                To collect your reward, you must verify the below data
                <br /> using your ConcordiumID.
              </p>

              <ul className="space-y-2 text-gray-300 ">
                <li className="flex items-center  border-gray-400 py-[4px] border-b-[1px]  ">
                  <span className="w-1 h-1 bg-gray-400 rounded-full  text-[12px] font-normal mr-[4px]"></span>
                  Your full name
                </li>
                <li className="flex items-center  border-gray-400 py-[4px] border-b-[1px] mb-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full text-[12px] mr-[4px] font-normal"></span>
                  Your ID number
                </li>
                <li className="flex items-center  border-gray-400 py-[4px] border-b-[1px] mb-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full text-[12px] mr-[4px] font-normal"></span>
                  That you are over 18 years old
                </li>
                <li className="flex items-center  border-gray-400 py-[4px]  border-b-[1px] mb-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full text-[12px] mr-[4px] font-normal"></span>
                  That your nationality is eligible *
                </li>
              </ul>

              <p className="text-[12px] font-normal text-gray-400">
                * Not eligible nationalities are: USA, Iran, North Korea,
                occupied regions of Ukraine.
              </p>
            </div>
          )}
          {verifyProgress ? (
            <Link href={"/final"}>
            <button
              
              className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors w-full max-w-xs mt-28"
            >
              Finish
            </button>
            </Link>
          ) : (
              <button onClick={() => {
                setVerifyProgress(true);
              }} className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors w-full max-w-xs mt-28">
                Verify
              </button>
          )}
        </div>
      </main>
    </div>
  );
}
