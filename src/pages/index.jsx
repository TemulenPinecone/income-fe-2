// import { Inter } from "next/font/google";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut, Bar, Line } from "react-chartjs-2";
// import sourceData from "../data/sourceData.json";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* NAV BAR */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8296 9.36772V0.300781H9.56514V9.36772H0.300659V18.6322H9.56514V27.6991H18.8296V18.6322H28.0941V9.36772H18.8296ZM18.8296 18.4347H9.56514V9.56665H18.8296V18.4347Z"
                fill="#0166FF"
              />
            </svg>
          </a>
          <a className="btn btn-ghost text-xl font-extralight">Dashboard</a>
          <a className="btn btn-ghost text-xl font-extralight">Records</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CHART */}
      <div>
        <div className="w-[80%] rounded-lg">
          <Bar
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              datasets: [
                {
                  label: "First",
                  data: [
                    3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
                    3000000,
                  ],
                },
                {
                  label: "Second",
                  data: [
                    2100000, 2100000, 2100000, 2100000, 2100000, 2100000,
                    2100000,
                  ],
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
// https://www.google.com/search?q=chartjs+using+react&oq=chart+&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyDAgCEAAYQxiABBiKBTIMCAMQABhDGIAEGIoFMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDE1OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:176135f3,vid:6q5d3Z1-5kQ,st:0
