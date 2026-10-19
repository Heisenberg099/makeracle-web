import type { CTChapter } from "../types";
import { figureOptions, textOptions } from "./_helpers";

/** CT Chapter 6 — Perimeter and Area. SH pp. 30–33, TH pp. 57–65. */
export const ch06: CTChapter = {
  number: 6,
  slug: "perimeter-and-area",
  title: "Perimeter and Area",
  page: { sh: [30, 33], th: [57, 65] },
  questions: [
    {
      id: "ct6-q1",
      chapter: 6,
      number: 1,
      prompt: "Figures A and B represent squares which are divided into different parts, as shown in the image below. Which of the following options correctly represents the relation between the division?",
      figure: {
        id: "ct6-q1-fig",
        page: { sh: 30, th: 57 },
        alt: "Figure A: a 4 cm square divided into four small squares coloured yellow, green, cyan and purple. Figure B: a 4 cm square cut by its diagonal into a large white triangle and, on the other half, a red triangle and a blue triangle.",
      },
      options: figureOptions("ct6-q1", { sh: 30, th: 57 }, [
        "Cyan square + green square < red triangle",
        "Purple square + yellow square + cyan square < red and blue triangles together",
        "Green square + cyan square + yellow square = white triangle + red triangle",
        "Green square = red and blue triangles together",
      ]),
      answer: ["c"],
      solution: {
        steps: [
          "Side of each square = 4 cm, so the area of the square = 4 × 4 = 16 sq. cm. Area of one small square = 16/4 = 4 sq. cm.",
          "Red and blue triangles together = half the square = 8 sq. cm. Each smaller coloured triangle = 1/2 of 8 = 4 sq. cm. The bigger white triangle = 1/2 × 4 × 4 = 8 sq. cm.",
          "Option a: squares 4 + 4 = 8, triangle 4. 8 is not less than 4, so a is incorrect.",
          "Option b: squares 4 + 4 + 4 = 12, triangles 8. 12 is not less than 8, so b is incorrect.",
          "Option c: squares 4 + 4 + 4 = 12, triangles 8 + 4 = 12. Areas match, so c is correct.",
          "Option d: square 4, triangles 8. 4 ≠ 8, so d is incorrect. Therefore, the correct answer is option c.",
        ],
      },
      page: { sh: 30, th: [57, 58] },
    },
    {
      id: "ct6-q2",
      chapter: 6,
      number: 2,
      prompt: "The perimeter of a square X is 16 cm. The square is cut along its diagonal to form two identical triangles. Which of these statements is DEFINITELY FALSE based on the above information?",
      options: textOptions(
        "Two sides of the triangle meet each other perpendicularly",
        "The length of at least one side of each triangle is 4 cm",
        "The combined area of the triangles is 16 cm²",
        "The combined perimeter of the triangles is 16 cm",
      ),
      answer: ["d"],
      solution: {
        steps: [
          "Perimeter of a square = 16 cm = 4 × side, so side = 4 cm.",
          "Cutting the square along its diagonal gives two right-angled triangles, so two sides meet perpendicularly. Option a is true.",
          "At least one side of each triangle is 4 cm. Option b is true.",
          "Area of the square = 4 × 4 = 16 cm², so the combined area of the triangles is also 16 cm². Option c is true.",
          "The combined perimeter will be more than 16 cm, as each triangle now has one new side (the diagonal). Therefore, option d is false and is the correct answer.",
        ],
      },
      page: { sh: 30, th: 58 },
    },
    {
      id: "ct6-q3",
      chapter: 6,
      number: 3,
      prompt: "A larger block is formed using 4 small cubes (2 grey cubes and 2 white cubes), as shown below. How many faces of the larger block have equal grey and white areas?",
      figure: {
        id: "ct6-q3-fig",
        page: { sh: 30, th: 59 },
        alt: "A block of four cubes in a 2 × 2 arrangement seen from the front: two white cubes on top and two grey cubes below.",
      },
      options: textOptions("4", "5", "3", "2"),
      answer: ["a"],
      solution: {
        steps: [
          "A large block is made of 4 small cubes: 2 grey (bottom) and 2 white (top).",
          "Front view: 2 white on top, 2 grey at the bottom — equal. Back view: looks exactly like the front — equal.",
          "Left side: 1 white on top, 1 grey at the bottom — equal. Right side: the same — equal.",
          "Top view: both cubes white — not equal. Bottom view: both grey — not equal.",
          "Equal grey and white faces: front, back, left, right = 4 faces. Hence, the correct answer is option a.",
        ],
      },
      page: { sh: 30, th: 59 },
    },
    {
      id: "ct6-q4",
      chapter: 6,
      number: 4,
      prompt: "How many times should the given paper sheet be folded in half so that the perimeter of the new shape is 16 cm?",
      figure: {
        id: "ct6-q4-fig",
        page: { sh: 30, th: 60 },
        alt: "A rectangle 8 cm long and 4 cm high.",
      },
      options: textOptions("0", "1", "2", "3"),
      answer: ["b"],
      solution: {
        steps: [
          "Only one fold is required: folding the 8 cm × 4 cm sheet in half along its length gives a 4 cm × 4 cm square.",
          "Perimeter = 4 + 4 + 4 + 4 = 16 cm. Hence, the correct answer is option b.",
        ],
      },
      page: { sh: 30, th: 60 },
    },
    {
      id: "ct6-q5",
      chapter: 6,
      number: 5,
      prompt: "Grid M is made using regular hexagons (like Shape A), as shown. Additional copies of Shape A may be attached only along the outer sides of Grid M, and each added shape must share at least one full side with the existing grid. The shapes must be added such that the total perimeter of the grid remains unchanged. What is the MAXIMUM number of Shape A pieces that can be added?",
      figure: {
        id: "ct6-q5-fig",
        page: { sh: 31, th: 60 },
        alt: "Grid M: a cluster of blue regular hexagons arranged in rows. Shape A: a single blue hexagon.",
      },
      options: textOptions("2", "3", "4", "6"),
      answer: ["c"],
      solution: {
        steps: [
          "When Shape A is added, some sides disappear where the new shape touches the grid, and some new sides appear. For the perimeter to stay the same, the number of sides removed must equal the number of sides added.",
          "This is possible in 4 places on Grid M (where an added hexagon touches 3 existing sides and adds 3 new ones).",
          "Hence, the correct answer is option c.",
        ],
      },
      page: { sh: 31, th: 60 },
    },
    {
      id: "ct6-q6",
      chapter: 6,
      number: 6,
      prompt: "All the squares and rectangles given below are to be used to form an arrangement. The arrangement shown in which of these options will give the HIGHEST perimeter?",
      figure: {
        id: "ct6-q6-fig",
        page: { sh: 31, th: 61 },
        alt: "Four shapes: A, a 4 cm × 4 cm square; B, a 4 cm × 3 cm rectangle; C, a 4 cm × 4 cm square; D, a 4 cm × 3 cm rectangle.",
      },
      options: figureOptions("ct6-q6", { sh: 31, th: 61 }, [
        "A, C, B, D stacked in one column",
        "A, B, C, D in one row, with B and D raised to the top edge",
        "A, C, B, D in one row, with B and D raised to the top edge",
        "B on A in a column, D to the right touching only A’s corner, and C below A",
      ]),
      answer: ["d"],
      solution: {
        steps: [
          "Perimeter is the measure of the outline of the figure.",
          "Option a: 6 sides of 4 cm and 4 sides of 3 cm: 24 + 12 = 36 cm.",
          "Option b: 9 sides of 4 cm, 1 side of 3 cm and 3 sides of 1 cm: 36 + 3 + 3 = 42 cm.",
          "Option c: 9 sides of 4 cm, 1 side of 3 cm and 1 side of 1 cm: 36 + 3 + 1 = 40 cm.",
          "Option d: 10 sides of 4 cm and 4 sides of 3 cm: 40 + 12 = 52 cm. Option d has the largest perimeter.",
          "Logical approach: only option d has all four sides of two figures (square C and rectangle D) in the total perimeter; in the other options at least one side of every figure is hidden. So option d is the correct answer.",
        ],
      },
      page: { sh: 31, th: [61, 62] },
    },
    {
      id: "ct6-q7",
      chapter: 6,
      number: 7,
      prompt: "If figures A, B, and C are all of the same dimensions, which of the following coloured blocks has the largest area?",
      figure: {
        id: "ct6-q7-fig",
        page: { sh: 31, th: 62 },
        alt: "Three equal rectangles. A is split into four vertical strips, one coloured yellow. B is split into four equal parts, one coloured green. C is split into three horizontal strips, one coloured red.",
      },
      options: textOptions("Red", "Yellow", "Green", "All of them have an equal area"),
      answer: ["a"],
      solution: {
        steps: [
          "Figures A and B are divided into four equal parts, so each part is one-fourth of the original area.",
          "Figure C is divided into three equal parts, so each part is one-third of the original area.",
          "One-third is greater than one-fourth, so the red block has the largest area. Option a is the correct answer.",
        ],
      },
      page: { sh: 31, th: 62 },
    },
    {
      id: "ct6-q8",
      chapter: 6,
      number: 8,
      prompt: "A square frame has a side length of 16 cm. Inside it, four square-shaped photographs of side 4 cm are to be placed such that the conditions below hold. What is the LARGEST square-shaped empty space that can be seen inside the frame, finally?",
      details: [
        "Each photograph touches the CORNER of at least one other photograph",
        "No two photographs share a common side",
        "The photographs do not overlap",
      ],
      options: textOptions("9 cm²", "16 cm²", "64 cm²", "192 cm²"),
      answer: ["c"],
      solution: {
        steps: [
          "No two photographs share a side, but each touches at least one corner of another, so there are different possible arrangements with the photographs connected by corners.",
          "In any case, the largest possible empty square region has a side of 8 cm.",
          "Area of the empty square region = 8 × 8 = 64 cm². Option c is the correct answer.",
        ],
      },
      page: { sh: 32, th: [62, 63] },
    },
    {
      id: "ct6-q9",
      chapter: 6,
      number: 9,
      prompt: "The grid shows a piece of land divided among three houses using different colours (including the area occupied by each house). The land is then redistributed so that all three houses receive equal areas. Which of the following options is NOT the exact area of land gained or lost by any house after this redistribution?",
      figure: {
        id: "ct6-q9-fig",
        page: { sh: 32, th: 63 },
        alt: "An 8 × 8 grid of 30 m × 30 m blocks coloured green (20 blocks), blue (23 blocks) and purple (21 blocks), each colour with a small house icon.",
      },
      options: textOptions("1200 sq. m.", "1500 sq. m.", "300 sq. m.", "900 sq. m."),
      answer: ["d"],
      solution: {
        steps: [
          "Each block is 30 m × 30 m, so each block’s area is 900 sq. m.",
          "Green house: 20 blocks = 18000 sq. m. Blue house: 23 blocks = 20700 sq. m. Purple house: 21 blocks = 18900 sq. m.",
          "Total land: 64 × 900 = 57600 sq. m. Divided equally: 57600 / 3 = 19200 sq. m each.",
          "Green gains 19200 − 18000 = 1200. Blue loses 20700 − 19200 = 1500. Purple gains 19200 − 18900 = 300.",
          "Thus, option d (900 sq. m.) is the correct answer.",
        ],
      },
      page: { sh: 32, th: [63, 64] },
    },
    {
      id: "ct6-q10",
      chapter: 6,
      number: 10,
      prompt: "Figures A, B, and C are three rectangles of equal dimensions. Figures A and B contain some shapes placed inside them. Using these shapes, completely fill figure C without leaving any gaps. Which set of options can be used to exactly fill figure C?",
      details: [
        "Note: The shapes may be rotated but must not overlap. The dimensions of the shapes in the options are the same as the dimensions given in the question image",
      ],
      figure: {
        id: "ct6-q10-fig",
        page: { sh: 32, th: 64 },
        alt: "Figure A (6 cm wide, with 4 cm, 2 cm and 2 cm markings) filled with yellow, red, orange, light-blue, dark-blue and light-green pieces; Figure B filled with light-green, pink, dark-green and blue pieces; Figure C an empty rectangle of the same size.",
      },
      options: figureOptions("ct6-q10", { sh: 32, th: 64 }, [
        "Set: dark-green T piece, red L piece, yellow bar, dark-blue triangle, pink piece",
        "Set: dark-green piece, light-green L piece, yellow bar, two thin triangles",
        "Set: blue L piece, light-green L piece, orange square, red L piece",
        "Set: blue L piece, red piece, pink piece, light-green piece, orange square",
      ]),
      answer: ["d"],
      solution: {
        steps: [
          "When all the shapes from option d are used, they fit perfectly into Figure C, without any gaps or overlaps.",
          "Option d is the correct answer.",
        ],
      },
      page: { sh: 32, th: 64 },
    },
  ],
  thinkingSpot: {
    id: "ct6-ts",
    chapter: 6,
    prompt: "The numbers given below are to be placed in the grid in such a way that the sum of two adjacent numbers in the grid should be greater than 9 but less than 17. What will come in place of A?",
    details: ["Numbers to be placed: 11, 3, 5, 2", "Grid: 14, _, _, A, 8, _, 12"],
    options: textOptions("A = 5", "A = 3", "A = 2", "A = 11"),
    answer: ["a"],
    solution: {
      steps: [
        "The number after 14 can only be 2, giving 16, which is greater than 9 but less than 17.",
        "The number before 12 can only be 3, giving 15. Any other number would make the sum 17 or more.",
        "Numbers left: 11 and 5. If A were 11, then 8 + 11 = 19, which breaks the condition. So A must be 5.",
        "The completed grid is 14, 2, 11, 5, 8, 3, 12. Option a is the correct answer.",
      ],
    },
    page: { sh: 33, th: 65 },
  },
};
