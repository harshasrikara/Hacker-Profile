import { getSession } from "next-auth/client";

export default async function handler(req, res) {
    if (req.method !== "POST") {
      res.status(400).json({ message: "Invalid API method specified" });
      return;
    }
  
    const session = await getSession({ req });
  
    if (!session) {
      res.status(401).json({ message: "unauthorized" });
      return;
    }
}