import { Outlet, useNavigate } from "react-router-dom"
import { faCashRegister, faUserShield, faCode} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-gray-100">
      <div className="h-screen bg-white shadow-md">
        <div className="sidebar list-none w-52 cursor-pointer mt-4 ml-4 mb-4">
          <li className="p-3 pb-6 flex mr-4">
            <div className="bg-purple-500 w-14 text-center rounded-lg p-2">
              <FontAwesomeIcon className="text-yellow-300 text-xl pt-2" icon={faCode}/>
            </div>
            <div className="pl-4">
              <label className="font-bold text-xl text-gray-800">Belajar</label><br></br>
              <label className="text-gray-400">With React</label>
            </div>
          </li>
          <li className="p-3 mt-3 rounded-l-lg text-gray-500 hover:text-purple-500 hover:bg-purple-100 font-bold hover:border-r-4 hover:border-purple-500" onClick={() => { navigate('/') }}>
            <FontAwesomeIcon className="pr-3 text-xl" icon={faCashRegister}/><label className="pl-2 cursor-pointer">Kasir</label>
          </li>
          <li className="p-3 rounded-l-lg text-gray-500 hover:text-purple-500 hover:bg-purple-100 font-bold hover:border-r-4 hover:border-purple-500" onClick={() => { navigate('/admin') }}>
            <FontAwesomeIcon className="pr-3 text-xl" icon={faUserShield}/><label className="pl-1 cursor-pointer">Admin</label>
          </li>  
        </div>  
      </div>
      <div className="ml-8 mr-8 w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;