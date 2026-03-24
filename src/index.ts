import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // Redirect www → apex domain
    if (url.hostname === "www.mitlaender.dev") {
      url.hostname = "mitlaender.dev";
      return Response.redirect(url.toString(), 301);
    }

    // Serve Hugo assets from ./public
    return getAssetFromKV({ request });
  },
};