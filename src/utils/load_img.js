const loadImg = (img) => {
  return new URL(`../assets/img/${img}`, import.meta.url).href;
  
}

export default loadImg;