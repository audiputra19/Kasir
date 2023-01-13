import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const params = useParams();
  const { transactions } = useSelector(state => state.kasir);
  const [itemDetails, setItemDetails] = useState([]);

  useEffect(() => {
    const selectedTransaction = transactions.find(item => item.id === params.id);
    setItemDetails(selectedTransaction.item);
  }, [params.id, transactions]);

  return (
    <div className="mt-8 App h-screen bg-gray-100 ">
      <div className="p-8 bg-white border-0 lg:col-span-3 lg:rounded-lg md:rounded-lg shadow-md">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs border-b text-gray-700 uppercase">
            <tr>
              <th scope="col" className="py-3 px-6">
                Nama Item
              </th>
              <th scope="col" className="py-3 px-6">
                Jumlah
              </th>
              <th scope="col" className="py-3 px-6">
                Harga
              </th>
              <th scope="col" className="py-3 px-6">
                Total Harga
              </th>
            </tr>
          </thead>
          <tbody>
            {itemDetails.map((item, i) =>
              <tr className='border-b' key={i}>
                <td className='py-4 px-6'>{item.item}</td>
                <td className='py-4 px-6'>{item.qty}</td>
                <td className='py-4 px-6'>{item.harga}</td>
                <td className='py-4 px-6'>{item.totalharga}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ItemDetails;