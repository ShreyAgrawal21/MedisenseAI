interface Test {
  name: string;
  value: string | number;
  unit?: string;
  reference_range?: string;
  status?: string;
}

interface Props {
  tests: Test[];
}

export default function TestsTable({ tests }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <h2 className="text-2xl font-bold mb-5">
        Laboratory Results
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-gray-100">

              <th className="text-left p-3">
                Test
              </th>

              <th className="text-left p-3">
                Value
              </th>

              <th className="text-left p-3">
                Reference Range
              </th>

              <th className="text-center p-3">
                Status
              </th>

            </tr>
          </thead>

          <tbody>

            {tests.map((test, index) => (

              <tr
                key={index}
                className="border-t"
              >

                <td className="p-3">
                  {test.name}
                </td>

                <td className="p-3">
                  {test.value} {test.unit}
                </td>

                <td className="p-3">
                  {test.reference_range}
                </td>

                <td className="p-3 text-center">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      test.status === "Normal"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {test.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}