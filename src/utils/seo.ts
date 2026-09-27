// Production origin. Canonical, og:url and twitter:url are built from this plus the page path.
export const SITE_URL = 'https://jovitascleaningservice.com';

interface PageMeta {
  title: string;
  description: string;
  // Route path, e.g. '/' or '/privacy'
  path: string;
}

const setAttr = (selector: string, attr: string, value: string) => {
  document.querySelector(selector)?.setAttribute(attr, value);
};

// Updates the per-page tags that index.html ships with default (home page) values.
export const setPageMeta = ({ title, description, path }: PageMeta) => {
  const url = `${SITE_URL}${path}`;

  document.title = title;
  setAttr('meta[name="description"]', 'content', description);
  setAttr('link[rel="canonical"]', 'href', url);

  setAttr('meta[property="og:url"]', 'content', url);
  setAttr('meta[property="og:title"]', 'content', title);
  setAttr('meta[property="og:description"]', 'content', description);

  setAttr('meta[name="twitter:url"]', 'content', url);
  setAttr('meta[name="twitter:title"]', 'content', title);
  setAttr('meta[name="twitter:description"]', 'content', description);
};
