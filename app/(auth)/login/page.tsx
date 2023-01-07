import Head from 'next/head'
import Image from 'next/image'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import Logo from 'src/assets/images/logo.png'

import TextInput from '~/components/input/text-input'

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>

      <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-c-white-broken">
        <div className="mt-8 mb-9 flex items-center justify-center overflow-hidden rounded-full bg-white p-3 shadow-md">
          <Image src={Logo} alt="logo site" width={75} height={75} />
        </div>

        <form className="bg-w h-min w-[22%] rounded border-t-2 border-t-c-purple bg-white shadow-sm">
          <h1 className="text-md text-gray px-6 py-8 font-bold text-gray-500">Login</h1>

          <hr className="border-c-white" />

          <div className="mt-6 px-6 pb-6">
            <div>
              <label htmlFor="email" className="text-xs text-c-black">
                Email
              </label>
              <TextInput type="email" id="email" required={true} />
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-xs text-c-black">
                  Password
                </label>
                <a href="#" className="text-xs text-c-purple">
                  Forgot Password?
                </a>
              </div>
              <TextInput type="password" id="password" required={true} />
            </div>

            <div className="mt-8 flex items-center">
              <input
                id="remmember"
                type="checkbox"
                value=""
                className="mr-2 scale-110 cursor-pointer border-gray-100 p-96 !accent-c-purple hover:accent-c-purple"
              />
              <label htmlFor="remmember" className="text-sm font-normal text-gray-500">
                Remember Me
              </label>
            </div>

            <button type="submit" className="mt-6 w-full rounded-[4px] bg-c-purple py-3 text-sm text-white">
              Login
            </button>

            <p className="mb-4 mt-9 text-center text-xs font-semibold text-gray-400">LOGIN WITH SOCIAL</p>

            <div className="mt-0 flex items-center justify-center gap-5">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-[4px] bg-[#3C5997] py-3 text-sm text-white hover:bg-[#354c7c]">
                <FaFacebook className="mr-2 h-[20px] w-[20px]" />
                Facebook
              </button>
              <button className="flex flex-1 items-center justify-center gap-2 rounded-[4px] bg-[#54ACED] py-3 text-sm text-white hover:bg-[#2795E8]">
                <FaTwitter className="mr-2 h-[20px] w-[20px]" />
                Twitter
              </button>
            </div>
          </div>
        </form>

        <p className="mt-12 text-sm text-gray-400">
          Don&apos;t have an account?&nbsp;
          <a href="#" className=" text-c-purple">
            Create One
          </a>
        </p>
        <p className="mt-12 text-sm text-gray-500">Copyright © HamLab 2022</p>
      </div>
    </div>
  )
}

export default LoginPage
