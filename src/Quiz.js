import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { Profile } from './profile';
import ProfileService from "./profileService"
import { responses } from './FreeResponse';
import { useNavigate } from "react-router-dom";
import "./Quiz.css"

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(responses);
  const [complete, setComplete] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [nameEntry, setNameEntry] = useState(true);
  const [hover, setHover] = useState(false)
  
  
  const navigate = useNavigate();

  async function submitQuiz() {
    // You can process and display the user's answers here
    console.log(answers);
    const profile = new Profile(
      answers.name,
      answers.year,  
      answers.choreo, 
      answers.africa, 
      answers.hobby, 
      answers.resCollege,
      answers.dining,
      answers.nationality,
      answers.place,
      answers.state,
      answers.qualities, 
      answers.relationship,
      answers.preference, 
      answers.major
      )
    
    //console.log(profile)
    await ProfileService.saveProfile(profile)
    setComplete(true);

  };

  const questions = [
    
    {
      id: 1,
      question: 'What Year Are You?',
      options: ['Freshman', 'Sophomore', 'Junior', 'Senior'],
      description: "year"
    },
    {
      id: 2,
      question: 'What\'s your favorite choreo from DuroBucci so far?(You can check the drive if you don\'t know the names) ',
      options: ['Tiger Night', 'Yale', 'Ye Dija', 'Innit', "Sakata 1(warm up) or 2(French/Congo)", "Move Back", "Marimba"],
      description: "choreo"
    },
    {
      id: 3,
      question: 'Favorite thing to do in your free time?',
      options: ['Read', 'Watch TV', 'Dance! Or Another Art', 'Shopping', 'Napping', 'A Sport'],
      description: "hobby"
    },
    {
      id: 4,
      question: 'What Res College do/did you rep?',
      options: ['Mathey', 'Rocky', 'Butler', 'Whitman', 'Forbes', 'Yeh', 'NCW'],
      description: "resCollege"
    },
    {
      id: 5,
      question: 'Favorite Dining Hall?',
      options: ['Yeh/NCW', 'Forbes', 'Roma', 'Whitman/Butler :('],
      description: "dining"
    }


  ];

  const recordName = (e) =>{
    e.preventDefault()
    setAnswers({...answers, name: `${firstName} ${lastName}`});
    setNameEntry(false);

  }
  const handleAnswer = (answer) => {
     setAnswers({ ...answers, [questions[currentQuestionIndex].description]: answer });
    console.log(answers)
    //console.log(answer)
    setCurrentQuestionIndex(currentQuestionIndex + 1)

    
  };
  const previousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }
  //const back = <i class="bi bi-arrow-left"></i>

  return (
    <div style={{width: "100%"}}>
      
     { complete ? (<div className="container mt-4">
        <h1 style={{fontFamily: "Pacifico", fontSize: "90px", color: "black"}}> Thank You!</h1>
        <h5 style={{fontFamily: "Quicksand", color: "black", marginTop: 20}} > [Your responses have been successfully recorded]</h5>
     </div>):(
    <div className=" mt-4 " style={{width: "100%"}}>
      {currentQuestionIndex < questions.length ? (
        <>
          <h1 className= "mb-3" style={{color: "black", fontFamily: "Pacifico"}}>DoroBucci Big/Little Survey</h1>
          <div className="container align-items-center card p-4 w-50" style={{borderColor:"black", borderWidth: "2px"}}>
          <h4 style={{fontFamily: "Russo One"}}>{questions[currentQuestionIndex].question}</h4>
          <div className=" align-items-center">
            {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index}>
                <button
                  style={{fontFamily: "Quicksand", fontWeight: "bolder"}}
                  className=" my-2 answerChoice"
                  name={`question${questions[currentQuestionIndex].id}`}
                  id={`question${questions[currentQuestionIndex].id}_option${index}`}
                  
                  
                  onClick={() => 
                    {
                        handleAnswer(option)
                    
                    }
                    }>
                        <div>
                        {option}
                        </div>
                  </button>
                

              </div>
            ))}
          </div>
        
        </div>
        
        <div className="container ml-5">
            {currentQuestionIndex > 0 ? (
                <button className="backButton btn-lg mt-3 ml-5"
                onClick = {() => {
                    previousQuestion();
                    
                    }}>
                       Back
                       </button>
            ):(
                <></>
            )}
            
        </div>
        
        </>
      ) : (
          <div>
          <h1 style={{color: "black", fontFamily: "Pacifico"}}>Survey Completed!</h1>
          <div className= "container d-flex justify-content-center ">
            <button className="backButton btn-lg mt-3 ml-5 mx-1"
                    onClick = {() => {
                        previousQuestion();
                        
                        }}> Back 
            </button>

            <button className="backButton btn-lg mt-3 ml-5 mx-1"  
            
            onClick={submitQuiz}>
                Submit
            </button>
          </div>
                
          
        </div>
      )}
    </div>
    
)}</div>
  );
};

export default Quiz;
export {responses}