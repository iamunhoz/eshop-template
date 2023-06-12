import { atom } from 'jotai';
import { ProductFilter } from '../api/mock-data';

const enum ETheme {
  dark = 'dark',
  light = 'light',
}

const themeAtom = atom<ETheme>(ETheme.dark);

const borderAtom = atom<'with' | 'without'>('without');

const siteLanguageAtom = atom<'pt' | 'en'>('en');

const productListFiltersAtom = atom<Partial<ProductFilter>>({});

export {
  themeAtom,
  ETheme,
  siteLanguageAtom,
  borderAtom,
  productListFiltersAtom,
};
