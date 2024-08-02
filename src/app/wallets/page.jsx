import { Navbar } from '@/components/Partials/Navbar/Navbar'
import { MainInfo } from "@/components/Partials/mainInfo";

export default function Wallets() {
  return (
    <div className="flex h-screen">
      <div className="w-80">
        <Navbar />
      </div>
      <div className="bg-primary w-full">
        {MainInfo()}
      </div>
    </div>
  )
}
