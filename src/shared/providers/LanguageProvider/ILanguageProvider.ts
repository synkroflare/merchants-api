export interface ILanguageProvider {
  translate(key: string, values?: Record<string, unknown>): string
}
