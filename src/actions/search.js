import {SEARCH_ITEM} from './types';

export const searchItem = (searchText) => (dispatch) => {
    dispatch({
        type: SEARCH_ITEM,
        payload: searchText
    })
}