import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Builds an absolute path for `path` (e.g. "/blog") in the given language. */
export function localePath(lang: Lang, path: string) {
  const clean = path === '/' ? '' : path;
  return lang === defaultLang ? clean || '/' : `/${lang}${clean}`;
}

/** Same page as `pathname`, but in `lang`. Used by the language picker. */
export function switchLocalePath(pathname: string, lang: Lang) {
  const trimmed = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const withoutLocale = trimmed.replace(/^\/en(\/|$)/, '/') || '/';
  return localePath(lang, withoutLocale);
}
