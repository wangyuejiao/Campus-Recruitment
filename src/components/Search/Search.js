import React, { useState } from "react";
import { Input, Select, InputNumber, AutoComplete, Cascader } from "antd";
function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }

export default function Search() {
  // const [options, setOptions] = useState([]);
  const { Option } = Select;
  const options = [
    {
      value: '北京',
      label: '北京',
      children: [
        {
          value: '前端开发',
          label: '前端开发',
          // children: [
          //   {
          //     value: 'xihu',
          //     label: 'West Lake',
          //   },
          // ],
        },
      ],
    },
    {
      value: '上海',
      label: '上海',
      children: [
        {
          value: 'java工程师',
          label: 'java工程师',
          // children: [
          //   {
          //     value: 'zhonghuamen',
          //     label: 'Zhong Hua Men',
          //   },
          // ],
        },
      ],
    },
  ];
  const onSelect = (value) => {
    console.log('onSelect', value);
  };
  return (
    // <AutoComplete
    //   style={{
    //     width: '100%',
    //   }}
    //   options={options}
    //   onSelect={onSelect}
    // >
    //   <Input.Search size='large' placeholder="搜索职位、公司" enterButton='搜索' />
      <Input.Group compact>
    {/* <Select style={{ width: '30%' }} defaultValue="Home">
      <Option value="Home">Home</Option> */}
      {/* <Option value="Company">Company</Option> */}
    {/* </Select> */}
    <Cascader style={{ width: '70%' }} options={options} placeholder="Select Address" />
  </Input.Group>
    // </AutoComplete>
   
  );
}

