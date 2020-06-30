const API_ROOT = 'https://api.chucknorris.io';
const GIPHY = 'https://api.giphy.com/v1/gifs/random?api_key=tj2lxZdqna1E1fHmYPN2dsn49xwVU3NM&tag=chucknorris&rating=R';

export class ChuckNorrisRestController {
    constructor(sapper) {
        this.sapper = sapper;
    }

    static withSapper(sapper) {
        return new ChuckNorrisRestController(sapper);
    }

    async getCategories() {
        return this.getJSON(`${API_ROOT}/jokes/categories`);
    }

    async getRandom(count = 3) {
        return this._loadMultipleUniqueJokes(count, () => this.getJSON(`${API_ROOT}/jokes/random`));
    }

    async getRandomByCategory(category, count = 3) {
        return this._loadMultipleUniqueJokes(count, () =>
            this.getJSON(`${API_ROOT}/jokes/random?category=${category}`)
        );
    }

    async getGiphy() {
        const giphy = await this.getJSON(GIPHY);
        return giphy.data.images.preview_webp.url;
    }

    async getJSON(path, options) {
        if (!this.sapper) {
            return Promise.reject({
                status: 0,
                message: 'Sapper not defined'
            });
        }
        let resp = await this.sapper.fetch(path, options);
        if (resp.ok) {
            return await resp.json();
        }
        return Promise.reject({
            status: resp.status,
            message: 'General error'
        });
    }

    async _loadMultipleUniqueJokes(count, dataSource) {
        let jokes = [];
        let jokesPerCategory = count;

        return new Promise(async (resolve, reject) => {
            jokes = [];
            let maxRepeatedTries = 10;
            while (jokes.length !== jokesPerCategory && maxRepeatedTries-- !== 0) {
                let joke = await dataSource().catch(reject);
                if (!jokes.some((it) => it.value === joke.value)) {
                    jokes = [...jokes, joke];
                }
            }
            resolve(jokes);
        });
    }
}
