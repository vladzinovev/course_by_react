class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    // ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
    _apiKey = 'apikey=c5d6fc8b83116d92ed468ce36bac6c62';

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }
    //получить всех персонажей
    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }
    //получение одного персонажа
    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res);
    }

    _transformCharacter = (res) => {
        return {
            name: res.name,
            description: res.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: res.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: res.urls[0].url,
            wiki: res.urls[1].url
        }
    }
}

export default MarvelService;