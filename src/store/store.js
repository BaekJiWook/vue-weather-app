import { createStore } from 'vuex';
// vuex라이브러리 불러오기

// store 만들기
export default createStore({
    state: {
        // 초기값
        count : 0,
    },
    mutations: {
        // 데이터 변경
        addCount(state, payload) {
            state.count += 1 + payload;
        }
    }
})