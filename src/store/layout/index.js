import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    showMessage: false
};

//Actions
export const showMessage = createAction('SHOW_MESSAGE');
export const hideMessage = createAction('HIDE_MESSAGE');

//Reducers
export default createReducer(INITIAL_STATE, {
    [showMessage.type]: (state) => ({ ...state, showMessage: true }),
    [hideMessage.type]: (state) => ({ ...state, showMessage: false })
});






// //Reducer
// export default (state = INITIAL_STATE, action) => {
//     switch (action.type) {

//         case showMessage.type:
//             return { ...state, showMessage: true };
//         case hideMessage.type:
//             return { ...state, showMessage: false }
//         default:
//             return state;
//     }
// };


// //Actions Types
// export const Types = {
//     SHOW_MESSAGE: 'SHOW_MESSAGE',
//     HIDE_MESSAGE: 'HIDE_MESSAGE'
// };


// //Action Creators
// export const Creators = {
//     showMessage: () => ({
//         type: Types.SHOW_MESSAGE
//     }),

//     hideMessage: () => ({
//         type: Types.HIDE_MESSAGE
//     })
// };

