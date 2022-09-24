// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import requestIp from "request-ip";

export default function handler(req, res) {
  const clientIp = requestIp.getClientIp(req);
  res.status(200).json({
    ip: clientIp,
  });
}
