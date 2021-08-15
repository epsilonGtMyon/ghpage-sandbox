const mode = import.meta.env.MODE;
const baseUrl = import.meta.env.BASE_URL;
const prod = import.meta.env.PROD;
const dev = import.meta.env.DEV;

const metaEnv = Object.freeze({
  mode,
  baseUrl,
  prod,
  dev,
});

if (dev) {
  console.log(metaEnv);
}

export { metaEnv };
