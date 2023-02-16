'use client'
import Image from 'next/image'
import { FormEvent, useState } from 'react'

import Logo from '~/assets/images/logo.png'
import Label from '~/components/ui/form/label'
import TextInput from '~/components/ui/form/text-input'
import clsxm from '~/utils/clsxm'

const ResetPasswordPage = () => {
  const [isSubmit, setIsSubmit] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmit(true)
  }

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-custom-white-broken">
      <div className="mt-8 mb-9 flex items-center justify-center overflow-hidden rounded-full bg-white p-3 shadow-md">
        <Image src={Logo} alt="logo site" width={75} height={75} />
      </div>

      <div className="container flex flex-row justify-center">
        <form
          className={clsxm(
            'group h-min w-11/12 rounded border-t-2 border-t-custom-purple bg-white shadow-sm xs:basis-4/5 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/4',
            isSubmit ? 'useValidation' : ''
          )}
          onSubmit={e => onSubmit(e)}
          noValidate
        >
          <h1 className="text-md px-6 py-8 font-bold text-gray-500">Reset Password</h1>

          <hr className="border-custom-white" />

          <p className="mt-6 px-6 text-xs text-custom-light-gray">
            After your submit reset password, you will get email to verifed the request reset password.
          </p>

          <div className="mt-6 px-6 pb-6">
            <div>
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

            <div className="mt-1">
              <Label htmlFor="password">New Password</Label>
              <TextInput
                type="password"
                id="password"
                className="peer group-[&.useValidation]:invalid:border-pink-600"
                required={true}
                minLength={8}
              />
              <p className="invisible mt-2 text-xs text-pink-600 group-[&.useValidation]:peer-invalid:visible">
                Please enter your new password
              </p>
            </div>

            <div className="mt-1">
              <Label htmlFor="password">Confirm Password</Label>
              <TextInput
                type="password"
                id="password"
                className="peer group-[&.useValidation]:invalid:border-pink-600"
                required={true}
                minLength={8}
              />
              <p className="invisible mt-2 text-xs text-pink-600 group-[&.useValidation]:peer-invalid:visible">
                Please enter your confirm password
              </p>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-[4px] bg-custom-purple py-3 text-sm text-white shadow-md shadow-custom-light-purple-2 transition duration-300 hover:bg-[#394eea]"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>

      <p className="mt-12 mb-9 text-sm text-gray-500">Copyright © HamLab {new Date().getFullYear()}</p>
    </div>
  )
}

export default ResetPasswordPage
