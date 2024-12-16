const API_GET_QUESTION =
  "https://script.google.com/macros/s/AKfycbz599AE22hURwea1DJpOgbp2a86KnOP-Ym_qzIqvjLAKPF1oRfxYeO1t28OtdnJHuaI/exec";

// API FAKE
let questions = null;
let results = null;
// let questions = [
//   {
//     quiz_id: 1,
//     question:
//       "You can learn a lot about the local _______ by talking to local people.",
//     answers: ["trien", "territory", "land", "nation", "area"],
//   },
//   {
//     quiz_id: 2,
//     question:
//       "It's good to have someone to ________ you when you are visiting a new place.",
//     answers: ["lead", "take", "guide", "bring"],
//   },
//   {
//     quiz_id: 3,
//     question:
//       "When you ______ your destination, your tour guide will meet you at the airport.",
//     answers: ["arrive", "reach", "get", "achieve"],
//   },
//   {
//     quiz_id: 4,
//     question: "It can be quite busy here during the tourist ______",
//     answers: ["season", "phase", "period", "stage"],
//   },
//   {
//     quiz_id: 5,
//     question:
//       "Make sure you _______ a hotel before you come to our island, especially in the summer.",
//     answers: ["book", "keep", "put", "buy"],
//   },
//   {
//     quiz_id: 6,
//     question: "Captain Cook discovered Australia on a _______ to the Pacific.",
//     answers: ["vacation", "travel", "cruise", "voyage"],
//   },
//   {
//     quiz_id: 7,
//     question:
//       " Most tourist attractions in London charge an admission ________.",
//     answers: ["fare", "ticket", "fee", "pay"],
//   },
//   {
//     quiz_id: 8,
//     question: "The hotel where we are _______ is quite luxurious.",
//     answers: ["living", "existing", "remaining", "staying"],
//   },
//   {
//     quiz_id: 9,
//     question: "Is English an ________ language in your country?",
//     answers: ["mother", "official", "living", "old"],
//   },
//   {
//     quiz_id: 10,
//     question: "He spoke a ______ of French that we found hard to understand.",
//     answers: ["slang", "jargon", "dialect", "language"],
//   },
// ];
// let results = [
//   {
//     quiz_id: 1,
//     answer: "area",
//   },
//   {
//     quiz_id: 2,
//     answer: "guide",
//   },
//   {
//     quiz_id: 3,
//     answer: "reach",
//   },

//   {
//     quiz_id: 4,
//     answer: "season",
//   },
//   {
//     quiz_id: 5,
//     answer: "book",
//   },
//   {
//     quiz_id: 6,
//     answer: "voyage",
//   },
//   {
//     quiz_id: 7,
//     answer: "fee",
//   },
//   {
//     quiz_id: 8,
//     answer: "staying",
//   },
//   {
//     quiz_id: 9,
//     answer: "official",
//   },
//   {
//     quiz_id: 10,
//     answer: "dialect",
//   },
// ];

// function parseQuizData(input) {
//   let questions = [];
//   let results = [];
//   let questionId = 1;

//   //Get Question
//   const blocks = input.trim().split(/\n{2,}/); // Tách văn bản thành các khối, mỗi khối cách nhau bởi một hoặc nhiều dấu xuống dòng
//   blocks.forEach((block, index) => {
//     // console.log(`Khối ${index + 1}:`);
//     // console.log(block);
//     // console.log("-------------------");
//     const lines = block.split("\n"); // Tách văn bản thành mảng các dòng
//     let obj = {
//       quiz_id: questionId++,
//       question: lines[0].trim(),
//       answers: [],
//     };
//     for (let i = 1; i < lines.length; i++) {
//       //   console.log(lines[i]); // In từng dòng
//       if (lines[i].trim() !== "") obj.answers.push(lines[i].trim());
//     }
//     questions.push(obj);
//   });

//   // Get Result

//   for (let i = 0; i < questions.length; i++) {
//     let obj = {
//       quiz_id: questions[i].quiz_id,
//       answer: "",
//     };
//     for (let j = 0; j < questions[i].answers.length; j++) {
//       //   console.log(questions[i].answers[j]);
//       if (questions[i].answers[j].startsWith("*")) {
//         questions[i].answers[j] = questions[i].answers[j].slice(1);
//         obj.answer = questions[i].answers[j];
//       }
//     }
//     results.push(obj);
//   }

