import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexovyte.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/lexflow",
    "/solutions",
    "/industries",
    "/case-studies",
    "/resources",
    "/blog",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/disclaimer",
    "/thank-you",
    "/newsletter-confirm",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : route === "/lexflow" ? 0.9 : 0.7,
  }));
}
