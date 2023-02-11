import httpRequest from '../reuquest/request.js';

export const getAllCity = () => {
  return httpRequest.get({
    url: '/city/all'
  });
}