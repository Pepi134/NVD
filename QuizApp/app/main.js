new Vue({
  el: '#app',
  data: {
    questions: [
      {
        question: 'What does "CPU" stand for in the context of computing?',
        options: ['Central Process Unit', 'Central Programming Unit', 'Central Processing Unit'],
        correctIndex: 2,
        image: 'https://img.freepik.com/free-vector/realistic-style-microchip-processor-background_52683-58932.jpg?w=1060&t=st=1694668487~exp=1694669087~hmac=4f9e4546e10a5200a3a5e38fee3af9fc6d59cecdeb092896d54e0e2a801b50b8',
        funFact: 'The Central Processing Unit (CPU) is the primary component of a computer that acts as its “control center.',
      },
      {
        question: 'Which programming language is often used for developing Android mobile apps?',
        options: ['Java', 'C#', 'Python'],
        correctIndex: 0,
        image: 'https://img.freepik.com/free-vector/modern-android-icon_1035-9121.jpg?size=626&ext=jpg&ga=GA1.2.493891790.1694668464&semt=sph',
        funFact: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      },
      {
          question: 'What does HTML stand for in web development?',
          options: ['Hyper Transfer Markup Language', 'Hyper Text Makeup Language', 'Hyper Text Markup Language'],
          correctIndex: 2,
          image: 'https://img.freepik.com/free-photo/html-system-websites-concept_23-2150323500.jpg?size=626&ext=jpg&ga=GA1.1.493891790.1694668464&semt=sph',
          funFact: 'HTML, in full hypertext markup language, a formatting system for displaying material retrieved over the Internet.',
        },
        {
          question: 'Which of the following is not a cloud computing service provided by Amazon Web Services (AWS)?',
          options: ['S3 (Simple Storage Service)', 'EC2 (Elastic Compute Cloud)', 'GCP (Google Cloud Platform)'],
          correctIndex: 2,
          image: 'https://img.freepik.com/free-vector/cloud-computing-polygonal-wireframe-technology-concept_1017-29594.jpg?size=626&ext=jpg&ga=GA1.1.493891790.1694668464&semt=sph',
          funFact: 'Google Cloud Platform (GCP) is a widely used cloud computing platform for several reasons, including their convenient, easy-to-use tools and services.',
        },
        {
          question: 'Which encryption protocol secures internet communication by providing secure connections over untrusted networks, such as public Wi-Fi?',
          options: ['HTTP', 'HTTPS ', 'FTP'],
          correctIndex: 1,
          image: 'https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg?size=626&ext=jpg&ga=GA1.1.493891790.1694668464&semt=ais',
          funFact: 'Hypertext Transfer Protocol Secure (HTTPS) is an extension of the Hypertext Transfer Protocol (HTTP).',
        },
        {
          question: 'What is the primary purpose of a firewall in network security?',
          options: ['To block all incoming and outgoing traffic', ' To monitor network activity', 'To filter and control network traffic'],
          correctIndex: 2,
          image: 'https://img.freepik.com/free-vector/internet-security-concept_1284-16813.jpg?size=626&ext=jpg&ga=GA1.1.493891790.1694668464&semt=sph',
          funFact: 'A firewall is essentially the barrier that sits between a private internal network and the public Internet',
        },
        {
          question: 'Which data structure follows the "Last In, First Out" (LIFO) principle?',
          options: ['Queue', 'Stack', 'Linked List'],
          correctIndex: 1,
          image: 'https://img.freepik.com/premium-vector/first-first-out-fifo-is-accounting-method-which-assets-purchased-acquired-first_518018-1915.jpg?size=626&ext=jpg&ga=GA1.1.493891790.1694668464&semt=sph',
          funFact: 'A stack is a logical concept that consists of a set of similar elements.',
        },
        {
          question: 'What is the term for a software program that replicates itself and spreads to other computers without user intervention?',
          options: ['Virus', 'Worm', 'Trojan Horse'],
          correctIndex: 1,
          image: 'https://img.freepik.com/free-vector/cyber-security-isometric-illustration_1284-55156.jpg?size=626&ext=jpg&ga=GA1.1.493891790.1694668464&semt=sph',
          funFact: 'A computer worm is a type of malware whose primary function is to self-replicate and infect other computers while remaining active on infected systems. ',
        },
        {
          question: 'In the context of databases, what does SQL stand for?',
          options: ['Structured Query Language ', 'Simple Query Logic', 'System Query Language'],
          correctIndex: 0,
          image: 'https://img.freepik.com/free-vector/abstract-technology-sql-illustration_23-2149238125.jpg?size=626&ext=jpg&ga=GA1.1.493891790.1694668464&semt=sph',
          funFact: 'Structured query language (SQL) is a programming language for storing and processing information in a relational database',
        },
        {
          question: 'Which open-source operating system is based on the Linux kernel and primarily used for mobile devices?',
          options: ['Windows', 'Android ', 'macOS'],
          correctIndex: 1,
          image: 'https://img.freepik.com/premium-photo/cute-adorable-penguin-character_608068-35324.jpg?size=626&ext=jpg&ga=GA1.1.493891790.1694668464&semt=sph',
          funFact: 'Android OS is a Linux-based mobile operating system that primarily runs on smartphones and tablets.',
        },
      
    ],
    currentQuestionIndex: 0,
        selectedOption: null,
        score: 0,
        initialTime: 10,
        timeLeft: 10,
        showQuiz: false,
        started: false,
        showingFunFact: false,
        showErrorMessage: false,
        timer: null, // Added timer variable
      },
      methods: {
        startQuiz() {
          this.started = true;
          this.showQuiz = true;
          this.resetTimer();
          this.startTimer();
        },
        startTimer() {
          this.timer = setInterval(() => {
            if (this.timeLeft > 0) {
              this.timeLeft--;
            } else {
              clearInterval(this.timer);
              if (this.selectedOption === null) {
                this.showingFunFact = true;
                setTimeout(() => {
                  this.showingFunFact = false;
                  this.nextQuestion();
                }, 5000);
              }
            }
          }, 1000);
        },
        selectOption(index) {
          if (this.selectedOption === null) {
            this.selectedOption = index;
            if (index === this.currentQuestion.correctIndex) {
              this.score++;
              this.showingFunFact = true;
              setTimeout(() => {
                this.showingFunFact = false;
                this.nextQuestion();
              }, 5000);
            } else {
              this.showErrorMessage = true;
              setTimeout(() => {
                this.showErrorMessage = false;
                this.nextQuestion();
              }, 1000);
            }
          }
        },
        nextQuestion() {
          if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.selectedOption = null;
            clearInterval(this.timer); // Clear the previous timer
            this.resetTimer();
            this.startTimer(); // Start a new timer for the next question
          } else {
            this.showQuiz = false;
          }
        },
        restartQuiz() {
          this.currentQuestionIndex = 0;
          this.selectedOption = null;
          this.score = 0;
          this.showQuiz = true;
          this.showingFunFact = false;
          this.showErrorMessage = false;
          clearInterval(this.timer); // Clear the previous timer when restarting
          this.resetTimer();
          this.startTimer();
        },
        resetTimer() {
          this.timeLeft = this.initialTime;
        },
      },
      computed: {
        currentQuestion() {
          return this.questions[this.currentQuestionIndex];
        },
      },
    });