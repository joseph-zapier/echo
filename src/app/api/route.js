function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export async function POST(request) {
  const { status, content, headers, delay } = await request.json();

  if (delay) await sleep(delay);

  return new Response(content, { status, headers });
}
