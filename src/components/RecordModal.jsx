import {
  PlusCircle,
  Home,
  Gift,
  Food,
  Drink,
  Taxi,
  Shopping,
} from "./icons/categoryIcon";
export const RecordModal = () => {
  var curr = new Date();
  // var currTime = new getHours();
  curr.setDate(curr.getDate());
  var date = curr.toISOString().substring(0, 10);

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-sm bg-blue-600 text-white rounded-2xl w-full py-1 font-extralight hover:bg-white hover:border hover:text-gray-700"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        + Add
      </button>
      <dialog id="my_modal_3" className="modal p-0">
        <div className="modal-box max-w-[792px]">
          <form method="dialog">
            <button className="btn btn-md btn-circle btn-ghost absolute right-4 top-3">
              <p className="text-xl">✕</p>
            </button>
          </form>
          <h3 className="font-bold text-lg pb-4">Add Record</h3>
          <div className="border-b"></div>

          {/* LEFT SIDE */}

          <div className="flex flex-row">
            <div className="w-[50%] pt-[20px] pr-[24px]">
              <div className="bg-gray-100 rounded-2xl flex justify-between">
                <button className="bg-blue-500 text-white font-extralight px-5 py-1 rounded-2xl w-[172px]">
                  Expense
                </button>
                <button className="bg-gray-100 text-gray-800 font-extralight px-5 py-1 rounded-2xl w-[172px]">
                  Income
                </button>
              </div>
              <div className="">
                <label className="input flex items-center bg-gray-100 mt-[20px] h-[76px]">
                  <div className="flex flex-col">
                    <p className="font-extralight">Amount</p>
                    <div className="flex gap-2">
                      <p className="text-gray-400">₮</p>
                      <input
                        type="text"
                        className="font-light"
                        placeholder="000.00"
                      />
                    </div>
                  </div>
                </label>
              </div>

              {/* CATEGORY */}
              <div className="mt-[20px]">
                <h3>Category</h3>
                <ul className="menu menu-sm w-full bg-gray-100 rounded-lg">
                  <li>
                    <details className="">
                      <summary className="text-slate-400">
                        Choose category
                      </summary>
                      <ul className="w-full ml-2 p-0">
                        <li className="">
                          <a className="p-0 py-2">
                            <PlusCircle /> Add Category
                          </a>
                        </li>
                        <li>
                          <a className="p-0 py-2">
                            <Home /> Home
                          </a>
                        </li>
                        <li>
                          <a className="p-0 py-2">
                            <Gift /> Gift
                          </a>
                        </li>
                        <li>
                          <a className="p-0 py-2">
                            <Food /> Food
                          </a>
                        </li>
                        <li>
                          <a className="p-0 py-2">
                            <Drink /> Drink
                          </a>
                        </li>
                        <li>
                          <a className="p-0 py-2">
                            <Taxi /> Taxi
                          </a>
                        </li>
                        <li>
                          <a className="p-0 py-2">
                            <Shopping /> Shopping
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>

              {/* DATE */}
              <div className="mt-[20px] flex gap-2">
                <div className="w-[50%]">
                  <p>Date</p>
                  <input
                    type="date"
                    name=""
                    id=""
                    defaultValue={date}
                    className=" bg-gray-100 p-2 px-4 rounded-lg border w-full"
                  />
                </div>
                <div className="w-[50%]">
                  <p>Date</p>
                  <input
                    type="time"
                    name=""
                    id=""
                    className="bg-gray-100 p-2 px-4 rounded-lg border w-full"
                  />
                </div>
              </div>
              <div className="mt-[20px] flex justify-center text-white">
                <button className="bg-blue-600 w-full rounded-full h-[40px]">
                  <p className="font-extralight">Add Record</p>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-[50%]">
              <div>
                <h3>Payee</h3>
                <input
                  type="text"
                  placeholder="Write here"
                  className="bg-gray-100 border rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <h3>Note</h3>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write here"
                  className="bg-gray-100 border rounded-lg focus:outline-none"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
