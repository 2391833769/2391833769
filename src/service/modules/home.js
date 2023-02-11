import httpRequest from '../reuquest/request.js';

export const getHotSuggest = () => {
  return httpRequest.get({
    url: '/home/hotSuggests'
  });
}