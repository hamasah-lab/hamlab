import { HiSearch } from 'react-icons/hi'

const SearchBar = () => {
  return (
    <div className="hidden md:flex">
      <input
        className="-mr-[6px] hidden h-[42px] min-h-[46px] w-[250px] appearance-none rounded-sm border border-transparent border-gray-300 bg-white py-[10px] px-5 align-middle text-sm font-medium leading-[1.5] text-slate-700 transition-all duration-1000 focus:outline-none md:inline-block"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        type="submit"
        className='appearance-["button"] m-0 inline-block cursor-pointer select-none whitespace-nowrap rounded-sm border border-transparent bg-white py-[9px] px-[15px] text-center align-middle font-semibold leading-[24px] tracking-wide transition'
      >
        <HiSearch />
      </button>
    </div>
  )
}

export default SearchBar
