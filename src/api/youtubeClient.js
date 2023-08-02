import axios from "axios";

export default class YoutubeClient{
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: {key: process.env.REACT_APP_YOUTUBE_API_KEY}
        });

    }
    async search(params) {
        return this.httpClient.get('search',params);
    }
    async videos(params) {
        return this.httpClient.get('videos',params);
    }

    async channels(params) {
        return this.httpClient.get('channels',params);
    }
    /*

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
            }
    async #searchByword(keyword) {
        return this.httpClient
            .get('search',{params:{
                part: 'snippet',
                maxResults:25,
                type: 'video',
                q: keyword
                }})
            .then((res) => res.data.items)
            .then((items) => items.map((item) => ({...item, id: item.id.videoId})))

    }
    async #mostPopular(){
        return this.httpClient
            .get('videos',{params:{
                    part: 'snippet',
                    chart: 'mostPopular',
                    maxResults:25

                },
            })
            .then((res)=>res.data.items);

    }*/
}