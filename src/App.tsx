import { useState, useCallback, useEffect } from 'react';
import { Trophy, RefreshCw } from 'lucide-react';

const allQuestions = [
  {
    question: "Who holds the NBA record for most points scored in a single game?",
    options: ["Kobe Bryant", "Michael Jordan", "Wilt Chamberlain", "LeBron James"],
    correct: 2
  },
  {
    question: "Which team has won the most NBA championships?",
    options: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"],
    correct: 1
  },
  {
    question: "Who is the NBA's all-time leading scorer?",
    options: ["Kareem Abdul-Jabbar", "Michael Jordan", "Karl Malone", "LeBron James"],
    correct: 3
  },
  {
    question: "Which player has won the most NBA MVP awards?",
    options: ["Michael Jordan", "LeBron James", "Bill Russell", "Kareem Abdul-Jabbar"],
    correct: 3
  },
  {
    question: "What year was the NBA founded?",
    options: ["1936", "1946", "1956", "1966"],
    correct: 1
  },
  {
    question: "Who holds the record for most three-pointers made in NBA history?",
    options: ["Ray Allen", "Reggie Miller", "Stephen Curry", "James Harden"],
    correct: 2
  },
  {
    question: "Which team won the first NBA championship?",
    options: ["Philadelphia Warriors", "Chicago Stags", "Boston Celtics", "Minneapolis Lakers"],
    correct: 0
  },
  {
    question: "Who has the most career assists in NBA history?",
    options: ["Magic Johnson", "John Stockton", "Jason Kidd", "Chris Paul"],
    correct: 1
  },
  {
    question: "What is the record for most rebounds in a single NBA game?",
    options: ["42", "45", "55", "51"],
    correct: 2
  },
  {
    question: "Which player has appeared in the most NBA All-Star games?",
    options: ["Kobe Bryant", "LeBron James", "Kareem Abdul-Jabbar", "Michael Jordan"],
    correct: 2
  },
  {
    question: "Who was the first player to score 100 points in an NBA game?",
    options: ["Bill Russell", "Wilt Chamberlain", "Jerry West", "Elgin Baylor"],
    correct: 1
  },
  {
    question: "Which team has the longest winning streak in NBA history?",
    options: ["Golden State Warriors", "Los Angeles Lakers", "Chicago Bulls", "Miami Heat"],
    correct: 1
  },
  {
    question: "Who won the first NBA Slam Dunk Contest?",
    options: ["Julius Erving", "Larry Nance", "Michael Jordan", "Dominique Wilkins"],
    correct: 0
  },
  {
    question: "What is the record for most points scored by a team in a single NBA game?",
    options: ["173 points", "186 points", "184 points", "171 points"],
    correct: 1
  },
  {
    question: "Which player has won the most NBA championships?",
    options: ["Sam Jones", "Bill Russell", "Robert Horry", "John Havlicek"],
    correct: 1
  },
  {
    question: "Who was the youngest MVP in NBA history?",
    options: ["LeBron James", "Derrick Rose", "Michael Jordan", "Wes Unseld"],
    correct: 1
  },
  {
    question: "Which team drafted Kobe Bryant?",
    options: ["Los Angeles Lakers", "Charlotte Hornets", "Boston Celtics", "Chicago Bulls"],
    correct: 1
  },
  {
    question: "What is the record for most steals in a single NBA game?",
    options: ["11 steals", "12 steals", "10 steals", "13 steals"],
    correct: 0
  },
  {
    question: "Who holds the record for most triple-doubles in NBA history?",
    options: ["Magic Johnson", "Oscar Robertson", "Russell Westbrook", "LeBron James"],
    correct: 2
  },
  {
    question: "Which team won the most games in a single regular season?",
    options: ["Chicago Bulls", "Golden State Warriors", "Los Angeles Lakers", "Boston Celtics"],
    correct: 1
  },
  {
    question: "Who was the first non-American player to win NBA MVP?",
    options: ["Hakeem Olajuwon", "Steve Nash", "Dirk Nowitzki", "Giannis Antetokounmpo"],
    correct: 1
  },
  {
    question: "What year was the three-point line introduced in the NBA?",
    options: ["1979", "1976", "1982", "1973"],
    correct: 0
  },
  {
    question: "Which player has the most career blocks in NBA history?",
    options: ["Dikembe Mutombo", "Kareem Abdul-Jabbar", "Hakeem Olajuwon", "Tim Duncan"],
    correct: 2
  },
  {
    question: "Who was the first player drafted straight from high school to the NBA?",
    options: ["Kevin Garnett", "Moses Malone", "Kobe Bryant", "LeBron James"],
    correct: 1
  },
  {
    question: "Which team has lost the most NBA Finals?",
    options: ["Los Angeles Lakers", "Boston Celtics", "Philadelphia 76ers", "New York Knicks"],
    correct: 1
  },
  {
    question: "Who holds the record for most points scored in an NBA All-Star game?",
    options: ["Michael Jordan", "Anthony Davis", "Wilt Chamberlain", "LeBron James"],
    correct: 1
  },
  {
    question: "What was the first year of the NBA Draft Lottery?",
    options: ["1985", "1980", "1990", "1975"],
    correct: 0
  },
  {
    question: "Which player has won the most Sixth Man of the Year awards?",
    options: ["Jamal Crawford", "Lou Williams", "Kevin McHale", "Detlef Schrempf"],
    correct: 1
  },
  {
    question: "Who was the first player to win MVP unanimously?",
    options: ["Michael Jordan", "LeBron James", "Stephen Curry", "Shaquille O'Neal"],
    correct: 2
  },
  {
    question: "Which team has the longest playoff streak in NBA history?",
    options: ["Los Angeles Lakers", "Boston Celtics", "San Antonio Spurs", "Philadelphia 76ers"],
    correct: 2
  },
  {
    question: "Who holds the record for most points scored in a playoff game?",
    options: ["Michael Jordan", "Elgin Baylor", "Donovan Mitchell", "Charles Barkley"],
    correct: 1
  },
  {
    question: "What year did the NBA adopt the shot clock?",
    options: ["1954", "1960", "1951", "1957"],
    correct: 0
  },
  {
    question: "Which player has won the most Defensive Player of the Year awards?",
    options: ["Ben Wallace", "Dikembe Mutombo", "Dwight Howard", "Rudy Gobert"],
    correct: 0
  },
  {
    question: "Who was the shortest player to ever play in the NBA?",
    options: ["Spud Webb", "Muggsy Bogues", "Earl Boykins", "Nate Robinson"],
    correct: 1
  },
  {
    question: "Which team had the worst record in NBA history?",
    options: ["Philadelphia 76ers", "Charlotte Bobcats", "Cleveland Cavaliers", "Minnesota Timberwolves"],
    correct: 1
  },
  {
    question: "Who holds the record for most consecutive games with a three-pointer made?",
    options: ["Ray Allen", "Stephen Curry", "Kyle Korver", "Klay Thompson"],
    correct: 1
  },
  {
    question: "What was the original name of the Toronto Raptors' home arena?",
    options: ["Air Canada Centre", "SkyDome", "Rogers Centre", "Maple Leaf Gardens"],
    correct: 0
  },
  {
    question: "Which player has appeared in the most NBA Finals?",
    options: ["Bill Russell", "Sam Jones", "LeBron James", "Kareem Abdul-Jabbar"],
    correct: 0
  },
  {
    question: "Who was the first player to average a triple-double for an entire season?",
    options: ["Magic Johnson", "Oscar Robertson", "Russell Westbrook", "LeBron James"],
    correct: 1
  },
  {
    question: "What team holds the record for the longest losing streak in NBA history?",
    options: ["Philadelphia 76ers", "Cleveland Cavaliers", "Los Angeles Clippers", "Minnesota Timberwolves"],
    correct: 0
  },
  {
    question: "Who was the first international player drafted #1 overall in the NBA draft?",
    options: ["Yao Ming", "Patrick Ewing", "Hakeem Olajuwon", "Andrew Bogut"],
    correct: 2
  }
];

