// import { Inter } from "next/font/google";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import { Header } from "@/components/Header";
import {
  Icon1,
  NFC,
  LeadingIconUp,
  LeadingIconDn,
  House,
} from "@/components/icons";
import lastRecords from "../data/lastRecords.json";
// import sourceData from "../data/sourceData.json";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const lastRecordsData = lastRecords;
  return (
    <div className="flex flex-col items-center bg-gray-300">
      <div className="bg-white w-[100vw] flex justify-center">
        <div className="w-[90%]">
          <Header />
        </div>
      </div>

      <div className="w-[90%] flex justify-center bg-gray-300 mb-10">
        <div className="w-full">
          {/* CARDS - FIRST LINE */}
          <div className="flex items-center justify-between">
            {/* CARDS #1*/}
            <div className="flex flex-col justify-around h-[13vh] w-[32%]">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="absolute rounded-xl h-[12vh] w-[28.5%]"
              />
              <div className="flex items-center gap-2 relative pl-3 pt-1">
                <Icon1 width={30} height={30} />
                <p className="text-[15px] text-white">Geld</p>
              </div>
              <div className="relative pl-3 flex justify-between">
                <div className="text-[12px]">
                  <p className="font-extralight text-gray-300">Cash</p>
                  <p className="text-white font-extralight">10,000,000</p>
                </div>
                <div className="flex items-center pr-1">
                  <NFC />
                </div>
              </div>
            </div>

            {/* CARD #2 */}
            <div className="flex flex-col h-[12vh] w-[32%] bg-white rounded-lg z-10">
              <div className="flex items-center gap-2 relative pl-3 pt-2">
                <div className="w-2 h-2 bg-lime-500 rounded-full" />
                <p className="text-[10px] text-black">Your Income</p>
              </div>
              <div className="divider my-[1px]"></div>
              <div className="relative pl-3 flex justify-between">
                <div className="gap">
                  <p className="font-medium text-black text-[20px]">
                    1,200,000₮
                  </p>
                  <p className="text-gray-600 font-normal text-[10px]">
                    Your income Amount
                  </p>
                  <div className="flex pt-1 pb-2">
                    <LeadingIconUp />
                    <p className="text-black font-normal text-[10px]">
                      &nbsp;32% from last month
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD #3 */}
            <div className="flex flex-col h-[12vh] w-[32%] bg-white rounded-lg z-10">
              <div className="flex items-center gap-2 relative pl-3 pt-2">
                <div className="w-2 h-2 bg-[#0166FF] rounded-full" />
                <p className="text-[10px] text-black">Total Expenses</p>
              </div>
              <div className="divider my-[1px]"></div>
              <div className="relative pl-3 flex justify-between">
                <div className="gap">
                  <p className="font-medium text-black text-[20px]">
                    -1,200,000₮
                  </p>
                  <p className="text-gray-600 font-normal text-[10px]">
                    Your income Amount
                  </p>
                  <div className="flex pt-2 pb-2">
                    <LeadingIconDn />
                    <p className="text-black font-normal text-[10px]">
                      &nbsp;32% from last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CHARTS */}
          <div className="flex w-full justify-between">
            {/* BAR CHART */}
            <div className="h-[50%] bg-white rounded-xl px-5 py-3">
              <div className="flex items-center">
                <h3 className="text-black font-bold">Income - Expense</h3>
              </div>
              <div className="divider my-[5px]"></div>
              <div className="">
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
                        borderRadius: 10,
                        hoverBorderWidth: 1,
                      },
                      {
                        label: "Second",
                        // label: [],
                        data: [
                          2100000, 2100000, 2100000, 2100000, 2100000, 2100000,
                          2100000,
                        ],
                        borderRadius: 10,
                        hoverBorderWidth: 1,
                      },
                    ],
                  }}
                />
              </div>
            </div>

            {/* DOUGHNUT CHART */}
            <div className="w-[50%] bg-white rounded-xl px-5 py-3">
              <div className="flex items-center">
                <h3 className="text-black font-bold">Income - Expense</h3>
              </div>
              <div className="divider my-[5px]"></div>
              <div className="flex flex-row">
                <div className="w-[50%]">
                  <Doughnut
                    data={{
                      labels: [], // labels: [
                      //   "Bills",
                      //   "Food",
                      //   "Shopping",
                      //   "Insurance",
                      //   "Clothing",
                      // ],
                      datasets: [
                        {
                          label: "First",
                          data: [5000000, 5000000, 3000000, 2000000, 1000000],
                          borderRadius: 0,
                          borderWidth: 0,
                          rotation: 0,
                          hoverBorderWidth: 10,
                        },
                      ],
                    }}
                  />
                </div>
                <div className="w-[50%]">
                  <p>sadfa</p>
                  <p>asfas</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3RD LINE - LAST RECORDS*/}
          <div className=" bg-white rounded-xl mt-3">
            <div className="flex items-center px-5 py-4">
              <h3 className="text-black font-medium">Last Records</h3>
            </div>
            <div className="divider divider-accent my-0 py-0 h-0 "></div>

            {/* ITEM LINE */}
            {lastRecordsData.map((element) => (
              <div className="flex justify-between items-center px-5 py-3 border-b">
                <div className="flex items-center">
                  <House width={40} height={40} />
                  <div className="pl-3">
                    <p className="text-black text-base font-light">
                      {element.title}
                    </p>
                    <p className="text-xs text-gray-500 font-light">
                      {element.time}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-lime-500 text-base font-light">
                    {element.amount}₮
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
