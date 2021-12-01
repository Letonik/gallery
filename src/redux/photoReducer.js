
let initialState = {
    photographers: [
        {
            id: 1,
            name: 'Kaley Cuoco',
            ava: 'Kaley',
            profession: 'photographer',
            info: 'I am a love-story and portrait photographer based in New York.',
            gallery: [
                {
                    id: 1,
                    photo: 'a',
                },
                {
                    id: 2,
                    photo: 'b',
                },
                {
                    id: 3,
                    photo: 'c',
                },
                {
                    id: 4,
                    photo: 'd',
                },
                {
                    id: 5,
                    photo: 'e',
                },
                {
                    id: 6,
                    photo: 'f',
                },
                {
                    id: 7,
                    photo: 'g',
                },
                {
                    id: 8,
                    photo: 'h',
                },
            ]
        },
        {
            id: 2,
            name: 'Lisa Kudrow',
            ava: 'Lisa',
            profession: 'photographer',
            info: 'I am a love-story and portrait photographer based in New York.',
            gallery: [
                {
                    id: 1,
                    photo: 'i',
                },
                {
                    id: 2,
                    photo: 'j',
                },
                {
                    id: 3,
                    photo: 'k',
                },
                {
                    id: 4,
                    photo: 'l',
                },
                {
                    id: 5,
                    photo: 'm',
                },
                {
                    id: 6,
                    photo: 'n',
                },
                {
                    id: 7,
                    photo: 'o',
                },
                {
                    id: 8,
                    photo: 'p',
                },
            ]
        },
        {
            id: 3,
            name: 'Alyson Hannigan',
            ava: 'Alyson',
            profession: 'photographer',
            info: 'I am a love-story and portrait photographer based in New York.',
            gallery: [
                {
                    id: 1,
                    photo: 'q',
                },
                {
                    id: 2,
                    photo: 'r',
                },
                {
                    id: 3,
                    photo: 's',
                },
                {
                    id: 4,
                    photo: 't',
                },
                {
                    id: 5,
                    photo: 'u',
                },
                {
                    id: 6,
                    photo: 'v',
                },
                {
                    id: 7,
                    photo: 'w',
                },
                {
                    id: 8,
                    photo: 'x',
                },
            ]
        },
        {
            id: 4,
            name: 'Sarah Chalke',
            ava: 'Sarah',
            profession: 'photographer',
            info: 'I am a love-story and portrait photographer based in New York.',
            gallery: [
                {
                    id: 1,
                    photo: 'y',
                },
                {
                    id: 2,
                    photo: 'z',
                },
                {
                    id: 3,
                    photo: 'aa',
                },
                {
                    id: 4,
                    photo: 'bb',
                },
                {
                    id: 5,
                    photo: 'cc',
                },
                {
                    id: 6,
                    photo: 'dd',
                },
                {
                    id: 7,
                    photo: 'ee',
                },
                {
                    id: 8,
                    photo: 'ff',
                },
            ]
        },
    ]
};

const photoReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}

export default photoReducer;