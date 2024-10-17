"use client";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import QRCode from "qrcode";

import icon from "../../../public/Images/Frame 41371.svg";
import icon2 from "../../../public/Images/Frame 1958.svg";
import Link from "next/link";
import BackButton from "../BackButton/BackButton";

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
        active ? "bg-[#a7f2ec] text-black" : "bg-[#7a7a7a] text-black "
      }`}
    >
      {number}
    </div>
    {number < 3 && (
      <div
        className={`h-[2px] w-12 sm:w-24 md:w-32 ${
          active ? "bg-[#a7f2ec]" : "bg-[#7a7a7a]"
        }`}
      ></div>
    )}
  </div>
);

export default function ConnectWallet() {
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [selectedWalletOption, setSelectedWalletOption] = useState<
    string | null
  >(null);

  const generateQRCode = async (walletUrl: string) => {
    try {
      const url = await QRCode.toDataURL(walletUrl);
      setQrCodeUrl(url);
    } catch (error) {
      console.error("Failed to generate QR code", error);
    }
  };

  const handleWalletClick = (walletName: string, walletUrl: string) => {
    if (selectedWalletOption === walletName) {
      setSelectedWalletOption(null);
      setQrCodeUrl(null);
    } else {
      setSelectedWalletOption(walletName);
      if (walletUrl) {
        generateQRCode(walletUrl);
      } else {
        setQrCodeUrl(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#14181D] text-white pt-[64px]">
          <BackButton />
      <div className="flex justify-center mb-8">
        <ProgressStep number={1} active={true} />
        <ProgressStep number={2} active={false} />
        <ProgressStep number={3} active={false} />
      </div>
      <div className="max-w-[339px] mx-auto">
        <h1 className="text-2xl font-medium mb-8 text-center">
          Connect your wallet
        </h1>
        <div className="max-w-[339px]">
          <div
            className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-[#1B2323]"
            onClick={() => handleWalletClick("Browser Wallet", "")}
          >
            <div className="flex items-center space-x-3">
              <Image
                src={icon}
                alt="Browser Wallet"
                className="w-[28px] h-[28px]"
              />
              <span className="text-[16px] font-medium font-[family-name:var(--font-satoshi-sans)] text-white">
                Browser Wallet
              </span>
            </div>
            <div
              className={`border rounded-full ${
                selectedWalletOption === "Browser Wallet" ? "border-white" : ""
              }`}
            >
              <h1
                className={`w-[14px] h-[14px] m-[2px] rounded-full ${
                  selectedWalletOption === "Browser Wallet" ? "bg-white" : ""
                }`}
              ></h1>
            </div>
          </div>

          <div
            onClick={() =>
              handleWalletClick(
                "Android CryptoX Wallet",
                "https://cryptox-wallet-url.com"
              )
            }
            className={`flex items-center justify-between p-4 mt-[4px] 
              ${
                selectedWalletOption === "Android CryptoX Wallet"
                  ? "rounded-t-lg "
                  : "rounded-lg"
              }
               cursor-pointer bg-[#1B2323]`}
          >
            <div className="flex items-center space-x-3">
              <Image
                src={icon2}
                alt="Android CryptoX Wallet"
                className="w-[28px] h-[28px]"
              />
              <span className="text-[16px] font-medium font-[family-name:var(--font-satoshi-sans)] text-white">
                Android CryptoX Wallet
              </span>
            </div>
            <div
              className={`border rounded-full ${
                selectedWalletOption === "Android CryptoX Wallet"
                  ? "border-white"
                  : ""
              }`}
            >
              <h1
                className={`w-[14px] h-[14px] m-[2px] rounded-full ${
                  selectedWalletOption === "Android CryptoX Wallet"
                    ? "bg-white"
                    : ""
                }`}
              ></h1>
            </div>
          </div>

          {qrCodeUrl && selectedWalletOption === "Android CryptoX Wallet" && (
            <div className="bg-[#1B2323] flex flex-col mb-[4px] p-2 items-center rounded-b-lg">
              <p className="mb-4 text-center flex flex-row text-[14px] items-center font-[family-name:var(--font-satoshi-sans)]  font-normal">
                Scan the QR code Or{" "}
                <Link href={"/twiter"}>
                  <button className="flex bg-[#383E40] justify-center items-center text-[14px] font-[family-name:var(--font-satoshi-sans)]  font-normal p-2 rounded-md ml-2">
                    Tap here{" "}
                    <ArrowLeft
                      size={14}
                      className="-rotate-180 ml-2 text-[14px]"
                    />
                  </button>
                </Link>
              </p>
              <Image
                src={qrCodeUrl}
                alt="QR Code"
                className="rounded-lg mb-2"
                width={200}
                height={200}
              />
            </div>
          )}
          <div
            onClick={() => handleWalletClick("", "")}
            className={`flex items-center justify-between rounded-lg p-4 mt-[4px] 
               cursor-pointer bg-transparent border-[1px] border-gray-500 bg-gray-800 opacity-50`}
          >
            <div className="flex items-center space-x-3">
              <Image
                src={icon2}
                alt="IOS CryptoX Wallet"
                className="w-[28px] h-[28px]"
              />
              <span className="text-[16px] font-medium font-[family-name:var(--font-satoshi-sans)] text-white">
                iOS CryptoX Wallet
              </span>
            </div>
            <div
              className={`border rounded-full ${
                selectedWalletOption === "IOS CryptoX Wallet"
                  ? "border-white"
                  : ""
              }`}
            >
              <h1
                className={`w-[14px] h-[14px] m-[2px] rounded-full ${
                  selectedWalletOption === "IOS CryptoX Wallet"
                    ? "bg-white"
                    : ""
                }`}
              ></h1>
            </div>
          </div>
          {qrCodeUrl && selectedWalletOption === "Android CryptoX Wallet" && (
            <p className="mt-[44px] text-[#CCD5D5] text-[12px]">
              By connecting a wallet, you agree to Concordium Terms of
              Service and acknowledge that you have read and understand the
              Concordium Privacy Policy.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
