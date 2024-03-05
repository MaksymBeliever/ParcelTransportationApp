import { mapMutations, mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            requests: state => state.request.requests,
        }),
    },
    methods: {
        ...mapMutations({
            setRequests: 'request/setRequests',
        }),
        createRequest(request) {
            this.setRequests(request);
        },
    },
}
