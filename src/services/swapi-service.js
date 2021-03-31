export default class SwapiService {
    _apiBase = `https://swapi.dev/api`;

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch: ${url}, recived ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);

        return res.results;
    }

    getPersone(id) {
        return this.getResource(`/people/${id}/`)
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);

        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`)
    }

    async getAllStarships() {
        const res = await this.getResource(`/starship/`);

        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starship/${id}/`)
    }
}

const swapiService = new SwapiService();

swapiService.getPersone(3).then((person) => {
    console.log(person.name);
});