function App() {
  const [questions, setQuestions] = useState<typeof allQuestions>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [gamesPlayed, setGamesPlayed] = useState(0);

  const getRandomQuestions = useCallback(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, []);

  useEffect(() => {
    setQuestions(getRandomQuestions());
  }, [getRandomQuestions]);

  const handleAnswerClick = (selectedOption: number) => {
    setSelectedAnswer(selectedOption);
    
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setQuestions(getRandomQuestions());
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setGamesPlayed(gamesPlayed + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-center mb-8">
          
          <h1 className="text-3xl font-bold text-gray-800">Basketball Quiz</h1>
        </div>

        {showScore ? (
          <div className="text-center">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              You scored {score} out of {questions.length}!
            </h2>
            <p className="text-gray-600 mb-2">
              {score === questions.length
                ? "Perfect score! You're a basketball expert! 🏀"
                : score >= questions.length / 2
                ? "Great job! You know your basketball! 👍"
                : "Keep practicing! You'll get better! 💪"}
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Games played: {gamesPlayed + 1}
            </p>
            <button
              onClick={resetQuiz}
              className="flex items-center justify-center mx-auto bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-500">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-500">
                    Score: {score}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Game #{gamesPlayed + 1}
                  </span>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                {questions[currentQuestion]?.question}
              </h2>
              <div className="space-y-3">
                {questions[currentQuestion]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      selectedAnswer === null
                        ? 'hover:bg-orange-50 bg-gray-50'
                        : selectedAnswer === index
                        ? index === questions[currentQuestion].correct
                          ? 'bg-green-100 border-green-500'
                          : 'bg-red-100 border-red-500'
                        : index === questions[currentQuestion].correct
                        ? 'bg-green-100 border-green-500'
                        : 'bg-gray-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-orange-500 h-2.5 rounded-full transition-all duration-500"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;