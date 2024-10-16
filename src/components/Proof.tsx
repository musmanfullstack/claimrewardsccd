import { ArrowLeft } from 'lucide-react'

export default function ProofOfEligibility() {
  const ProgressStep = ({ number, active }: { number: number; active: boolean }) => (
    <div className="flex items-center">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${active ? 'bg-teal-500 text-gray-900' : 'bg-gray-700 text-gray-400'}`}>
        {number}
      </div>
      {number < 3 && (
        <div className={`h-[2px] w-12 sm:w-24 md:w-32 ${active ? 'bg-teal-500' : 'bg-gray-700'}`}></div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 flex flex-col">
      <header className="">
        <button className="text-gray-400 hover:text-gray-200 transition-colors">
          <ArrowLeft size={24} />
        </button>
      </header>
      
      <main className="flex-grow flex flex-col items-center space-y-8 max-w-md mx-auto w-full">
        <div className="flex justify-center w-full ">
          <ProgressStep number={1} active={true} />
          <ProgressStep number={2} active={true} />
          <ProgressStep number={3} active={false} />
        </div>

        <h1 className="text-3xl font-bold mb-4">Proof of eligibility</h1>
        
        <div className="w-full space-y-6">
          <p className="text-gray-300 text-center">
            To collect your reward, you must verify the below data using your ConcordiumID.
          </p>
          
          <ul className="space-y-2 text-gray-300 ">
            <li className="flex items-center  border-gray-400  border-b-[1px] mb-2">
              <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
              Your full name
            </li>
            <li className="flex items-center  border-gray-400  border-b-[1px] mb-2">
              <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
              Your ID number
            </li>
            <li className="flex items-center  border-gray-400  border-b-[1px] mb-2">
              <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
              That you are over 18 years old
            </li>
            <li className="flex items-center  border-gray-400  border-b-[1px] mb-2">
              <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
              That your nationality is eligible *
            </li>
          </ul>
          
          <p className="text-s text-gray-400">
            * Not eligible nationalities are: USA, Iran, North Korea, occupied regions of Ukraine.
          </p>
        </div>
        
        <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors w-full max-w-xs mt-28">
          Verify
        </button>
      </main>
    </div>
  )
}