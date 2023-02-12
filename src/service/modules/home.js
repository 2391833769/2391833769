import httpRequest from '../reuquest/request.js';

/** 热门建议 */
export const getHotSuggest = () => {
  return httpRequest.get({
    url: '/home/hotSuggests'
  });
}

/** 分类推荐 */
export const getCategories = () => {
  return httpRequest.get({
    url: '/home/categories'
  });
}

/** 房屋列表 */
export const getHouseList = (page) => {
  return httpRequest.get({
    url: '/home/houselist',
    params: {
      page: page
    }
  });
}