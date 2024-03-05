import { mapState } from 'vuex';
import COLORS from '@/constants/colors.js';

export default {
    data() {
        return {
            COLORS,
        }
    },
    computed: {
        ...mapState({
            requests: state => state.request.requests,
        }),
    },
}
