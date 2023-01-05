
import './App.css';
import { faCartShopping, faMoneyBillWave, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';  
import { uid } from 'uid';

function App() {

  const [result, setResult] = useState([])

  const [data, setData] = useState({
    id:uid(),
    item:"",
    qty:"",
    harga:10000,
    totalharga:""
  })

  function handleChange(e) {
    setData({...data,[e.target.name]: e.target.value})
  }

  const [disc, setDisc] = useState("");
  const handleDisc = (e) => {
    setDisc(e.target.value)
  }

  function handleDelete(id){
    const newlist = result.filter((li) => li.id !== id)
    .map((filter) => {
      return filter;
    })

    setResult(newlist)
  }

  const {id,item, qty, harga} = data;
  const totalharga = harga * qty;

  function onSubmit(e) {
    e.preventDefault();
    setResult([...result,{id,item, qty, harga, totalharga}])
    
    //console.log(data)

    setData({
      id:uid(),
      item:"",
      qty:"",
      harga:10000,
      totalharga:""
    })
  }

  const totalbayar = result.reduce(
    (accumulator, value) => accumulator + value.totalharga,0
  );
  
  const totalfix = totalbayar - (totalbayar*(disc/100));

  return (
    <div className="App h-screen bg-gray-50">
      <div className="container mx-auto lg:pt-8 lg:pb-8 md:pt-8 md:pb-8">
       
        <div className=" lg:grid lg:grid-cols-4 sm:flex-wrap md:flex-wrap">
          <div className="p-8 bg-white border-0 lg:col-span-3 lg:rounded-lg md:rounded-lg shadow-lg">
            <div>
              <label className="block pb-8 font-bold text-2xl text-gray-900 text-start">Form Input Menu</label>
            </div>
            <form onSubmit={onSubmit}>
              <div className="lg:flex flex-1">
                <div className="lg:w-1/2">
                  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 text-start pl-2">Pilih Item</label>
                  <select id="countries" name="item" onChange={handleChange} value={data.item} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5">
                    <option defaultValue="selected">Pilih Minuman</option>
                    <option value="Caramel Macchiato">Caramel Macchiato</option>
                    <option value="Cookies n' Cream">Cookies n' Cream</option>
                    <option value="Vietnam Grip">Vietnam Grip</option>
                    <option value="Espresso">Espresso</option>
                  </select>
                </div>
                <div className="lg:pl-8 lg:w-auto pt-5 lg:pt-0">
                  <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 text-start pl-2">Qty</label>
                  <input type="text" id="first_name" name="qty" autoComplete="off" onChange={handleChange} value={data.qty} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5" placeholder="0" required/>
                </div>
                <div className="lg:pl-8 pt-5 lg:pt-7">
                  <button type="submit" className="focus:outline-none text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full">Masuk List</button>
                </div>
              </div>
            </form>
            <div className="overflow-x-auto relative sm:rounded-lg mt-8">
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
                      {
                        result.map((info)=>{
                          return(
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={info.id}>
                              <td className="py-4 px-6">
                                {info.item}
                              </td>
                              <td className="py-4 px-10">
                                {info.qty}
                              </td>
                              <td className="py-4 px-6">
                                {info.harga.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                              </td>
                              <td className="py-4 px-10">
                                {info.totalharga.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}  
                              </td>
                              <td className="py-4 px-10">
                              <button onClick={() => handleDelete(info.id)}> 
                                <FontAwesomeIcon icon={faTrashCan}/>
                              </button>   
                              </td>      
                            </tr>
                          )
                        })
                      }
                      
                    </tbody>
                </table>
            </div>
  
          </div> 
          <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 border-0 lg:rounded-lg md:rounded-lg shadow-lg lg:ml-8 lg:flex-1 mt-8 lg:mt-0 pb-6">
            <div className="icon-shop pt-8">
              <FontAwesomeIcon icon={faCartShopping} size="2x"/>
            </div>
            <div>
              <label className="block pb-2 font-bold text-xl text-white pt-5">Detail Pembayaran</label>
            </div>
            <div className="px-8 pt-3">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white text-start pl-2">Discount</label>
              <input type="text" id="first_name" name="disc" autoComplete="off" onChange={handleDisc} value={disc} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5" placeholder="0" required/> 
            </div>
            <div className="px-8">
              <label className="block pb-2 font-bold text-xl text-white pt-5 text-start">Total : <h1 className="text-end text-3xl">Rp. {totalfix.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</h1></label>
            </div>
            <div className="px-8 pt-3">
                <button type="button" className="focus:outline-none text-white bg-purple-900 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full">
                  <FontAwesomeIcon icon={faMoneyBillWave}/> Bayar
                </button>
            </div>
          </div>  
        </div> 
      </div>
    </div> 
  );
}

export default App;
