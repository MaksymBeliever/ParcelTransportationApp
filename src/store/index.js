import { createStore } from 'vuex';
import { requestModule } from '@/store/requestModule.js';

export default createStore({
    state: {
        modalVisible: false,
        cities: [
            { name: 'Kyiv' },
            { name: 'Kharkiv' },
            { name: 'Odesa' },
            { name: 'Dnipro' },
            { name: 'Donetsk' },
            { name: 'Lviv' },
            { name: 'Zaporizhzhya' },
            { name: 'Kryvyi Rih' },
            { name: 'Sevastopol' },
            { name: 'Mykolaiv' },
            { name: 'Mariupol' },
            { name: 'Melitopol' },
            { name: 'Luhansk' },
            { name: 'Vinnytsia' },
            { name: 'Kherson' },
            { name: 'Chernihiv' },
            { name: 'Sumy' },
            { name: 'Poltava' },
            { name: 'Zhytomyr' },
            { name: 'Chernivtsi' },
            { name: 'Cherkasy' },
            { name: 'Khmelnytskyi' },
            { name: 'Rivne' },
            { name: 'Ivano-Frankivsk' },
            { name: 'Ternopil' },
            { name: 'Oleksandriia' },
            { name: 'Uzhhorod' },
            { name: 'Lutsk' },
        ],
        categories: [
            { name: 'gadgets' },
            { name: 'drinks' },
            { name: 'clothes' },
            { name: 'medicines' },
            { name: 'other' }
        ],
        sortOptions: [
            { value: 'creationDate', name: 'date of creation' },
            { value: 'date', name: 'date of sending' },
        ],
    },
    getters: {

    },
    mutations: {
        setModalVisible(state, newValue) {
            state.modalVisible = newValue;
        }
    },
    actions: {

    },
    modules: {
        request: requestModule,
    }
});
