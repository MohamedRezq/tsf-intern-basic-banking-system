import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'

const CustomerPage = ({ customer }) => {

  return (
    <div>
        {customer.name} {customer.balance} {customer.Country} {customer.email}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const customer = await User.findById(params.id).lean()
  customer._id = customer._id.toString()

  return { props: { customer } }
}

export default CustomerPage