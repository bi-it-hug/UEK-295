const config = {
    port: 3000,
    dbcs: 'mongodb://root:example@localhost:27017/Project?authSource=admin',
    session: {
        secret: 'secretShit',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 86400000 // 24h
        }
    }
}

export default config
