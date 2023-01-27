import { useRoutes } from "react-router-dom";
import Admin from "./Admin";
import DataJurusan from "./DataJurusan";
import ItemDetails from "./ItemDetails";
import Kasir from "./Kasir";
import Layout from "./Layout";

const Bootstrap = () => {
  let routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Kasir />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/item-details/:id",
          element: <ItemDetails />
        },
        {
          path: "/data-jurusan",
          element: <DataJurusan />
        }
      ]
    },
  ];

  let element = useRoutes(routes);

  return (
    <div>
      {element}
    </div>
  )
}

export default Bootstrap;