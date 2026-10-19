import { LessonLibrary } from "./LessonLibrary";

export const metadata = { title: "Lesson library" };

export default function LessonsPage() {
  return (
    <>
      <p className="lbl">Lesson library</p>
      <h1 className="cap h-m" style={{ marginBottom: 28 }}>
        Every minute,
        <br />
        scripted.
      </h1>
      <LessonLibrary />
    </>
  );
}
