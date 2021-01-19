import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6e/Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg",
          title: "A trip into the mountains",
          description: "It was a really nice trip!",
        },
        {
          id: "m2",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mavericks_Surf_Contest_2010b.jpg",
          title: "Surfing the sea side",
          description: "Feeling the cool breeze",
        },
        {
          id: "m3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
          title: "Good eating",
          description: "Really tasty!",
        },
      ],
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
