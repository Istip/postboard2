import { create } from "zustand";
import { tables, ID } from "@/lib/appwrite";
import { Query } from "appwrite";

interface AppwriteResponse<T> {
  rows: T[];
  total: number;
}

interface AppwriteRow extends Record<string, unknown> {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
}

const convertToShopping = (row: AppwriteRow): Shopping => ({
  $id: row.$id,
  $createdAt: row.$createdAt,
  $updatedAt: row.$updatedAt,
  name: row.name as string,
  done: row.done as boolean,
  marked: row.marked as boolean,
  creator: row.creator as string,
  creatorId: row.creatorId as string,
  order: row.order as number,
  description: row.description as string | undefined,
});

interface ShoppingState {
  items: Shopping[];
  loading: boolean;
  error: string | null;
  totalCount: number;
  fetchItems: () => Promise<void>;
  fetchCount: () => Promise<void>;
  createItem: (
    data: Omit<Shopping, "$id" | "$createdAt" | "$updatedAt">
  ) => Promise<void>;
  updateItem: (id: string, data: Partial<Shopping>) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
  reorderItem: (id: string, order: number) => Promise<void>;
}

const databaseId = import.meta.env.VITE_APP_APPWRITE_DATABASE_ID;
const tableId = import.meta.env.VITE_APP_APPWRITE_SHOPPING_LIST_TABLE_ID;

export const getShoppingConfig = () => ({ databaseId, tableId });

export const useShoppingStore = create<ShoppingState>((set, get) => ({
  items: [],
  loading: false,
  error: null,
  totalCount: 0,

  fetchItems: async () => {
    set({ loading: true, error: null });
    try {
      const response = (await tables.listRows({
        databaseId,
        tableId,
      })) as AppwriteResponse<AppwriteRow>;
      // Convert AppwriteRow[] to Shopping[] safely using our helper
      set({
        items: response.rows.map(convertToShopping),
        loading: false,
      });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  fetchCount: async () => {
    try {
      const response = (await tables.listRows({
        databaseId,
        tableId,
        queries: [Query.limit(1)],
      })) as AppwriteResponse<AppwriteRow>;
      set({ totalCount: response.total || 0, error: null });
    } catch (error) {
      set({
        totalCount: 0,
        error: (error as Error).message,
      });
    }
  },

  createItem: async (data) => {
    set({ loading: true, error: null });
    try {
      const newItem = {
        ...data,
        $id: ID.unique(),
        $createdAt: new Date().toISOString(),
        $updatedAt: new Date().toISOString(),
      };

      const res = await tables.createRow({
        databaseId,
        tableId,
        rowId: newItem.$id,
        data: newItem,
      });

      // Convert Appwrite response to Shopping safely using our helper
      const item = convertToShopping(res as AppwriteRow);
      set({
        items: [item, ...get().items],
        totalCount: get().totalCount + 1,
        loading: false,
      });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  updateItem: async (id, data) => {
    set({ loading: true, error: null });
    try {
      await tables.updateRow({
        databaseId,
        tableId,
        rowId: id,
        data: { ...data, $updatedAt: new Date().toISOString() },
      });
      set({
        items: get().items.map((item) =>
          item.$id === id
            ? { ...item, ...data, $updatedAt: new Date().toISOString() }
            : item
        ),
        loading: false,
      });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  deleteItem: async (id) => {
    set({ loading: true, error: null });
    try {
      await tables.deleteRow({ databaseId, tableId, rowId: id });
      set({
        items: get().items.filter((item) => item.$id !== id),
        totalCount: Math.max(0, get().totalCount - 1),
        loading: false,
      });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  reorderItem: async (id, order) => {
    await get().updateItem(id, { order });
  },
}));
