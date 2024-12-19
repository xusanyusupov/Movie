
import { api } from './index';

export const movieApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovie: build.query({
      query: (params) => ({
        url: '/movie/popular',
        params,
      }),
      providesTags: ['Category'],
    }),
    getDetail: build.query({
      query: (id) => ({
        url: `/movie/${id}`,
      }),
      providesTags: ['Movie'],
    }),
    getDetailImages: build.query({
      query: (id) => ({
        url: `/movie/${id}/images`,
      }),
      providesTags: ['Movie'],
    }),
  }),
});

export const {
  useGetMovieQuery,
  useGetDetailQuery,
  useGetDetailImagesQuery,
} = movieApi;