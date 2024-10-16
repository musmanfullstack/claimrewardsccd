import { ArrowLeft, Copy } from 'lucide-react'
import Image from 'next/image'

export default function SubmitXPost() {
  const ProgressStep = ({ number, active }: { number: number; active: boolean }) => (
    <div className="flex items-center">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${active ? 'bg-teal-500 text-gray-900' : 'bg-gray-700 text-gray-400'}`}>
        {number}
      </div>
      {number < 3 && (
        <div className={`h-[2px] min-w-16 ${active ? 'bg-teal-500' : 'bg-gray-700'}`}></div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 flex flex-col">
      <header className="mb-4 ">
        <button className="text-gray-400 hover:text-gray-200 transition-colors">
          <ArrowLeft size={24} />
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center space-y-6 sm:space-y-8 max-w-2xl mx-auto w-full">
        <div className="flex justify-center space-x-2">
          <ProgressStep number={1} active={true} />
          <ProgressStep number={2} active={false} />
          <ProgressStep number={3} active={false} />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-center">Submit X Post Link</h1>

        <div className="w-full max-w-[427px] space-y-4">
          <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
            <label htmlFor="post-link" className="block text-sm font-medium text-gray-400 mb-2">
              Paste link here
            </label>
            <input
              type="text"
              id="post-link"
              className="w-full bg-gray-700 text-white p-2 sm:p-3 rounded-md"
              placeholder="https://x.com/coingecko/status/181499..."
            />
          </div>

          <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
            <h2 className="text-lg sm:text-xl font-semibold">Details</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base">
              <li>Your post should contain the #Concordium hashtag and mention @ConcordiumNet</li>
              <li>The text can be anything you want</li>
              <li>Use the template below or write your own</li>
            </ul>

            <div className="mt-3 sm:mt-4 bg-gray-700 p-3 sm:p-4 rounded-lg relative">
              <button className="flex justify-center items-center gap-1 absolute top-2 right-2 bg-gray-600 p-2 rounded-md hover:bg-gray-500 transition-colors">
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
                  <p className="font-semibold">Yourname</p>
                  <p className="text-gray-400 text-sm">@yournickname</p>
                </div>
              </div>
              <p className="text-sm sm:text-base">
                Just created my @ConcordiumNet account and received 1000 $CCD reward! Go to
                concordium.com/wallet to get yours!
              </p>
              <p className="text-teal-500 text-sm sm:text-base">#Concordium</p>
              <p className="text-gray-400 text-xs sm:text-sm">XX:XX PM · Aug XX, 2024</p>
            </div>
          </div>
        </div>

        <button className="bg-white text-gray-900 font-semibold py-2 sm:py-3 px-6 rounded-full hover:bg-gray-200 transition-colors w-full max-w-xs">
          Continue
        </button>
      </main>
    </div>
  );
}
