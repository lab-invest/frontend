import { Navbar } from '@/components/Partials/Navbar/Navbar'
import { searchbar } from '@/components/Partials/searchBar'
import { Predict } from '@/components/Partials/predict' 

export default function Actions() {
  return (
    <div className="flex h-screen">
      <div className="w-80">
        <Navbar />
      </div>
      <div className="bg-primary w-full">
        {searchbar()}
        {Predict()}
      </div>
    </div>
  )
}
