import { useRoutes } from "react-router-dom";
import Admin from "./Admin";
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