// TODO: add breadcrumbs

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="relative -mx-[30px] -mt-[10px] mb-[30px] flex items-center border-t border-t-gray-100 bg-white p-5 px-9 shadow-sm">
      <h1 className="mb-0 mt-1 text-2xl font-bold text-gray-900">{title}</h1>
    </div>
  )
}

export default SectionHeader
