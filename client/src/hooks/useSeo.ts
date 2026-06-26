import { useEffect } from "react";
import { SITE_URL } from "@/lib/site";

interface SeoOptions {
  title: string;
  description: string;
  path: string; // e.g. "/privacy"
  image?: string;
  jsonLd?: object | object[];
}

function setJsonLd(data: object | object[] | undefined) {
  let el = document.head.querySelector<HTMLScriptElement>('script[data-seo-jsonld="true"]');
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-seo-jsonld", "true");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, path, image, jsonLd }: SeoOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const img = image ?? `${SITE_URL}/assets/cta-exterior-5qhmmdsgaq6lb3sfxvyqtl.webp`;
    document.title = title;
    setMeta("name", "description", description);
    setCanonical(url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);
    setJsonLd(jsonLd);
    window.scrollTo(0, 0);
    return () => setJsonLd(undefined);
  }, [title, description, path, image, jsonLd]);
}
