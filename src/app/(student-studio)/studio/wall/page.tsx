import { PageFrame } from "@/components/layout/PageFrame";
import { WallBoard } from "@/features/studio/class-wall/WallBoard";
import { studioDemo, wallDemo } from "@/lib/demo-data";

export const metadata = { title: "Class wall" };

export default function WallPage() {
  const p = studioDemo; // DEMO — the signed-in student and their class
  return (
    <PageFrame chips={[{ text: `Only your class sees this · every post is approved by ${p.teacher}` }]} title="Class wall" red={`Made by ${p.student.classLabel.replace("Class ", "")}.`}>
      <WallBoard demo={wallDemo} me={p.student.name} teacher={p.teacher} />
    </PageFrame>
  );
}
