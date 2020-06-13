interface IChapter {
    text: string;
    time: string;
    timeInSeconds: number;
    link: string;
}

let chapters: Array<IChapter> = [{
    "text": "Apresentação dos participantes",
    "time": "0:00",
    "timeInSeconds": 0,
    "link": "https://www.youtube.com/watch?v=1kj&t=0"
}, {
    "text": "Apresentação dos participantes 2",
    "time": "10:30",
    "timeInSeconds": 345,
    "link": "https://www.youtube.com/watch?v=2dd&t=1"
}, {
    "text": "Apresentação 3",
    "time": "2:22",
    "timeInSeconds": 221,
    "link": "https://www.youtube.com/watch?vsss=2dd&t=1"
}, {
    "text": "Apresentação 4",
    "time": "2:24",
    "timeInSeconds": 224,
    "link": "https://www.youtube.com/watch?vsss=2dd&t=1"
}]

const getChaptersData = () => {
    return chapters;
};

export { IChapter, getChaptersData };