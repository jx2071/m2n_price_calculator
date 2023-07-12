import React, { useEffect, useState } from "react";
import Additional from "./Additional";
export default function Interior(props) {
  const { prices } = props;
  const [area, setArea] = useState(1);
  const [total, setTotal] = useState(0);
  const [additional, setAdditional] = useState({
    油漆: 0,
    橱柜: 0,
    台面: 0,
    灰板: 0,
    木方: 0,
    水管: 0,
    电线: 0,
  });

  const setAdditionalArea = (selection, area) => {
    const new_areas = { ...additional };
    new_areas[selection] = parseInt(area);
    setAdditional(new_areas);
  };

  const calculateTotal = () => {
    let temp = 0;
    temp += prices[0] * area;
    temp += prices[1] * area;
    Object.keys(additional).map((key) => {
      if (additional[key] > 0) {
        temp += additional[key] * 100;
      }
    });
    setTotal(temp);
  };

  useEffect(() => {
    calculateTotal();
  }, [area, additional]);

  useEffect(() => {
    console.log(additional);
  }, [additional]);
  return (
    <div className="mt-2">
      <div className="flex flex-row">
        <div className="flex w-1/2">
          <label className="pt-2 font-medium text-gray-900">请输入面积：</label>
          <input
            type="number"
            id="interior_area"
            name="interior_area"
            autoComplete="off"
            onChange={(e) => {
              setArea(e.target.value);
            }}
            placeholder="1"
            required
            className="block w-20 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></input>
          <label className="p-2 font-medium text-gray-900">平方尺</label>
        </div>
        <div className="flex justify-end w-1/2">
          <Additional
            setAreas={setAdditionalArea}
            //update={forceUpdate()}
          />
        </div>
      </div>
      <div className="mt-5">
        <div>
          <p>材料费： ${prices[0] * area}</p>
          <p>人工费： ${prices[1] * area}</p>

          {Object.keys(additional).map((key) => {
            if (additional[key] > 0) {
              return (
                <>
                  <p className="mt-5">
                    新增 {key} 面积/尺寸： {additional[key]} 平方尺
                  </p>
                  <p>
                    {key}费： ${additional[key] * 100}
                  </p>
                </>
              );
            } else {
              return null;
            }
          })}
          <div className="line w-40"></div>
          <p>总费用： ${total}</p>
        </div>
      </div>
    </div>
  );
}
