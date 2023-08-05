"use client";

import {
  PlusIcon,
  MinusIcon,
  CheckIcon,
  ChevronDownIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import InteriorBox from "../components/Interior";
import ElectronicRepairBox from "../components/ElectronicRepair";
import CleaningBox from "../components/Cleaning";
type Project = {
  id: number;
  name: string;
  description: string;
  labor: number;
  material: number;
  price: number;
};

function numberWithCommas(x: number) {
  return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({
    area: 0,
    detail: "",
    labor: 0,
    material: 0,
    price: 0,
  });

  const category = [
    {
      label: "室内整体翻新",
      value: "Interior Renovation",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 14,
            labor: 26,
            total: 40,
          }}
          unit="平方英尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old floor. 2. Install new floor. 3. Install new floor trim. 4. Install new floor light fixture. 5. Install new floor door. 6. Install new floor door frame. 7. Install new floor door trim. 8. Install new floor door knob. 9. Install new floor door lock. 10. Install new floor door light fixture. 11. Install new floor door tile. 12. Install new floor door frame. 13. Install new floor door trim. 14. Install new floor door knob. 15. Install new floor door lock. 16. Install new floor door light fixture. 17. Install new floor door tile. 18. Install new floor door frame. 19. Install new floor door trim. 20. Install new floor door knob. 21. Install new floor door lock. 22. Install new floor door light fixture. 23. Install new floor door tile. 24. Install new floor door frame. 25. Install new floor door trim. 26. Install new floor door knob. 27. Install new floor door lock. 28. Install new floor door light fixture. 29. Install new floor door tile."
        />
      ),
    },
    {
      label: "地下室整体翻新",
      value: "Basement Renovation",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 8,
            labor: 17,
            total: 25,
          }}
          unit="平方英尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old floor. 2. Install new floor. 3. Install new floor trim. 4. Install new floor light fixture. 5. Install new floor door. 6. Install new floor door frame. 7. Install new floor door trim. 8. Install new floor door knob. 9. Install new floor door lock. 10. Install new floor door light fixture. 11. Install new floor door tile. 12. Install new floor door frame. 13. Install new floor door trim. 14. Install new floor door knob. 15. Install new floor door lock. 16. Install new floor door light fixture. 17. Install new floor door tile. 18. Install new floor door frame. 19. Install new floor door trim. 20. Install new floor door knob. 21. Install new floor door lock. 22. Install new floor door light fixture. 23. Install new floor door tile. 24. Install new floor door frame. 25. Install new floor door trim. 26. Install new floor door knob. 27. Install new floor door lock. 28. Install new floor door light fixture. 29. Install new floor door tile."
        />
      ),
    },
    {
      label: "厕所整体翻新",
      value: "Bathroom Renovation",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 75,
            labor: 125,
            total: 200,
          }}
          unit="平方英尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old bathtub. 2. Install new bathtub. 3. Install new bathtub faucet. 4. Install new bathtub drain. 5. Install new bathtub valve. 6. Install new bathtub tile. 7. Install new bathtub light fixture. 8. Install new bathtub shower door. 9. Install new toilet. 10. Install new toilet valve. 11. Install new toilet seat. 12. Install new toilet paper holder. 13. Install new toilet towel rack. 14. Install new toilet tile. 15. Install new toilet light fixture. 16. Install new vanity. 17. Install new vanity faucet. 18. Install new vanity drain. 19. Install new vanity valve. 20. Install new vanity tile. 21. Install new vanity light fixture. 22. Install new vanity mirror. 23. Install new vanity towel rack. 24. Install new vanity toilet paper holder. 25. Install new floor tile. 26. Install new door. 27. Install new door lock. 28. Install new door light fixture. 29. Install new door tile. 30. Install new door frame. 31. Install new door trim. 32. Install new door knob."
        />
      ),
    },
    {
      label: "厨房整体翻新",
      value: "Kitchen Renovation",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 60,
            labor: 60,
            total: 120,
          }}
          unit="平方英尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old kitchen cabinet. 2. Install new kitchen cabinet. 3. Install new countertop. 4. Install new sink. 5. Install new faucet. 6. Install new backsplash. 7. Install new floor tile. 8. Install new light fixture. 9. Install new range hood. 10. Install new range. 11. Install new dishwasher. 12. Install new garbage disposal. 13. Install new refrigerator. 14. Install new microwave."
        />
      ),
    },
    {
      label: "外墙翻新",
      value: "Siding Panel",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 5,
            labor: 8,
            total: 13,
          }}
          unit="平方英尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old siding panel. 2. Install new siding panel."
        />
      ),
    },
    {
      label: "房屋加建",
      value: "Remodal Addon",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 50,
            labor: 80,
            total: 130,
          }}
          unit="平方英尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Build the wall. 2. Build the door. 3. Build the window. 4. Build the roof."
        />
      ),
    },
    {
      label: "电器维修",
      value: "Electronic Repair",
      description: "",
      unit: "件",
      comp: (
        <ElectronicRepairBox
          cost={{
            material: 0,
            labor: 250,
            total: 250,
          }}
          setSelectedInfo={setSelectedInfo}
          description="Service May Include: 1. Repair the light. 2. Repair the socket. 3. Repair the switch. 4. Repair the fan."
        />
      ),
    },
    {
      label: "房屋清洁",
      value: "House Cleaning",
      description: "",
      unit: "小时",
      comp: (
        <CleaningBox
          cost={{
            material: 0,
            labor: 25,
            total: 25,
          }}
          unit="小时"
          setSelectedInfo={setSelectedInfo}
          description="Service May Include: 1. Clean the floor. 2. Clean the window. 3. Clean the wall. 4. Clean the furniture."
        />
      ),
    },
    {
      label: "屋顶太阳能板",
      value: "Solar Panel",
      description: "",
      unit: "每瓦",
      comp: (
        <InteriorBox
          cost={{
            material: 2.2,
            labor: 0.8,
            total: 3,
          }}
          unit="每瓦"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old solar panel. 2. Install new solar panel."
        />
      ),
    },
    {
      label: "室外围栏",
      value: "Fence",
      description: "",
      unit: "尺(foot)",
      comp: (
        <InteriorBox
          cost={{
            material: 25,
            labor: 25,
            total: 50,
          }}
          unit="尺(foot)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old fence. 2. Install new fence."
        />
      ),
    },
    {
      label: "室外油漆",
      value: "Outdoor Painting",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 0.3,
            labor: 2,
            total: 2.3,
          }}
          unit="平方英尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove all loose paint, dirt, and debris from the surface. 2. Apply a mildewcide to the surface. 3. Caulk all gaps to prevent water intrusion. 4. Apply primer to bare wood and metal. 5. Apply two coats of paint to the surface."
        />
      ),
    },
    {
      label: "屋顶铺片",
      value: "Roof Shingles",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 1.5,
            labor: 3,
            total: 4.5,
          }}
          unit="平方英尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Sample Description"
        />
      ),
    },
    {
      label: "室外铺砖",
      value: "Outdoor Tiles",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 7,
            labor: 8,
            total: 15,
          }}
          unit="平方英尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old tiles. 2. Install new tiles."
        />
      ),
    },
    {
      label: "排水沟",
      value: "Gutter",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 20,
            labor: 50,
            total: 70,
          }}
          unit="平方英尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old gutter. 2. Install new gutter."
        />
      ),
    },
    {
      label: "露台",
      value: "Deck",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 12,
            labor: 20,
            total: 32,
          }}
          unit="平方英尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old deck. 2. Install new deck."
        />
      ),
    },
    {
      label: "烟囱维修",
      value: "Chimney Repair",
      description: "",
      unit: "件",
      comp: (
        <ElectronicRepairBox
          cost={{
            material: 0,
            labor: 500,
            total: 500,
          }}
          setSelectedInfo={setSelectedInfo}
          description="Service May Include: 1. Repair the chimney. 2. Repair the chimney cap. 3. Repair the chimney crown. 4. Repair the chimney flashing."
        />
      ),
    },
    {
      label: "油漆",
      value: "Painting",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 0.2,
            labor: 1,
            total: 1.2,
          }}
          unit="平方英尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove all loose paint, dirt, and debris from the surface. 2. Apply a mildewcide to the surface. 3. Caulk all gaps to prevent water intrusion. 4. Apply primer to bare wood and metal. 5. Apply two coats of paint to the surface."
        />
      ),
    },
    {
      label: "橱柜",
      value: "Cabinet",
      description: "",
      unit: "尺(Foot)",
      comp: (
        <InteriorBox
          cost={{
            material: 250,
            labor: 100,
            total: 350,
          }}
          unit="尺(Foot)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old cabinet. 2. Install new cabinet."
        />
      ),
    },
    {
      label: "台面",
      value: "Countertop",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 45,
            labor: 15,
            total: 60,
          }}
          unit="平方尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old countertop. 2. Install new countertop."
        />
      ),
    },
    {
      label: "灰板",
      value: "Drywall",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 0.6,
            labor: 2,
            total: 2.6,
          }}
          unit="平方尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old drywall. 2. Install new drywall."
        />
      ),
    },
    {
      label: "木方",
      value: "Framing",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 4,
            labor: 4,
            total: 8,
          }}
          unit="平方尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old framing. 2. Install new framing."
        />
      ),
    },
    {
      label: "水管",
      value: "Water Pipe",
      description: "",
      unit: "尺(Foot)",
      comp: (
        <InteriorBox
          cost={{
            material: 4,
            labor: 25,
            total: 29,
          }}
          unit="尺(Foot)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old water pipe. 2. Install new water pipe."
        />
      ),
    },
    {
      label: "电线",
      value: "Electric Wire",
      description: "",
      unit: "尺(Foot)",
      comp: (
        <InteriorBox
          cost={{
            material: 2,
            labor: 15,
            total: 17,
          }}
          unit="尺(Foot)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. Remove old electric wire. 2. Install new electric wire."
        />
      ),
    },
    {
      label: "吸顶灯",
      value: "Celling Light",
      description: "",
      unit: "个",
      comp: (
        <InteriorBox
          cost={{
            material: 20,
            labor: 70,
            total: 90,
          }}
          unit="个"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1.TODO"
        />
      ),
    },
    {
      label: "壁灯",
      value: "Wall Lamp",
      description: "",
      unit: "个",
      comp: (
        <InteriorBox
          cost={{
            material: 50,
            labor: 100,
            total: 150,
          }}
          unit="个"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1.TODO"
        />
      ),
    },
    {
      label: "吊灯",
      value: "Chandelier",
      description: "",
      unit: "个",
      comp: (
        <CleaningBox
          cost={{
            material: 0,
            labor: 350,
            total: 350,
          }}
          unit="个"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1.TODO"
        />
      ),
    },
    {
      label: "厕所/马桶",
      value: "Toilet",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 80,
            labor: 120,
            total: 200,
          }}
          unit="平方尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. TODO"
        />
      ),
    },
    {
      label: "复合地板",
      value: "Laminate Flooring",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 3.5,
            labor: 4,
            total: 7.5,
          }}
          unit="平方尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. TODO"
        />
      ),
    },
    {
      label: "实木地板",
      value: "Solidwood Flooring",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 4.5,
            labor: 5,
            total: 9.5,
          }}
          unit="平方尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. TODO"
        />
      ),
    },
    {
      label: "瓷砖",
      value: "Tile",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 3.5,
            labor: 5,
            total: 8.5,
          }}
          unit="平方尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. TODO"
        />
      ),
    },
    {
      label: "水泥工程",
      value: "Cement Work",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 4,
            labor: 8,
            total: 12,
          }}
          unit="平方尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. TODO"
        />
      ),
    },
    {
      label: "批灰",
      value: "Plastering",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 0.5,
            labor: 4,
            total: 4.5,
          }}
          unit="平方尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. TODO"
        />
      ),
    },
    {
      label: "室内门",
      value: "Interior Door",
      description: "",
      unit: "个",
      comp: (
        <InteriorBox
          cost={{
            material: 200,
            labor: 350,
            total: 550,
          }}
          unit="个"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1.TODO"
        />
      ),
    },
    {
      label: "保温棉",
      value: "Insulation",
      description: "",
      unit: "平方英尺(sqft)",
      comp: (
        <InteriorBox
          cost={{
            material: 1,
            labor: 1,
            total: 2,
          }}
          unit="平方尺(sqft)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1. TODO"
        />
      ),
    },
    {
      label: "水暖更新",
      value: "Plumbing",
      description: "",
      unit: "件",
      comp: (
        <ElectronicRepairBox
          cost={{
            material: 0,
            labor: 3000,
            total: 3000,
          }}
          unit="件"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1.TODO"
        />
      ),
    },
    {
      label: "开关",
      value: "Switch",
      description: "",
      unit: "个",
      comp: (
        <CleaningBox
          cost={{
            material: 0,
            labor: 30,
            total: 30,
          }}
          unit="个"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1.TODO"
        />
      ),
    },
    {
      label: "水龙头",
      value: "Faucet",
      description: "",
      unit: "个",
      comp: (
        <CleaningBox
          cost={{
            material: 0,
            labor: 250,
            total: 250,
          }}
          unit="个"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1.TODO"
        />
      ),
    },
    {
      label: "楼梯",
      value: "Staircase",
      description: "",
      unit: "台阶",
      comp: (
        <CleaningBox
          cost={{
            material: 0,
            labor: 200,
            total: 200,
          }}
          unit="台阶"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1.TODO"
        />
      ),
    },
    {
      label: "楼梯扶手",
      value: "Staircase Handrail",
      description: "",
      unit: "尺(Foot)",
      comp: (
        <CleaningBox
          cost={{
            material: 0,
            labor: 36,
            total: 36,
          }}
          unit="尺(Foot)"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1.TODO"
        />
      ),
    },
    {
      label: "窗户",
      value: "Window",
      description: "",
      unit: "个",
      comp: (
        <CleaningBox
          cost={{
            material: 0,
            labor: 800,
            total: 800,
          }}
          unit="个"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1.TODO"
        />
      ),
    },
    {
      label: "浴室玻璃门",
      value: "Bathroom Glass Door",
      description: "",
      unit: "个",
      comp: (
        <CleaningBox
          cost={{
            material: 0,
            labor: 900,
            total: 900,
          }}
          unit="个"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1.TODO"
        />
      ),
    },
    {
      label: "全屋冷暖系统",
      value: "Whole House HVAC",
      description: "",
      unit: "起",
      comp: (
        <ElectronicRepairBox
          cost={{
            material: 0,
            labor: 9000,
            total: 9000,
          }}
          unit="起"
          setSelectedInfo={setSelectedInfo}
          description="Service Include: 1.TODO"
        />
      ),
    },
  ];
  const [selected, setSelected] = useState(category[0]);
  const [subtotal, setSubtotal] = useState(0);
  const [subLabor, setSubLabor] = useState(0);
  const [subMaterial, setSubMaterial] = useState(0);
  useEffect(() => {
    var sub = 0;
    var subLabor = 0;
    var subMaterial = 0;
    projects.forEach((project) => {
      sub += project.price;
      subLabor += project.labor;
      subMaterial += project.material;
    });

    setSubtotal(sub);
    setSubLabor(subLabor);
    setSubMaterial(subMaterial);
  }, [projects]);

  const handleDelete = (index: number) => {
    const newProjects = [] as Project[];
    projects.forEach((project, i) => {
      if (project.id !== index) {
        newProjects.push(project);
      }
    });
    setProjects(newProjects);
  };

  return (
    <>
      {!newProject && (
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
              onClick={() => setNewProject(true)}
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              New Project
            </button>
          </div>
        </div>
      )}
      {newProject && (
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
                      <div className="font-medium text-gray-900 flex">
                        {project.name}
                        <button
                          onClick={() => {
                            handleDelete(project.id);
                          }}
                          className="ml-5 flex bg-red-400 px-2 rounded-lg text-sm font-thin text-red-100"
                        >
                          <MinusIcon className="w-5 h-5 " />
                        </button>
                        <button
                          onClick={() => {
                            alert("edit");
                          }}
                          className="ml-2 flex bg-sky-400 px-2 rounded-lg text-sm font-thin text-sky-100"
                        >
                          <PencilSquareIcon className="w-5 h-5 " />
                        </button>
                      </div>
                      <div className="mt-1 truncate text-gray-500">
                        {project.description}
                      </div>
                    </td>
                    <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                      ${numberWithCommas(project.labor)}
                    </td>
                    <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                      ${numberWithCommas(project.material)}
                    </td>
                    <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                      ${numberWithCommas(project.price)}
                    </td>
                  </tr>
                ))}
                <tr key={"sub"} className="border-b border-gray-200">
                  <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0"></td>
                  <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                    <b>小计： ${numberWithCommas(subLabor)}</b>
                  </td>
                  <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                    <b>${numberWithCommas(subMaterial)}</b>
                  </td>
                  <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
                    <b>${numberWithCommas(subtotal)}</b>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th
                    scope="row"
                    colSpan={3}
                    className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                  >
                    税率 8.875%
                  </th>
                  <th
                    scope="row"
                    className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                  >
                    Tax
                  </th>
                  <td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0">
                    ${numberWithCommas(subtotal * 0.08875)}
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
                    ${numberWithCommas(subtotal * 1.08875)}
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
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        let currentProject: Project = {
                          id: projects.length,
                          name: selected.label,
                          description: `${
                            selected.unit !== "件"
                              ? "新增服务：" + selectedInfo.area + selected.unit
                              : "预估"
                          }   备注：${selectedInfo.detail} `,
                          labor: selectedInfo.labor,
                          material: selectedInfo.material,
                          price: selectedInfo.price,
                        };
                        setProjects(() => [...projects, currentProject]);
                        setModalOpen(false);
                      }}
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
