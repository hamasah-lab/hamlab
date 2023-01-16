import { BsCheck } from 'react-icons/bs'

import clsxm from '~/utils/clsxm'

interface PropsCheckboxInput {
  name?: string
  id?: string
  className?: string
}

const CheckboxInput = ({ name, id, className }: PropsCheckboxInput) => (
  <div className="group">
    <input type="checkbox" id={id} name={name} className="peer hidden" />
    <div
      className={clsxm(
        'flex h-4 w-4 items-center justify-center rounded bg-gray-200 p-px text-white transition duration-200 ease-in-out peer-checked:bg-custom-purple',
        className ?? ''
      )}
    >
      <BsCheck className="invisible h-full w-full transition duration-200 ease-in-out group-[:has(input:checked)]:visible" />
    </div>
  </div>
)

export default CheckboxInput
