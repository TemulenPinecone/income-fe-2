import {
  PlusCircle,
  Home,
  Gift,
  Food,
  Drink,
  Taxi,
  Shopping,
} from "./icons/categoryIcon";
import React, { useEffect, useState } from "react";
import { ReactDOM } from "react-dom";
import { RecordModalCategory } from "./RecordModalCategory";

export const RecordModal = () => {
  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);

  const currTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
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
              <RecordModalCategory />

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
                  {/* <p className="bg-gray-100 inline-flex pr-3 absolute right-[500px] top-[367px]">
                    {currTime}
                  </p> */}
                </div>
              </div>
              <div className="mt-[20px] flex justify-center text-white">
                <button className="bg-blue-600 w-full rounded-full h-[40px]">
                  <p className="font-extralight">Add Record</p>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-[50%] pt-[20px] pl-[24px]">
              <div>
                <h3>Payee</h3>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full bg-gray-100 border rounded-lg focus:outline-none mt-1 h-12 p-[16px]"
                />
              </div>
              <div className="mt-3">
                <h3>Note</h3>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write here"
                  className="w-[348px] bg-gray-100 border rounded-lg focus:outline-none mt-1 h-[280px] p-[16px]"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
