import { PlusCircle } from "./icons/categoryIcon";
export const AddCategory = () => {
  return (
    <div>
      <li className="">
        <a
          className="p-0 py-2"
          onClick={() => document.getElementById("modal_1").showModal()}
        >
          <PlusCircle />
          Add Category
        </a>
        <dialog id="modal_1" className="modal flex justify-center">
          <div className="modal-box w-[494px] h-[236px]">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="flex flex-col">
              <div className="flex">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn border-none">
                    <div className="flex gap-3 border">
                      <img src="./addCategoryIcons/house.svg" alt="" />
                      <img src="./addCategoryIcons/downArrow.svg" alt="" />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-[312px] h-[336px] flex flex-col"
                  >
                    <div className="grid grid-cols-6 w-[312px] h-[336px]">
                      <img src="./addCategoryIcons/1-House.svg" alt="" />
                      <img src="./addCategoryIcons/2-HouseLine.svg" alt="" />
                      <img
                        src="./addCategoryIcons/3-IdentificationBadge.svg"
                        alt=""
                      />
                      <img
                        src="./addCategoryIcons/4-IdentificationCard.svg"
                        alt=""
                      />
                      <img src="./addCategoryIcons/5-Ladder.svg" alt="" />
                      <img
                        src="./addCategoryIcons/6-IntersectSquare.svg"
                        alt=""
                      />
                      <img src="./addCategoryIcons/7-ImageSquare.svg" alt="" />
                      <img
                        src="./addCategoryIcons/8-MagnifyingGlassPlus.svg"
                        alt=""
                      />
                      <img src="./addCategoryIcons/9-Microphone.svg" alt="" />
                      <img src="./addCategoryIcons/10-MSExcel.svg" alt="" />
                      <img src="./addCategoryIcons/11-Notepad.svg" alt="" />
                      <img src="./addCategoryIcons/12-ListPlus.svg" alt="" />
                      <img src="./addCategoryIcons/13-Leaf.svg" alt="" />
                      <img src="./addCategoryIcons/14-Five.svg" alt="" />
                      <img src="./addCategoryIcons/15-SevenCircle.svg" alt="" />
                      <img src="./addCategoryIcons/16-RoadHorizon.svg" alt="" />
                      <img
                        src="./addCategoryIcons/17-HourGlassMid.svg"
                        alt=""
                      />
                      <img
                        src="./addCategoryIcons/18-AnchorSimple.svg"
                        alt=""
                      />
                      <img src="./addCategoryIcons/19-Bezier.svg" alt="" />
                      <img src="./addCategoryIcons/20-Exclude.svg" alt="" />
                      <img src="./addCategoryIcons/21-Vignette.svg" alt="" />
                      <img src="./addCategoryIcons/22-Baseball.svg" alt="" />
                      <img
                        src="./addCategoryIcons/23-QuestionCircle.svg"
                        alt=""
                      />
                      <img src="./addCategoryIcons/24-Exam.svg" alt="" />
                      <img src="./addCategoryIcons/25-Watch.svg" alt="" />
                      <img src="./addCategoryIcons/26-Globe.svg" alt="" />
                      <img src="./addCategoryIcons/27-OrangeSlice.svg" alt="" />
                      <img src="./addCategoryIcons/28-Peace.svg" alt="" />
                      <img src="./addCategoryIcons/29-ToiletPaper.svg" alt="" />
                      <img src="./addCategoryIcons/30-Pencil.svg" alt="" />
                    </div>
                  </ul>
                </div>
                <input type="text" placeholder="Name" className="w-full h-12" />
              </div>
              <button className="bg-green-600 w-[446px] h-10 px-3 rounded-full">
                <p className="text-gray-50">Add</p>
              </button>
            </div>
          </div>
        </dialog>
      </li>
    </div>
  );
};
