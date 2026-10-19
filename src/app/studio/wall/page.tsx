import { LabFrame } from "@/components/studio/LabFrame";
import { WallBoard } from "@/components/studio/wall/WallBoard";
import { studioDemo, wallDemo } from "@/lib/mock";

export const metadata = { title: "Class wall" };

export default function WallPage() {
  const p = studioDemo; // DEMO — the signed-in student and their class
  return (
    <LabFrame chips={[{ text: `Only your class sees this · every post is approved by ${p.teacher}` }]} title="Class wall" red={`Made by ${p.student.classLabel.replace("Class ", "")}.`}>
      <WallBoard demo={wallDemo} me={p.student.name} teacher={p.teacher} />
    </LabFrame>
  );
}
