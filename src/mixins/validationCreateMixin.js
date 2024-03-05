import { mapMutations, mapState } from 'vuex';
import { useRouter } from 'vue-router';
import COLORS from '@/constants/colors.js';
import { getFromLocalStorage, parseData, setParsedToLocalStorage, saveToStorage } from '@/utils';

export default {
    props: {
        currentRequest: {
            type: Object,
        }
    },
    data() {
        return {
            COLORS,
            router: useRouter(),
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
            setRequests: 'request/setRequests'
        }),
        getFromLocalStorage,
        setParsedToLocalStorage,
        parseData,
        saveToStorage,
    }
}
