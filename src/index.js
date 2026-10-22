export default {
  fetch(request, env) {
    return new Response(env.DUMMY_SECRET ?? "missing");
  },
};
