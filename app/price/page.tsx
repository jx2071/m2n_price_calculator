"use client";

import {
  PlusIcon,
  CheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import InteriorBox from "../components/Interior";
type Project = {
  id: number;
  name: string;
  description: string;
  labor: number;
  material: number;
  price: string;
};

const category = [
  {
    label: "室内整体翻新",
    value: "interior",
    description: "",
    comp: (
      <InteriorBox
        cost={{
          material: 14,
          labor: 26,
          total: 40,
        }}
      />
    ),
  },
  {
    label: "地下室整体翻新",
    value: "basement",
    description: "",
    comp: (
      <InteriorBox
        cost={{
          material: 8,
          labor: 17,
          total: 25,
        }}
      />
    ),
  },
  {
    label: "厕所整体翻新",
    value: "bathroom",
    description: "",
    comp: (
      <InteriorBox
        cost={{
          material: 75,
          labor: 125,
          total: 200,
        }}
      />
    ),
  },
  {
    label: "厨房整体翻新",
    value: "kitchen",
    description: "",
    comp: (
      <InteriorBox
        cost={{
          material: 60,
          labor: 60,
          total: 120,
        }}
      />
    ),
  },
  {
    label: "外墙翻新",
    value: "siding_panel",
    description: "",
    comp: (
      <InteriorBox
        cost={{
          material: 5,
          labor: 8,
          total: 13,
        }}
      />
    ),
  },
  {
    label: "房屋加建",
    value: "remodal_addon",
    description: "",
    comp: (
      <InteriorBox
        cost={{
          material: 50,
          labor: 80,
          total: 130,
        }}
      />
    ),
  },
  {
    label: "电器维修",
    value: "electronic_repair",
    description: "",
    comp: "comp",
  },
  {
    label: "房屋清洁",
    value: "cleaning",
    description: "",
    comp: (
      <InteriorBox
        cost={{
          material: 0,
          labor: 25,
          total: 25,
        }}
      />
    ),
  },
  {
    label: "屋顶太阳能板",
    value: "solar_panel",
    description: "",
    comp: "comp",
  },
  { label: "室外围栏", value: "fence", description: "", comp: "comp" },
  {
    label: "室外油漆",
    value: "outdoor_painting",
    description: "",
    comp: "comp",
  },
  { label: "屋顶铺片", value: "roof_shingles", description: "", comp: "comp" },
  { label: "室外铺砖", value: "outdoor_tiles", description: "", comp: "comp" },
  { label: "排水沟", value: "gutter", description: "", comp: "comp" },
  { label: "露台", value: "deck", description: "", comp: "comp" },
  { label: "烟囱维修", value: "chimney", description: "", comp: "comp" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(category[0]);
  return (
    <>
      {projects.length === 0 && (
        <div className="text-center pt-40">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-semibold text-gray-900">
            No projects
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by creating a new project.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setProjects([{} as Project])}
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              New Project
            </button>
          </div>
        </div>
      )}
      {projects.length !== 0 && (
        <div className="p-12 ">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                专业报价表
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                For work completed from{" "}
                <time dateTime="2022-08-01">August 1, 2022</time> to{" "}
                <time dateTime="2022-08-31">August 31, 2022</time>.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5"
                  aria-hidden="true"
                />
                新增项目
              </button>
            </div>
          </div>
          <div className="-mx-4 mt-8 flow-root sm:mx-0">
            <table className="min-w-full">
              <colgroup>
                <col className="w-full sm:w-1/2" />
                <col className="sm:w-1/6" />
                <col className="sm:w-1/6" />
                <col className="sm:w-1/6" />
              </colgroup>
              <thead className="border-b border-gray-300 text-gray-900">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    类别
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                  >
                    人工
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                  >
                    材料
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
                  >
                    总价
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-gray-200">
                    <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="font-medium text-gray-900">
                        {project.name}
                      </div>
                      <div className="mt-1 truncate text-gray-500">
                        {project.description}
                      </div>
                    </td>
                    <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                      {project.labor}
                    </td>
                    <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                      {project.material}
                    </td>
                    <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                      {project.price}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th
                    scope="row"
                    colSpan={3}
                    className="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                  >
                    小计
                  </th>
                  <th
                    scope="row"
                    className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
                  >
                    Subtotal
                  </th>
                  <td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0">
                    $0.00
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    colSpan={3}
                    className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                  >
                    税率 (8.875%)
                  </th>
                  <th
                    scope="row"
                    className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                  >
                    Tax
                  </th>
                  <td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                    $0.00
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    colSpan={3}
                    className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
                  >
                    总计
                  </th>
                  <th
                    scope="row"
                    className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                  >
                    Total
                  </th>
                  <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                    $0.00
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
      <Transition.Root show={modalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setModalOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform min-h-min overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <div>
                    <Listbox value={selected} onChange={setSelected}>
                      {({ open }) => (
                        <>
                          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                            <b>选择新增类别</b>
                          </Listbox.Label>
                          <div className="relative mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                              <span className="inline-flex w-full truncate">
                                <span className="truncate font-bold">
                                  {selected.label}
                                </span>
                                <span className="ml-2 truncate text-gray-500">
                                  {selected.value}
                                </span>
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {category.map((option) => (
                                  <Listbox.Option
                                    key={option.value}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "bg-indigo-600 text-white"
                                          : "text-gray-900",
                                        "relative cursor-default select-none py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={option}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <div className="flex">
                                          <span
                                            className={classNames(
                                              selected
                                                ? "font-semibold"
                                                : "font-normal",
                                              "truncate"
                                            )}
                                          >
                                            {option.label}
                                          </span>
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-indigo-200"
                                                : "text-gray-500",
                                              "ml-2 truncate"
                                            )}
                                          >
                                            {option.value}
                                          </span>
                                        </div>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                  {selected.comp}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
