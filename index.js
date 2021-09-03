const ytdl = require('ytdl-core')
const yts = require('youtube-search-api');

const getAudioUrl = async(searchStr)=>{
    const data = await yts.GetListByKeyword(searchStr,[false]);
    let vidId = data['items'][0]['id'];
    const songInfo = await ytdl.getInfo(`https://www.youtube.com/watch?v=${vidId}`)
    for(let i in songInfo['formats']){
        if(songInfo['formats'][i].hasOwnProperty('mimeType')){
            if(songInfo['formats'][i].mimeType === 'audio/webm; codecs="opus"'){         
                return songInfo['formats'][i].audioBitrate, songInfo['formats'][i].url
            }
        }
    }
}

module.exports.ytml = getAudioUrl;