import React, { useState } from "react";
import { Input, AutoComplete } from "antd";
function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }
//   const searchResult = (query) => {
//     return new Array(getRandomInt(5))
//       .join(".")
//       .split(".")
//       .map((_, idx) => {
//         const category = `${query}${idx}`;
//         return {
//           value: category,
//           label: (
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//               }}
//             >
//               <span>
//                 Found {query} on{" "}
//                 <a
//                   href={`https://s.taobao.com/search?q=${query}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {category}
//                 </a>
//               </span>
//               <span>{getRandomInt(200, 100)} results</span>
//             </div>
//           ),
//         };
//       });
//   };
export default function Search() {
  const [options, setOptions] = useState([]);

//   const handleSearch = (value) => {
//     setOptions(value ? searchResult(value) : []);
//   };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };
  return (
    <AutoComplete
      style={{
        width: '100%',
      }}
      options={options}
      onSelect={onSelect}
    //   onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="搜索职位、公司" enterButton='搜索' />
    </AutoComplete>
  );
}

