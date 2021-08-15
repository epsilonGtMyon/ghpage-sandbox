const MEIJI = Object.freeze({
  order: 1,
  name: "明治",
  startJsDate: new Date(1868, 0, 25),
});

const TAISHO = Object.freeze({
  order: 2,
  name: "大正",
  startJsDate: new Date(1912, 6, 30),
});

const SHOWA = Object.freeze({
  order: 3,
  name: "昭和",
  startJsDate: new Date(1926, 11, 25),
});

const HEISEI = Object.freeze({
  order: 4,
  name: "平成",
  startJsDate: new Date(1989, 0, 8),
});

const REIWA = Object.freeze({
  reiwa: 5,
  name: "令和",
  startJsDate: new Date(2019, 4, 1),
});

export {
  MEIJI,
  TAISHO,
  SHOWA,
  HEISEI,
  REIWA,
}