import React, { useEffect, useState } from 'react';
import "./FreeResponse.css"
import { useNavigate } from "react-router-dom";



let responses = []

const FreeResponse = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);


    const navigate = useNavigate();
    const [answers, setAnswers] = useState([])
    const [answer, setAnswer] = useState("")
    



    const questions = [
        {
            id: 1,
            question: "Please Start By Entering Your First And Last Name  Below:",
            description: "name",
            placeholder: "Ex: Jane Doe"
             },
        {
            id: 2,
            question: "What's your nationality?",
            description:"nationality",
            placeholder: "Enter your response here..."
         },
         {
            id: 3,
            question: "Favorite place on Nassau?",
            description: "place",
            placeholder: "Enter your response here..."
             },
        {
            id:4,
            question: "What state are you from?",
            description: "state",
            placeholder: "Enter your response here..."
        },
        {
            id: 5,
            question: "What are you looking for in a big/little?",
            description: "qualities",
            placeholder: "Enter your response here..."
             },
        {
            id: 6,
            question: "What do you want your relationship to be like?",
            description: "relationship",
            placeholder: "Enter your response here..."
             },
        {
            id: 7,
            question: "Do you have a preference for a big/little?",
            description: "preference",
            placeholder: "Enter your response here..."
             },
        {
            id: 8,
            question: "What's your (prospective) major?",
            description: "major",
            placeholder: "Enter your response here..."
             },
        {
            id: 9,
            question: "Which part of the African Diaspora do you belong to?",
            description: "africa",
            placeholder: "Enter your response here..."
             },

        

        
        ]
    
    
    
        const previousQuestion = () => {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
          }

          
        const handleAnswer = (e) =>{
        e.preventDefault()

        setAnswers({ ...answers, [questions[currentQuestionIndex].description]: answer });
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        console.log(answers)
        setAnswer("")
      }
    const handleSubmission = (e) =>{
        e.preventDefault();
        
        
        
        setAnswers(  { ...answers, [questions[currentQuestionIndex].description]: answer })
        navigate("/Quiz")
        responses= answers
        responses.africa = answer;
        
       
        console.log(responses)
    }

    


     



return (<div className="container align-items-center ">
          <h4 className= "question" style={{fontFamily: "Russo One"}}>{questions[currentQuestionIndex].question}</h4>
          <div className=" align-items-center">
          
                <div className="container " >
                    <input type="text" className=" mx-auto textBox" placeholder={questions[currentQuestionIndex].placeholder} value = {answer} onChange = {(e) => {setAnswer(e.target.value)}}></input>
    

                </div>
                {currentQuestionIndex > 0 ? (
                    <button 
                    className= "nextButton"
                    onClick= {() => {
                        previousQuestion()
                    }}>
                        Back
                    </button>
                ): (<>
                </>)}
                {currentQuestionIndex === questions.length-1 ? (
                    <button
                    className="nextButton mt-4 mx-2"
                    onClick={(answer) => {
                        handleSubmission(answer)
                    }}
                    to="/Quiz">
                        Next
                    </button>
                ):(<button
                className=" nextButton mt-4 mx-2"
                onClick={(answer) => {
                    handleAnswer(answer)
                }}>
                    Next
                </button>)}

          </div>
       
        </div>
)}

export default FreeResponse
export {responses}