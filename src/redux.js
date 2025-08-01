import { createSlice } from '@reduxjs/toolkit';




// 1) 슬라이더 만들기 (상태 + 리듀서, 액션 한 번에)
const counterSlice = createSlice({
    name: 'counter',         // 슬라이스 이름
    initialState: { value: 0 },  // 초기 상태
    reducers: {
        increment: (state) => { state.value += 1; },   // +1 액션
        decrement: (state) => { state.value -= 1; },   // -1 액션
    }
});

// 액션 내보내기
export const { increment, decrement } = counterSlice.actions;
// 리듀서 내보내기 (스토어에 연결할 거예요!)
export default counterSlice.reducer;

