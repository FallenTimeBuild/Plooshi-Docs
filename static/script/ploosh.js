PlooshiDocs = {
    codec: {
        ploosh: {
            encode(str) {
                if (!str) return str;
                return encodeURIComponent(str.split("").map((char, ind) => String.fromCharCode(char.charCodeAt(0) ^ ind + 1)).join(''));
            },
            decode(str) {
                if (!str) return str;
                return decodeURIComponent(str).split("").map((char,ind) => String.fromCharCode(char.charCodeAt(0) ^ ind + 1)).join('');
            }
        }
    }
};

export { PlooshiDocs };
self.PlooshiDocs = PlooshiDocs;