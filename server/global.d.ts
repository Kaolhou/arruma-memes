declare global{
    namespace Express{
        interface Request{
            sla?:string
        }
    }
    namespace NodeJS{
        interface ProcessEnv{
            DATABASE_URL:string
        }
    }
}
export {}