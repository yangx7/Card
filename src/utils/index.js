export default function importImages() {
  const images = {};

  const request = require.context(
    "/src/assets/images",
    false,
    /\.(png|jpe?g|svg)$/
  );
  request.keys().forEach((item) => {
    images[item.replace("./", "")] = request(item).default;
  });

  return images;
}
