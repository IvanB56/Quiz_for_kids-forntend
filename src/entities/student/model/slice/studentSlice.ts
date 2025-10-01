import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Student, StudentSchema} from "../types/studentSchema";
import {fetchStudentsData} from "../services/fetchStudentsData/fetchStudentsData";

const initialState: StudentSchema = {
	isLoading: false,
	error: undefined,
	data: undefined,
	currentStudent: undefined
}

export const studentSlice = createSlice({
	name: 'students',
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<Student[]>) => {
			state.data = action.payload
		},
		setCurrentStudent: (state, action) => {
			state.currentStudent = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchStudentsData.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchStudentsData.fulfilled, (state, action: PayloadAction<Student[]>) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchStudentsData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload
			})
	}
});

export const { actions: studentActions } = studentSlice;
export const { reducer: studentReducer } = studentSlice;