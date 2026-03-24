export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Redirect www → apex
  if (url.hostname === "dev-personalweb.lutzmitlaender.workers.dev") {
    url.hostname = "google.de";
    return Response.redirect(url.toString(), 301);
  }

  // Serve static assets from Hugo ./public folder
  return context.next();
}