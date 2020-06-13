import { IChapter, getChaptersData } from "../models/youtube-chapters-model.ts"

let chapters = getChaptersData();

// Get all chapters or a specifically chapter
const getChapters = (
    { params, response }: {
        params: { id: string };
        response: any;
    },
) => {
    response.status = 200;
    response.body = chapters;
}


const searchChapter = (
    id: string,
    seconds: string
): (IChapter | undefined) =>
    chapters.filter((item) => item.timeInSeconds === parseInt(seconds))[0]

// Get chapter by id and timeInSeconds
const getChapter = (
    { params, response }: {
        params: {
            id: string;
            seconds: string;
        };
        response: any;
    },
) => {
    // Search item in array
    const chapter: IChapter | undefined = searchChapter(
        params.id,
        params.seconds
    )

    if (chapter) {
        response.status = 200;
        response.body = chapter;
    } else {
        response.status = 404;
        response.body = {
            message: `Chapter not found`
        }
    }
}

// Add chapter
const addChapter = async (
    { params, request, response }: {
        params: { id: string };
        request: any;
        response: any;
    },
) => {
    const body = await request.body();
    const newChapter: IChapter = body.value;

    // Search item in array
    const chapter: IChapter | undefined = searchChapter(
        params.id,
        newChapter.timeInSeconds.toString()
    )

    // Verify if the chapter doesn't exists in the database
    if (!chapter) {
        chapters.push(newChapter)
        response.status = 201;
        response.body = {
            message: `Successfully to insert chapter in array.`
        }
    } else {
        response.status = 200;
        response.body = {
            message: `Chapter already exists in database.`
        }
    }
}

// Update chapter
const updateChapter = async (
    { params, request, response }: {
        params: {
            id: string;
            seconds: string
        };
        request: any;
        response: any;
    },
) => {

    // Search item in array
    let chapter: IChapter | undefined = searchChapter(
        params.id,
        params.seconds
    );

    if (chapter) {
        const body = await request.body();
        const updatedChapter: { text?: string, time?: string } = body.value;

        // Spread Operator, join before info with new info
        chapter = { ...chapter, ...updatedChapter }

        for (let idx in chapters) {
            if (chapters[idx].timeInSeconds === parseInt(params.seconds)) {
                chapters[idx] = chapter;

                break;
            }
        }

        response.status = 200;
        response.body = {
            message: `Chapter updated!`
        }
    } else {
        response.status = 401;
        response.body = {
            message: `Chapter not found!`
        }
    }
}

// Delete chapter
const deleteChapter = async (
    { params, response }: {
        params: {
            id: string;
            seconds: string
        };
        response: any;
    },
) => {
    // Search item in array
    let chapter: IChapter | undefined = searchChapter(
        params.id,
        params.seconds
    );

    if (chapter) {
        chapters = chapters.filter((item) =>
            item.timeInSeconds !== parseInt(params.seconds)
        );

        response.status = 200;
        response.body = {
            message: `Chapter deleted!`
        }
    } else {
        response.status = 404;
        response.body = {
            message: `Chapter not found!`
        }
    }

}

export { getChapters, getChapter, addChapter, updateChapter, deleteChapter }