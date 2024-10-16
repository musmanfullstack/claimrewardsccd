// import { ArrowLeft } from 'lucide-react'

// import icon from "../../../public/Images/Frame 1958.png"
// import icon2 from "../../../public/Images/asdadas.png"
// import Image, { StaticImageData } from 'next/image';
// import QRCode from "qrcode"

// const ProgressStep = ({ number, active }: { number: number; active: boolean }) => (
//   <div className="flex items-center">
//     <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${active ? 'bg-teal-500 text-gray-900' : 'bg-gray-700 text-gray-400'}`}>
//       {number}
//     </div>
//     {number < 3 && (
//       <div className={`h-[2px] w-16 ${active ? 'bg-teal-500' : 'bg-gray-700'}`}></div>
//     )}
//   </div>
// )

// const WalletOption = ({ icon, name, disabled = false }: { icon: StaticImageData, name: string, disabled?: boolean }) => (
//   <div className={`flex items-center justify-between p-4 rounded-lg ${disabled ? 'bg-gray-800 opacity-50' : 'bg-gray-900'}`}>
//     <div className="flex items-center space-x-3">
//       <Image src={icon} alt={name} className="w-6 h-6" />
//       <span className={`text-sm ${disabled ? 'text-gray-400' : 'text-white'}`}>{name}</span>
//     </div>
//     <div className={`w-5 h-5 rounded-full border ${disabled ? 'border-gray-600' : 'border-gray-500'}`}></div>
//   </div>
// )

// export default function ConnectWallet() {
//   return (
//     <div className="min-h-screen bg-gray-950 text-white p-6">
//       <div className="max-w-md mx-auto">
//         <button className="mb-8">
//           <ArrowLeft className="w-6 h-6" />
//         </button>

//         <div className="flex justify-center mb-8">
//           <ProgressStep number={1} active={true} />
//           <ProgressStep number={2} active={false} />
//           <ProgressStep number={3} active={false} />
//         </div>

//         <h1 className="text-2xl font-semibold mb-8 text-center">Connect your wallet</h1>

//         <div className="space-y-4">
//           <WalletOption icon={icon} name="Browser Wallet" />
//           <WalletOption icon={icon2} name="Android CryptoX Wallet" />
//           <WalletOption icon={icon2} name="iOS CryptoX Wallet (coming soon)" disabled />
//         </div>
//       </div>
//     </div>
//   )
// }

"use client";

// import { useState } from "react";
// import { ArrowLeft } from "lucide-react";
// import Image, { StaticImageData } from "next/image";
// import QRCode from "qrcode";

// import icon from "../../../public/Images/Frame 1958.png";
// import icon2 from "../../../public/Images/asdadas.png";

// const ProgressStep = ({
//   number,
//   active,
// }: {
//   number: number;
//   active: boolean;
// }) => (
//   <div className="flex items-center">
//     <div
//       className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
//         active ? "bg-teal-500 text-gray-900" : "bg-gray-700 text-gray-400"
//       }`}
//     >
//       {number}
//     </div>
//     {number < 3 && (
//       <div
//         className={`h-[2px] w-48 ${active ? "bg-teal-500" : "bg-gray-700"}`}
//       ></div>
//     )}
//   </div>
// );

// const WalletOption = ({
//   icon,
//   name,
//   onClick,
//   disabled = false,
// }: {
//   icon: StaticImageData;
//   name: string;
//   onClick?: () => void;
//   disabled?: boolean;
// }) => (
//   <div
//     className={`flex items-center justify-between p-4 rounded-lg cursor-pointer ${
//       disabled ? "bg-gray-800 opacity-50" : "bg-[#1B2323]"
//     }`}
//     onClick={!disabled && onClick ? onClick : undefined}
//   >
//     <div className="flex items-center space-x-3 ">
//       <Image src={icon} alt={name} className="w-6 h-6" />
//       <span className={`text-sm ${disabled ? "text-gray-400" : "text-white"}`}>
//         {name}
//       </span>
//     </div>
//     <div
//       className={`w-5 h-5 rounded-full border ${
//         disabled ? "border-gray-600" : "border-gray-500"
//       }`}
//     ></div>
//   </div>
// );

// export default function ConnectWallet() {
//   const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

//   const generateQRCode = async (walletUrl: string) => {
//     try {
//       const url = await QRCode.toDataURL(walletUrl);
//       setQrCodeUrl(url);
//     } catch (error) {
//       console.error("Failed to generate QR code", error);
//     }
//   };

//   const handleWalletClick = () => {
//     // The wallet URL can be your desired wallet connect URL
//     const walletUrl = "https://android-wallet-url.com";
//     generateQRCode(walletUrl);
//   };

//   return (
//     <div className="min-h-screen bg-[#14181D] text-white p-6">
//       <div className="max-w-md mx-auto">
//         <button className="mb-8">
//           <ArrowLeft className="w-6 h-6" />
//         </button>

