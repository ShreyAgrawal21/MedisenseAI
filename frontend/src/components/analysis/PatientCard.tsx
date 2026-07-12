interface Props {
  patient: string;
  reportType: string;
}

export default function PatientCard({
  patient,
  reportType,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-5">
        👤 Patient Information
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span className="text-slate-500">
            Patient
          </span>

          <span className="font-semibold">
            {patient}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Report
          </span>

          <span className="font-semibold">
            {reportType}
          </span>
        </div>

      </div>
    </div>
  );
}