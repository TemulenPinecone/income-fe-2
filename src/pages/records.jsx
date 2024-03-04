import { Header } from "@/components/Header";
import Type from "../data/recordsData.js";
import { Eye, RightArrow } from "@/components/icons";

export default function Home() {
  const typeData = Type;
  return (
    <div className="flex flex-col items-center bg-gray-300">
      <div className="bg-white w-[100vw] flex justify-center">
        <div className="w-[90%]">
          <Header />
        </div>
      </div>

      <div className="w-[90%] flex justify-bertween bg-gray-300 my-10 gap-1">
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
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Eye />
                  <p className="font-light">Shopping</p>
                </div>
                <RightArrow />
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-[70%] bg-gray-400 rounded-xl"></div>
      </div>
    </div>
  );
}