//         <div className="flex justify-center mb-8">
//           <ProgressStep number={1} active={true} />
//           <ProgressStep number={2} active={false} />
//           <ProgressStep number={3} active={false} />
//         </div>

//         <h1 className="text-2xl font-semibold mb-8 text-center">
//           Connect your wallet
//         </h1>

//         <div className=" max-w-[348px]">
//           <WalletOption icon={icon} name="Browser Wallet" />
//           <WalletOption
//             icon={icon2}
//             name="Android CryptoX Wallet"
//             onClick={handleWalletClick}
//           />
//           {qrCodeUrl && (
//             <div className="bg-[#1B2323] flex flex-col   items-center">
//               <p className="mb-4 text-center flex flex-row items-center ">
//                 Scan the QR code Or{" "}
//                 <button className="flex bg-[#383E40] p-2 rounded-md ml-2">
//                   Tap here <ArrowLeft className="-rotate-180 ml-2" />
//                 </button>
//               </p>
//               <Image
//                 src={qrCodeUrl}
//                 alt="QR Code"
//                 className="rounded-lg mb-2"
//                 width={200}
//                 height={200}
//               />
//             </div>
//           )}
//           <WalletOption
//             icon={icon2}
//             name="iOS CryptoX Wallet (coming soon)"
//             disabled
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import QRCode from "qrcode";

import icon from "../../../public/Images/Frame 1958.png";
import icon2 from "../../../public/Images/asdadas.png";
import Link from "next/link";

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

const WalletOption = ({
  icon,
  name,
  onClick,
  selected,
  disabled = false,
}: {
  icon: StaticImageData;
  name: string;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
}) => (
  <div
    className={`flex items-center justify-between p-4 rounded-lg cursor-pointer ${
      disabled ? "bg-gray-800 opacity-50" : "bg-[#1B2323]"
    }`}
    onClick={!disabled && onClick ? onClick : undefined}
  >
    <div className="flex items-center space-x-3 ">
      <Image src={icon} alt={name} className="w-6 h-6" />
      <span className={`text-sm ${disabled ? "text-gray-400" : "text-white"}`}>
        {name}
      </span>
    </div>
    <div
      className={`w-5 h-5 rounded-full border ${
        selected
          ? "bg-teal-500 border-teal-500"
          : disabled
          ? "border-gray-600"
          : "border-gray-500"
      }`}
    ></div>
  </div>
);

export default function ConnectWallet() {
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [selectedWalletOption, setSelectedWalletOption] = useState<
    string | null
  >(null);

  const [next, setNext] = useState(false);

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
      if (walletUrl) generateQRCode(walletUrl);
      else setQrCodeUrl(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#14181D] text-white pt-[64px]">
      <div className="flex  justify-center mb-8">
        <ProgressStep number={1} active={true} />
        <ProgressStep number={2} active={false} />
        <ProgressStep number={3} active={false} />
      </div>
      {next ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="max-w-[339px]">
            <h1 className="text-3xl font-semibold mb-8 text-center">
              Concordium Wallet App Setup
            </h1>
          </div>
        </div>
      ) : (
        <>
          <div className="max-w-[339px] mx-auto">
            <h1 className="text-2xl font-semibold mb-8 text-center">
              Connect your wallet
            </h1>

            <div className=" space-y-4 max-w-[339px]">
              <WalletOption
                icon={icon}
                name="Browser Wallet"
                selected={selectedWalletOption === "Browser Wallet"}
                onClick={() => handleWalletClick("Browser Wallet", "")}
              />
              <WalletOption
                icon={icon2}
                name="Android CryptoX Wallet"
                selected={selectedWalletOption === "Android CryptoX Wallet"}
                onClick={() =>
                  handleWalletClick(
                    "Android CryptoX Wallet",
                    "https://android-wallet-url.com"
                  )
                }
              />
              {qrCodeUrl && (
                <div className="bg-[#1B2323] flex flex-col  p-2 items-center rounded-lg">
                  <p className="mb-4 text-center flex flex-row text-[14px] items-center ">
                    Scan the QR code Or{" "}
                     <Link href={"/twiter"}>
                    <button className="flex bg-[#383E40] justify-center items-center text-[14px] p-2 rounded-md ml-2">
                     Tap here <ArrowLeft size={14} className="-rotate-180 ml-2 text-[14px]" />
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
              <WalletOption
                icon={icon2}
                name="iOS CryptoX Wallet"
                selected={selectedWalletOption === "iOS CryptoX Wallet"}
                disabled
              />
            </div>

            <p className="mt-[44px] text-[#CCD5D5] text-[12px]">
              By connecting a wallet, you agree to Concordium Terms of
              Service and acknowledge that you have read and understand the
              Concordium Privacy Policy.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
