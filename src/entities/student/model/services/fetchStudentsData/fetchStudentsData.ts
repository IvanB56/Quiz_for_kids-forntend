import {createAsyncThunk} from "@reduxjs/toolkit";
import {Student} from "../../types/studentSchema";
import {ThunkExtraArg} from "@lib/store";
import {studentActions} from "@/entities/student/model/slice/studentSlice";

export const fetchStudentsData = createAsyncThunk<Student[], void, { rejectValue: string, extra: ThunkExtraArg }>(
	'students/fetchStudentsData',
	async (_, {dispatch, rejectWithValue, extra}) => {
		try {
			const response = await extra.api.get<{ data: Student[] }>('/api/students');
			const {data: students} = response.data;

			dispatch(studentActions.setData(students));

			return students;
		} catch {
			return rejectWithValue('Не удалось получить список детей [get students]');
		}
	}
);