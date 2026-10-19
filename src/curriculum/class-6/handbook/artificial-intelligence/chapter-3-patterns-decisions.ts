import type { AIChapter } from "@/curriculum/class-6/handbook/types";

/** AI Chapter 3 — Simple Pattern Recognition and Decision Making. SH pp. 70–75, TH pp. 104–105. */
export const ai3: AIChapter = {
  number: 3,
  slug: "pattern-recognition-and-decisions",
  title: "Simple Pattern Recognition and Decision Making",
  learningFocus: ["Understanding patterns", "Identifying patterns", "Observations and conclusions", "Decision making"],
  ethicsTag: "Logical thinking",
  page: { sh: [70, 75], th: [104, 105] },
  sections: [
    {
      id: "ai3-pattern",
      heading: "What is a Pattern?",
      page: { sh: 70 },
      blocks: [
        {
          kind: "p",
          text: "A pattern is a regular, consistent, repeated, or predictable sequence of elements like numbers, shapes, text, colours, or actions. Patterns can be seen everywhere around us. Just like in Mathematics, we see sequences like 2, 4, 6, 8; similarly, in art, we see repetition in designs, in science, we see weather cycles, and in our everyday life, we see changing seasons and days. These patterns provide a framework for predicting and understanding behaviours.",
        },
      ],
    },
    {
      id: "ai3-importance",
      heading: "Importance of Patterns",
      page: { sh: [70, 71] },
      blocks: [
        {
          kind: "terms",
          items: [
            { term: "Symmetry", text: "A pattern is something that may look the same every time it appears and can be repeated." },
            { term: "Series", text: "A series is a group of items, like numbers, forms, or events, which may all be connected by the same rule or relationship. For example, numbering by twos, or a pattern that repeats." },
            { term: "Predictability", text: "If you can see a pattern, you can figure out what will happen next, whether it is the next number in a sequence or the next event in a cycle." },
            { term: "Behaviour", text: "Patterns can be visible, like stripes or dots, or behavioural like habits or routines." },
          ],
        },
        {
          kind: "terms",
          items: [
            { term: "Routines", text: "Getting up, eating breakfast, and going to school are all things that happen every day." },
            { term: "Schedules", text: "Time patterns include the cycle of days and nights and the changing of the seasons." },
            { term: "Chores", text: "Doing our homework and eating right can mean doing the same things over and over." },
            { term: "Shopping", text: "Watching when grocery stores have sales or when they have to restock their items." },
            { term: "Nature", text: "Natural patterns include the way leaves grow on a stem, the way birds migrate, and the spirals in a sunflower." },
            { term: "Language", text: "Rhyming patterns in songs and poems, like CCDD, are patterns in words." },
          ],
        },
      ],
    },
    {
      id: "ai3-identifying",
      heading: "Identifying Patterns",
      page: { sh: 71 },
      blocks: [
        {
          kind: "p",
          text: "Identifying patterns means looking at data or events to see if there are any sequences, similarities, or behaviours that follow a rule or show a particular trend. Identifying patterns is useful for everything from understanding how to solve everyday problems to more advanced Data Science because it helps you predict what will happen, organise things, and make decisions.",
        },
        {
          kind: "example",
          title: "For example,",
          lines: [
            "You have a basketball game every Friday. You practise for an hour after school every day, and you realise that you score a lot more points and your game improves noticeably. However, if you do not practise, your game will be affected, and you will score fewer points. When you notice this pattern, it makes sense; practice helps you improve. So, rather than waiting until game day, you should practise a little every day. You do not need to guess anymore; you know what works.",
          ],
        },
      ],
    },
    {
      id: "ai3-repeated",
      heading: "Recognising Repeated Actions or Events",
      page: { sh: 71 },
      blocks: [
        {
          kind: "p",
          text: "To recognise repeated actions or events, you need to find things that happen over and over again or in response to a certain situation. These repetitions create patterns or habits that can be predicted.",
        },
        {
          kind: "terms",
          items: [
            { term: "Observation", text: "Simple observation over a period of time is the most basic method for identifying repetitions." },
            { term: "Time Series Analysis", text: "This method evaluates data collected over time to identify variations in time such as seasons and trends over time." },
            { term: "Data Visualisation", text: "Sequences that repeat in data can be easily understood by using charts and graphs." },
          ],
        },
      ],
    },
    {
      id: "ai3-similarities",
      heading: "Finding Similarities in Data",
      page: { sh: 72 },
      blocks: [
        {
          kind: "p",
          text: "Finding similarities in data means sorting data that have similar characteristics or elements. This sorting of data makes huge complex datasets into manageable and meaningful subsets.",
        },
        {
          kind: "terms",
          items: [
            { term: "Sorting and Filtering", text: "Sorting data by its attributes makes it easier to identify groups with similar characteristics." },
            { term: "Data Visualisation", text: "The use of charts and graphs makes it simpler to understand a complex dataset." },
            { term: "Statistical Analysis", text: "Helps to understand large datasets, group similar data, understand connections between several factors, and see how changes in one can affect the other." },
            { term: "Machine learning", text: "Machine learning models are trained using data so they can identify patterns and make predictions or decisions." },
          ],
        },
      ],
    },
    {
      id: "ai3-observations",
      heading: "Observations and Conclusion",
      page: { sh: [72, 73] },
      blocks: [
        {
          kind: "p",
          text: "Making observations from data is looking for patterns, trends, and key findings, while drawing conclusions means understanding and applying these observations to answer your questions.",
        },
        {
          kind: "terms",
          items: [
            { term: "Identify Key Findings", text: "What were the most important numbers, patterns, or relationships you observed in your data?" },
            { term: "Look for Repeating Patterns", text: "Are there repeating themes or groupings in your data?" },
            { term: "Note Irregularities", text: "What stands out as unusual or unexpected in your data?" },
            { term: "Use Visuals", text: "Graphs and charts show patterns that might be hidden in raw data." },
          ],
        },
        {
          kind: "example",
          title: "Making observations from data (What did you see?) — examples:",
          lines: [
            "The number of students present is higher on Tuesday than on Monday",
            "The temperature is higher in the afternoon than in the morning",
            "More students like Cricket than Football",
          ],
        },
        {
          kind: "terms",
          items: [
            { term: "Answering the Question", text: "A conclusion tells us the answer to the question we were trying to find from the data." },
            { term: "Explaining Why It Happened", text: "It explains why a pattern was seen in the data, like sales increased because more people liked the discount." },
            { term: "Learning a General Idea", text: "From small observations, we form one general idea; for example, if all plants grew better with water, we could say plants need water to grow." },
            { term: "Knowing the Limits", text: "Sometimes the data is small or limited, so the result may not apply everywhere." },
            { term: "Thinking of What Comes Next", text: "Conclusions help us think about new questions or what we should study next." },
          ],
        },
        {
          kind: "example",
          title: "Drawing simple conclusions (What does it mean?) — examples:",
          lines: ["Students may feel more active after the weekend", "Afternoons are usually warmer than mornings", "Cricket is the most popular sport in the class"],
        },
      ],
    },
    {
      id: "ai3-decisions",
      heading: "Decision Making",
      page: { sh: 73 },
      blocks: [
        {
          kind: "p",
          text: "Decision-making means choosing what action to take after thinking carefully about the information available. In daily life, we often face situations where we must choose between two or more options. Good decision-making helps us select the option that is more useful, safe, or beneficial. Understanding the situation before making decisions usually leads to better results.",
        },
        {
          kind: "p",
          text: "We make decisions by observing what is happening around us. Observations help us see patterns, changes, and results from the past. By looking at these observations, we can understand which decision gave reliable results and which ones did not. This helps us make better choices in similar situations and prevent repeating mistakes.",
        },
        {
          kind: "list",
          title: "Examples of Decisions in Daily Life",
          items: [
            "Deciding to revise a subject again after observing low marks in a test",
            "Carrying an umbrella after observing cloudy skies",
            "Choosing a quieter road after seeing heavy traffic on another route",
            "Saving money after observing increased monthly expenses",
          ],
        },
      ],
    },
  ],
  pointsToRemember: [
    "A pattern is a regular, consistent, repeated, or predictable sequence of elements like numbers, shapes, text, colours, or actions.",
    "Identifying patterns means looking at data or events to see if there are any sequences, similarities, or behaviours that happen repeatedly.",
    "Patterns in data can appear as simple number patterns or visual patterns like shapes and designs.",
    "Making observations from data involves looking for patterns, trends, and key findings, while drawing conclusions means understanding and applying these observations to answer your questions.",
    "Decision-making means choosing what action to take after thinking carefully about the information available.",
  ],
  exercise: {
    page: { sh: [74, 75], th: [104, 105] },
    mcq: [
      { id: "ai3-mcq1", prompt: "A student notices that every morning, he wakes up, brushes his teeth and eats breakfast in the same order. What does this represent?", options: [{ key: "a", text: "A random action" }, { key: "b", text: "A pattern" }, { key: "c", text: "A single event" }, { key: "d", text: "A mistake" }], answer: "b" },
      { id: "ai3-mcq2", prompt: "Making observations from data means:", options: [{ key: "a", text: "Changing the data" }, { key: "b", text: "Looking for patterns and key findings" }, { key: "c", text: "Making guesses" }, { key: "d", text: "Hiding results" }], answer: "b" },
      { id: "ai3-mcq3", prompt: "Arranging data by its attributes to find similar groups is called:", options: [{ key: "a", text: "Machine learning" }, { key: "b", text: "Sorting and Filtering" }, { key: "c", text: "Entertainment" }, { key: "d", text: "Prediction" }], answer: "b" },
      { id: "ai3-mcq4", prompt: "Drawing a conclusion means:", options: [{ key: "a", text: "Copying data" }, { key: "b", text: "Understanding and applying observations" }, { key: "c", text: "Creating confusion" }, { key: "d", text: "Repeating the same data" }], answer: "b" },
      { id: "ai3-mcq5", prompt: "Decision-making means:", options: [{ key: "a", text: "Acting without thinking" }, { key: "b", text: "Choosing an action after thinking" }, { key: "c", text: "Ignoring facts" }, { key: "d", text: "Random guessing" }], answer: "b" },
    ],
    fillBlanks: [
      { id: "ai3-fb1", text: "A pattern is a repeated and predictable ____ of elements.", answer: "sequence" },
      { id: "ai3-fb2", text: "Identifying patterns means looking for repeated ____ or similarities in data.", answer: "actions" },
      { id: "ai3-fb3", text: "Making observations from data means looking for patterns, trends, and ____ findings.", answer: "key" },
      { id: "ai3-fb4", text: "Drawing a conclusion means understanding observations to answer a ____.", answer: "question" },
      { id: "ai3-fb5", text: "Decision making means choosing an action after thinking carefully about the ____ available.", answer: "information" },
    ],
    shortAnswer: [
      { id: "ai3-sa1", prompt: "Define a pattern and give one example from daily life.", answer: ["A pattern is a repeated sequence. Example: 2, 4, 6, 8"] },
      { id: "ai3-sa2", prompt: "Name any two methods used to recognise repeated actions or events and briefly explain one of them.", answer: ["Observation", "Data visualisation", "Observation: watching events repeatedly over time."] },
      { id: "ai3-sa3", prompt: "Why is predictability important when identifying patterns?", answer: ["Predictability helps us know what will happen next."] },
      { id: "ai3-sa4", prompt: "What is statistical analysis used for when studying large datasets?", answer: ["Statistical analysis is used to understand large datasets."] },
      { id: "ai3-sa5", prompt: "Explain the difference between making an observation and drawing a conclusion with an example.", answer: ["Observation: Temperature higher in afternoon", "Conclusion: Afternoons are warmer"] },
    ],
    thinkApply: {
      questions: [
        { id: "ai3-ta1", prompt: "A student measures the height of a plant every week. What type of data is being collected?", answer: ["Numerical data"] },
        { id: "ai3-ta2", prompt: "A student notices that the temperature is higher in the afternoon than in the morning for several days. What is the student doing?", answer: ["Identifying pattern"] },
        { id: "ai3-ta3", prompt: "A student notices that practising every day improves performance in a basketball game. What decision can the student make from this observation?", answer: ["Practice daily"] },
        { id: "ai3-ta4", prompt: "A class survey shows that more students like cricket than football. What can the teacher conclude from this data?", answer: ["Cricket most popular"] },
      ],
    },
    table: {
      title: "Identify the Method Used.",
      head: ["Situation", "Method Used"],
      rows: [
        { item: "Watching daily rainfall for a month", answer: "Time Series Analysis" },
        { item: "Arranging students by height", answer: "Sorting and Filtering" },
        { item: "Using graphs to compare sales", answer: "Data Visualisation" },
        { item: "Studying trends over five years", answer: "Time Series Analysis" },
        { item: "Using an algorithm to recognise faces", answer: "Machine Learning" },
      ],
    },
  },
  handbookNotes: [
    "Think and apply D1 (SH p. 75) repeats AI Chapter 2’s D1 (plant height).",
    "TH p. 105 answer D4 reads “Cricket most popular s”; shown as “Cricket most popular”.",
    "SH uses both “recognise/recognize” and “visualisation/visualization”; British spellings are used here.",
  ],
};
