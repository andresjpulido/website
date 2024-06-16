import siteData from "../data/siteData.json";
import { slugify } from "./utils";

export default function jsonLDGenerator({ type, post, url }) {
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.image.src}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "datePublished": "${post.date}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "Person",
      "name": "${siteData.title}",
      "url": "${import.meta.env.SITE}",
      "image":"${siteData.image.src}",
      "workLocation":"${siteData.workLocation}",
      "description": "${siteData.description}",
      "knowsAbout": "${siteData.knowsAbout}",
      "jobTitle": "${siteData.jobTitle}",
      "knowsLanguage": "${siteData.knowsLanguage}",
      "hasCredential": "${siteData.hasCredential}"
      }
    </script>`;
}
