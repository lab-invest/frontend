export function loader() {
  return new Response(null, {
    status: 301,
    headers: {
      Location: "/action/search",
    },
  });
}
