import { Space } from "antd";
import React from "react";
const MainTitle = ({ title = "title" }) => {
  return (
    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}} className='mainTitle'>
      <span>{title}</span>
    </Space>
  );
};

export default MainTitle;
