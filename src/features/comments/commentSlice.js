import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import commentService from './commentService'; 

const initialState = {
    comments: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
};

// Create a new comment
export const createComment = createAsyncThunk('comments/create', async (commentData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await commentService.createComment(commentData, token);
    } catch (error) {
        const errorMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
        return thunkAPI.rejectWithValue({ errorMessage });
    }

});


// Get comments for a specific movie
export const getComment = createAsyncThunk('comments/get', async (movieData, thunkAPI) => {
    try {
        return await commentService.getComment(movieData);
    } catch (error) {
        const errorMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
        return thunkAPI.rejectWithValue({ errorMessage });
    }
    });

    // Delete a comment by ID
    export const deleteComment = createAsyncThunk('comments/delete', async (commentId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await commentService.deleteComment(commentId, token);
    } catch (error) {
        const errorMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
        return thunkAPI.rejectWithValue({ errorMessage });
    }
});

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(createComment.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createComment.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.comments.push(action.payload);
        })
        .addCase(createComment.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload.errorMessage;
        })
        .addCase(getComment.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getComment.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.comments = action.payload;
        })
        .addCase(getComment.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload.errorMessage;
        })
        .addCase(deleteComment.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteComment.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.comments = state.comments.filter((comment) => comment._id !== action.payload.id);
        })
        .addCase(deleteComment.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload.errorMessage;
        });
    },
});

export const { reset } = commentSlice.actions;
export default commentSlice.reducer;
