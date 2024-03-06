import { Header } from "@/components/Header";
import recordsData from "../data/recordsData.json";
import {
  Eye,
  RightArrow,
  Less,
  Greather,
  House,
  Food,
} from "@/components/icons";

export default function Home() {
  const typeData = recordsData.type;
  const categoryData = recordsData.category;
  return (
    <div className="flex flex-col items-center bg-gray-100">
      <div className="bg-white w-[100vw] flex justify-center">
        <div className="w-[90%]">
          <Header />
        </div>
      </div>

      <div className="w-[90%] flex justify-bertween bg-gray-100 my-10 gap-1">
        {/* 1ST LINE */}
        <div className="w-[30%] bg-white rounded-xl">
          <div className="px-3 flex flex-col gap-y-3">
            <h3 className="text-bold py-3">Records</h3>
            <button className="bg-blue-600 text-white rounded-2xl w-full py-1 font-extralight hover:bg-white hover:border hover:text-gray-700">
              + Add
            </button>
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg w-full bg-gray-100 px-3 py-1 text-neutral-400 focus:outline-none"
            />
            <div className="flex flex-col gap-y-3">
              <h3>Types</h3>
              {typeData.map((element) => (
                <div className="flex gap-1">
                  <input
                    type="radio"
                    id={element.type}
                    name={element.type}
                    className="radio radio-primary"
                  />
                  <p>{element.type}</p>
                </div>
              ))}
            </div>
            <div>
              <h3>Category</h3>
              {categoryData.map((element) => (
                <div className="flex justify-between items-center py-1">
                  <div className="flex gap-2 items-center">
                    <Eye width={15} height={15} />
                    <p className="font-light text-[10px]">{element.category}</p>
                  </div>
                  <RightArrow width={15} height={15} />
                </div>
              ))}
              <div>
                <button className="btn btn-ghost font-light text-xs">
                  <span className="text-blue-500">+</span>Add Category
                </button>
              </div>
              <div className="flex flex-col gap-y-3 pb-7">
                <h3>Amount Range</h3>
                <div className="flex gap-2">
                  <input
                    type="number"
                    defaultValue={0}
                    className="bg-gray-100 border border-solid border-gray-300 rounded-md focus:outline-none w-[90%] px-1 text-xs py-1"
                  />
                  <input
                    type="number"
                    defaultValue={1000}
                    className="bg-gray-100 border border-solid border-gray-300 rounded-md focus:outline-none w-[90%] px-1 text-xs py-1"
                  />
                </div>
                <div className="flex">
                  <input
                    type="range"
                    min={0}
                    max={1000}
                    defaultValue={0}
                    className="w-[97%]"
                  />
                </div>
                <div className="flex justify-between text-xs pl-1">
                  <p>0</p>
                  <p>1000</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        {/* 2ND LINE */}
        <div className="w-[70%] flex flex-col gap-y-1 pl-3">
          {/* LAST 30 DAYS | NEWSET FIRST */}

          <div className="flex justify-between pl-10">
            <div className="flex items-center gap-1">
              <button className="w-3 h-3">
                <Less width={7} height={7} />
              </button>
              <p className="text-[11px] font-extralight">Last 30 Days</p>
              <button className="w-3 h-3">
                <Greather width={7} height={7} />
              </button>
            </div>
            <div className="flex bg-gray-50 rounded-lg border">
              <select className="select select-sm text-xs focus:outline-none">
                <option selected>Newest first</option>
                <option>Oldest first</option>
                <option>High amount first</option>
                <option>Low amount first</option>
              </select>
            </div>
          </div>

          {/* SELECT ALL */}

          <div>
            <div className="form-control bg-white rounded-lg px-2 border">
              <label className="cursor-pointer label">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-sm checkbox-accent"
                  />
                  <span className="label-text text-xs">Select all</span>
                </div>
                <span className="label-text text-xs text-slate-400">
                  - 35,500₮
                </span>
              </label>
            </div>
          </div>

          {/* TODAY */}
          <div className="my-1">
            <h3 className="mb-2">Today</h3>
            <div className="form-control bg-white rounded-lg px-2 py-2 border">
              <label className="cursor-pointer label py-0">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-sm checkbox-accent"
                  />
                  <span>
                    <House width={40} height={40} />
                  </span>
                  <div>
                    <p className="label-text text-xs">Lending & Renting</p>
                    <p className="text-[10px] text-gray-500">14:00</p>
                  </div>
                </div>
                <span className="label-text text-xs text-green-500">
                  - 1,000₮
                </span>
              </label>
            </div>
          </div>

          {/* YESTERDAY */}
          <div className="my-1">
            <h3 className="mb-2">Yesterday</h3>
            <div className="form-control bg-white rounded-lg px-2 py-2 border">
              <label className="cursor-pointer label py-0">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-sm checkbox-accent"
                  />
                  <span>
                    <Food width={40} height={40} />
                  </span>
                  <div>
                    <p className="label-text text-xs">Food & Drinks</p>
                    <p className="text-[10px] text-gray-500">14:00</p>
                  </div>
                </div>
                <span className="label-text text-xs text-green-500">
                  - 1,000₮
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
