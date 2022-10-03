import { init, t } from 'i18next'
import en from '../../../../locale/en-US.json'
import { ILanguageProvider } from '../../ILanguageProvider'

export class I18NextLanguageProvider implements ILanguageProvider {
  constructor() {
    init({
      supportedLngs: ['en'],
      lng: 'en',
      resources: {
        en: {
          translation: en,
        },
      },
    })
  }

  translate(key: string, values?: Record<string, unknown>): string {
    const translated = t(key, values)

    return translated
  }
}
