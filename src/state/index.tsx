import { atom } from 'jotai';

const enum ETheme {
  dark = 'dark',
  light = 'light',
}

const themeAtom = atom<ETheme>(ETheme.dark);

const borderAtom = atom<'with' | 'without'>('without');

const siteLanguageAtom = atom<'pt' | 'en'>('en');

export { themeAtom, ETheme, siteLanguageAtom, borderAtom };
