'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

import Logo from '~/assets/images/logo.png'
import CheckboxInput from '~/components/ui/form/checkbox'
import Label from '~/components/ui/form/label'
import SelectInput from '~/components/ui/form/select'
import { DataSelect } from '~/components/ui/form/select/types'
import TextInput from '~/components/ui/form/text-input'
import TextAreaInput from '~/components/ui/form/textarea'
import countries from '~/data/countries.json'
import clsxm from '~/utils/clsxm'

const RegisterPage = () => {
  const [isSubmit, setIsSubmit] = useState(false)
  const [country, setCountry] = useState<DataSelect | undefined>()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmit(true)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-custom-white-broken">
      <div className="mt-8 mb-9 flex items-center justify-center overflow-hidden rounded-full bg-white p-3 shadow-md">
        <Image src={Logo} alt="logo site" width={75} height={75} />
      </div>

      <div className="container flex flex-row justify-center">
        <form
          className={clsxm(
            'group basis-1/2 rounded border-t-2 border-t-custom-purple bg-white shadow-sm',
            isSubmit ? 'useValidation' : ''
          )}
          onSubmit={e => onSubmit(e)}
          noValidate
        >
          <h1 className="text-md text-gray px-6 py-8 font-bold text-gray-500">Register</h1>

          <hr className="border-custom-white" />
          <h1 className="text-gray mt-8 px-6 text-sm font-bold text-gray-500">Personal Information</h1>

          <div className="mt-4 flex w-full gap-6">
            <div className="basis-1/2 pl-6">
              <Label htmlFor="first_name">First Name</Label>
              <TextInput
                type="text"
                id="first_name"
                className="peer group-[&.useValidation]:invalid:border-pink-600"
                required={true}
              />
              <p className="invisible mt-2 text-xs text-pink-600 group-[&.useValidation]:peer-invalid:visible">
                Please enter your first name
              </p>
            </div>
            <div className="basis-1/2 pr-6">
              <Label htmlFor="last_name">Last Name</Label>
              <TextInput
                type="text"
                id="last_name"
                className="peer group-[&.useValidation]:invalid:border-pink-600"
                required={true}
              />
              <p className="invisible mt-2 text-xs text-pink-600 group-[&.useValidation]:peer-invalid:visible">
                Please enter your last name
              </p>
            </div>
          </div>
          <div className="mt-1 px-6">
            <Label htmlFor="email">Email</Label>
            <TextInput
              type="email"
              id="email"
              className="peer group-[&.useValidation]:invalid:border-pink-600"
              required={true}
            />
            <p className="invisible mt-2 text-xs text-pink-600 group-[&.useValidation]:peer-invalid:visible">
              Please enter your email
            </p>
          </div>
          <div className="mt-1 flex w-full gap-6">
            <div className="basis-1/2 pl-6">
              <Label htmlFor="password">Password</Label>
              <TextInput
                type="password"
                id="password"
                className="peer group-[&.useValidation]:invalid:border-pink-600"
                required={true}
              />
              <p className="invisible mt-2 text-xs text-pink-600 group-[&.useValidation]:peer-invalid:visible">
                Please enter your password
              </p>
            </div>
            <div className="basis-1/2 pr-6">
              <Label htmlFor="confirm_password">Confirm Password</Label>
              <TextInput
                type="password"
                id="confirm_password"
                className="peer group-[&.useValidation]:invalid:border-pink-600"
                required={true}
              />
              <p className="invisible mt-2 text-xs text-pink-600 group-[&.useValidation]:peer-invalid:visible">
                Please enter your confirm password
              </p>
            </div>
          </div>

          <h1 className="text-gray mt-8 px-6 text-sm font-bold text-gray-500">Your Address</h1>

          <div className="mt-4 px-6">
            <Label htmlFor="address">Address</Label>
            <TextAreaInput
              id="address"
              className="peer group-[&.useValidation]:invalid:border-pink-600"
              required={true}
            />
            <p className="invisible mt-2 text-xs text-pink-600 group-[&.useValidation]:peer-invalid:visible">
              Please enter your address
            </p>
          </div>
          <div className="mt-1 flex w-full gap-6">
            <div className="basis-1/2 pl-6">
              <Label htmlFor="country">Country</Label>
              <SelectInput
                placeholder="Chose Country"
                id="country"
                onChange={value => setCountry(value)}
                data={countries.map(country => ({ value: country.name.toLowerCase(), text: country.name }))}
                className={clsxm(isSubmit && !country ? '!border-pink-600' : '')}
              />
              <p className={clsxm('mt-2 text-xs text-pink-600', isSubmit && !country ? '' : 'invisible')}>
                Please enter your country
              </p>
            </div>
            <div className="basis-1/2 pr-6">
              <Label htmlFor="state">State / Province / Region</Label>
              <TextInput
                type="text"
                id="state"
                className="peer group-[&.useValidation]:invalid:border-pink-600"
                required={true}
              />
              <p className="invisible mt-2 text-xs text-pink-600 group-[&.useValidation]:peer-invalid:visible">
                Please enter your state
              </p>
            </div>
          </div>
          <div className="mt-1 flex w-full gap-6">
            <div className="basis-1/2 pl-6">
              <Label htmlFor="city">City</Label>
              <TextInput
                type="text"
                id="city"
                className="peer group-[&.useValidation]:invalid:border-pink-600"
                required={true}
              />
              <p className="invisible mt-2 text-xs text-pink-600 group-[&.useValidation]:peer-invalid:visible">
                Please enter your city
              </p>
            </div>
            <div className="basis-1/2 pr-6">
              <Label htmlFor="postal_code">Postal Code</Label>
              <TextInput
                type="text"
                id="postal_code"
                className="peer group-[&.useValidation]:invalid:border-pink-600"
                required={true}
              />
              <p className="invisible mt-2 text-xs text-pink-600 group-[&.useValidation]:peer-invalid:visible">
                Please enter your postal code
              </p>
            </div>
          </div>

          <div className="mx-6 mt-6 flex items-center">
            <CheckboxInput id="remmember" />
            <label htmlFor="remmember" className="ml-2 text-sm font-normal text-gray-500 ">
              I agree with the terms and conditions
            </label>
          </div>

          <div className="mb-6 px-6">
            <button
              type="submit"
              className="mt-6 w-full rounded-[4px] bg-custom-purple py-3 text-sm text-white shadow-md shadow-custom-light-purple-2 transition duration-300 hover:bg-[#394eea]"
            >
              Register
            </button>
          </div>
        </form>
      </div>

      <p className="mt-12 text-sm text-gray-400">
        Have an account?&nbsp;
        <Link href="/login" className="text-custom-purple">
          Login
        </Link>
      </p>
      <p className="mt-12 mb-9 text-sm text-gray-500">Copyright © HamLab {new Date().getFullYear()}</p>
    </div>
  )
}

export default RegisterPage
