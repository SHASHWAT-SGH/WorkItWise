import API_BASE from "./apiBase";

EXERCISE_INFO_API_BASE = API_BASE + "/exercise";

const exerciseApi = {
  GET_ALL_EXERCISE: EXERCISE_INFO_API_BASE + "/v1/getall",
  GET_EXERCISE_BASIC_DETAILS:
    EXERCISE_INFO_API_BASE + "/v1/get/exercise/basic/by/category",
  GET_EXERCISE_INFORMATION_BY_EXERCISE_ID:
    EXERCISE_INFO_API_BASE + "/v1/get/exercise/by/id",
};

export default exerciseApi;
