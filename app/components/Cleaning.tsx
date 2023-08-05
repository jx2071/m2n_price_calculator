"use client";
import { useState, useEffect } from "react";
import { LaborIcon, MaterialIcon, TotalIcon } from "./Icons";

function numberWithCommas(x: number) {
  return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CleaningBox(props: any) {
  const {
    cost,
    unit,
    description,
    setSelectedInfo,
  }: {
    cost: {
      labor: number;
      material: number;
      total: number;
    };
    description: string;
    unit: string;
    setSelectedInfo: ({
      area,
      labor,
      material,
      price,
      detail,
    }: {
      area: number;
      labor: number;
      material: number;
      price: number;
      detail: string;
    }) => void;
  } = props;
  const [area, setArea] = useState(0);
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState({
    labor: 0,
    material: 0,
    total: 0,
  });

  useEffect(() => {
    setPrice({
      labor: area * cost.labor,
      material: area * cost.material,
      total: area * cost.total,
    });
    setSelectedInfo({
      area: area,
      labor: area * cost.labor,
      material: area * cost.material,
      price: area * cost.total,
      detail: detail,
    });
  }, [area, detail]);

  return (
    <>
      <form className="mt-4 ">
        <div className="space-y-12">
          <div className="mt-5 border-b border-gray-900/10 pb-12">
            <p className="text-sm text-gray-500">{description}</p>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="area"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  请输入需要数量/时间 <span className="text-red-400">*</span>
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-sm">
                    <input
                      type="number"
                      name="area"
                      id="area"
                      min={0}
                      value={area}
                      onChange={(e) => {
                        setArea(e.target.valueAsNumber);
                      }}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                    <span className="flex select-none items-center pr-3 text-gray-500 sm:text-sm">
                      {unit}
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  备注
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={2}
                    onChange={(e) => {
                      setDetail(e.target.value);
                    }}
                    className="block w-full border-2 rounded-lg bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentence describing the job needs to be done.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2">
          <div className="col-span-1 flex justify-center">
            <LaborIcon />
            <p className="pt-1">人工费： ${numberWithCommas(price.labor)}</p>
          </div>
          <div className="col-span-1 flex justify-center">
            <MaterialIcon />
            <p className="pt-1">材料费： ${numberWithCommas(price.material)}</p>
          </div>
          <div className="col-span-full font-bold flex justify-center">
            <TotalIcon />
            <p className="pt-1">总计： ${numberWithCommas(price.total)}</p>
          </div>
        </div>
      </form>
    </>
  );
}
