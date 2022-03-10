import React from "react";
import { Select } from 'antd';
const { Option } = Select;

const SelectComp = ({ placeholder="placeholder", options=["Man", "Woman", "Cat", "Dog"], }) => {
  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder={placeholder}
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children
            .toLowerCase()
            .localeCompare(optionB.children.toLowerCase())
        }
      >
          {options.map((option, i) => (
              <Option value={i+1} key={i+1}>{option}</Option>
          ))}
      </Select>
    </div>
  );
};

export default SelectComp;
