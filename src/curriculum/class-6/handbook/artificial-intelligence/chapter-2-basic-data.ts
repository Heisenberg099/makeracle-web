import type { AIChapter } from "@/curriculum/class-6/handbook/types";

/** AI Chapter 2 — Basic Data Concepts. SH pp. 60–69, TH pp. 101–103. */
export const ai2: AIChapter = {
  number: 2,
  slug: "basic-data-concepts",
  title: "Basic Data Concepts",
  learningFocus: ["Understanding data", "Types of data", "Collecting data", "Organising data", "Representing data"],
  ethicsTag: "Data handling care",
  page: { sh: [60, 69], th: [101, 103] },
  sections: [
    {
      id: "ai2-intro",
      heading: "Data in our daily lives",
      page: { sh: 60 },
      blocks: [
        {
          kind: "p",
          text: "In today’s digital world, data is everywhere and plays a significant role in our daily lives. Therefore, understanding the basic concepts of data, its types, and analysis is very important in today’s information-driven society.",
        },
        { kind: "list", items: ["Recording Attendance", "Sending Messages", "Checking Weather", "Watching Videos Online", "Using a Fitness App"] },
        {
          kind: "p",
          text: "Weather apps, for example, collect data from satellites and weather stations, whereas map applications use traffic data from a large number of users to recommend faster routes. A school report card is prepared by compiling attendance records and students’ marks. In this way, data helps in understanding any situation, comparing information, and making better decisions.",
        },
      ],
    },
    {
      id: "ai2-what-is-data",
      heading: "What is Data?",
      page: { sh: 60 },
      blocks: [
        { kind: "p", text: "Data means raw information that can be processed and analysed to get useful information, which provides meaningful insights for decision-making." },
        {
          kind: "example",
          title: "For example,",
          lines: ["The number of friends you have", "The weather report that tells the temperature", "The marks you score in your exam", "The list of books in your school library"],
        },
        { kind: "p", text: "Hence, data consists of raw facts, and when it is organised and processed, it becomes information that helps us make correct decisions." },
      ],
    },
    {
      id: "ai2-importance",
      heading: "Importance of Data in Daily Lives",
      page: { sh: [60, 61] },
      blocks: [
        {
          kind: "terms",
          items: [
            {
              term: "Decision Making",
              text: "Data provides information, patterns, and results from the past, which makes it easy to make decisions. It does not depend on opinions or assumptions; one can study data to understand what has worked before and what needs improvement. For example, exam result data can help the teacher understand which subject the student is struggling with and which subject the student is excelling at. Sales information, on the other hand, can help the store owner decide which items need to be stocked or which items need to be removed immediately. Using data correctly reduces uncertainties and leads to more reliable decisions.",
            },
            { term: "Business Growth", text: "Data like sales records and customer feedback helps in identifying customers’ choices and preferences, improving products and thereby reducing losses and increasing profit." },
            {
              term: "Scientific Research and Development",
              text: "Data forms the foundation of every scientific investigation. Researchers conduct experiments, observe results, and gather survey data, all with the goal of collecting information. With this data, they look for patterns, test assumptions, and draw correct conclusions. Trustworthy data fuels advancement in medicine, space exploration, and environmental research. Without it, progress comes to a halt.",
            },
            {
              term: "Enhancing Cybersecurity",
              text: "Cybersecurity systems always study large data sets to look for unusual activities and potential threats from the past and predict the vulnerabilities that may appear in the future. This makes the security systems stronger. Security systems gather data by analysing login information, network traffic, and access patterns to find out what went wrong and stop it from recurring.",
            },
            {
              term: "Personalised User Experience",
              text: "While using digital platforms, a user gets a personalised experience with the help of data. Apps and websites use data such as your search history and your preferences to show relevant content. For example, shopping apps suggest products based on past purchases, and music apps recommend songs based on what kind of music you prefer.",
            },
          ],
        },
      ],
    },
    {
      id: "ai2-types",
      heading: "Types of Data",
      page: { sh: [61, 63] },
      blocks: [
        { kind: "p", text: "Data can come in many forms, such as numbers, text, pictures, video, and sounds. Each form has its own meaning, which affects how it is used and interpreted." },
        {
          kind: "terms",
          items: [
            { term: "Numerical data (Numbers and Values)", text: "Numerical data is made up of numbers. You can count or measure this kind of data. For example: counting objects using numbers, measuring length using numbers, performing calculations using numbers, numbers used for counting and calculation." },
            { term: "Text data (Words and Sentences)", text: "Text data is made up of letters, words, or sentences. Text data helps you put things into words. For example: a name written using letters, a list of names used for identification, a written address, written communication through letters." },
            { term: "Image data (Pictures and Visuals)", text: "Pictures, drawings, or photos make up image data. Pictures make it easy for people to see and understand information. For example: an image of your pet, emojis you use in chats, a picture of your favourite fruits, a collection of images." },
            { term: "Video Data (Moving Visuals)", text: "Video data is made up of moving pictures, sometimes with sound. Video data helps us see actions and understand events clearly. For example: a movie in a theatre, CCTV footage, video footage, an online meeting." },
            { term: "Sound Data (Audio and Voice)", text: "Sound data is made up of sounds, speech, or music. Sound data tells us what something sounds like. For example: a voice recording waveform, listening to music, the sound of your school bell, voice communication." },
          ],
        },
      ],
    },
    {
      id: "ai2-collecting",
      heading: "Collecting Data",
      page: { sh: [63, 64] },
      blocks: [
        { kind: "p", text: "Collecting data means gathering information from people, books, the internet, or instruments to support analysis and making correct decisions." },
        {
          kind: "list",
          title: "Common sources are:",
          items: [
            "People: Asking questions or surveys",
            "Books: Reading facts or information",
            "Internet: Searching for information online",
            "Instruments: Thermometer (for temperature), clock (for time), scale (for weight)",
          ],
        },
        {
          kind: "list",
          title: "Examples of Data Collection",
          items: [
            "Counting the total number of plants in the school premises",
            "Asking your classmates about their hobbies and writing down their answers",
            "Measuring your plant's height every week to see how it grows",
          ],
        },
        { kind: "p", text: "This is how we collect data to learn or compare things." },
      ],
    },
    {
      id: "ai2-organising",
      heading: "Organising Data",
      page: { sh: 64 },
      blocks: [
        {
          kind: "p",
          text: "Organising data is the process of arranging, sorting, and classifying raw data into a logical, usable format. Remember, effective data organisation is important for finding, retrieving, sharing, and maintaining files to avoid loss or accidental disclosure.",
        },
        {
          kind: "terms",
          items: [
            { term: "Classification", text: "Grouping of similar kinds of data" },
            { term: "Structuring", text: "Arranging data into separate folders or a tabular format" },
            { term: "Labelling", text: "Giving correct, clear, and descriptive names" },
            { term: "Storage", text: "Saving data in appropriate and secure systems" },
          ],
        },
        {
          kind: "example",
          title: "For example, organising a desktop:",
          lines: [
            "A student has saved 50 images randomly on the desktop.",
            "He needs to find an image for his science project.",
            "Now he understands the importance of organising data.",
          ],
        },
      ],
    },
    {
      id: "ai2-representing",
      heading: "Representing Data",
      page: { sh: [65, 68] },
      blocks: [
        {
          kind: "p",
          text: "Representing data means using tables and charts for accurate details and for visual comparisons. Tables organise information in rows and columns, while bar charts compare categories using proportional rectangular bars, and pictograms use symbols to represent data, thereby making complex data easy to understand.",
        },
        {
          kind: "terms",
          items: [
            { term: "Using Tables — Objective", text: "Tables arrange data in rows and columns so that it is simple to read and find specific values." },
            { term: "Structure", text: "Each cell has data that consists of categories in columns and subcategories in rows." },
            { term: "Benefits", text: "Excellent for comprehensive information and when exact numbers matter more than trends." },
          ],
        },
        {
          kind: "example",
          title: "Family Kitchen Menu",
          lines: [
            "The Scenario: In a big family, everyone has different food preferences. The person managing the kitchen is getting confused with everyone’s choices. You have been asked to organise the meal details in a table so that everything runs smoothly.",
            "The Data: Grandfather prefers soft chapatis with dal and a glass of warm milk. Grandmother likes vegetable khichdi and a cup of tea. Father wants rice, curds, and a glass of buttermilk. Mother prefers salad, soup, and fresh juice. Brother asked for a sandwich and a health drink. Sister wants spinach rice and a glass of lemonade.",
            "The Task: Organise this information into a neat table with the columns Family Member, Food Item, Drink Item.",
          ],
        },
        {
          kind: "table",
          caption: "The Table",
          head: ["Family Member", "Food Item", "Drink Item"],
          rows: [
            ["Grandfather", "Chapati and Dal", "Warm Milk"],
            ["Grandmother", "Khichdi", "Tea"],
            ["Father", "Rice and Curds", "Buttermilk"],
            ["Mother", "Salad & Soup", "Fresh Juice"],
            ["Brother", "Sandwich", "Health Drink"],
            ["Sister", "Spinach Rice", "Lemonade"],
          ],
        },
        {
          kind: "terms",
          items: [
            { term: "Using Charts — Objective", text: "Charts transform numbers into pictures so you can see patterns, trends, and make quick comparisons." },
            { term: "Key Principle", text: "The main idea is to plot data on coordinate axes, with the X-axis for categories and the Y-axis for values." },
            { term: "Types", text: "Bar charts, line graphs, pie charts, scatter plots, and pictograms are some of the common charts." },
            { term: "Bar Charts — Objectives", text: "Uses rectangular bars, which can be vertical or horizontal, where the length or the height is proportional to the value." },
            { term: "Components", text: "X-axis (categories), Y-axis (values/frequency), uniform bar width, and spacing." },
            { term: "Use", text: "Excellent for comparing discrete categories (for example, sales by product)." },
          ],
        },
        {
          kind: "example",
          title: "The Lemonade",
          lines: [
            "The Scenario: Two friends, Aana and Sana, start a business of selling Lemonade. They sell three things at their school fair: Regular Lemonade, Strawberry Lemonade and Lemon Cookies. They want to know which item sold the most so that they can make more of it next time. You are in charge of their business. To understand the sales, you need to make a bar chart.",
            "The Task: Create a bar chart that shows how many of each product were sold in total. Label the X-axis with Products and the Y-axis with Number Sold. Give the chart a business title.",
          ],
        },
        {
          kind: "table",
          caption: "The Sales Data (Monday to Friday)",
          head: ["Product", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "TOTAL"],
          rows: [
            ["Regular Lemonade", "10", "8", "12", "15", "20", "65"],
            ["Strawberry Lemonade", "5", "7", "10", "12", "18", "52"],
            ["Lemon Cookies", "8", "10", "15", "20", "25", "78"],
          ],
        },
        { kind: "figure", figure: { id: "ai2-lemonade-chart", page: { sh: 67 }, alt: "Horizontal stacked bar chart titled THE LEMONADE showing each product’s daily sales and total: Lemon Cookies 78, Strawberry Lemonade 52, Regular Lemonade 65." } },
        {
          kind: "terms",
          items: [
            { term: "Pictograms — Objectives", text: "Uses pictures or symbols to represent data quantities." },
            { term: "Components", text: "A clear title, a key that explains what each picture means (for example, 1 image = 100 people), and evenly spaced, same-sized pictures." },
            { term: "Benefits", text: "Great for simple data sets, as they are fun and easy to use." },
          ],
        },
        {
          kind: "example",
          title: "The Eco Club Plantation Drive",
          lines: [
            "The Scenario: It was the Environment Week, and the Park Valley School Eco Club planned a tree-planting drive and students from Classes 6 to 9 participated enthusiastically. The school Principal wanted to know which class planted the most trees so they can be recognised during assembly. You are in charge of presenting the data. To understand the plantation results, you need to create a pictogram.",
            "The Task: Create a pictogram showing how many trees each class planted. Add a clear title. Add a key so everyone knows what one tree symbol means. Identify which class is the winner.",
          ],
        },
        {
          kind: "table",
          caption: "The Plantation Data",
          head: ["Class", "Trees Planted"],
          rows: [
            ["Class 6", "20"],
            ["Class 7", "15"],
            ["Class 8", "25"],
            ["Class 9", "10"],
          ],
        },
        {
          kind: "table",
          caption: "Pictogram: The Eco Club Plantation Drive (Key: 1 tree symbol = 5 trees)",
          head: ["Class", "Trees Planted (symbols)", "Position"],
          rows: [
            ["Class 6", "4", "2nd"],
            ["Class 7", "3", "3rd"],
            ["Class 8", "5", "Winner"],
            ["Class 9", "2", "4th"],
          ],
        },
      ],
    },
  ],
  pointsToRemember: [
    "Data is information we collect, such as numbers, words, pictures, or sounds, which helps us understand things and make better decisions.",
    "Data can be numerical (numbers), text (words), image (pictures), or sound (audio).",
    "Data is collected from various sources like surveys, observations, schools, hospitals, and weather reports.",
    "Data is arranged neatly in rows and columns using tables to make it easy to read and understand.",
    "Data can be shown clearly using tables, bar charts, and simple pictorial representations.",
  ],
  exercise: {
    page: { sh: [68, 69], th: [101, 103] },
    mcq: [
      { id: "ai2-mcq1", prompt: "A teacher analyses last year’s exam results to improve teaching methods. This is an example of:", options: [{ key: "a", text: "Guesswork" }, { key: "b", text: "Using data for decision-making" }, { key: "c", text: "Random selection" }, { key: "d", text: "Entertainment" }], answer: "b" },
      { id: "ai2-mcq2", prompt: "A fitness app counts your daily steps and shows weekly progress. What type of data is mainly collected?", options: [{ key: "a", text: "Image data" }, { key: "b", text: "Text data" }, { key: "c", text: "Numerical data" }, { key: "d", text: "Sound data" }], answer: "c" },
      { id: "ai2-mcq3", prompt: "A weather app predicts rain using satellite information. This shows that data helps in:", options: [{ key: "a", text: "Playing games" }, { key: "b", text: "Making future predictions" }, { key: "c", text: "Writing stories" }, { key: "d", text: "Sending messages" }], answer: "b" },
      { id: "ai2-mcq4", prompt: "A security camera records activities at the school gate. What type of data is mainly collected?", options: [{ key: "a", text: "Text data" }, { key: "b", text: "Video data" }, { key: "c", text: "Image data" }, { key: "d", text: "Numerical data" }], answer: "b" },
      { id: "ai2-mcq5", prompt: "Which of the following is an example of image data?", options: [{ key: "a", text: "Your name" }, { key: "b", text: "Your address" }, { key: "c", text: "Your age" }, { key: "d", text: "Your photograph" }], answer: "d" },
    ],
    fillBlanks: [
      { id: "ai2-fb1", text: "Data means raw ____ and figures.", answer: "facts" },
      { id: "ai2-fb2", text: "Tables arrange data in rows and ____.", answer: "columns" },
      { id: "ai2-fb3", text: "Text data is made up of letters, words, and ____.", answer: "sentences" },
      { id: "ai2-fb4", text: "Grouping similar kinds of data is called ____.", answer: "classification" },
      { id: "ai2-fb5", text: "Saving data in secure systems is known as ____.", answer: "storage" },
    ],
    shortAnswer: [
      { id: "ai2-sa1", prompt: "What is data?", answer: ["Data is raw information that can be processed to get useful information."] },
      { id: "ai2-sa2", prompt: "State any two important aspects of data in daily life.", answer: ["Helps in decision making", "Helps in business growth"] },
      { id: "ai2-sa3", prompt: "Name the four main types of data.", answer: ["Numerical", "Text", "Image", "Sound"] },
      { id: "ai2-sa4", prompt: "What is the difference between a table and a chart?", answer: ["Table → rows and columns", "Chart → graphical representation"] },
      { id: "ai2-sa5", prompt: "Define classification and labelling in organising data.", answer: ["Classification: grouping similar data", "Labelling: giving proper names to data"] },
    ],
    thinkApply: {
      questions: [
        { id: "ai2-ta1", prompt: "A student measures the height of a plant every week. What type of data is being collected?", answer: ["Numerical data"] },
        { id: "ai2-ta2", prompt: "A teacher wants to compare the marks of students clearly. Should she use a table or a bar chart? Give one reason.", answer: ["Bar chart. Reason: easier comparison"] },
        { id: "ai2-ta3", prompt: "A shopping app suggests products based on your previous searches. How is data being used in this situation?", answer: ["Data used to give recommendations"] },
        { id: "ai2-ta4", prompt: "Your desktop has many mixed files with random names.", answer: ["Organising data into folders"] },
      ],
    },
    table: {
      title: "Identify the type of data.",
      head: ["Example", "Type of Data"],
      rows: [
        { item: "Exam Marks", answer: "Numerical" },
        { item: "A voice message", answer: "Sound" },
        { item: "School ID photo", answer: "Image" },
        { item: "Your home address", answer: "Text" },
        { item: "Number of students in the class", answer: "Numerical" },
      ],
    },
  },
  handbookNotes: [
    "Exercise E (SH p. 69, TH pp. 102–103) is headed “Classify the following as AI or Automation.” but the table asks for the Type of Data; shown here as “Identify the type of data.”",
    "Exercise D4 (SH p. 69) has no question, only the situation “Your desktop has many mixed files with random names.” TH answer: “Organising data into folders”.",
    "The SH types section lists five types (numerical, text, image, video, sound); the exercise and points to remember use four (numerical, text, image, sound).",
    "SH p. 66 says “You are the incharge”; shown as “You are in charge”.",
  ],
};
