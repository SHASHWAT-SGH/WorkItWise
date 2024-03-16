import API_BASE from "./apiBase";

CATEGORY_API_BASE = API_BASE + "/category";

const categoryApi = {
  GET_ALL_CATEGORIES_API: CATEGORY_API_BASE + "/v1/getallcategories",
};

export default categoryApi;
