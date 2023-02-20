'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

import Logo from '~/assets/images/logo.png'
import CheckboxInput from '~/components/ui/form/checkbox'
import Label from '~/components/ui/form/label'
import TextInput from '~/components/ui/form/text-input'
import clsxm from '~/utils/clsxm'

const LoginPage = () => {
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
          <h1 className="text-md px-6 py-8 font-bold text-gray-500">Login</h1>

          <hr className="border-custom-white" />

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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs text-custom-purple">
                  Forgot Password?
                </a>
              </div>
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

            <div className="mt-6 flex items-center">
              <CheckboxInput id="remmember" />
              <label htmlFor="remmember" className="ml-2 text-sm font-normal text-gray-500 ">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-[4px] bg-custom-purple py-3 text-sm text-white shadow-md shadow-custom-light-purple-2 transition duration-300 hover:bg-[#394eea]"
            >
              Login
            </button>

            <p className="mb-4 mt-9 text-center text-xs font-semibold text-gray-400">LOGIN WITH SOCIAL</p>

            <div className="mt-0 flex items-center justify-center gap-5">
              <button className="flex flex-1 items-center justify-start gap-2 rounded-[4px] bg-[#3C5997] px-3 py-3 text-[13px] text-white hover:bg-[#354c7c] md:px-5 md:text-sm">
                <FaFacebook className="mr-1 h-[15px] w-[15px] xs:mr-2 xs:h-[20px] xs:w-[20px]" />
                Facebook
              </button>
              <button className="flex flex-1 items-center justify-start gap-2 rounded-[4px] bg-[#54ACED] px-3 py-3 text-[13px] text-white hover:bg-[#2795E8] md:px-5 md:text-sm">
                <FaTwitter className="mr-1 h-[15px] w-[15px] xs:mr-2 xs:h-[20px] xs:w-[20px]" />
                Twitter
              </button>
            </div>
          </div>
        </form>
      </div>

      <p className="mt-12 text-sm text-gray-400">
        Don&apos;t have an account?&nbsp;
        <Link href="/register" className="text-custom-purple">
          Create One
        </Link>
      </p>
      <p className="mt-12 mb-9 text-sm text-gray-500">Copyright © HamLab {new Date().getFullYear()}</p>
    </div>
  )
}

export default LoginPage
