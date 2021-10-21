import reducer from './index';

describe('Layout Reducer', () => {

    test('deve retornar um state inicializar', () => {
        expect(reducer(undefined, {})).toEqual({ showMessage: false });
    });

    test('deve retornar um state com a props showMessage = true', () => {
        expect(reducer(undefined, { type: 'SHOW_MESSAGE' })).toEqual({ showMessage: true });
    });

    test('deve retornar um state com a props showMessage = false', () => {
        expect(reducer({ showMessage: true }, { type: 'HIDE_MESSAGE' })).toEqual({ showMessage: false });
    });

});