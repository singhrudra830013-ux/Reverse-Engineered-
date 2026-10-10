/**
 * skillDetails.js
 *
 * Beginner-friendly descriptions, resources, and learning guidance for every
 * skill node across all supported career roadmaps.
 *
 * Keys must match the node IDs defined in roadmapData.js exactly.
 *
 * Each entry contains:
 *   label       — display name (mirrors node label for reference)
 *   explanation — plain-English description of what the skill is
 *   whyMatters  — why this skill is important for the career
 *   prereqNames — human-readable prerequisite skill names (for display only)
 *   sequence    — recommended learning steps
 *   miniProject — a practical hands-on task
 *   resources   — max 3 free resources with real, verified URLs
 */

export const SKILL_DETAILS = {

  // ── SOFTWARE ENGINEER ───────────────────────────────────────────────────

  'swe-prog': {
    label: 'Programming Fundamentals',
    explanation: 'The core concepts every programmer must know: variables, data types, loops, conditionals, and functions. Think of it as the grammar of coding.',
    whyMatters: 'Without these basics, no other programming topic makes sense. Every software engineering role assumes you know them.',
    prereqNames: [],
    sequence: ['Learn what variables and data types are', 'Practice loops (for, while)', 'Write simple functions', 'Solve 10 beginner problems on a coding site'],
    miniProject: 'Write a program that asks the user for their name and age, then prints a personalised greeting and tells them what year they were born.',
    resources: [
      { title: 'CS50 Introduction to Computer Science (Harvard)', url: 'https://cs50.harvard.edu/x/' },
      { title: 'Python for Everybody — Coursera (free audit)', url: 'https://www.coursera.org/specializations/python' },
      { title: 'freeCodeCamp — JavaScript Algorithms', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/' },
    ],
  },

  'swe-java': {
    label: 'Java Basics',
    explanation: 'Java is one of the most widely used languages in enterprise software. You\'ll learn its syntax, types, classes, and how the JVM runs your code.',
    whyMatters: 'Many companies (especially in banking, fintech, and Android) use Java heavily. It also teaches disciplined OOP thinking.',
    prereqNames: ['Programming Fundamentals'],
    sequence: ['Install JDK and write Hello World', 'Learn Java types and control flow', 'Understand methods and arrays', 'Practice basic I/O'],
    miniProject: 'Build a simple bank account simulator: deposit, withdraw, and check balance using a Java class.',
    resources: [
      { title: 'Java Programming and Software Engineering — Coursera', url: 'https://www.coursera.org/specializations/java-programming' },
      { title: 'Codecademy Learn Java', url: 'https://www.codecademy.com/learn/learn-java' },
      { title: 'Oracle Java Tutorials', url: 'https://docs.oracle.com/javase/tutorial/' },
    ],
  },

  'swe-oop': {
    label: 'Object-Oriented Programming',
    explanation: 'OOP organises code into objects — bundles of data and behaviour. The four pillars are encapsulation, inheritance, polymorphism, and abstraction.',
    whyMatters: 'Most real-world codebases are built with OOP. Interviews regularly test these concepts.',
    prereqNames: ['Java Basics'],
    sequence: ['Understand classes and objects', 'Practice encapsulation (getters/setters)', 'Learn inheritance and overriding', 'Apply polymorphism with interfaces'],
    miniProject: 'Model a simple library system: Book, Member, and Library classes with borrow and return methods.',
    resources: [
      { title: 'OOP in Java — GeeksforGeeks', url: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/' },
      { title: 'MIT OpenCourseWare 6.01', url: 'https://ocw.mit.edu/courses/6-01sc-introduction-to-electrical-engineering-and-computer-science-i-spring-2011/' },
    ],
  },

  'swe-dsa': {
    label: 'Data Structures & Algorithms',
    explanation: 'DSA teaches you how to store data efficiently (arrays, linked lists, trees, graphs) and solve problems with proven strategies (sorting, searching, dynamic programming).',
    whyMatters: 'Almost every technical interview at a software company tests DSA. It also makes your code run faster.',
    prereqNames: ['Object-Oriented Programming'],
    sequence: ['Master arrays and strings', 'Learn linked lists, stacks, and queues', 'Study trees and graphs', 'Practice 50 LeetCode problems'],
    miniProject: 'Implement a binary search tree with insert, search, and in-order traversal.',
    resources: [
      { title: 'NeetCode DSA Roadmap & Practice', url: 'https://neetcode.io/roadmap' },
      { title: 'Algorithms — Princeton (Coursera)', url: 'https://www.coursera.org/learn/algorithms-part1' },
      { title: 'LeetCode (free problems)', url: 'https://leetcode.com/' },
    ],
  },

  'swe-dbms': {
    label: 'DBMS',
    explanation: 'Database Management Systems handle how data is stored, queried, and managed. You\'ll learn relational databases, SQL, and concepts like normalisation and transactions.',
    whyMatters: 'Almost every application stores data. Engineers who understand databases write better backends and avoid performance pitfalls.',
    prereqNames: ['Data Structures & Algorithms'],
    sequence: ['Learn what a relational database is', 'Write basic SQL (SELECT, INSERT, UPDATE)', 'Understand JOINs and subqueries', 'Learn about indexing and transactions'],
    miniProject: 'Design and query a database for a student management system with tables for students, courses, and enrolments.',
    resources: [
      { title: 'SQLBolt — interactive SQL lessons', url: 'https://sqlbolt.com/' },
      { title: 'Database Management Essentials — Coursera', url: 'https://www.coursera.org/learn/database-management' },
    ],
  },

  'swe-os': {
    label: 'Operating Systems',
    explanation: 'OS concepts include processes, threads, memory management, file systems, and scheduling — how a computer runs multiple programs at once.',
    whyMatters: 'Deep OS knowledge helps you write efficient programs, debug hard issues, and ace system design interviews.',
    prereqNames: ['Data Structures & Algorithms'],
    sequence: ['Understand processes vs threads', 'Learn CPU scheduling algorithms', 'Study memory management and virtual memory', 'Explore file systems'],
    miniProject: 'Simulate a round-robin CPU scheduler in code that processes a queue of tasks with given burst times.',
    resources: [
      { title: 'Operating Systems: Three Easy Pieces (free book)', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/' },
      { title: 'CS162 Berkeley (lecture videos)', url: 'https://inst.eecs.berkeley.edu/~cs162/archives.html' },
    ],
  },

  'swe-networks': {
    label: 'Computer Networks',
    explanation: 'Learn how data travels across the internet: TCP/IP, DNS, HTTP, sockets, and the OSI model.',
    whyMatters: 'Backend and distributed systems work requires networking knowledge. It\'s also essential for security and cloud roles.',
    prereqNames: ['Data Structures & Algorithms'],
    sequence: ['Understand the OSI model layers', 'Learn IP addressing and subnets', 'Study TCP vs UDP', 'Explore HTTP and REST'],
    miniProject: 'Build a simple TCP echo server and client in Python or Java.',
    resources: [
      { title: 'Computer Networking: A Top-Down Approach (MIT OCW)', url: 'https://ocw.mit.edu/courses/6-829-computer-networks-fall-2002/' },
      { title: 'Beej\'s Guide to Network Programming', url: 'https://beej.us/guide/bgnet/' },
    ],
  },

  'swe-git': {
    label: 'Projects & Git',
    explanation: 'Git is the industry-standard version control system. Projects here means building real things that demonstrate your skills to employers.',
    whyMatters: 'Employers expect you to use Git. A portfolio of projects is often more persuasive than your degree.',
    prereqNames: ['DBMS', 'Operating Systems', 'Computer Networks'],
    sequence: ['Learn git init, add, commit, push', 'Practice branching and merging', 'Contribute to an open source project', 'Build 2–3 end-to-end projects'],
    miniProject: 'Build a REST API with a database backend, host it on GitHub with a clear README.',
    resources: [
      { title: 'Pro Git Book (free)', url: 'https://git-scm.com/book/en/v2' },
      { title: 'GitHub Skills', url: 'https://skills.github.com/' },
    ],
  },

  // ── DATA SCIENTIST ──────────────────────────────────────────────────────

  'ds-math': {
    label: 'Mathematics & Statistics',
    explanation: 'Descriptive stats, probability distributions, hypothesis testing, and linear algebra are the mathematical backbone of data science.',
    whyMatters: 'Without maths, you cannot understand why machine learning models work or when they fail.',
    prereqNames: [],
    sequence: ['Review descriptive statistics', 'Learn probability and Bayes\' theorem', 'Study hypothesis testing', 'Cover linear algebra basics'],
    miniProject: 'Analyse a public dataset (e.g. Titanic), compute mean/median/mode, and run a simple t-test.',
    resources: [
      { title: 'Khan Academy Statistics & Probability', url: 'https://www.khanacademy.org/math/statistics-probability' },
      { title: 'StatQuest with Josh Starmer (YouTube)', url: 'https://www.youtube.com/@statquest' },
    ],
  },

  'ds-python': {
    label: 'Python Programming',
    explanation: 'Python is the dominant language for data science. Learn syntax, functions, file I/O, and error handling.',
    whyMatters: 'Nearly all data science libraries (Pandas, NumPy, scikit-learn) are Python-first.',
    prereqNames: [],
    sequence: ['Learn Python syntax and types', 'Practice list comprehensions', 'Understand functions and modules', 'Learn exception handling'],
    miniProject: 'Write a script that reads a CSV file and prints summary statistics.',
    resources: [
      { title: 'Python for Everybody (Coursera)', url: 'https://www.coursera.org/specializations/python' },
      { title: 'Real Python tutorials', url: 'https://realpython.com/' },
    ],
  },

  'ds-pandas': {
    label: 'Pandas & NumPy',
    explanation: 'Pandas provides DataFrames for data manipulation; NumPy handles fast numerical arrays. Together they\'re the foundation of data processing in Python.',
    whyMatters: 'Every data science workflow starts with loading, cleaning, and exploring data — Pandas and NumPy are the standard tools for this.',
    prereqNames: ['Python Programming', 'Mathematics & Statistics'],
    sequence: ['Create and index DataFrames', 'Clean missing values', 'Group, merge, and reshape data', 'Use NumPy for array operations'],
    miniProject: 'Load a real-world dataset, clean it, and produce a summary table grouped by a categorical column.',
    resources: [
      { title: 'Pandas official 10-minute tutorial', url: 'https://pandas.pydata.org/docs/user_guide/10min.html' },
      { title: 'NumPy quickstart', url: 'https://numpy.org/doc/stable/user/quickstart.html' },
    ],
  },

  'ds-viz': {
    label: 'Data Visualisation',
    explanation: 'Transform numbers into charts and graphs using Matplotlib, Seaborn, or Plotly to communicate insights clearly.',
    whyMatters: 'Data only drives decisions when stakeholders can understand it. Good visualisations tell the story.',
    prereqNames: ['Python Programming'],
    sequence: ['Create line charts and bar plots', 'Build heatmaps and scatter plots', 'Learn colour and labelling best practices', 'Make an interactive chart with Plotly'],
    miniProject: 'Visualise a year\'s worth of sales data: monthly trend line, top 5 products bar chart, and a correlation heatmap.',
    resources: [
      { title: 'Matplotlib tutorials', url: 'https://matplotlib.org/stable/tutorials/index.html' },
      { title: 'Plotly Express gallery', url: 'https://plotly.com/python/plotly-express/' },
    ],
  },

  'ds-sql': {
    label: 'SQL & Databases',
    explanation: 'Query relational databases to extract the data you need for analysis.',
    whyMatters: 'Most company data lives in SQL databases. Data scientists who can\'t write SQL are blocked at the first step.',
    prereqNames: ['Pandas & NumPy', 'Data Visualisation'],
    sequence: ['Write SELECT, WHERE, ORDER BY', 'Use GROUP BY and aggregate functions', 'Master JOINs', 'Practise window functions'],
    miniProject: 'Query a sample e-commerce database to find the top 10 customers by revenue.',
    resources: [
      { title: 'SQLBolt', url: 'https://sqlbolt.com/' },
      { title: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/' },
    ],
  },

  'ds-ml': {
    label: 'Machine Learning Basics',
    explanation: 'Supervised and unsupervised learning: regression, classification, clustering, and the bias-variance tradeoff.',
    whyMatters: 'ML is the core value-driver in data science. Without it you\'re doing data analysis, not data science.',
    prereqNames: ['SQL & Databases', 'Mathematics & Statistics'],
    sequence: ['Learn linear and logistic regression', 'Train a decision tree', 'Try k-means clustering', 'Evaluate models with train/test split'],
    miniProject: 'Train a classification model to predict housing price categories using the California Housing dataset.',
    resources: [
      { title: 'Machine Learning — Andrew Ng (Coursera)', url: 'https://www.coursera.org/specializations/machine-learning-introduction' },
      { title: 'scikit-learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html' },
    ],
  },

  'ds-feature': {
    label: 'Feature Engineering',
    explanation: 'Transforming raw data into features that help models learn better: encoding, scaling, creating new columns, and selecting the most useful variables.',
    whyMatters: 'Better features often matter more than a fancier algorithm. Feature engineering separates good models from great ones.',
    prereqNames: ['Machine Learning Basics'],
    sequence: ['One-hot encode categorical variables', 'Scale numerical features', 'Create interaction terms', 'Use feature importance to prune variables'],
    miniProject: 'Take the Titanic dataset and engineer at least 3 new features, then compare model accuracy before and after.',
    resources: [
      { title: 'Feature Engineering for Machine Learning — O\'Reilly (preview)', url: 'https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/' },
      { title: 'Kaggle Feature Engineering course', url: 'https://www.kaggle.com/learn/feature-engineering' },
    ],
  },

  'ds-eval': {
    label: 'Model Evaluation & Tuning',
    explanation: 'Cross-validation, hyperparameter tuning, confusion matrices, precision/recall, and ROC curves — making sure your model actually works.',
    whyMatters: 'A model that looks good on training data but fails on new data is useless. Proper evaluation prevents this.',
    prereqNames: ['Machine Learning Basics'],
    sequence: ['Understand train/validation/test split', 'Use k-fold cross-validation', 'Tune hyperparameters with GridSearchCV', 'Read confusion matrices and ROC curves'],
    miniProject: 'Compare three classifiers (logistic regression, random forest, SVM) on the same dataset using 5-fold CV and report F1 scores.',
    resources: [
      { title: 'scikit-learn Model Evaluation', url: 'https://scikit-learn.org/stable/modules/model_evaluation.html' },
    ],
  },

  'ds-deep': {
    label: 'Deep Learning Fundamentals',
    explanation: 'Neural networks, backpropagation, activation functions, and how libraries like TensorFlow/Keras make training tractable.',
    whyMatters: 'Deep learning powers image recognition, NLP, and many modern AI products. Understanding it opens up advanced roles.',
    prereqNames: ['Machine Learning Basics'],
    sequence: ['Understand neurons and layers', 'Train a simple neural net with Keras', 'Learn about overfitting and dropout', 'Experiment with CNNs on image data'],
    miniProject: 'Train a neural network on the MNIST handwritten digit dataset and reach at least 97% accuracy.',
    resources: [
      { title: 'Deep Learning Specialization — Coursera', url: 'https://www.coursera.org/specializations/deep-learning' },
      { title: 'fast.ai Practical Deep Learning', url: 'https://course.fast.ai/' },
    ],
  },

  'ds-project': {
    label: 'End-to-End DS Projects',
    explanation: 'Combine everything: data collection, cleaning, EDA, modelling, evaluation, and presenting results to stakeholders.',
    whyMatters: 'Employers want to see you can deliver a complete analysis, not just run isolated code cells.',
    prereqNames: ['Feature Engineering', 'Model Evaluation & Tuning', 'Deep Learning Fundamentals'],
    sequence: ['Pick a real dataset from Kaggle', 'Document your EDA in a Jupyter notebook', 'Train and evaluate at least two models', 'Present findings in a clear report or dashboard'],
    miniProject: 'Publish a complete end-to-end project on Kaggle or GitHub with a README explaining your methodology and findings.',
    resources: [
      { title: 'Kaggle Datasets', url: 'https://www.kaggle.com/datasets' },
      { title: 'Towards Data Science (Medium)', url: 'https://towardsdatascience.com/' },
    ],
  },

  // ── AI/ML ENGINEER ──────────────────────────────────────────────────────

  'ai-python': {
    label: 'Python Programming',
    explanation: 'Strong Python skills for writing efficient, maintainable ML pipelines.',
    whyMatters: 'Python is the lingua franca of AI/ML. All major frameworks are Python-first.',
    prereqNames: [],
    sequence: ['Master Python syntax', 'Learn list comprehensions and generators', 'Use virtual environments', 'Write clean, documented code'],
    miniProject: 'Build a command-line tool that downloads a dataset and prints its shape and first 5 rows.',
    resources: [
      { title: 'Real Python', url: 'https://realpython.com/' },
      { title: 'Python official tutorial', url: 'https://docs.python.org/3/tutorial/' },
    ],
  },

  'ai-math': {
    label: 'Linear Algebra & Calculus',
    explanation: 'Vectors, matrices, dot products, gradients, and the chain rule — the maths behind how neural networks learn.',
    whyMatters: 'Understanding backpropagation, gradient descent, and weight updates requires this maths.',
    prereqNames: [],
    sequence: ['Learn vectors and matrix multiplication', 'Understand eigenvalues and SVD', 'Review derivatives and the chain rule', 'Study gradient descent intuitively'],
    miniProject: 'Implement gradient descent from scratch to minimise a simple quadratic function.',
    resources: [
      { title: '3Blue1Brown — Essence of Linear Algebra (YouTube)', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' },
      { title: 'Khan Academy Calculus', url: 'https://www.khanacademy.org/math/calculus-1' },
    ],
  },

  'ai-ml': {
    label: 'Machine Learning Fundamentals',
    explanation: 'Supervised, unsupervised, and reinforcement learning paradigms, plus core algorithms and evaluation techniques.',
    whyMatters: 'The theoretical foundation that everything else in AI/ML is built on.',
    prereqNames: ['Python Programming', 'Linear Algebra & Calculus'],
    sequence: ['Learn regression and classification', 'Study ensemble methods', 'Practise with scikit-learn', 'Understand the bias-variance tradeoff'],
    miniProject: 'Build a complete ML pipeline from raw CSV to trained model with proper evaluation metrics.',
    resources: [
      { title: 'ML with Andrew Ng (Coursera)', url: 'https://www.coursera.org/specializations/machine-learning-introduction' },
    ],
  },

  'ai-dl': {
    label: 'Deep Learning & Neural Nets',
    explanation: 'Multi-layer networks, CNNs, RNNs, attention mechanisms, and how to train them at scale.',
    whyMatters: 'Deep learning is responsible for the current AI revolution — image, speech, and language all depend on it.',
    prereqNames: ['Machine Learning Fundamentals'],
    sequence: ['Understand forward and backward propagation', 'Train CNNs on image datasets', 'Learn RNNs for sequential data', 'Study the Transformer architecture'],
    miniProject: 'Fine-tune a pre-trained image classifier (e.g. ResNet on CIFAR-10) and achieve >90% accuracy.',
    resources: [
      { title: 'Deep Learning Specialization (Coursera)', url: 'https://www.coursera.org/specializations/deep-learning' },
      { title: 'fast.ai', url: 'https://course.fast.ai/' },
    ],
  },

  'ai-cv': {
    label: 'Computer Vision',
    explanation: 'Teaching machines to see: image classification, object detection, segmentation, and optical flow.',
    whyMatters: 'CV powers autonomous vehicles, medical imaging, and augmented reality.',
    prereqNames: ['Deep Learning & Neural Nets'],
    sequence: ['Learn image processing basics with OpenCV', 'Train a CNN image classifier', 'Study YOLO for object detection', 'Explore image segmentation'],
    miniProject: 'Build a real-time face detection app using OpenCV and a pre-trained model.',
    resources: [
      { title: 'CS231n Stanford (lecture notes and videos)', url: 'https://cs231n.github.io/' },
    ],
  },

  'ai-nlp': {
    label: 'NLP & Text Processing',
    explanation: 'Tokenisation, embeddings, sentiment analysis, and language models — making sense of text data.',
    whyMatters: 'NLP underpins chatbots, search engines, translation, and content moderation.',
    prereqNames: ['Deep Learning & Neural Nets'],
    sequence: ['Learn tokenisation and text cleaning', 'Use word embeddings (Word2Vec, GloVe)', 'Fine-tune BERT for classification', 'Experiment with GPT-style generation'],
    miniProject: 'Build a sentiment classifier for product reviews using a pre-trained Hugging Face model.',
    resources: [
      { title: 'Hugging Face NLP Course', url: 'https://huggingface.co/learn/nlp-course/chapter1/1' },
    ],
  },

  'ai-frameworks': {
    label: 'ML Frameworks (PyTorch/TF)',
    explanation: 'PyTorch and TensorFlow are the two dominant deep learning frameworks. Learn tensors, autograd, and model training loops.',
    whyMatters: 'You need a framework to train anything beyond toy models efficiently on GPUs.',
    prereqNames: ['Deep Learning & Neural Nets'],
    sequence: ['Create tensors and basic ops in PyTorch', 'Write a custom training loop', 'Use DataLoader and transforms', 'Export models for inference'],
    miniProject: 'Train and save a PyTorch model, then write a separate inference script that loads it and makes predictions.',
    resources: [
      { title: 'PyTorch Tutorials (official)', url: 'https://pytorch.org/tutorials/' },
    ],
  },

  'ai-mlops': {
    label: 'MLOps & Model Deployment',
    explanation: 'Serving models in production: APIs, containerisation, monitoring, and CI/CD for ML pipelines.',
    whyMatters: 'A model that nobody can use is worthless. MLOps bridges research and production.',
    prereqNames: ['Computer Vision', 'NLP & Text Processing'],
    sequence: ['Wrap a model in a FastAPI endpoint', 'Containerise it with Docker', 'Deploy to a cloud service', 'Set up basic logging and monitoring'],
    miniProject: 'Deploy your sentiment classifier as a REST API on a free cloud platform and test it with Postman.',
    resources: [
      { title: 'Full Stack Deep Learning', url: 'https://fullstackdeeplearning.com/' },
    ],
  },

  'ai-eval': {
    label: 'Evaluation & Experimentation',
    explanation: 'A/B testing, experiment tracking with MLflow/W&B, and rigorous model comparison to make data-driven decisions about model improvements.',
    whyMatters: 'Without proper experimentation you\'re guessing. Structured evaluation is how teams decide which models go to production.',
    prereqNames: ['ML Frameworks (PyTorch/TF)'],
    sequence: ['Track experiments with MLflow', 'Compare metrics across runs', 'Design a proper A/B test', 'Document and share results'],
    miniProject: 'Run 5 hyperparameter experiments, log them all with MLflow, and produce a comparison table.',
    resources: [
      { title: 'MLflow documentation', url: 'https://mlflow.org/docs/latest/index.html' },
      { title: 'Weights & Biases tutorials', url: 'https://docs.wandb.ai/' },
    ],
  },

  'ai-project': {
    label: 'AI Research / Product Build',
    explanation: 'Apply everything end-to-end: problem definition, data pipeline, model development, deployment, and iteration.',
    whyMatters: 'This is what AI/ML engineers are actually hired to do.',
    prereqNames: ['MLOps & Model Deployment', 'Evaluation & Experimentation'],
    sequence: ['Define a real problem with measurable success criteria', 'Build data pipeline and baseline', 'Iterate on model with tracked experiments', 'Deploy and present the result'],
    miniProject: 'Build and deploy a complete AI product (e.g. image captioning, text summariser) and write a technical blog post about it.',
    resources: [
      { title: 'Papers With Code', url: 'https://paperswithcode.com/' },
    ],
  },

  // ── WEB DEVELOPER ───────────────────────────────────────────────────────

  'web-html': {
    label: 'HTML & Semantic Markup',
    explanation: 'HTML is the skeleton of every web page. Semantic HTML means using the right element for the right purpose — headings, sections, articles, forms.',
    whyMatters: 'Good HTML is the foundation of accessible, SEO-friendly web pages.',
    prereqNames: [],
    sequence: ['Learn basic tags: h1–h6, p, a, img, ul', 'Understand semantic elements', 'Build a complete HTML-only page', 'Validate your HTML'],
    miniProject: 'Build a personal portfolio page using only HTML, with correct semantic structure and no inline styles.',
    resources: [
      { title: 'MDN HTML Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML' },
      { title: 'freeCodeCamp Responsive Web Design', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' },
    ],
  },

  'web-css': {
    label: 'CSS & Responsive Design',
    explanation: 'CSS controls how pages look. Flexbox and CSS Grid enable responsive layouts that adapt to any screen size.',
    whyMatters: 'Users access websites on phones, tablets, and desktops. Responsive design is a must.',
    prereqNames: [],
    sequence: ['Learn selectors and the box model', 'Master Flexbox', 'Learn CSS Grid', 'Add media queries for responsiveness'],
    miniProject: 'Style your HTML portfolio with a responsive layout that works on both mobile and desktop.',
    resources: [
      { title: 'Flexbox Froggy (game)', url: 'https://flexboxfroggy.com/' },
      { title: 'CSS Grid Garden (game)', url: 'https://cssgridgarden.com/' },
      { title: 'MDN CSS Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS' },
    ],
  },

  'web-js': {
    label: 'JavaScript Fundamentals',
    explanation: 'JavaScript makes pages interactive. Learn the language: types, functions, closures, promises, and the event loop.',
    whyMatters: 'JS is the only programming language that runs natively in browsers — essential for any web developer.',
    prereqNames: ['HTML & Semantic Markup', 'CSS & Responsive Design'],
    sequence: ['Learn variables, functions, and control flow', 'Understand the DOM', 'Work with arrays and objects', 'Grasp async/await and fetch'],
    miniProject: 'Build a to-do list app: add items, mark complete, delete, and save to localStorage.',
    resources: [
      { title: 'javascript.info', url: 'https://javascript.info/' },
      { title: 'freeCodeCamp JavaScript', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/' },
    ],
  },

  'web-dom': {
    label: 'DOM & Browser APIs',
    explanation: 'The Document Object Model is how JavaScript reads and modifies the HTML on a page. Browser APIs add geolocation, storage, and more.',
    whyMatters: 'Every interactive UI you\'ll ever build manipulates the DOM.',
    prereqNames: ['JavaScript Fundamentals'],
    sequence: ['Select and modify elements', 'Listen for and respond to events', 'Use fetch to call APIs', 'Explore localStorage and sessionStorage'],
    miniProject: 'Build a weather widget that fetches data from a public API and updates the DOM dynamically.',
    resources: [
      { title: 'MDN DOM Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction' },
    ],
  },

  'web-react': {
    label: 'React (or Vue / Angular)',
    explanation: 'React is a JavaScript library for building component-based UIs. Learn JSX, props, state, hooks, and the component lifecycle.',
    whyMatters: 'React is the most in-demand frontend skill. Component-based thinking scales to large applications.',
    prereqNames: ['DOM & Browser APIs'],
    sequence: ['Set up a project with Vite', 'Write functional components with JSX', 'Manage state with useState and useEffect', 'Build a multi-component app'],
    miniProject: 'Build a GitHub profile viewer: input a username, fetch their repos from the GitHub API, and display them in cards.',
    resources: [
      { title: 'React official tutorial (react.dev)', url: 'https://react.dev/learn' },
      { title: 'Scrimba React course', url: 'https://scrimba.com/learn/learnreact' },
    ],
  },

  'web-git': {
    label: 'Git & Version Control',
    explanation: 'Git tracks changes to your code. GitHub hosts it and enables collaboration.',
    whyMatters: 'Every professional developer uses Git daily. It\'s non-negotiable.',
    prereqNames: ['DOM & Browser APIs'],
    sequence: ['Learn init, add, commit, push', 'Practice branching and merging', 'Resolve a merge conflict', 'Collaborate on a shared repo'],
    miniProject: 'Contribute a meaningful change to any public GitHub repository via a pull request.',
    resources: [
      { title: 'Pro Git Book', url: 'https://git-scm.com/book/en/v2' },
      { title: 'GitHub Skills', url: 'https://skills.github.com/' },
    ],
  },

  'web-node': {
    label: 'Node.js & REST APIs',
    explanation: 'Node.js lets you run JavaScript on the server. You\'ll build REST APIs that the frontend can call.',
    whyMatters: 'Full-stack web developers are far more employable. Node bridges the frontend and backend.',
    prereqNames: ['React (or Vue / Angular)', 'Git & Version Control'],
    sequence: ['Learn Node.js basics and npm', 'Build a REST API with Express', 'Handle routes, middleware, and errors', 'Connect to a database'],
    miniProject: 'Build a CRUD REST API for a task manager with Express and test it with Postman.',
    resources: [
      { title: 'Node.js official docs', url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs' },
      { title: 'The Odin Project — NodeJS', url: 'https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs' },
    ],
  },

  'web-db': {
    label: 'Databases (SQL / NoSQL)',
    explanation: 'SQL databases (PostgreSQL, MySQL) store structured data. NoSQL (MongoDB) is flexible for document-based storage.',
    whyMatters: 'Applications almost always persist data. Knowing databases makes you a complete developer.',
    prereqNames: ['React (or Vue / Angular)', 'Git & Version Control'],
    sequence: ['Learn SQL basics', 'Set up PostgreSQL and run queries', 'Try MongoDB for a document-based project', 'Connect a database to your Node API'],
    miniProject: 'Add persistent storage to your task manager API using PostgreSQL.',
    resources: [
      { title: 'SQLBolt', url: 'https://sqlbolt.com/' },
      { title: 'MongoDB University (free)', url: 'https://learn.mongodb.com/' },
    ],
  },

  'web-deploy': {
    label: 'Deployment & DevOps Basics',
    explanation: 'Get your app running in the cloud: hosting, CI/CD pipelines, environment variables, and basic monitoring.',
    whyMatters: 'An app nobody can visit is just a local file. Deployment is how you share your work with the world.',
    prereqNames: ['Node.js & REST APIs', 'Databases (SQL / NoSQL)'],
    sequence: ['Deploy a frontend to Vercel or Netlify', 'Deploy a backend to Railway or Render', 'Set up a GitHub Actions CI/CD pipeline', 'Use environment variables safely'],
    miniProject: 'Deploy your full-stack task manager app with automated deployments on every push to main.',
    resources: [
      { title: 'Vercel deployment docs', url: 'https://vercel.com/docs' },
      { title: 'GitHub Actions quickstart', url: 'https://docs.github.com/en/actions/quickstart' },
    ],
  },

  // ── UX DESIGNER ─────────────────────────────────────────────────────────

  'ux-principles': {
    label: 'Design Principles & Theory',
    explanation: 'The core principles that make designs feel right: contrast, hierarchy, proximity, alignment, repetition, and Gestalt theory.',
    whyMatters: 'Principles guide every decision. Without them, designs feel arbitrary.',
    prereqNames: [],
    sequence: ['Study the CRAP principles', 'Learn Gestalt psychology for design', 'Analyse 5 well-designed products', 'Critique 5 poorly-designed products'],
    miniProject: 'Redesign a confusing UI (e.g. a government form page) applying design principles, and annotate your decisions.',
    resources: [
      { title: 'Nielsen Norman Group Articles', url: 'https://www.nngroup.com/articles/' },
      { title: 'Google UX Design Certificate (Coursera)', url: 'https://www.coursera.org/professional-certificates/google-ux-design' },
    ],
  },

  'ux-research': {
    label: 'User Research Methods',
    explanation: 'Interviews, surveys, usability tests, and analytics — how to understand what users actually need.',
    whyMatters: 'Building something users don\'t want is the #1 reason products fail. Research prevents this.',
    prereqNames: ['Design Principles & Theory'],
    sequence: ['Learn interview techniques', 'Run a 5-user usability test', 'Design and analyse a survey', 'Synthesise findings into insights'],
    miniProject: 'Interview 3 people about a task they find frustrating, synthesise findings, and write a one-page insights report.',
    resources: [
      { title: 'NN/g User Research Basics', url: 'https://www.nngroup.com/articles/which-ux-research-methods/' },
    ],
  },

  'ux-ia': {
    label: 'Information Architecture',
    explanation: 'Organising content and navigation so users can find what they need without confusion.',
    whyMatters: 'Poor IA is the root cause of most navigation failures in web and app design.',
    prereqNames: ['Design Principles & Theory'],
    sequence: ['Learn card sorting techniques', 'Create a site map', 'Design clear navigation patterns', 'Test your IA with tree testing'],
    miniProject: 'Redesign the navigation of a complex website (e.g. a university site) using card sorting results.',
    resources: [
      { title: 'IA Institute resources', url: 'https://www.iainstitute.org/resources' },
    ],
  },

  'ux-wire': {
    label: 'Wireframing & Sketching',
    explanation: 'Low-fidelity sketches and wireframes that explore layout ideas quickly without getting distracted by colour or detail.',
    whyMatters: 'Wireframing lets teams align on structure before investing in high-fidelity design.',
    prereqNames: ['User Research Methods'],
    sequence: ['Sketch 5 layout variations for a page', 'Create digital wireframes in Figma', 'Gather feedback and iterate', 'Document your decisions'],
    miniProject: 'Wireframe a mobile app onboarding flow (3–5 screens) based on research insights.',
    resources: [
      { title: 'Figma — Getting Started', url: 'https://help.figma.com/hc/en-us/articles/360039823654-Getting-started-with-Figma' },
    ],
  },

  'ux-proto': {
    label: 'Prototyping (Figma)',
    explanation: 'Clickable prototypes that simulate the user experience without writing code.',
    whyMatters: 'Prototypes let you test ideas with real users before building them, saving enormous development time.',
    prereqNames: ['Information Architecture'],
    sequence: ['Master Figma components and auto-layout', 'Build interactive flows with prototyping mode', 'Conduct a prototype usability test', 'Iterate based on findings'],
    miniProject: 'Build a high-fidelity, clickable Figma prototype of a mobile checkout flow and test it with 2 users.',
    resources: [
      { title: 'Figma Learn', url: 'https://www.figma.com/resource-library/design/' },
    ],
  },

  'ux-visual': {
    label: 'Visual Design & Typography',
    explanation: 'Colour theory, typography, spacing, and visual hierarchy — how to make interfaces look polished and on-brand.',
    whyMatters: 'First impressions are visual. Professional visual design builds trust and clarity.',
    prereqNames: ['Wireframing & Sketching', 'Prototyping (Figma)'],
    sequence: ['Learn colour theory and contrast (WCAG)', 'Master type scales and font pairing', 'Apply consistent spacing with an 8pt grid', 'Create a style guide'],
    miniProject: 'Create a visual identity (colour palette, typography, button styles) for a fictional startup.',
    resources: [
      { title: 'Refactoring UI (excerpts)', url: 'https://www.refactoringui.com/' },
      { title: 'Google Fonts', url: 'https://fonts.google.com/' },
    ],
  },

  'ux-test': {
    label: 'Usability Testing',
    explanation: 'Structured sessions where real users complete tasks while you observe — the gold standard for finding usability problems.',
    whyMatters: '5 user tests find 85% of usability problems. It\'s the highest ROI activity in UX.',
    prereqNames: ['Visual Design & Typography'],
    sequence: ['Write a test script and tasks', 'Recruit and run 5 participants', 'Note observations without guiding', 'Prioritise findings by severity'],
    miniProject: 'Run a usability test on your Figma prototype, document 5 issues, and propose design fixes for each.',
    resources: [
      { title: 'Usability Testing 101 — NN/g', url: 'https://www.nngroup.com/articles/usability-testing-101/' },
    ],
  },

  'ux-system': {
    label: 'Design Systems',
    explanation: 'A library of reusable components, patterns, and guidelines that keep a product consistent at scale.',
    whyMatters: 'Large products need consistency. A design system prevents every team from reinventing buttons.',
    prereqNames: ['Usability Testing'],
    sequence: ['Audit an existing product for inconsistencies', 'Define a component library in Figma', 'Document usage guidelines', 'Version and share the system'],
    miniProject: 'Build a mini design system for your startup identity: components for buttons, inputs, cards, and typography.',
    resources: [
      { title: 'Material Design 3', url: 'https://m3.material.io/' },
      { title: 'Design Systems Handbook', url: 'https://www.designbetter.co/design-systems-handbook' },
    ],
  },

  'ux-handoff': {
    label: 'Developer Handoff',
    explanation: 'Annotating designs, using Figma\'s Inspect panel, and communicating specs so developers can implement your designs accurately.',
    whyMatters: 'Poor handoff leads to designs being implemented incorrectly. Good handoff makes you an engineer\'s favourite designer.',
    prereqNames: ['Usability Testing'],
    sequence: ['Learn Figma\'s Dev Mode / Inspect panel', 'Add spacing and colour annotations', 'Write component notes', 'Review the implementation with a developer'],
    miniProject: 'Prepare a complete handoff package for your checkout flow prototype, including specs, assets, and interaction notes.',
    resources: [
      { title: 'Figma for Developers', url: 'https://www.figma.com/developers' },
    ],
  },

  // ── PRODUCT MANAGER ─────────────────────────────────────────────────────

  'pm-market': {
    label: 'Market & User Research',
    explanation: 'Competitive analysis, customer interviews, and market sizing — understanding the problem space before building anything.',
    whyMatters: 'PMs who build without research build the wrong thing. Research is the foundation of good product decisions.',
    prereqNames: [],
    sequence: ['Conduct 5 customer discovery interviews', 'Perform a competitor analysis', 'Calculate a rough market size (TAM/SAM/SOM)', 'Synthesise findings into a research report'],
    miniProject: 'Interview 5 potential users about a problem you want to solve, synthesise insights, and write a one-pager.',
    resources: [
      { title: 'The Mom Test (book summary)', url: 'https://www.momtestbook.com/' },
      { title: 'Lenny\'s Newsletter', url: 'https://www.lennysnewsletter.com/' },
    ],
  },

  'pm-strategy': {
    label: 'Product Strategy & Vision',
    explanation: 'Defining what you\'re building, why, for whom, and how it creates value — the north star that guides all product decisions.',
    whyMatters: 'Without strategy, every feature request looks equally important. Strategy creates focus.',
    prereqNames: [],
    sequence: ['Write a product vision statement', 'Define your target user persona', 'Map the value proposition', 'Align strategy to business goals'],
    miniProject: 'Write a one-page product strategy for an app you wish existed, including vision, target user, and 3 key outcomes.',
    resources: [
      { title: 'Good Strategy Bad Strategy (summary)', url: 'https://www.goodreads.com/book/show/11721966-good-strategy-bad-strategy' },
    ],
  },

  'pm-roadmap': {
    label: 'Roadmapping & Prioritisation',
    explanation: 'Building a product roadmap and choosing what to build next using frameworks like RICE, MoSCoW, and impact vs effort.',
    whyMatters: 'You can\'t build everything. Prioritisation is one of the most critical and contested PM skills.',
    prereqNames: ['Market & User Research', 'Product Strategy & Vision'],
    sequence: ['Learn RICE scoring (Reach × Impact × Confidence ÷ Effort)', 'Practice MoSCoW on a real backlog', 'Build a 3-month roadmap', 'Communicate it to stakeholders'],
    miniProject: 'Take a real product\'s feature backlog (or create one), score each item with RICE, and produce a roadmap.',
    resources: [
      { title: 'Lenny\'s Guide to Prioritisation', url: 'https://www.lennysnewsletter.com/p/how-to-prioritize' },
    ],
  },

  'pm-agile': {
    label: 'Agile & Scrum',
    explanation: 'Iterative development in sprints: standups, retrospectives, sprint planning, and working with engineering teams.',
    whyMatters: 'Most tech companies run on Agile. PMs who understand Scrum ceremonies work far better with engineers.',
    prereqNames: ['Roadmapping & Prioritisation'],
    sequence: ['Learn Scrum ceremonies (planning, review, retro, standup)', 'Write user stories with acceptance criteria', 'Run a 1-week sprint simulation', 'Learn Kanban as an alternative'],
    miniProject: 'Run a personal 2-week Agile sprint on a side project: plan, execute, review, and retrospect.',
    resources: [
      { title: 'Scrum Guide (official)', url: 'https://scrumguides.org/scrum-guide.html' },
    ],
  },

  'pm-spec': {
    label: 'Writing PRDs & User Stories',
    explanation: 'Product Requirements Documents and user stories communicate what to build clearly enough that engineers can act without daily hand-holding.',
    whyMatters: 'Ambiguous specs cause rework, delays, and frustration. Clear writing is a superpower for PMs.',
    prereqNames: ['Roadmapping & Prioritisation'],
    sequence: ['Learn PRD structure (problem, solution, requirements, metrics)', 'Write 10 user stories in "As a … I want … so that…" format', 'Add acceptance criteria', 'Get feedback from a developer'],
    miniProject: 'Write a full PRD for a new feature you\'d add to an existing app, including edge cases and success metrics.',
    resources: [
      { title: 'Figma / Notion PRD templates', url: 'https://www.notion.com/templates/product-requirements-document' },
    ],
  },

  'pm-ux': {
    label: 'UX Collaboration',
    explanation: 'Working effectively with designers: giving useful feedback on wireframes, facilitating design reviews, and balancing user needs with engineering constraints.',
    whyMatters: 'PMs are the bridge between users and builders. Great PMs amplify their designers.',
    prereqNames: ['Agile & Scrum'],
    sequence: ['Learn to give structured design feedback (critique, not opinion)', 'Facilitate a design review meeting', 'Understand basic accessibility (WCAG)', 'Run a joint user test with a designer'],
    miniProject: 'Give written critique on 3 live products using structured feedback, and propose one concrete improvement for each.',
    resources: [
      { title: 'NN/g Articles for Product Teams', url: 'https://www.nngroup.com/' },
    ],
  },

  'pm-data': {
    label: 'Data-Driven Decision Making',
    explanation: 'Using metrics, funnels, cohort analysis, and A/B tests to make product decisions backed by evidence rather than opinion.',
    whyMatters: 'Modern PMs are expected to define, measure, and improve metrics. Data literacy is table stakes.',
    prereqNames: ['Writing PRDs & User Stories'],
    sequence: ['Define a North Star metric and supporting metrics', 'Learn funnel analysis basics', 'Design an A/B test', 'Interpret statistical significance'],
    miniProject: 'Analyse a public product funnel dataset, identify the biggest drop-off point, and propose a hypothesis to fix it.',
    resources: [
      { title: 'Amplitude\'s Product Analytics Guide', url: 'https://amplitude.com/blog/product-analytics' },
    ],
  },

  'pm-launch': {
    label: 'Go-to-Market & Launch',
    explanation: 'Planning and executing a product launch: GTM strategy, positioning, messaging, launch checklist, and coordinating across teams.',
    whyMatters: 'A great product with a poor launch can fail. A mediocre product with a great launch can win.',
    prereqNames: ['UX Collaboration'],
    sequence: ['Write a positioning statement', 'Create a launch checklist', 'Brief sales and marketing teams', 'Set launch KPIs and monitor them'],
    miniProject: 'Write a complete launch plan for a new feature, including positioning, target segments, and a comms calendar.',
    resources: [
      { title: 'Reforge GTM resources', url: 'https://www.reforge.com/blog/go-to-market-strategy' },
    ],
  },

  'pm-metrics': {
    label: 'Metrics & OKRs',
    explanation: 'Setting Objectives and Key Results, defining success metrics, building dashboards, and using them to drive team focus.',
    whyMatters: 'What gets measured gets managed. OKRs align teams around outcomes, not output.',
    prereqNames: ['Data-Driven Decision Making'],
    sequence: ['Write 3 OKRs for a product team', 'Identify leading vs lagging indicators', 'Set up a simple dashboard in a tool like Amplitude', 'Run a weekly metrics review'],
    miniProject: 'Define quarterly OKRs for a product, identify the 3 metrics you\'d check daily, and explain why.',
    resources: [
      { title: 'Google\'s OKR Playbook', url: 'https://www.whatmatters.com/resources/googles-okr-playbook' },
    ],
  },

  'pm-leadership': {
    label: 'Stakeholder & Team Leadership',
    explanation: 'Influencing without authority, managing up, resolving conflicts, and aligning executives, engineers, designers, and sales around a shared goal.',
    whyMatters: 'PMs don\'t manage people, but they lead teams. Leadership skills determine whether your strategy actually gets built.',
    prereqNames: ['Go-to-Market & Launch', 'Metrics & OKRs'],
    sequence: ['Practice stakeholder mapping', 'Learn negotiation and alignment techniques', 'Run a conflict resolution simulation', 'Write an executive summary for a product decision'],
    miniProject: 'Prepare and deliver a 5-minute product strategy presentation to a non-technical audience.',
    resources: [
      { title: 'Inspired by Marty Cagan (summary)', url: 'https://www.goodreads.com/book/show/35249663-inspired' },
    ],
  },
};

/**
 * Get details for a skill node by its ID.
 * Returns null if no details are registered for that ID.
 *
 * @param {string} nodeId
 * @returns {object | null}
 */
export function getSkillDetails(nodeId) {
  return SKILL_DETAILS[nodeId] ?? null;
}
