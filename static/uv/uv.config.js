if (typeof PlooshiDocs == "undefined") PlooshiDocs = {};
PlooshiDocs["codec"] = {
    ploosh: {
        encode(str) {
            if (!str) return str;
            return encodeURIComponent(str.split("").map((char, ind) => String.fromCharCode(char.charCodeAt(0) ^ ind + 1)).join(''));
        },
        decode(str) {
            if (!str) return str;
            return decodeURIComponent(str).split("").map((char, ind) => String.fromCharCode(char.charCodeAt(0) ^ ind + 1)).join('');
        }
    }
}

self.__uv$config = {
    prefix: '/doc/',
    bare: '/api/',
    encodeUrl: PlooshiDocs.codec.ploosh.encode,
    decodeUrl: PlooshiDocs.codec.ploosh.encode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
