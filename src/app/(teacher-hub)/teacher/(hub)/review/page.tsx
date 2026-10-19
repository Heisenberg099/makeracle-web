import { ReviewQueue } from "./ReviewQueue";

export const metadata = { title: "Student work" };

export default function ReviewPage() {
  return (
    <>
      <p className="lbl">Student work</p>
      <h1 className="cap h-m" style={{ marginBottom: 12 }}>
        Nothing goes public
        <br />
        until you approve it.
      </h1>
      <p className="body" style={{ maxWidth: 620, marginBottom: 28 }}>
        Check each project and reflection. Approving publishes it to the student&apos;s portfolio — only if their parent has allowed a public
        portfolio. Otherwise it stays visible to the school only.
      </p>
      <ReviewQueue />
    </>
  );
}
