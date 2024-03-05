import { mapMutations, mapState } from 'vuex';
import COLORS from '@/constants/colors.js';
import { getFromLocalStorage, parseData, setParsedToLocalStorage } from '@/utils';

export default {
    props: {
        currentRequest: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            COLORS,
            valid: false,
            startRequiredRule: [
                value => !!value || 'start point is required field!',
            ],
            endRequiredRule: [
                value => !!value || 'end point is required field!',
            ],
        }
    },
    computed: {
        ...mapState({
            cities: state => state.cities,
        }),
    },
    methods: {
        ...mapMutations({
            editStoreRequest: 'request/editStoreRequest'
        }),
        getFromLocalStorage,
        setParsedToLocalStorage,
        parseData,
    }
}
