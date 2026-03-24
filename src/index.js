export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect www → apex domain
    if (url.hostname === "www.mitlaender.dev") {
      url.hostname = "mitlaender.dev";
      return Response.redirect(url.toString(), 301);
    }

    // Serve Hugo static assets
    return env.ASSETS.fetch(request);
  },
};