import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Smells Like Teen Spirit', duration: '4:05'},
        {title: 'Down By the River', duration: '2:30'},
        {title: 'Cortez the Killer', duration: '3:15'},
        {title: 'Stray Cat Strut', duration: '3:15'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});