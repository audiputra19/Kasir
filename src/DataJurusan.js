import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

const DataJurusan = () => {
  const [dataJurusan, setDataJurusan] = useState([]);
  const getDataFromBackend = async () => {
    const resp = await axios({
      url: "https://api-frontend.kemdikbud.go.id/v2/detail_pt_prodi/ODYxRDlBNjQtOTQ5NS00Njg4LUE1MjgtODk5RkNDQTFDMUU4",
      method: "GET"
    });
    setDataJurusan(resp.data);
  }

  useEffect(() => {
    getDataFromBackend();
  }, []);

  useEffect(() => {
    console.log("Data Jurusan berubah", dataJurusan);
  }, [dataJurusan]);

  return (
    <div className="mt-10">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs border-b text-gray-700 uppercase">
          <tr>
            <th scope="col" className="py-3 px-6">
              Nama Lembaga
            </th>
            <th scope="col" className="py-3 px-6">
              Kode Prodi
            </th>
            <th scope="col" className="py-3 px-6">
              Jenjang
            </th>
            <th scope="col" className="py-3 px-6">
              Akreditasi
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            dataJurusan.map((item) => {
              return (
                <tr className="bg-white border-b" key={item.id}>
                  <td className="py-4 px-6">
                    {item.nm_lemb}
                  </td>
                  <td className="py-4 px-10">
                    {item.kode_prodi}
                  </td>
                  <td className="py-4 px-6">
                    {item.jenjang}
                  </td>
                  <td className="py-4 px-10">
                    {item.akreditas ?? "-"}
                  </td>
                  <td className="py-4 px-10">
                    <button>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default DataJurusan;