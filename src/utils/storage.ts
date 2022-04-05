import * as SecureStore from "expo-secure-store";

const storage = {
  storeObject: async (key: string, value: any): Promise<void> => {
    const jsonValue = JSON.stringify(value);
    await storage.storeValue(key, jsonValue);
  },

  getObject: async (key: string): Promise<any> => {
    const jsonValue = await storage.getValue(key);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  },

  storeValue: async (key: string, value: string): Promise<void> => {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error(err);
    }
  },

  getValue: async (key: string): Promise<string | null> => {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (err) {
      console.error(err);
      return null;
    }
  },

  deleteKey: async (key: string): Promise<void> => {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (err) {
      console.error(err);
    }
  },
};

export { storage };
