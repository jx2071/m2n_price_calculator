"use client";
import { useState, useEffect } from "react";
import { LaborIcon, MaterialIcon, TotalIcon } from "./Icons";

export default function ElectronicRepairBox(props: any) {
  const {
    cost,
    description,
    setSelectedInfo,
  }: {
    cost: {
      labor: number;
      material: number;
      total: number;
    };
    description: string;
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

  const [detail, setDetail] = useState("");

  useEffect(() => {
    setSelectedInfo({
      area: 0,
      labor: cost.labor,
      material: cost.material,
      price: cost.total,
      detail: detail,
    });
  }, [detail]);

  return (
    <>
      <div className="mt-5 ">
        <p className="text-sm text-gray-500">{description}</p>
        <label
          htmlFor="about"
          className="mt-5 block text-sm font-medium leading-6 text-gray-900"
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
        <div className="mt-6 font-bold flex justify-center">
          <TotalIcon />
          <p className="pt-1">预计： ${cost.total}.00 起</p>
        </div>
      </div>
    </>
  );
}
