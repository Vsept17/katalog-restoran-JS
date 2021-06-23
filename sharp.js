/* eslint-disable comma-dangle */
/* eslint-disable quotes */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const target = path.resolve(__dirname, "src/public/images/heros");
const destination = path.resolve(__dirname, "dist/images");

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  sharp(`${target}/${image}`)
    .resize(1440)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split(".").slice(0, -1).join(".")}-xlarge.jpg`
      )
    );
  // mengubah ukuran gambar dengan lebar 1024px, dengan prefix -large.jpg
  sharp(`${target}/${image}`)
    .resize(1024)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split(".").slice(0, -1).join(".")}-large.jpg`
      )
    );
  sharp(`${target}/${image}`)
    .resize(868)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split(".").slice(0, -1).join(".")}-medium.jpg`
      )
    );

  sharp(`${target}/${image}`)
    .resize(568)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split(".").slice(0, -1).join(".")}-small.jpg`
      )
    );
});
