import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface UserState {
	id: number,
	email: string,
	phone: string,
	name: string,
	userable: {
		surname: string,
		patronymic: string,
		city: string,
		birthdate: string,
		type: 'Sponsor' | 'Student'
	}
}

const initialState = {
	id: 0,
	email: '',
	phone: '',
	name: '',
	userable: {
		surname: '',
		patronymic: '',
		city: '',
		birthdate: '',
		type: 'Sponsor'
	}
} satisfies UserState as UserState;

const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState>) => {
			state = action.payload;
		}
	},
})

export const { setUser } = UserSlice.actions;

export default UserSlice.reducer;