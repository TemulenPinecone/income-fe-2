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
import { AddCategory } from "./AddCategory";

export const RecordModalCategory = () => {
  return (
    <div className="mt-[20px]">
      <h3>Category</h3>
      <ul className="menu menu-sm w-full bg-gray-100 rounded-lg p-4">
        <li>
          <details className="">
            <summary className="text-slate-400 p-0 flex justify-between pr-2">
              Choose category
            </summary>
            <ul className="w-full m-0 p-0">
              <AddCategory />
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
  );
};
