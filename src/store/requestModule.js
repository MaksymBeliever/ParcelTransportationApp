import { compareDesc } from 'date-fns';

export const requestModule = {
    state: () => ({
        requests: JSON.parse(localStorage.getItem('requests')) || [],
        selectedSort: 'creationDate',
    }),
    getters: {
        sortedRequests(state) {
            return [...state.requests].sort((requests1, requests2) => {
                return compareDesc(requests1[state.selectedSort], requests2[state.selectedSort]);
            })
        },
    },
    mutations: {
        setRequests(state, passedRequest) {
            state.requests = [...state.requests, passedRequest];
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        removeStoreRequest(state, request) {
            state.requests = state.requests.filter(req => req.id !== request.id);
        },
        editStoreRequest(state, passedRequest) {
            state.requests = [
                ...state.requests.filter(req => req.id === passedRequest.id),
                ...passedRequest
            ];
        }
    },
    actions: {

    },
    namespaced: true,
}
