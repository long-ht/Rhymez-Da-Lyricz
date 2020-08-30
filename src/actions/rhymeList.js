import axios from 'axios';

import {
    RHYME_UPDATE
} from "./types";
export const updateRhyme = (formData) => async dispatch => {
    try {
        let res;
        for (const element of formData) {
            console.log(element);
            res = await axios.get('http://localhost:5000/word', JSON.stringify(element));
            console.log(res);
        };
        // dispatch({
        //     type: RHYME_UPDATE,
        //     payload: res.data
        // });
        // dispatch(setAlert('Rhyme Found', 'success'));
    } catch (error) {
        console.log(error);
    }
}
