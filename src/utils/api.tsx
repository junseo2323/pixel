
import axios from 'axios';

export const fetchYoutubeScribe = async(userid:string) => {
    let chanel_key;

    if (userid==='jinu')  chanel_key = 'UCJGww2K__Q3y-MtDi0XWH2w';
    else if (userid==='cham2')  chanel_key = 'UCCA8UWUW80iHqK9ymdjRwPg';
    else  chanel_key = 'UCJGww2K__Q3y-MtDi0XWH2w';

    try {
        const Response = await axios.get('https://www.googleapis.com/youtube/v3/channels',{
            params: {
                part: 'statistics',
                id: chanel_key,
                key: process.env.NEXT_PUBLIC_APP_YOUTUBE_API_KEY
            }
        })

        return Response.data;

    } catch(err) {
        console.error('오류 : ', err);
        throw err;
    }
}

export const fetchYoutubeVideo = async(userid:string) => {
    let chanel_key;

    if (userid==='jinu')  chanel_key = 'UCJGww2K__Q3y-MtDi0XWH2w';
    else if (userid==='cham2')  chanel_key = 'UCCA8UWUW80iHqK9ymdjRwPg';
    else  chanel_key = 'UCJGww2K__Q3y-MtDi0XWH2w';

    try {
        const fetchdata = await axios.get('https://www.googleapis.com/youtube/v3/activities',{
            params: {
                part: 'contentDetails',
                channelId: chanel_key,
                key: process.env.NEXT_PUBLIC_APP_YOUTUBE_API_KEY,
                maxResults: 20
            }
        })

        const newVideo: any[] = fetchdata.data.items;
        const mappedVideos = newVideo.map((i: any) => { 
            if (i.contentDetails.upload===undefined) return 0;
            else return i.contentDetails.upload.videoId;
        });
        const resultVideos = (mappedVideos.filter(item => item !== 0)).slice(0,5);
        
        const fetchVideos = await axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params: {
                part: 'snippet',
                id: resultVideos[0]+','+resultVideos[1]+','+resultVideos[2]+','+resultVideos[3]+','+resultVideos[4],
                key: process.env.NEXT_PUBLIC_APP_YOUTUBE_API_KEY
            }
        })

        const resVideo: any[] = fetchVideos.data.items;
        const mappedres = resVideo.map((i: any) => { 
            return {title: i.snippet.title, date: i.snippet.publishedAt, thumbnail: i.snippet.thumbnails.maxres.url, url: i.id}
        });

        return mappedres;

    } catch(err) {
        console.error('오류 : ', err);
        throw err;
    }

}