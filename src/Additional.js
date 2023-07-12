import { Fragment, useRef, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Additional(props) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(-1);
  const [temp, setTemp] = useState(0);
  const { setAreas } = props;

  const cancelButtonRef = useRef(null);
  const additional_services = [
    { label: "油漆", value: "painting", option: "" },
    { label: "橱柜", value: "cabinet", option: "" },
    { label: "台面", value: "countertop", option: "" },
    { label: "灰板", value: "drywall", option: "" },
    { label: "木方", value: "wood", option: "" },
    { label: "水管", value: "water_pipe", option: "" },
    { label: "电线", value: "electic_wire", option: "" },
  ];
  return (
    <>
      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            额外服务
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {additional_services.map((service, index) => (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        setSelection(index);
                        setOpen(true);
                      }}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      {service.label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {selection === -1 ? null : (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
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
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pt-5 sm:flex sm:items-start">
                      <div className=" mx-2 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900 mb-4"
                        >
                          增加{additional_services[selection].label}服务
                        </Dialog.Title>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-center">
                        <label className="pt-2 font-medium text-gray-900">
                          请输入面积：
                        </label>
                        <input
                          type="number"
                          id="interior_area"
                          name="interior_area"
                          autoComplete="off"
                          placeholder="1"
                          onChange={(e) => {
                            setTemp(e.target.value);
                          }}
                          required
                          className="block w-20 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></input>
                        <label className="p-2 font-medium text-gray-900">
                          平方尺
                        </label>
                      </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        className="inline-flex  no-underline w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                        onClick={() => {
                          setAreas(additional_services[selection].label, temp);
                          setOpen(false);
                        }}
                      >
                        确认
                      </button>
                      <button
                        type="button"
                        className=" inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        取消
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
}
