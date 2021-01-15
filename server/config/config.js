/**
 * ========================== 
 *  Puerto
 * ==========================
 **/
process.env.PORT = process.env.PORT || 3000;

/**
 * ========================== 
 *  Entorno
 * ==========================
 **/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * ========================== 
 *  Bases de datos
 * ==========================
 **/
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://gaston:bK7eye1FhxWEGbmy@cluster0.vdajt.mongodb.net/cafe?retryWrites=true&w=majority';
}

process.env.URLDB = urlDB;