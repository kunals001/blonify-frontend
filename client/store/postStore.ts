import { create } from "zustand";
import axios from "axios";
import { useAuthStore } from "./authStore";

const API_URL_3 = process.env.NEXT_PUBLIC_API_KEY_3;



axios.defaults.withCredentials = true;

type Post = {
  coverImg: string | File | null;
  title: string;
  slug: string | null;
  desc: string | null;
  content: string;
  category: string | null;
  isFeatured: boolean | null;
  altText: string | null;
  _id: string;
  createdAt?: string | number | null;
  updatedAt?: string | number | null;
  userId: string;
};

type PostState = {
  post: Post | null;
  posts: Post[];
  isLoading: boolean;
  error: string | null;
  totalPosts: number | null;
  lastMonthPosts: number | null;
  startIndex: number;
  limit: number;
  showMore: boolean;
  createPost: (data: Record<string, any>) => Promise<void>;
  getPosts: () => Promise<void>;
  getMorePosts: () => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
  clearPosts: () => void;
};


export const usePostStore = create<PostState>((set, get) => ({
  post: null,
  posts: [],
  isLoading: false,
  error: null,
  totalPosts: null,
  lastMonthPosts: null,
  startIndex: 0,
  limit: 10, 
  showMore: true,

  createPost: async (data) => {
  set({ isLoading: true, error: null });
  try {
    const response = await axios.post(`${API_URL_3}/create`, data);
    set({ post: response.data, isLoading: false });
  } catch (error: any) {
    const msg = error?.response?.data?.message || "Post creation failed";
    set({ error: msg, isLoading: false });
    throw new Error(msg);
  }
},

  getPosts: async () => {
    const { user } = useAuthStore.getState();
    if (!user?._id) {
      set({ error: "User not found" });
      return;
    }

    set({ isLoading: true, error: null, startIndex: 0 });

    try {
      const { limit } = get();

      const response = await axios.get(`${API_URL_3}/get-post`, {
        params: {
          userId: user._id,
          startIndex: 0,
          limit,
        },
      });

      const { posts, totalPosts, lastMonthPosts } = response.data;

      set({
        posts,
        totalPosts,
        lastMonthPosts,
        startIndex: posts.length,
        showMore: posts.length < totalPosts ? true : false,
        error: null,
        isLoading: false,
      });
    } catch (error: any) {
      const msg = error?.response?.data?.message || "Post fetch failed";
      set({ error: msg, isLoading: false });
      throw new Error(msg);
    }
  },

  getMorePosts: async () => {
    const { user } = useAuthStore.getState();
    if (!user?._id) {
      set({ error: "User not found" });
      return;
    }

    const { startIndex, limit, posts, totalPosts, isLoading, showMore } = get();

    if (isLoading || !showMore) return; // prevent multiple calls or no more posts

    set({ isLoading: true, error: null });

    try {
      const response = await axios.get(`${API_URL_3}/get-post`, {
        params: {
          userId: user._id,
          startIndex,
          limit,
        },
      });

      const { posts: newPosts } = response.data;

      set({
        posts: [...posts, ...newPosts],
        startIndex: startIndex + newPosts.length,
        showMore: startIndex + newPosts.length < (totalPosts ?? 0),
        isLoading: false,
      });
    } catch (error: any) {
      const msg = error?.response?.data?.message || "Post fetch failed";
      set({ error: msg, isLoading: false });
      throw new Error(msg);
    }
  },
  deletePost: async (postId: string) => {
    const { user } = useAuthStore.getState();
    if (!user?._id) {
      set({ error: "User not found" });
      return;
    }
    set({ isLoading: true, error: null });

    try {
      // Assuming your delete endpoint is like: /delete-post/:postId/:userId
      await axios.delete(`${API_URL_3}/delete-post/${postId}/${user._id}`);

      // Remove deleted post from state.posts
      const { posts } = get();
      const filteredPosts = posts.filter((post) => post._id !== postId);

      set({
        posts: filteredPosts,
        totalPosts: (get().totalPosts ?? 1) - 1,
        isLoading: false,
      });
    } catch (error: any) {
      const msg = error?.response?.data?.message || "Delete post failed";
      set({ error: msg, isLoading: false });
      throw new Error(msg);
    }
  },

  clearPosts: () => set({ posts: [], startIndex: 0, showMore: true, error: null }),
}));
