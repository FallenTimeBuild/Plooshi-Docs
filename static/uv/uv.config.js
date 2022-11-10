importScripts("/script/ploosh.js");

self.__uv$config = {
    prefix: '/doc/',
    bare: '/api/',
    encodeUrl: self.PlooshiDocs.codec.ploosh.encode,
    decodeUrl: self.PlooshiDocs.codec.ploosh.encode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
