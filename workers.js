export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.hostname === 'vvacanwei.xyz') {
      return Response.redirect('https://www.vvacanwei.xyz' + url.pathname + url.search, 301);
    }

    return fetch(request);
  }
};
