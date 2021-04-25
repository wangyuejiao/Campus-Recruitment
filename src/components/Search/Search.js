import React, { useState } from "react";
import { Input, Select, InputNumber, AutoComplete, Cascader, Space} from "antd";
import { SettingOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Search1 } = Input;
const selectBefore = (
  <Select defaultValue="职位" className="select-before">
    <Option value="职位">职位</Option>
    <Option value="公司">公司</Option>
  </Select>
);

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );

const onSearch = value => console.log(value);
// const selectAfter = (
//   <Select defaultValue=".com" className="select-after">
//     <Option value=".com">.com</Option>
//     <Option value=".jp">.jp</Option>
//     <Option value=".cn">.cn</Option>
//     <Option value=".org">.org</Option>
//   </Select>
// );
export default function Search() {
  
  return (
    <div style={{ marginBottom: 1}}>
      
      <Input addonBefore={selectBefore}  defaultValue="请输入公司或职位" />
      
    </div>
   
  );
}

