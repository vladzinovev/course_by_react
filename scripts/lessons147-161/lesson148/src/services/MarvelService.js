class MarvelService {

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }
    //получить всех персонажей
    getAllCharacters = () => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=c5d6fc8b83116d92ed468ce36bac6c62`);
    }

    
}

export default MarvelService;