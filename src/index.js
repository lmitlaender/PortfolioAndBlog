export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect www → apex domain
    if (url.hostname === "dev-personalweb.lutzmitlaender.workers.dev") {
      url.hostname = "google.de";
      return Response.redirect(url.toString(), 301);
    }

    // Serve Hugo static assets
    return env.ASSETS.fetch(request);
  },
};