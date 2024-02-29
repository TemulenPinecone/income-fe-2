import { GoodJob } from "./icons/GoodJob";
export const StepFinish = ({ func, step }) => {
  return (
    <div
      className={
        step == 3 ? "flex flex-col items-center gap-3 w-full" : "hidden"
      }
    >
      <div>
        <GoodJob width={40} height={40} />
      </div>
      <div>
        <p className="text-2xl">Good Job!</p>
      </div>
      <div
        className="w-full
      "
      ></div>
      <div>
        <p className="text-xs text-[#475569]">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
      </div>
      <div className="w-full">
        <button
          className="btn bg-primary text-white font-extralight w-full rounded-3xl hover:text-primary hover:border-primary"
          onClick={func}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};
