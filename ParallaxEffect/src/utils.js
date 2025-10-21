export function loadSprite(src){
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.load = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = src;
  });
}