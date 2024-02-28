import { Icon1 } from "@/components/icons/Icon1";
export default function Login() {
  return (
    <div className="flex items-center">
      <div className="w-[50%]">
        <div className="flex items-center justify-center gap-2 relative">
          <Icon1 />
          <p className="text-[15px] text-black font-medium">Geld</p>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <h3 className="text-[20px] font-bold">Welcome Back</h3>
          <p>Welcome back, Plesase enter your details</p>
          <input
            type="text"
            placeholder="Email"
            className="border rounded-xl px-3 outline-none"
          />
          <input
            type="text"
            placeholder="Password"
            className="border rounded-xl px-3 outline-none"
          />
          <button className="bg-blue-600 text-white px-20 py-0.5 rounded-xl">
            Log in
          </button>
          <div className="flex gap-2">
            <p>Don't have account?</p>
            <a href="/register" className="text-blue-600">
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[100vh] bg-blue-600"></div>
    </div>
  );
}
