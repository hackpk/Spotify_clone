export const initialState = {
    user: null,
    playlists: [],
    discover_weekly: null,
    playing: false,
    // remove after finished developing
    item: null,
    categories : null,
     token: 'BQAGgAdTUWSk1rFxN9dL3yIUKcwBgZw82L3wVVt6LBe2MLXeI8jf2KmFSFb3BRjq-tGkmhkXqLcTT_mAkWbrg7qGoFlmIGgps99yiA7ZjwJSktgpkCh78jSFtO1mvrHiHEZxhyHiUyfgn6c23Ok_nDOTuAm4AnrHw3P0T_VuME068bjWsCCz',
};


const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories:action.categories,
            }
        default:
            return state;

    }
}

export default reducer;
