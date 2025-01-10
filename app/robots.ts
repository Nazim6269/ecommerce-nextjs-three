import { baseUrl } from "@/secret";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      disallow: ["/cart"],
      userAgent: "*",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
