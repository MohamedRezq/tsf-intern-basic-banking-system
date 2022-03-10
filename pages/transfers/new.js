import Head from "next/head";
import MainTitle from "../../components/MainTitle";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import {connect} from 'react-redux'
import { InfoCircleOutlined } from "@ant-design/icons";
import SelectComp from "../../components/FormItems/SelectComp";

const New = ({ customers }) => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const customerDataSelect = customers.map((customer, i) => {
    return `${customer.name} - ${customer.balance} $`;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Head>
        <title>New Transfer</title>
      </Head>
      <MainTitle title="NEW TRANSFER" />
      <div className="formDiv">
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            requiredMarkValue: requiredMark,
          }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          <Form.Item
            label="From"
            name="From"
            required
            tooltip="The Account who sends the money"
          >
            <SelectComp options={customerDataSelect} />
          </Form.Item>
          <Form.Item
            label="To"
            name="To"
            required
            tooltip="The Account who receives the money"
          >
            <SelectComp options={customerDataSelect} />
          </Form.Item>
          <Form.Item
            label="Amount"
            tooltip={{
              title: "The amount of money",
              icon: <InfoCircleOutlined />,
            }}
            required
          >
            <Input placeholder="Amount of Money" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customers: state.customers.customers,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(New);
