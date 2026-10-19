import { MarkingTable } from "./MarkingTable";

export const metadata = { title: "Rubrics & marking" };

export default function MarkingPage() {
  return (
    <>
      <p className="lbl">Rubrics &amp; marking</p>
      <h1 className="cap h-m" style={{ marginBottom: 12 }}>
        Mark a whole class
        <br />
        in minutes.
      </h1>
      <p className="body" style={{ maxWidth: 620, marginBottom: 28 }}>
        Four criteria, four levels each: 1 = beginning, 2 = developing, 3 = secure, 4 = beyond. Set a level for everyone, then adjust the few
        who differ. Export to CSV or print to PDF for school records.
      </p>
      <MarkingTable />
    </>
  );
}
