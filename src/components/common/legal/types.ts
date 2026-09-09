export interface LegalBlock {
  // A paragraph of text, or a bulleted list of items.
  type: 'paragraph' | 'list';
  text?: string;
  items?: string[];
}

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalPageProps {
  title: string;
  // Human-readable date, e.g. "September 8, 2026".
  lastUpdated: string;
  // Short intro paragraph shown above the numbered sections.
  intro: string;
  sections: LegalSection[];
}
