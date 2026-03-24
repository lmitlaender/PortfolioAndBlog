export default {
  async fetch(request: Request, env: { ASSETS: Fetcher }): Promise<Response> {
    const url = new URL(request.url);

    // redirect www -> apex
    if (url.hostname === "www.mitlaender.dev") {
      url.hostname = "mitlaender.dev";
      return Response.redirect(url.toString(), 301);
    }

    // serve Hugo assets from Pages
    return env.ASSETS.fetch(request);
  },
};