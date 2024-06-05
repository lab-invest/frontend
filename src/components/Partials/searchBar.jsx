import { searchicon } from '../../../public/icons/seachIcon'

export function searchbar() {
  return (
    <div className="pl-10 pr-10 pt-4">
      <div className="flex items-center rounded-lg h-12">
        <div className="mr-14 right-0 absolute">{searchicon()}</div>
      </div>
    </div>
  )
}
