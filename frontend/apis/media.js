import { IMAGE_API_BASE } from "./imageApiBase";

MEDIA_API_BASE = IMAGE_API_BASE + "/media";

const mediaApi = {
  CATEGORY_IMAGE_API: MEDIA_API_BASE + "/v1/exercise-category-image",
  EXERCISE_GIF: MEDIA_API_BASE + "/v1/exercise-gif",
};

export { mediaApi };
