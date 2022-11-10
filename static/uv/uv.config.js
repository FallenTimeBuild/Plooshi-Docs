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
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
