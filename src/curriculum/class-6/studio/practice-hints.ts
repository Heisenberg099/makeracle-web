/**
 * Hint ladder text — PRACTICE, NOT FROM HANDBOOK.
 *
 * The CBSE handbooks have no hints, and Teacher Handbook solutions are for
 * teacher views only. These are Makeracle's own nudges: each points at a way
 * of thinking and never states the answer. Two per item, unlocked one at a
 * time. Review with the curriculum team before launch.
 */
export const hints: Record<string, string[]> = {
  // CT 1 · Patterns in Mathematics
  "ct1-q1": ["Count how many times each number appears. What do you notice about 3? About 4?", "Write out the next few groups until 9 starts. How many of the next 20 terms are used up before 9?"],
  "ct1-q2": ["Find the difference between each pair of neighbouring terms.", "The differences should follow a simple rule. Which difference breaks it, and which term causes that?"],
  "ct1-q3": ["Each term hides a group of three numbers in a row. Which ones can you see?", "Look at which symbol is used in odd-positioned terms and which in even-positioned terms."],
  "ct1-q4": ["Count the blocks in each row of each term. What gets added each time?", "Keep adding the next row and keep a running total. When does it first go past 20?"],
  "ct1-q5": ["Follow just one corner of the grid from term to term. What happens to it?", "Do all four corners change the same way?"],
  "ct1-q6": ["Look at the top circles on their own, then the bottom circles on their own.", "How could the middle number be made from the two circles around it?"],
  "ct1-q7": ["Count hexagons and diamonds in each term. Are these special kinds of numbers?", "If term n has n × n hexagons, how many diamonds does it have?"],
  "ct1-q8": ["Most numbers in each set already follow a rule. Find the rule for each set.", "Which single number breaks Set P's rule, and could the number it needs come from Set Q?"],
  "ct1-q9": ["Count the columns in each term and compare with the term number.", "How many circles are in each column?"],
  "ct1-q10": ["To get the most levels, how small should the top level be?", "List the levels from the top and keep a running total. When would the next level go over 30?"],
  "ct1-ts": ["Which shape appears in more than one box? Which appears in all three?", "Shooting in the middle box can affect both neighbours. Plan the order of your three shots."],

  // CT 2 · Lines and Angles
  "ct2-q1": ["Draw the table and place A first. Where must B be?", "Use each clue to fix one more seat. Then find the angle between neighbours around a circle."],
  "ct2-q2": ["How many degrees does the minute hand cover in 10 minutes?", "Which time close to 1:55 PM has the hands exactly 60° apart?"],
  "ct2-q3": ["Imagine turning the triangle slowly. When does a different side first lie flat at the bottom?", "Use the angle at the corner and the angle on a straight line."],
  "ct2-q4": ["Look at the number in each circle and the number of equal parts it is cut into.", "A full turn is 360°. How do the number and the parts connect?"],
  "ct2-q5": ["How many degrees apart are two neighbouring numbers on a clock?", "Work out each visit time on its own, then compare."],
  "ct2-q6": ["In each set, look only at the part shaded on both clocks.", "Count the number gaps in that shared part. How many degrees is each gap?"],
  "ct2-q7": ["Go hour by hour. In most hours, how many times are the hands exactly opposite?", "Is there an hour where the same straight line gets counted twice?"],
  "ct2-q8": ["Find the 30° angle in the joined picture first.", "What do you know about the right-angled triangle's angle at P?"],
  "ct2-q9": ["Angles all the way round a point add up to 360°. Find ∠ABD.", "Two lines that are both perpendicular to the same line are…?"],
  "ct2-q10": ["Start with C and E. Where can C not go?", "Try each possible place for C and D, then use the clue about F to rule cases out."],
  "ct2-ts": ["Which position does B have, if it is longer than only one rope?", "Put the ropes in order from shortest to longest, then fill in colours."],

  // CT 3 · Number Play
  "ct3-q1": ["How many points do the three 6s give? How many points are left?", "Can the last roll be anything other than the third 6?"],
  "ct3-q2": ["Start with the black square that shows 1. What must its neighbours hold?", "Every row has the same total. What is the smallest that total can be?"],
  "ct3-q3": ["How does the black centre number relate to the four numbers touching it?", "Now how does each of those relate to the outer numbers next to it?"],
  "ct3-q4": ["Look at B first: what is it bigger than, and smaller than?", "Once you know A and B, arrange all five digits to make the biggest number."],
  "ct3-q5": ["Which three numbers on the dots add up to 12?", "Each number appears twice. How many different ways can you pick one of each?"],
  "ct3-q6": ["Which three numbers give the biggest possible sum?", "What is the smallest change that gives the next biggest sum?"],
  "ct3-q7": ["Colours must alternate. For the biggest number, which colour should come first?", "To get the second biggest, change the digits in the lowest places first."],
  "ct3-q8": ["A difference of 9 between two digits needs which two digits?", "A palindrome repeats some digits. Put the bigger digit where it is used only once."],
  "ct3-q9": ["Pick one block and list the numbers it is joined to.", "It needs at least one smaller and at least one larger neighbour. Check every block."],
  "ct3-q10": ["Riya gets the largest digit. Of the other three, one must be the sum of the other two.", "Test each option: give the largest digit to Riya, then check the sum rule."],
  "ct3-ts": ["A is next to only one friend's shape. Where can A's shape be?", "Use the triangle clue to decide who cannot take it."],

  // CT 4 · Data Handling and Presentation
  "ct4-q1": ["Line up the block towers from tallest to shortest. Which letter is on each?", "In the answer figure, which letter is outermost and which is innermost?"],
  "ct4-q2": ["Count the letters in each word and the lines next to it.", "Do the same for the last word."],
  "ct4-q3": ["Write each store's sales as a number of x.", "The biggest store must still be under 100 litres. How big can x be?"],
  "ct4-q4": ["Which weight appears twice on the graph? Who could share it?", "A must be within 10 kg of everyone. Which bar can A be?"],
  "ct4-q5": ["Monica has as many as two others together. Which two bars add up to a third?", "Use the order clue (Joey < Rachel < Chandler) on the bars that are left."],
  "ct4-q6": ["Work out the students for each fruit from the symbols. Watch for half symbols.", "Find X and Y from the clues, then their difference."],
  "ct4-q7": ["You can only add symbols. Start with the year that is already right.", "Each 4-year gap must rise by 300. Work out what each year needs."],
  "ct4-q8": ["In each example, where is the ball and which tiles turn black?", "Apply the same rule to the ball's new tile."],
  "ct4-q9": ["Read every score off the graph first.", "Sort each student into the groups one group at a time, then count who is in exactly two."],
  "ct4-q10": ["February saved nothing. Which two amounts make 30,000 for January and March?", "Use the two-month total of 40,000 to place more amounts. Is June fixed?"],
  "ct4-ts": ["A is joined to 4. What can A be, given the row it is in?", "Try a number in the empty circle next to 3 and see if the grid can be finished."],

  // CT 5 · Prime Time
  "ct5-act-1": ["Count each line you draw until you are back at 2.", "Are all the lines the same length? What shape has that many equal sides?"],
  "ct5-act-2": ["Write the points you land on: 3, 6, …", "Stop when you reach 3 again. How many jumps was that?"],
  "ct5-exp-2": ["A square needs 4 equal jumps to get back to the start.", "On a 16-point circle, what jump gives 4 steps? Is there a jump that is its mirror image?"],
  "ct5-q1": ["In each option, how are the two white numbers linked to the black one?", "Find the one option that does not follow that link."],
  "ct5-q2": ["List the single-digit primes.", "Try making each option from two or more different primes."],
  "ct5-q3": ["Try a few sets of three numbers in a row and add them.", "Which divisor works every single time?"],
  "ct5-q4": ["Numbers that are 1 more than a multiple of 3 look like 3x + 1.", "What is the smallest two-digit one, and the biggest?"],
  "ct5-q5": ["Multiplying by 7 keeps the last digit. What is the original number for each option?", "Check that P, Q, R and S are all different."],
  "ct5-q6": ["Five numbers can't hold three primes and three evens unless one number is both.", "Which number is both even and prime?"],
  "ct5-q7": ["How are 'free', 'dive' and 'hen' connected to three, five and ten?", "Find the prime factor of 169, then say its name out loud."],
  "ct5-q8": ["Try multiplying different pairs of single-digit primes.", "For each statement, can you find even one pair that breaks it?"],
  "ct5-q9": ["Find the prime numbers spelled in the grid.", "Which one is followed straight away by the next number?"],
  "ct5-q10": ["The month starts on a Sunday. Which dates are Fridays?", "Which of those Fridays is a prime date? Work from Sam to Jim to Alex."],
  "ct5-ts": ["How many squares need to change to make 8 grey and 8 white?", "Clicking a white square changes its corner neighbours. Which white square changes exactly the right number?"],

  // CT 6 · Perimeter and Area
  "ct6-q1": ["Find the area of the whole square, then of each small square and each triangle.", "Work out both sides of each option."],
  "ct6-q2": ["What is the side of the square?", "When you cut along the diagonal, which new side does each triangle get?"],
  "ct6-q3": ["Look at the block from the front, back, left, right, top and bottom.", "On which faces do you see one grey and one white?"],
  "ct6-q4": ["What is the perimeter now? Is it more or less than 16 cm?", "What shape do you get if you fold it once along its length?"],
  "ct6-q5": ["When a new hexagon touches the grid, some sides disappear and some appear.", "Where does a new hexagon remove exactly as many sides as it adds?"],
  "ct6-q6": ["Perimeter is the outline. Hidden sides do not count.", "Which arrangement leaves the most sides showing on the outside?"],
  "ct6-q7": ["Into how many equal parts is each figure divided?", "Which fraction is bigger: one quarter or one third?"],
  "ct6-q8": ["Photographs may touch only at corners. Sketch a few ways to place them.", "What is the biggest empty square you can fit in any of your sketches?"],
  "ct6-q9": ["Find the area of one block, then count each colour's blocks.", "What does each house get after an equal share? Who gains and who loses?"],
  "ct6-q10": ["Work out how big figure C is in small squares.", "Try each set: do the pieces add up to exactly that area, and do they fit?"],
  "ct6-ts": ["Which number can go next to 14 without the sum reaching 17?", "Do the same next to 12, then try the two numbers left beside 8."],

  // CT 7 · Fractions
  "ct7-q1": ["The marks are out of different totals. Can you make them all out of the same total?", "Once they are out of the same total, order them."],
  "ct7-q2": ["In each grid, count the shaded and the unshaded cells.", "Which of the two counts becomes the top of the fraction?"],
  "ct7-q3": ["Turn every fraction into ninetieths, like the options.", "Order them. Which value sits between the second and third?"],
  "ct7-q4": ["Give all three fractions the same denominator.", "Where does the result sit compared with the two numbers? Which operation could do that?"],
  "ct7-q5": ["How many girls are there? How many like singing, and how many dancing?", "If 5 like neither, how many are counted twice?"],
  "ct7-q6": ["How many children does each of Tim's children have?", "Use that to find how many children Tim has, then how many are girls."],
  "ct7-q7": ["What is added each time?", "Write out the terms up to the eleventh and test each statement."],
  "ct7-q8": ["What fraction of Aman's answers were right?", "Test each option: does it give 3/4 right altogether?"],
  "ct7-q9": ["If the brother is 3 parts, Raju is 2 parts.", "Try 30 as Raju's age, then as his brother's. Which option never appears?"],
  "ct7-q10": ["What fraction of a brick is one green piece? One blue? One yellow?", "Remove the same piece from both pans first, then compare."],
  "ct7-ts": ["List the days A lies and the days B lies.", "If A tells the truth today about yesterday, which days could yesterday be? Do the same for B."],

  // CT 8 · Playing with Constructions
  "ct8-q1": ["How many sides of each small square does the given half already have?", "Which option adds the missing sides for exactly four squares?"],
  "ct8-q2": ["How many squares are there already, including the big one?", "What is the fewest lines that make one new square?"],
  "ct8-q3": ["Call one matchstick 1 unit. What is the area between the two squares?", "Split that area into three parts the same size as the small square."],
  "ct8-q4": ["Start with the piece that has the most blocks. What does it leave empty?", "Which other pieces fill the gaps exactly?"],
  "ct8-q5": ["Each grid must have both letters and shapes. Try putting pieces together.", "Once both grids are built, check which shape touches a letter in both."],
  "ct8-q6": ["Look at the edge: how many points stick out and how many go in?", "The matching piece must be the exact opposite, with sharp tips in the same places."],
  "ct8-q7": ["Lay Figure A on Figure B in your head, matching one digit at a time.", "Which match makes a neat square?"],
  "ct8-q8": ["The yellow piece is 4 tall. How big must the square be?", "Place yellow and red first, then see what space is left."],
  "ct8-q9": ["Try joining two triangles, then two rectangles, then two squares.", "Which pair can never make a square?"],
  "ct8-q10": ["Start with cells whose neighbours already show two different patterns.", "Fill one cell at a time, then count each pattern."],
  "ct8-ts": ["Start with a cell whose arrow points at numbers you already know.", "Count different numbers, not how many numbers."],

  // CT 9 · Symmetry
  "ct9-q1": ["Which shapes look the same when flipped left to right? Which letters?", "Now match each shape to the letter under it."],
  "ct9-q2": ["The cut goes through two layers of paper.", "When you unfold, where does the second copy of the cut appear?"],
  "ct9-q3": ["Where are the black dots in the last picture?", "Mirror the coloured quarter into each dotted quarter."],
  "ct9-q4": ["Unfolding makes a mirror image on the other side of AB.", "Count the halves that become whole, then the triangles copied across."],
  "ct9-q5": ["Unfold one step at a time: first one fold, then the other.", "How many equal sides does the result have? How many mirror lines does that shape have?"],
  "ct9-q6": ["Turn each shape a quarter turn about its red dot. Which look the same?", "Then, for each square, count neighbours holding one of those shapes."],
  "ct9-q7": ["How many sides does the sheet have now?", "How many sides does each piece get after each cut?"],
  "ct9-q8": ["For each shape, fold along the dotted line in your head.", "Do the two halves match exactly?"],
  "ct9-q9": ["For each letter, try a mirror line down the middle, then across the middle.", "Count the letters where at least one works."],
  "ct9-q10": ["Try shading each labelled square in turn.", "Check for a mirror line in every direction, including the diagonals."],
  "ct9-ts": ["Suppose the candies are in jar 1. Which messages are true?", "Do the same for jars 2 and 3. Only one jar gives exactly one true message."],

  // CT 10 · The Other Side of Zero
  "ct10-q1": ["What happens to the letter each time? And to the number?", "Keep going until the number drops below zero."],
  "ct10-q2": ["Place each stack on the grid and test every row.", "Count the correct pairs for each stack."],
  "ct10-q3": ["Look at the odd places and the even places separately.", "What is added each time in the even places?"],
  "ct10-q4": ["Swap every + and − first.", "Which option takes the least away from C?"],
  "ct10-q5": ["What could a red circle and a green circle each be worth?", "What decides the colour of the box?"],
  "ct10-q6": ["Work out how each purchase changes the scorecard.", "Start with the row you can solve fully, then work backwards and forwards."],
  "ct10-q7": ["Undo the last step first: what number came out before the sign was reversed?", "Which rule could have produced that number? Check the input fits that rule."],
  "ct10-q8": ["Fill in the hidden values first. What is the gap between points?", "Make each jump, then add up every point the rabbit lands on, including the start."],
  "ct10-q9": ["Work out the total value of the box now.", "How much more is needed to reach 50, and which shape adds?"],
  "ct10-q10": ["The machine keeps the smaller input. What does each machine tell you about X?", "X must be bigger than one number and smaller than another."],
  "ct10-ts": ["Groups are 4 letters in a row. Which letters in the table share a group number?", "Check the first and last letter of each option."],
};
