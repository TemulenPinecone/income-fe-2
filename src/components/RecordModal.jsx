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
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-sm bg-blue-600 text-white rounded-2xl w-full py-1 font-extralight hover:bg-white hover:border hover:text-gray-700"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        + Add
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Record</h3>
          <div className="border-b"></div>

          {/* LEFT SIDE */}

          <div className="flex flex-row">
            <div>
              <button className="bg-blue-500 text-white font-extralight px-5 py-1 rounded-2xl">
                Expense
              </button>
              <button className="bg-green-600 text-white font-extralight px-5 py-1 rounded-2xl">
                Income
              </button>
              <div className="">
                <label className="input flex items-center bg-gray-100 py-3">
                  <div className="flex flex-col gap-y-1">
                    <div>
                      <p className="font-extralight">Amount</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="text-gray-400">₮</p>
                      <input
                        type="text"
                        className="grow focus:outline-none"
                        placeholder="000.00"
                      />
                    </div>
                  </div>
                </label>
              </div>

              {/* CATEGORY */}
              <div className="">
                <h3>Category</h3>
                <ul className="menu menu-sm w-full bg-gray-100 lg:menu-horizontal rounded-box lg:mb-64">
                  <li>
                    <details className="">
                      <summary className="text-slate-400">
                        Choose category
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </summary>
                      <ul className="w-full">
                        <li>
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
            </div>

            {/* RIGHT SIDE */}
            <div>
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
