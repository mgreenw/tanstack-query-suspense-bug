const wait = 3e3;

export async function GET(request: Request) {
  await new Promise((resolve) => setTimeout(resolve, wait));

  return Response.json({ status: "ok", wait });
}
