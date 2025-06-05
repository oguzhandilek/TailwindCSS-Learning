export default function Visibility() {
  return (
    <>
      <div className="p-4 space-y2.5">
        <h1 className="text-2xl">invisible</h1> <hr />
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="bg-cyan-400 text-white text-2xl font-bold flex justify-center rounded-2xl">
            01
          </div>
          <div className="invisible bg-cyan-400 text-white text-2xl font-bold flex justify-center rounded-2xl">
            02
          </div>
          <div className="bg-cyan-400 text-white text-2xl font-bold flex justify-center rounded-2xl">
            03
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2.5">
        <h1 className=" text-2xl">collapse</h1>
        <hr />
        <div>
          <table>
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Client</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#100</td>
                <td>Pendant Publishing</td>
                <td>$2,000.00</td>
              </tr>
              <tr className="collapse">
                <td>#101</td>
                <td>Kruger Industrial Smoothing</td>
                <td>$545.00</td>
              </tr>
              <tr>
                <td>#102</td>
                <td>J. Peterman</td>
                <td>$10,000.25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

         <div className="p-4 space-y2.5">
        <h1 className="text-2xl">Responsive visible and invisible</h1> <hr />
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="bg-cyan-400 text-white text-2xl font-bold flex justify-center rounded-2xl">
            01
          </div>
          <div className="visible md:invisible  bg-cyan-400 text-white text-2xl font-bold flex justify-center rounded-2xl">
            02
          </div>
          <div className="bg-cyan-400 text-white text-2xl font-bold flex justify-center rounded-2xl">
            03
          </div>
        </div>
      </div>
    </>
  );
}
