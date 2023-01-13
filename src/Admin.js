import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
  const { transactions } = useSelector(state => state.kasir);
  const navigation = useNavigate();

  return (
    <div className="mt-8 App h-screen bg-gray-100 ">
      <div className="p-8 bg-white border-0 lg:col-span-3 lg:rounded-lg md:rounded-lg shadow-md">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs border-b text-gray-700 uppercase">
            <tr>
              <th scope="col" className="py-3 px-6">
                Tanggal Transaksi
              </th>
              <th scope="col" className="py-3 px-6">
                Total Harga
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, i) =>
              <tr className='border-b' key={i}>
                <td className='py-4 px-6'>{transaction.transactionDate}</td>
                <td className='py-4 px-10'>{transaction.totalAmount}</td>
                <td className='py-4 px-10 flex flex-row gap-2 items-center justify-start'>
                  <button>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                  <button onClick={() => navigation(`/item-details/${transaction.id}`)}>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin;