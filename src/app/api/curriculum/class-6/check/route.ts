import { check, checkLetters, type CheckRequest } from "@/curriculum/class-6/server/check-answer";

/** POST /api/curriculum/class-6/check — returns { correct } and never the answer. */
export async function POST(request: Request) {
  let body: CheckRequest;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if ((body as { kind: string }).kind === "ct9-letters") {
    const value = (body as { value?: unknown }).value;
    return Response.json(checkLetters(Array.isArray(value) ? value.slice(0, 10) : []));
  }
  const correct = check(body);
  if (correct === null) return Response.json({ error: "Unknown item" }, { status: 404 });
  return Response.json({ correct });
}
