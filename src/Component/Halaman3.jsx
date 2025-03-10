function Halaman3() {
  return (
    <div className="section" id="halaman3">
      <div className="container mx-auto max-w-[1200px] overflow-hidden mt-15">
        <div>
          <h2 className="text-3xl font-bold justify-center mx-auto mb-4">
            PERFORMANCE
          </h2>
        </div>
        <div className="flex items-start justify-between">
          <div className="text-center w-full max-w-[500] mb-[50px]">
            <div className="flex mx-auto justify-between">
              <img
                src="/image/fotovolii.png"
                alt=""
                className="rounded-full border-black border-4"
              />
             
              <div className="flex mx-auto  items-center ml-40">
              <table className="w-[600px] h-[300px]">
                <thead className="bg-slate-400  ">
                  <tr>
                    <th className="p-2 border-1 tracking-wide ">Tahun</th>
                    <th className="p-2 border-1 tracking-wide pr-30">
                      Jenis Prestasi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-100 border-1 border-black">
                  <tr>
                    <td className="p-2 border-1 text-center">2013</td>
                    <td className="p-2 border-1 pr-30">
                      Juara 3 Pencak Silat GSB IV Kab.Tanah Datar
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-1 text-center">2019</td>
                    <td className="p-2 border-1 pr-30">
                      Juara 3 Voli Bupati Cup Kab.Tanah Datar
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-1 text-center">2020</td>
                    <td className="p-2 border-1 pr-30">
                      Juara 1 Voli SMA se-Sumatera Barat
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-1  text-center">2022</td>
                    <td className="p-2 border-1 pr-30">
                      Semifinalis Voli Bupati Cup Kab.Tanah Datar
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Halaman3;
