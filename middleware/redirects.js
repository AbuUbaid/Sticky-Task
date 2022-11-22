export default function (req, res, next) {
  const redirects = [
    {
      from: "/industry",
      to: "/",
    },
    {
      from: "/solutions",
      to: "/",
    },
  ];
  const redirect = redirects.find((r) => r.from === req.url);
  if (redirect) {
    res.writeHead(301, { Location: redirect.to });
    res.end();
  } else {
    next();
  }
}
