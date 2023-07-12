import Paper from "@mui/material/Paper";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";

import Interior from "./Interior";
import Repair from "./Repair";
const calculator = {
  interior: <Interior prices={[14, 26, 0]} />,
  basement: <Interior prices={[8, 17, 0]} />,
  bathroom: <Interior prices={[75, 125, 0]} />,
  kitchen: <Interior prices={[60, 60, 0]} />,
  siding_panel: <Interior prices={[5, 8, 0]} />,
  remodal_addon: <Interior prices={[50, 80, 0]} />,
  electronic_repair: <Repair prices={[0, 0, 250]} />,
  cleaning: <Interior prices={[0, 25, 0]} />,
  solar_panel: <Interior prices={[2.2, 0.8, 0]} />,
  fence: <Interior prices={[25, 25, 0]} />,
  outdoor_painting: <Interior prices={[0.3, 2, 0]} />,
  roof_shingles: <Interior prices={[1.5, 3, 0]} />,
  outdoor_tiles: <Interior prices={[7, 8, 0]} />,
  gutter: <Interior prices={[20, 50, 0]} />,
  deck: <Interior prices={[12, 20, 0]} />,
  chimney: <Repair prices={[0, 0, 500]} />,
};

export default function Price() {
  const [category, setCategory] = useState([
    {
      name: "请勾选需要的服务类别",
      options: [
        { label: "室内整体翻新", value: "interior", checked: true },
        { label: "地下室整体翻新", value: "basement", checked: false },
        { label: "厕所整体翻新", value: "bathroom", checked: false },
        { label: "厨房整体翻新", value: "kitchen", checked: false },
        { label: "外墙翻新", value: "siding_panel", checked: false },
        { label: "房屋加建", value: "remodal_addon", checked: false },
        { label: "电器维修", value: "electronic_repair", checked: false },
        { label: "房屋清洁", value: "cleaning", checked: false },
        { label: "屋顶太阳能板", value: "solar_panel", checked: false },
        { label: "室外围栏", value: "fence", checked: false },
        { label: "室外油漆", value: "outdoor_painting", checked: false },
        { label: "屋顶铺片", value: "roof_shingles", checked: false },
        { label: "室外铺砖", value: "outdoor_tiles", checked: false },
        { label: "排水沟", value: "gutter", checked: false },
        { label: "露台", value: "deck", checked: false },
        { label: "烟囱维修", value: "chimney", checked: false },
      ],
    },
  ]);

  const handleCheck = (optionIdx) => (e) => {
    setCategory(
      category.map((section) => ({
        ...section,
        options: section.options.map((option, idx) =>
          idx === optionIdx ? { ...option, checked: e.target.checked } : option
        ),
      }))
    );
  };

  return (
    <>
      <div className="relative isolate px-6 pt-14  lg:px-8">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          专业报价表
        </h2>
      </div>
      <Container className="mt-10 w-full ">
        <Row>
          <Col sm={4}>
            <Paper elevation={3} className="p-4">
              {category.map((section) => (
                <div className="space-y-6">
                  <span className="font-medium text-gray-900">
                    {section.name}
                  </span>
                  {section.options.map((option, optionIdx) => (
                    <div
                      key={option.value}
                      className="flex items-center category-selection"
                    >
                      <input
                        id={`filter-mobile-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        defaultChecked={option.checked}
                        onChange={handleCheck(optionIdx)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                        className="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </Paper>
          </Col>
          <Col sm={8}>
            {category[0].options.map((selection, optionIdx) => (
              <div>
                {selection.checked ? (
                  <Row className="mb-4">
                    <Paper
                      elevation={3}
                      className="p-4 !bg-[#ffb80096] price-card"
                    >
                      <h4>{selection.label}</h4>
                      {calculator[selection.value]}
                    </Paper>
                  </Row>
                ) : null}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
