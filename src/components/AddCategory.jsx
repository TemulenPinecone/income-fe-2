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
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn border-none">
                    <div className="flex gap-3 border">
                      <img src="./addCategoryIcons/house.svg" alt="" />
                      <img src="./addCategoryIcons/downArrow.svg" alt="" />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52 flex flex-col"
                  >
                    <div className="grid grid-cols-6 w-[84px]">
                      <img src="./addCategoryIcons/House.svg" alt="" />
                      <img src="./addCategoryIcons/HouseLine.svg" alt="" />
                      <img
                        src="./addCategoryIcons/IdentificationBadge.svg"
                        alt=""
                      />
                      <img
                        src="./addCategoryIcons/IdentificationCard.svg"
                        alt=""
                      />
                      <img src="./addCategoryIcons/Ladder.svg" alt="" />
                      <img
                        src="./addCategoryIcons/IntersectSquare.svg"
                        alt=""
                      />
                      <img src="./addCategoryIcons/ImageSquare.svg" alt="" />
                      <img
                        src="./addCategoryIcons/MagnifyingGlassPlus.svg"
                        alt=""
                      />
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
