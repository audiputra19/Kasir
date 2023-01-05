import { Outlet, useNavigate } from "react-router-dom"

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row gap-5">
        <button className="p-2 border border-black rounded" onClick={() => { navigate('/') }}>Kasir</button>
        <button className="p-2 border border-black rounded" onClick={() => { navigate('/admin') }}>Admin</button>
      </div>
      <Outlet />
    </>
  )
}

export default Layout;