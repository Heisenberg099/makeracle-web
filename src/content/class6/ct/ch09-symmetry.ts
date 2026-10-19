import type { CTChapter } from "../types";
import { figureOptions, textOptions } from "./_helpers";

/** CT Chapter 9 — Symmetry. SH pp. 40–43, TH pp. 82–89. */
export const ch09: CTChapter = {
  number: 9,
  slug: "symmetry",
  title: "Symmetry",
  page: { sh: [40, 43], th: [82, 89] },
  questions: [
    {
      id: "ct9-q1",
      chapter: 9,
      number: 1,
      prompt: "Image A is placed exactly on top of Image B (exactly overlapping it). How many shapes with vertical symmetry overlap letters that also have vertical symmetry?",
      details: ["Note: Rotation of the images is not allowed"],
      figure: {
        id: "ct9-q1-fig",
        page: { sh: 40, th: 82 },
        alt: "Image A, a 3 × 3 grid of shapes: green parallelogram, red triangle, blue up-arrow / blue pentagon, green right triangle, red trapezium / red left-arrow, blue hexagon, green pointed tab. Image B, a 3 × 3 grid of letters: S, M, V / P, A, W / H, C, T.",
      },
      options: textOptions("1", "2", "3", "4"),
      answer: ["c"],
      solution: {
        steps: [
          "Among the shapes of Image A, five have vertical symmetry: the triangle, the up-arrow, the pentagon, the trapezium and the hexagon.",
          "Among the letters, six have vertical symmetry: M, V, A, W, H and T.",
          "Placing Image A over Image B, 3 shapes with vertical symmetry overlap 3 letters with vertical symmetry (triangle on M, up-arrow on V, trapezium on W).",
          "Hence, option c is the correct answer.",
        ],
      },
      page: { sh: 40, th: 82 },
    },
    {
      id: "ct9-q2",
      chapter: 9,
      number: 2,
      prompt: "A square sheet of paper is folded in half, as shown in Step 1. A triangular piece is then cut from the folded sheet, as shown in Step 2. Which option shows the final shape obtained when the paper is unfolded?",
      figure: {
        id: "ct9-q2-fig",
        page: { sh: 40, th: 83 },
        alt: "A square; Step 1, the right half folded over to the left; Step 2, a triangle marked on the left (outer) edge of the folded sheet.",
      },
      options: figureOptions("ct9-q2", { sh: 40, th: 83 }, [
        "Square with a diamond-shaped hole in the middle",
        "Hourglass shape with triangles cut from both sides meeting in the middle",
        "Square with a triangular notch cut from the left side and from the right side",
        "Square with a triangular notch cut from the left side only",
      ]),
      answer: ["c"],
      solution: {
        steps: [
          "A triangle is cut from the edge of the folded paper, as shown in Step 2. Since the paper is folded, the cut passes through two layers on the outer edges of the sheet.",
          "So the cut shape appears twice when unfolded, as mirror images on opposite sides of the centre line.",
          "Option c shows two identical triangular cuts on both sides, symmetric along the vertical axis. Options a, b and d do not match.",
          "Hence, the correct answer is option c.",
        ],
      },
      page: { sh: 40, th: 83 },
    },
    {
      id: "ct9-q3",
      chapter: 9,
      number: 3,
      prompt: "What will come in place of \"?\"",
      figure: {
        id: "ct9-q3-fig",
        page: { sh: 41, th: 83 },
        alt: "Four panels, each with dotted cross lines dividing a space into four, one quarter of a coloured figure shown, black dots in some quarters, an arrow and a result. Panel 1: a yellow quarter in the top-left with a dot bottom-right → yellow figure. Panel 2: a green quarter bottom-right with dots top-left and top-right → green figure. Panel 3: a purple quarter top-left with dots top-right and bottom-left → purple figure. Panel 4: a green quarter bottom-left with dots top-left and top-right → ?",
      },
      options: figureOptions("ct9-q3", { sh: 41, th: 83 }, [
        "Green block with feet hanging below",
        "Green block with feet below and arms on the sides",
        "Green block with hooks on top and arms on both sides",
        "Smaller green block with hooks on top and arms on both sides",
      ]),
      answer: ["c"],
      solution: {
        steps: [
          "On the left of each pair, a symmetrical image is divided into four parts by the dotted lines (the lines of symmetry), and only one part is revealed.",
          "On the right, the corresponding symmetric parts are revealed, but only in the sections where the black dots are placed on the left.",
          "In the question term, the dots are in the top-left and top-right sections, so the symmetric images of the green part appear in those two sections.",
          "The orientation of the figure matches option c. Hence, the correct answer is option c.",
        ],
      },
      page: { sh: 41, th: [83, 84] },
    },
    {
      id: "ct9-q4",
      chapter: 9,
      number: 4,
      prompt: "A symmetrical transparent sheet of paper is folded in half along the dotted line AB. When the sheet is unfolded, what is the total number of triangles seen?",
      details: ["Note: Line AB is not a part of the shape"],
      figure: {
        id: "ct9-q4-fig",
        page: { sh: 41, th: 84 },
        alt: "A rectangle with a vertical dotted line AB through its centre. On the left of the line: a full triangle, half-triangles touching the line at the top and bottom, and connecting lines.",
      },
      options: textOptions("3", "4", "5", "6"),
      answer: ["c"],
      solution: {
        steps: [
          "The sheet is transparent and symmetrical, so unfolding creates a mirror reflection on the right side.",
          "The half-triangles on the left become full triangles when unfolded (triangles 1, 2 and 3).",
          "The full triangle on the left mirrors onto the right side, giving one more triangle on each side (triangles 4 and 5).",
          "Hence, 5 triangles are formed. Option c is correct.",
        ],
      },
      page: { sh: 41, th: 84 },
    },
    {
      id: "ct9-q5",
      chapter: 9,
      number: 5,
      prompt: "The given shape is first folded vertically, then horizontally, and then cut along the dotted line as shown below. After unfolding, if the resultant shape has equal sides (edges), how many lines of symmetry does the resultant shape have?",
      figure: {
        id: "ct9-q5-fig",
        page: { sh: 41, th: 85 },
        alt: "A cross-shaped piece of paper folded along a vertical dotted line, then along a horizontal dotted line, then cut along a vertical dotted line marked with scissors.",
      },
      options: textOptions("10", "4", "6", "8"),
      answer: ["d"],
      solution: {
        steps: [
          "First, cut the paper along the dotted line.",
          "Unfold the paper horizontally, then unfold it vertically.",
          "The result is a shape with 8 equal sides (an octagon).",
          "The resultant shape has 8 lines of symmetry. Hence, the correct answer is option d.",
        ],
      },
      page: { sh: 41, th: 85 },
    },
    {
      id: "ct9-q6",
      chapter: 9,
      number: 6,
      prompt: "The following grid is made of 6 small white squares. Each square has a black shape inside it. Count the number of squares which are adjacent to exactly two other squares, whose shapes have an angle of rotational symmetry of 90°.",
      details: [
        "Note: The red circle in each shape acts as the centre of rotation. Two squares are said to be adjacent if they share the common sides. Squares that share common corner alone are not adjacent to each other",
      ],
      figure: {
        id: "ct9-q6-fig",
        page: { sh: 42, th: 85 },
        alt: "A 2 × 3 grid. Top row: a V-shaped chevron, a diamond, a circle with a slanted cut. Bottom row: a rounded plus shape, an X shape, a circle with a wedge cut out. Each shape has a red dot at its centre.",
      },
      options: textOptions("1", "2", "3", "More than 3"),
      answer: ["b"],
      solution: {
        steps: [
          "First identify the shapes with an angle of rotational symmetry of 90°: rotate each by 90° and compare.",
          "Exactly 3 shapes have it: the diamond, the rounded plus and the X.",
          "Count the squares adjacent to exactly two squares containing those shapes.",
          "There are two such squares: the chevron (next to the diamond and the plus) and the X (next to the plus and the diamond). Option b is correct.",
        ],
      },
      page: { sh: 42, th: [85, 86] },
    },
    {
      id: "ct9-q7",
      chapter: 9,
      number: 7,
      prompt: "Along which line should I cut the given paper sheet to get two identical Pentagons?",
      figure: {
        id: "ct9-q7-fig",
        page: { sh: 42, th: 86 },
        alt: "A blue regular hexagon with three orange lines: AB through two opposite corners, CD through the midpoints of two opposite sides, and a short line DE near the top-right corner.",
      },
      options: textOptions("AB", "CD", "DE", "None of These"),
      answer: ["b"],
      solution: {
        steps: [
          "The sheet has 6 sides. Cutting along AB gives each piece 3 original sides plus one new side (3 + 1 = 4): identical quadrilaterals, not pentagons.",
          "Cutting along CD gives two identical pentagons.",
          "Hence, option b is the answer.",
        ],
      },
      page: { sh: 42, th: 86 },
    },
    {
      id: "ct9-q8",
      chapter: 9,
      number: 8,
      prompt: "Eight shapes are shown below, each having a dotted line. Count the number of shapes in which the dotted line is a line of symmetry.",
      figure: {
        id: "ct9-q8-fig",
        page: { sh: 42, th: 87 },
        alt: "Eight outline shapes, each with a dotted line: a rhombus, a triangle, a tab with curved notches, a half-circle, a shape with a curved bottom, a rounded-corner rectangle, a square with notched corners, a rounded square with a diagonal dotted line.",
      },
      options: textOptions("3", "4", "5", "6"),
      answer: ["b"],
      solution: {
        steps: [
          "Check each dotted line: is the shape the same on both sides?",
          "There are four shapes where the dotted line is a line of symmetry: the rhombus, the tab with curved notches, the square with notched corners and the rounded square with the diagonal line.",
          "Hence, the correct answer is option b.",
        ],
      },
      page: { sh: 42, th: 87 },
    },
    {
      id: "ct9-q9",
      chapter: 9,
      number: 9,
      prompt: "How many of the following letters have at least one line of symmetry?",
      details: ["RISTLHPACE"],
      options: textOptions("5 letters", "6 letters", "8 letters", "10 letters"),
      answer: ["b"],
      solution: {
        steps: [
          "The letters that have at least one line of symmetry are I, T, H, A, C and E.",
          "Hence, option b is correct.",
        ],
      },
      page: { sh: 42, th: 87 },
    },
    {
      id: "ct9-q10",
      chapter: 9,
      number: 10,
      prompt: "In the given figure, exactly one square among the labelled squares – P, Q, R, and S must be shaded grey to make the complete grid symmetric, along any one of the directions. Which square must be shaded to satisfy the condition?",
      figure: {
        id: "ct9-q10-fig",
        page: { sh: 43, th: 87 },
        alt: "A 4 × 4 grid. Grey: row 1 column 2; row 2 columns 1 and 3; row 3 columns 2, 3 and 4. White labelled squares: R at row 1 column 4; Q at row 4 column 1; P at row 4 column 3; S at row 4 column 4.",
      },
      options: textOptions("Q", "R", "S", "P"),
      answer: ["d"],
      solution: {
        steps: [
          "Option a: shading Q does not make the shape symmetrical along any line.",
          "Option b: shading R does not make the shape symmetrical.",
          "Option c: shading S does not make the shape symmetrical.",
          "Option d: after shading P, the shape becomes symmetrical along the diagonal from the top-left corner to the bottom-right corner.",
          "Hence, option d is correct.",
        ],
      },
      page: { sh: 43, th: [87, 88] },
    },
  ],
  thinkingSpot: {
    id: "ct9-ts",
    chapter: 9,
    prompt: "There are 3 jars out of which one of them has candies and the other two are empty jars. There is a message printed on the lid of each jar. Only one of these messages is true and the others are false. The message on the 1st jar is: \"The Candies are not in this jar\" and the same message is written on the 2nd jar as well. The message on the 3rd jar is: \"The Candies are in the 2nd jar\". Which jar has candies in it?",
    options: textOptions("1st", "2nd", "3rd", "Cannot be determined"),
    answer: ["a"],
    solution: {
      steps: [
        "If the candies are in the 1st jar, the message on the 2nd jar is true and the messages on the other two jars are false.",
        "If the candies are in the 2nd jar, the messages on both the 1st and 3rd jars are true.",
        "If the candies are in the 3rd jar, the messages on both the 1st and 2nd jars are true.",
        "Only if the 1st jar has the candies are the conditions satisfied. The correct answer is option a.",
      ],
    },
    page: { sh: 43, th: 89 },
  },
};
