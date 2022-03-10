import {} from "antd";
import { useEffect } from "react";
import { storeCustomers } from "../store/customers/customersSlice";
import {connect} from 'react-redux'
import dbConnect from "../lib/dbConnect"
import User from "../models/User"
function Home({ customers, storeCustomers, customersFromDB }) {
  useEffect(() => {
    storeCustomers(customersFromDB);
  }, []);

  return <div></div>;
}

const mapStateToProps = (state) => ({
  customers: state.customers.customers,
});
const mapDispatchToProps = { storeCustomers };

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export async function getServerSideProps({ params }) {
  await dbConnect();

  const customers = await User.find({}).lean();
  customers.map((customer, i) => {
    customer._id = customer._id.toString();
  });
  return { props: { customersFromDB: customers } };
}
