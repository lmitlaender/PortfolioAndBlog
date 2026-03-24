export async function onRequest(context) {
  const response = await context.next(); // serve Hugo assets

  const allowedOrigins = [
    "https://mitlaender.dev",
    "https://www.mitlaender.dev",
  ];

  const origin = context.request.headers.get("Origin");
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "*");
  response.headers.set("Access-Control-Max-Age", "86400");

  return response;
}

export async function onRequestOptions(context) {
  const allowedOrigins = [
    "https://mitlaender.dev",
    "https://www.mitlaender.dev",
  ];

  const origin = context.request.headers.get("Origin");
  const headers = new Headers({
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Max-Age": "86400",
  });

  if (origin && allowedOrigins.includes(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
  }

  return new Response(null, { status: 204, headers });
}