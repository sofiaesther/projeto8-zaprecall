import React from "react";
import CardQuestion from './CardQuestion.js'

let allquestion =[['O que é JSX?', 'Uma extensão de linguagem do JavaScript'],
['O React é...','uma biblioteca JavaScript para construção de interfaces'],
['Componentes devem iniciar com...','letra maiúscula'],
['Podemos colocar ___ dentro do JSX','expressões'],
['O ReactDOM nos ajuda...','interagindo com a DOM para colocar componentes React na mesma'],
['Usamos o npm para...','gerenciar os pacotes necessários e suas dependências'],
['Usamos props para...','passar diferentes informações para componentes '],
[' Usamos estado (state) para...','dizer para o React quais informações quando atualizadas devem renderizar a tela novamente']]

let selectedquestion =[];

for (let index = 0; index < 4; index++) {
    const random = Math.floor(Math.random() * allquestion.length);
    selectedquestion.push(allquestion[random]);
    allquestion.pop(random);
}

const questions = [
    {number: "1"
    ,cardstate:true
    ,nameclass: true,
    question: selectedquestion[0][0],
    answer: selectedquestion[0][1],
    remember: null,
    qicon:"play-outline"},

    {number: "2"
    ,cardstate:true
    ,nameclass: true,
    question: selectedquestion[1][0],
    answer: selectedquestion[1][1],
    remember: null,
    qicon:"play-outline"},

    {number: "3"
    ,cardstate:true
    ,nameclass: true,
    question: selectedquestion[2][0],
    answer: selectedquestion[2][1],
    remember: null,
    qicon:"play-outline"},

    {number: "4"
    ,cardstate:true
    ,nameclass: true,
    question: selectedquestion[3][0],
    answer: selectedquestion[3][1],
    remember: null,
    qicon:"play-outline"}
]

export default function Content({countZaps}){

    return (
        <div className= 'Content' >
            {questions.map((q) => (
            <CardQuestion 
            countZaps ={countZaps}
            number={q.number}
            cardstate={q.cardstate} 
            nameclass={q.nameclass}
            question={q.question}
            answer={q.answer} 
            remember={q.remember}
            qicon={q.qicon}/>))}
        </div>

    )
}