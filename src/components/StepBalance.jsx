import { Balance } from "./icons/Balance";
export const StepBalance = ({ func, step }) => {
  return (
    <div
      className={
        step == 2 ? "flex flex-col items-center gap-3 w-full" : "hidden"
      }
    >
      <div>
        <Balance width={40} height={40} />
      </div>
      <div>
        <p className="text-2xl">Set up your cash Balance</p>
      </div>
      <div className="w-full">
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#D1D5DB] focus:outline-none"
        />
      </div>
      <div>
        <p className="text-xs text-[#475569]">
          How much cash do you have in your wallet?
        </p>
      </div>
      <div className="w-full">
        <button
          className="btn bg-primary text-white font-extralight w-full rounded-3xl hover:text-primary hover:border-primary"
          onClick={func}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