//   questions.forEach((item) => {
//     let obj = {
//       quiz_id: item.quiz_id,
//       answer: "",
//     };
//     // console.log(item);

//     item.answers.forEach((ans) => {
//       //   console.log(ans);
//       if (ans.startsWith("*")) {
//         ans = ans.slice(1);
//         obj.answer = ans;

//         // console.log("Chuỗi bắt đầu bằng dấu *.", ans);
//       }
//     });
//     results.push(obj);
//   });

//   return {
//     questions: questions,
//     results: results,
//   };
// }
// const btn = document.querySelector(".handle");
// const textarea = document.querySelector("#inputData");
// btn.addEventListener("click", () => {
//   // Chuyển đổi dữ liệu
//   //   let result = parseQuizData(input);
//   let input = textarea.value; // Lấy lại giá trị sau khi nhấn nút
//   //   console.log(input); // In giá trị của textarea khi nhấn nút
//   let result = parseQuizData(input);
//   console.log(result);
//   questions = result.questions;
//   results = result.results;
//   quiz.start();
// });

// APP

const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const quizQuestion = document.querySelector("#question");

// Lấy các phần tử cần thiết
const title = document.querySelector(".subject_title");
const dropdownWrap = document.querySelector(".dropdown_wrap");
const dropdownBtn = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownItems = document.querySelectorAll(".dropdown-content a");
const selectedOptionDisplay = document.getElementById("selected-option"); // Để hiển thị kết quả

const randomQuestion = document.querySelector("#randomQuestion");
const randomAnswer = document.querySelector("#RandomAnswer");

let quizAnswers = document.querySelectorAll(".wrap_question ul li");
const quizAnswerItems = document.querySelectorAll(
  ".wrap_question ul li .answer_item"
);
const overlay = document.querySelector(".overlay");
const submitForm = document.querySelector(".submit_form");
const submitFormIcon = document.querySelector(".submit_form-icon");
const submitFormTitle = document.querySelector(".submit_form-title");

const quizQuestionList = document.querySelector(".wrap_list ul");
const correctLabel = document.querySelector(".question_correct");
const incorrectLabel = document.querySelector(".question_incorrect");
const quizBtnNext = document.querySelector("#next");
const quizBtnPrev = document.querySelector("#prev");
const retryButton = document.querySelector("#retry");
const submitButton = document.querySelector("#submit");
const quizQuestionUl = document.querySelector(".wrap_question ul");
let quizQuestionItem = document.querySelectorAll(".wrap_list ul li");
let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId;
let currentIndex = null;
let switchQuestionTime = 0;
let listSelected = [];
let listAnswersStatus = [];
let correctCount = 0,
  incorrectCount = 0;

// Thêm sự kiện click vào overlay
overlay.addEventListener("click", function () {
  // Ẩn overlay và form khi click vào overlay
  overlay.style.display = "none";
  submitForm.style.display = "none";
});
submitFormIcon.addEventListener("click", function () {
  overlay.style.display = "none";
  submitForm.style.display = "none";
});

