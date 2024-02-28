import { Icon1, Money } from "@/components/icons";

export default function RegisterStep() {
  return (
    <div className="w-100vw h-100vh flex justify-center items-center">
      <div className="w-[80%] my-auto">
        <div className="flex items-center justify-center gap-2">
          <Icon1 />
          <p className="text-[15px] text-black font-medium">Geld</p>
        </div>
        <div className="flex items-center justify-center">
          <ul className="steps">
            <li className="step step-primary">Register</li>
            <li className="step">Choose plan</li>
            <li className="step">Purchase</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <Money />
          <p className="text-2xl">Select base currency</p>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Choose currency
            </option>
            <option>MNT - Mongolian Tugrik</option>
            <option>USD - US Dollar</option>
            <option>KRW - Korean Won</option>
          </select>
          <p>
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one
          </p>
          <button className="btn btn-outline btn-primary">Confirm</button>
        </div>
      </div>
    </div>
  );
}
