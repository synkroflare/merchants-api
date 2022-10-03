declare namespace NodeJS {
  interface ProcessEnv {
    HTTP_PORT: string
    DB_HOST: string
    DB_USER: string
    DB_PASSWORD: string
    DB_NAME: string
  }
}