const quiz = {
  getData: async function () {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    const ranQues = params.get("ranQues");
    const ranAns = params.get("ranAns");
    const savedData = localStorage.getItem(slug);
    const data = JSON.parse(savedData);
    title.innerText = data.title;

    if (ranQues === "true") {
      questions = data.questions.sort(() => Math.random() - Math.random());
    }
    if (ranAns === "true") {
      data.questions.forEach((q) => {
        q.answers = q.answers.sort(() => Math.random() - Math.random());
      });
    }

    questions = data.questions;
    results = data.results;
    console.log(questions, results);
  },
  randomQuestion: function () {},
  handleClock: function () {
    // Cập nhật bộ đếm giờ
    function updateTimer() {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }

      // Cập nhật giờ, phút, giây trên màn hình
      hoursElement.textContent = hours < 10 ? "0" + hours : hours;
      minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
      secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
    }
    setInterval(updateTimer, 1000);
  },
  getValueDropList: function () {
    // Thêm sự kiện click cho nút dropdown
    dropdownWrap.addEventListener("click", function () {
      // Kiểm tra trạng thái hiện tại của dropdown content
      if (dropdownContent.style.display === "block") {
        // Nếu nó đang hiển thị, ẩn nó đi
        dropdownContent.style.display = "none";
      } else {
        // Nếu nó không hiển thị, hiển thị nó lên
        dropdownContent.style.display = "block";
      }
    });

    // Thêm sự kiện click cho các mục trong dropdown
    dropdownItems.forEach((item) => {
      item.addEventListener("click", function (event) {
        // Chặn hành động mặc định khi click vào link
        event.preventDefault();
        // Lấy giá trị của mục được chọn
        switchQuestionTime = item.getAttribute("data-value");
        if (switchQuestionTime != 0)
          dropdownBtn.innerText = switchQuestionTime + "s";
        else {
          dropdownBtn.innerText = "Tắt";
        }
        console.log(switchQuestionTime);
        // Ẩn dropdown khi đã chọn một mục
        dropdownContent.style.display = "none";
      });
    });

    // Đóng dropdown nếu click bên ngoài dropdown
    document.addEventListener("click", function (event) {
      if (
        !dropdownWrap.contains(event.target) &&
        !dropdownContent.contains(event.target)
      ) {
        dropdownContent.style.display = "none";
      }
    });
  },
  handleQuestionList: function () {
    quizQuestionItem.forEach((item, index) => {
      item.addEventListener("click", () => {
        quizQuestionItem.forEach((item) => {
          item.classList.remove("active");
        });
        item.classList.add("active");
        currentIndex = index;
        quiz.handleCurrentQuestion();
        const selected = listSelected[currentIndex];
        selected >= 0 && quizAnswers[selected].click();
      });
    });
    quizQuestionItem[0].click();
  },
  handleAnswerItem: function () {
    quizAnswers = document.querySelectorAll(".wrap_question ul li");
    quizAnswers.forEach((answer, index) => {
      answer.addEventListener("click", () => {
        // Check result
        if (listSelected[currentIndex] != null) {
          return;
        }
        const child = answer.querySelector(".answer_item");
        const trueAnswer =
          results[child.getAttribute("question-id") - 1].answer;
        if (answer.innerText == trueAnswer) {
          answer.classList.add("correct");
          ++correctCount;
          quizQuestionItem[currentIndex].classList.add("correct");
          listAnswersStatus[currentIndex] = true;
          quizAnswers.forEach((li, i) => {
            li.style.pointerEvents = "none";
            if (!li.classList.contains("correct")) {
              li.classList.add("disable");
            }
          });
        } else {
          answer.classList.add("incorrect");
          ++incorrectCount;
          quizQuestionItem[currentIndex].classList.add("incorrect");
          listAnswersStatus[currentIndex] = false;
          quizAnswers.forEach((answer, index) => {
            if (answer.innerText == trueAnswer) {
              answer.classList.add("correct");
            } else if (answer.classList.contains("incorrect")) {
            } else {
              // console.log(child.parentNode);
              answer.style.pointerEvents = "none";
              answer.classList.add("disable");
            }
          });
        }

        listSelected[currentIndex] = index;

        // Chuyển câu hỏi
        console.log(currentIndex, questions.length - 1);
        if (currentIndex === questions.length - 1) return;
        if (switchQuestionTime > 0) {
          intervalId = setInterval(() => {
            ++currentIndex;
            if (currentIndex >= questions.length) {
              currentIndex = 0;
            }

            quizQuestionItem[currentIndex].click();
          }, switchQuestionTime * 1000);
          // Sau 5 giây, xóa interval
          setTimeout(() => {
            clearInterval(intervalId);
          }, switchQuestionTime * 1000);
        }
      });
    });
    quiz.updateCountCorrectIncorrect();
  },
  updateCountCorrectIncorrect: function () {
    correctLabel.innerText = "Số câu đúng: " + correctCount;
    incorrectLabel.innerText = "Số câu sai: " + incorrectCount;
  },
  handleCurrentQuestion: function () {
    quizQuestion.innerHTML = questions[currentIndex].question;
    const currentAnswers = questions[currentIndex].answers;
    quizQuestionUl.innerHTML = "";
    currentAnswers.forEach((answer, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="answer_item" question-id=${questions[currentIndex].quiz_id}>${answer}</span>`;
      quizQuestionUl.appendChild(li);
    });
    // Đảm bảo rằng câu trả lời đã chọn được hiển thị lại
    if (listSelected[currentIndex] != null) {
      quizAnswers = document.querySelectorAll(".wrap_question ul li");
      const selectedAnswerIndex = listSelected[currentIndex];
      const selectedAnswer = quizAnswers[selectedAnswerIndex];

      // Kiểm tra xem câu trả lời có đúng hay không
      const correctAnswer =
        results[
          quizAnswers[selectedAnswerIndex]
            .querySelector(".answer_item")
            .getAttribute("question-id") - 1
        ].answer;
      if (selectedAnswer.innerText === correctAnswer) {
        selectedAnswer.classList.add("correct");
        // console.log("add correct");
      } else {
        selectedAnswer.classList.add("incorrect");
      }
      quizAnswers.forEach((li, i) => {
        console.log(li);
        li.style.pointerEvents = "none";
        ans = li.querySelector("span");

        if (correctAnswer == ans.innerText) {
          li.classList.add("correct");
        }
        if (
          !li.classList.contains("incorrect") &&
          !li.classList.contains("correct")
        )
          li.classList.add("disable");
      });
    }

    quiz.handleAnswerItem();
  },
  handleNext: function () {
    quizBtnNext.addEventListener("click", () => {
      ++currentIndex;
      if (currentIndex > questions.length - 1) {
        currentIndex = 0;
      }

      quizQuestionItem[currentIndex].click();
    });
  },
  handlePrev: function () {
    quizBtnPrev.addEventListener("click", () => {
      --currentIndex;
      if (currentIndex < 0) {
        currentIndex = questions.length - 1;
      }
      quizQuestionItem[currentIndex].click();
    });
  },
  handleShortcut: function () {
    // Lắng nghe sự kiện keydown một lần khi trang được tải
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowUp") {
        // Chuyển câu hỏi khi nhấn mũi tên phải hoặc trên
        ++currentIndex;
        if (currentIndex >= questions.length) {
          currentIndex = 0;
        }
        quizQuestionItem[currentIndex].click();
      } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
        // Chuyển câu hỏi khi nhấn mũi tên trái hoặc dưới
        --currentIndex;
        if (currentIndex < 0) {
          currentIndex = questions.length - 1;
        }
        quizQuestionItem[currentIndex].click();
      }
    });
  },
  renderQuestionList: function () {
    let item = "";
    // console.log("questions: ", questions);
    questions.forEach((question, index) => {
      //   console.log(question);
      item += `<li>${index + 1}</li>`;
    });
    // console.log(item);
    quizQuestionList.innerHTML = item;
    quizQuestionItem = document.querySelectorAll(".wrap_list ul li");
    // console.log("quizQuestionItem: ", quizQuestionItem);
  },
  handleRetryWrongAnswers: function () {
    retryButton.addEventListener("click", () => {
      // Lọc ra các câu hỏi sai và loại bỏ câu hỏi đúng khỏi danh sách
      if (listAnswersStatus)
        questions = questions.filter((question, index) => {
          // Kiểm tra nếu câu trả lời của câu hỏi này sai
          return listAnswersStatus[index] !== true;
        });
      // Reset lại các biến cần thiết để làm lại câu hỏi
      listSelected = []; // Đặt lại các câu trả lời đã chọn
      listAnswersStatus = []; // Đặt lại trạng thái của câu trả lời (đúng hay sai)

      // Set correct & incorrect Count
      incorrectCount = 0;
      correctCount = 0;
      this.updateCountCorrectIncorrect();

      // Sau khi thay đổi câu hỏi, cần cập nhật lại danh sách câu hỏi và câu trả lời
      quiz.renderQuestionList(); // Cập nhật lại danh sách câu hỏi
      quiz.handleQuestionList(); // Thiết lập lại sự kiện cho các câu hỏi
      quiz.handleAnswerItem(); // Thiết lập lại sự kiện cho các câu trả lời
    });
  },
  handleSubmit: function () {
    submitButton.addEventListener("click", () => {
      overlay.style.display = "block";
      submitForm.style.display = "flex";
      let grade = (10 / questions.length) * correctCount;
      submitFormTitle.innerText = "Điểm số: " + Number(grade.toFixed(2));
    });
  },

  start: async function () {
    await this.getData();
    this.randomQuestion();
    this.handleClock();
    this.getValueDropList();
    this.renderQuestionList();
    this.handleQuestionList();
    this.handleAnswerItem();
    this.handleNext();
    this.handlePrev();
    this.handleShortcut();
    this.handleRetryWrongAnswers();
    this.handleSubmit();
  },
};
quiz.start();
