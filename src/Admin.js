import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Admin = () => {
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
                  <th scope="col" className="py-3 px-6">
                      Action
                  </th>
              </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-4 px-6'>Caramel Macchiato</td>
              <td className='py-4 px-10'>5</td>
              <td className='py-4 px-6'>20000</td>
              <td className='py-4 px-10'>100000</td>
              <td className='py-4 px-10'>
                <button> 
                  <FontAwesomeIcon icon={faTrashCan}/>
                </button>  
              </td>
            </tr>
            <tr className='border-b'>
              <td className='py-4 px-6'>Vietnam Grip</td>
              <td className='py-4 px-10'>7</td>
              <td className='py-4 px-6'>20000</td>
              <td className='py-4 px-10'>140000</td>
              <td className='py-4 px-10'>
                <button> 
                  <FontAwesomeIcon icon={faTrashCan}/>
                </button>  
              </td>
            </tr>
            <tr className='border-b'>
              <td className='py-4 px-6'>Cookies n' Cream</td>
              <td className='py-4 px-10'>10</td>
              <td className='py-4 px-6'>25000</td>
              <td className='py-4 px-10'>250000</td>
              <td className='py-4 px-10'>
                <button> 
                  <FontAwesomeIcon icon={faTrashCan}/>
                </button>  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin;