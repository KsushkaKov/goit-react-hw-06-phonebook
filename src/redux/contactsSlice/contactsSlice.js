import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {},
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт редюсерів
  reducers: {},
});

// Генератори екшенів
const { addTask, deleteTask, toggleCompleted } = contactsSlice.actions;
// Редюсер слайсу
const contactsReducer = contactsSlice.reducer;
