import type { Lang } from '../i18n/utils';

export const readingTime = (body = '') =>
  Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200));

export const formatPubDate = (date: Date, lang: Lang) =>
  date.toLocaleDateString(lang === 'en' ? 'en-GB' : 'es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
