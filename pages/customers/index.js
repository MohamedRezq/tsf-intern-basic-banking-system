import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'

const CustomerPage = ({ customers }) => {

  return (
    <div>
        {customers.map((customer, i) => (
          <div key={i+1}>
            {customer.name} {customer.balance} {customer.Country} {customer.email}
          </div>
        ))}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const customers = await User.find({}).lean()
  customers.map((customer, i) => {
    customer._id = customer._id.toString()
  })

  return { props: { customers } }
}

export default CustomerPage