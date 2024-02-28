import { Icon1 } from "@/components/icons/Icon1";

export default function Register() {
  return (
    <div className="flex items-center">
      <div className="w-[50%]">
        <div className="flex items-center justify-center gap-2 relative">
          <Icon1 />
          <p className="text-[15px] text-black font-medium">Geld</p>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <h3 className="text-[20px] font-bold">Create Geld account</h3>
          <p>Sign up below to create your Wallet account</p>
          <input
            type="text"
            placeholder="Name"
            className="border rounded-xl px-3 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-xl px-3 outline-none"
          />
          <input
            type="email"
            placeholder="Password"
            className="border rounded-xl px-3 outline-none"
          />
          <input
            type="email"
            placeholder="Re-password"
            className="border rounded-xl px-3 outline-none"
          />
          <button className="bg-blue-600 text-white px-20 py-0.5 rounded-xl">
            Sign up
          </button>
          <div className="flex gap-2">
            <p>Already have account?</p>
            <a href="/login" className="text-blue-600">
              Log in
            </a>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[100vh] bg-blue-600"></div>
    </div>
  );
}
