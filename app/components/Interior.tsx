"use client";

import { useState, useEffect } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const LaborIcon = () => {
  return (
    <img
      src="data:image/png;base64,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"
      alt=""
      className="w-8 h-8"
    />
  );
};

const MaterialIcon = () => {
  return (
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2WTwuCMByG9wUKCnYJNzoEfpBdgkAd4ZeMoK+zc9f+4J/VdTGli2nq1A7xPvA7zZf523R7CAEA9OYZrpiW7Kgly2zlkp/SYO3/Kj+IYvKI37TkplJ3OzZ1fjDlyn1M/q7D1PnBlNve9AIsnTrfGSWoqasvq1dUU25onvQFDQjsgMEnpPATU5xCCseowEVmcBMLqASFzCnYaE+g0wI6baDTCjpNodMKOi2g0wY6LaDTFDqtoNM9+WudziU/ZyHfXwJ/ZusRepGWTHVtwCVPxmrATp7E3rL6fLLjCzvW1oBrnozVgF25pkwuedzWgGuejNWA3fKmzHW7mbc14JonAABSxwvMhqeaILw5QAAAAABJRU5ErkJggg=="
      alt=""
      className="w-8 h-8"
    />
  );
};

const TotalIcon = () => {
  return (
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADx0lEQVR4nO1bW08TQRTuXzDxwRd/gA/+FRMffPWRBHcUTQjxwQcJ8YLZBaqNoCazbaHQEhaMpKxyDQGqFpAS4qVoFOSqUCmIVra0x8zQXcvaAoVuu7Rzki+Z/b6lc/brnDOzTbBYWLBgwYIFi32DR7iNR6KXL8Wn/9NK8Wmq5UmvLXWcETg8JnDiCF/y6KTFiBCQCAmEBSRe0JLj7Od4hFfzpQuc/XyCozqP8Lt7l8RTRhoAPMJxnsNWCoTjhOtu6lN6XQMK1XQ6Qa9rYCvbuoCwLZFTfEga/tN0t2M7ce03zICpwUCstswRVa+t15yx974pgEiY4tPYB3hQ7lQToWPCGaXbKhq3ZyenqRYJfde+JMMMgEgYVr/MQeNtiSI0M6clp2JjaQkkmxfabV46NlL/+W15l5YTAyAFYpsrFPnS45srEP8dyoMBv8OwvTEPytpnCjImXO70Ndhe39Gj4RnjDYiuf4VoeJa6TRBdn9WSU0G4fOmGG6DokjEbmAEoTytAHhkFV7fvSJB9owf6vOT7TLMCZN/RDXg+Mnagz0u+zzQGKCYBMwAdkx4g71HHerQF6kAKWM29AuQMe8BedaxHw8sbFKY2QMkyIqGPMBR0g9N/SzPA6b8Nw8EWqhW8AUNBt/bgegwH3YVvgDPxzS8u+jVuYfG1thIK3oCGNHW/Xz8oeAOkgBXaJ+4XrwFKIZwD5AOcAUidEwNI3R8PA3yjWT0DkE6v7/5FtQ1GQh+pCepKKLptUEkBU2+D8iF/D8jkncDU26B8yN8D0vWDdC9ApjVAyTKK/iDkTLENzi+9Mm8P+OFphpWH9bvwo7U5pZ7MZ7INqhgJeo6JAZ6W1AYk8ZlsgzvnAHdxnAOUDBpfwRsg7fMCVPAGKBmAGYDYCgBWAsjAHuCqlnbVXNPdNlNxhpeAoGuEZuQMN2B9ehDWPvRTqJx6nS+O5JQTA5xVzbsScVa5TMUZbsBa0oRmBDMAsRUArARQjnrAwngPtPJu8PBumB/t/q8eCec5gj7jewGOShe0VKfX7ZUuii++F7npAcuBXjrR2x4vPKxwaBPayh0wKXu15MiYcIfVxzs7wXrt4HrdVTv4nz4z1AB/YhuM9jk6YjWXdyaqv97Yj282T9CJL4sgP26jIGPCEY3co+lPpBiBqhNNr3c9lmLqg2SkG3kOuFPqOkH/KUGbBEd4Dpf9M8h+seaKuKXqNVfsil7nkfhrr7/Ppm4xIviSRyfJSuCROC5w+KxeJ5zA4TcJ5EXnEZ4QONx19KdlwYIFCxYsLIUefwE5otuKraFelgAAAABJRU5ErkJggg=="
      alt=""
      className="w-8 h-8"
    />
  );
};

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function InteriorBox(props: any) {
  const {
    cost,
  }: {
    cost: {
      labor: number;
      material: number;
      total: number;
    };
  } = props;
  const [area, setArea] = useState(0);
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
  }, [area]);

  return (
    <>
      <form className="mt-4 ">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="area"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  请输入翻新面积 <span className="text-red-400">*</span>
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-sm">
                    <input
                      type="number"
                      name="area"
                      id="area"
                      value={area}
                      onChange={(e) => {
                        setArea(e.target.valueAsNumber);
                      }}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                    <span className="flex select-none items-center pr-3 text-gray-500 sm:text-sm">
                      sqft
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
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            人工费： ${numberWithCommas(price.labor)}
          </div>
          <div className="col-span-1 flex justify-center">
            <MaterialIcon />
            材料费： ${price.material}
          </div>
          <div className="col-span-full flex justify-center">
            <TotalIcon />
            总计： ${price.total}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
