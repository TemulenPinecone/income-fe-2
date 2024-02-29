import { Money } from "./icons";
export const StepCurrency = ({ func, step }) => {
  return (
    <div
      className={
        step == 1 ? "flex flex-col items-center gap-3 w-full" : "hidden"
      }
    >
      <div>
        <Money width={40} height={40} />
      </div>
      <div>
        <p className="text-2xl">Select base currency</p>
      </div>
      <div
        className="w-full
      "
      >
        <select className="select select-bordered w-full bg-[#D1D5DB] border-gray-600 focus:outline-none hover:bg-white">
          <option>MNT - Mongolian Tugrik</option>
          <option>USD - US Dollar</option>
          <option>KRW - Korean Won</option>
        </select>
      </div>
      <div>
        <p className="text-xs text-[#475569]">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
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
