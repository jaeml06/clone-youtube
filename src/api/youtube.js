
export default class Youtube{
    constructor(apiClient) {
       this.apiClient = apiClient;

    }
    /*
         constructor() {
       this.httpClient = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3',
            params: {key: process.env.REACT_APP_YOUTUBE_API_KEY},
       })
       }

    }
    * */
    async channelImageURL(id){
        return this.apiClient
            .channels({params: {part : 'snippet', id}})
            .then((res)=>res.data.items[0].snippet.thumbnails.default.url);

    }
    async relatedVideos(id){
        return this.apiClient.search({
        params:{
            part: 'snippet',
                maxResults:25,
                type: 'video',
                relatedToVideoId: id
        }
        })
            .then((res)=>res.data.items
                .map((item) => ({...item, id: item.id.videoId})));

    }

    async search(keyword) {
        return keyword ? this.#searchByword(keyword) : this.#mostPopular();
    }
    async #searchByword(keyword) {
        return this.apiClient
            .search({params:{
                    part: 'snippet',
                    maxResults:25,
                    type: 'video',
                    q: keyword
                }})
            .then((res) => res.data.items)
            .then((items) => items.map((item) => ({...item, id: item.id.videoId})))

    }
    async #mostPopular(){
        return this.apiClient
            .videos({params:{
                    part: 'snippet',
                    chart: 'mostPopular',
                    maxResults:25

                },
            })
            .then((res)=>res.data.items);

    }
    /*
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