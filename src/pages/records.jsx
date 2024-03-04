import { Header } from "@/components/Header";
import recordsData from "../data/recordsData.json";
import { Eye, RightArrow, Less, Greather } from "@/components/icons";

export default function Home() {
  const typeData = recordsData.type;
  const categoryData = recordsData.category;
  return (
    <div className="flex flex-col items-center bg-gray-300">
      <div className="bg-white w-[100vw] flex justify-center">
        <div className="w-[90%]">
          <Header />
        </div>
      </div>

      <div className="w-[90%] flex justify-bertween bg-gray-300 my-10 gap-1">
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
        <div className="w-[70%]">
          <div className="flex h-3">
            <button className="btn btn-square w-3 h-3">
              <Less width={10} height={10} />
            </button>
            <p className="text-xs">Last 30 Days</p>
            <button className="btn btn-square w-3 h-3">
              <Greather width={10} height={10} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
