const positiveSum = require("./01-SumOfPositive");

test("Тестирование функции positiveSum", () => {
  expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);

  expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);

  expect(positiveSum([1, -2, 3, -4, 5])).toBe(9);

  expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);

  expect(positiveSum([])).toBe(0);
});

const partlist = require("./02-PartsOfAList");

test("Тестирование функции partlist", () => {
  expect(partlist([])).toEqual([]);

  expect(partlist(["A"])).toEqual([]);

  expect(partlist(["A", "B"])).toEqual([["A", "B"]]);

  expect(partlist(["A", "B", "C"])).toEqual([
    ["A", "B C"],
    ["A B", "C"],
  ]);

  expect(partlist(["A", "B", "C", "D", "E"])).toEqual([
    ["A", "B C D E"],
    ["A B", "C D E"],
    ["A B C", "D E"],
    ["A B C D", "E"],
  ]);
});

const removeChar = require("./03-RemoveFirstAndLastCharacter");

test("Тестирование функции removeChar", () => {
  expect(removeChar("")).toBe("");

  expect(removeChar("H")).toBe("");

  expect(removeChar("Hello")).toBe("ell");

  expect(removeChar("12345")).toBe("234");

  expect(removeChar("@#SpecialChars#@")).toBe("#SpecialChars#");
});

const countLanguages = require("./04-PrepareTheCountOfLanguages");

test("Тестирование функции countLanguages", () => {
  expect(countLanguages([])).toEqual({});

  expect(
    countLanguages([
      {
        firstName: "Noah",
        lastName: "M.",
        country: "Switzerland",
        continent: "Europe",
        age: 19,
        language: "C",
      },
    ])
  ).toEqual({ C: 1 });

  expect(
    countLanguages([
      {
        firstName: "Noah",
        lastName: "M.",
        country: "Switzerland",
        continent: "Europe",
        age: 19,
        language: "C",
      },
      {
        firstName: "Anna",
        lastName: "R.",
        country: "Liechtenstein",
        continent: "Europe",
        age: 52,
        language: "JavaScript",
      },
      {
        firstName: "Ramon",
        lastName: "R.",
        country: "Paraguay",
        continent: "Americas",
        age: 29,
        language: "Ruby",
      },
      {
        firstName: "George",
        lastName: "B.",
        country: "England",
        continent: "Europe",
        age: 81,
        language: "C",
      },
    ])
  ).toEqual({ C: 2, JavaScript: 1, Ruby: 1 });

  expect(
    countLanguages([
      {
        firstName: "Alice",
        lastName: "A.",
        country: "USA",
        continent: "Americas",
        age: 25,
        language: "Python",
      },
      {
        firstName: "Bob",
        lastName: "B.",
        country: "Canada",
        continent: "Americas",
        age: 30,
        language: "Python",
      },
      {
        firstName: "Charlie",
        lastName: "C.",
        country: "Australia",
        continent: "Oceania",
        age: 28,
        language: "Python",
      },
    ])
  ).toEqual({ Python: 3 });

  expect(
    countLanguages([
      {
        firstName: "David",
        lastName: "D.",
        country: "Germany",
        continent: "Europe",
        age: 22,
        language: "Java",
      },
      {
        firstName: "Eva",
        lastName: "E.",
        country: "France",
        continent: "Europe",
        age: 35,
        language: "C++",
      },
      {
        firstName: "Frank",
        lastName: "F.",
        country: "Spain",
        continent: "Europe",
        age: 42,
        language: "Python",
      },
    ])
  ).toEqual({ Java: 1, "C++": 1, Python: 1 });
});
