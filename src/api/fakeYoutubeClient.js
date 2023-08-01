import axios from "axios";

export default class FakeYoutubeClient {
    /*constructor() {
    }*/
    /*async search(keyword) {
        return keyword ? this.#searchByword(keyword) : this.#mostPopular();
    }*/
    async search(){
        return axios.get(`/videos/search.json`);
    }
    /*
    async #searchByword(keyword) {
        return axios
            .get(`/videos/search.json`)
            .then((res) => res.data.items)
            .then((items) => items.map((item) => ({...item, id: item.id.videoId})))

    }
    async #mostPopular(keyword){
        return axios
            .get(`/videos/popular.json`)
            .then((res)=>res.data.items);

    }*/
    async videos(){
        return axios.get('/videos/popular.json');
    }
}