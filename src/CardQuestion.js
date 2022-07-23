import React from "react";

export default function CardQuestion(props) {

  const [nameclass, setNameclass] = React.useState(props.nameclass)
  const [cardstate, setCardstate] = React.useState(props.cardstate)
  const [remember, setRemember] = React.useState(props.remember)
  const [qicon, setQIcon] = React.useState(props.qicon)

  function nameClass(){
      if(remember==null){
       if (nameclass){
        setNameclass(!nameclass)
        console.log('clicou', nameclass)
      } else if(cardstate){
        setCardstate(!cardstate)
        console.log('clicou', cardstate)
      } else{
        setNameclass(!nameclass)
        console.log('clicou', nameclass)
        setCardstate(!cardstate)
        console.log('clicou', cardstate)
      }
    }
    }

  function answerQuestion(input){
    if (input==='yes'){
      setRemember('green done')
      setQIcon("chevron-down-circle")
      props.countZaps({icon:"chevron-down-circle", color:"green"})
    }else if( input === 'half'){
      setRemember('yellow done')
      setQIcon("help-circle")
      props.countZaps({icon:"help-circle", color:"yellow"})
    } else{
      setRemember('red done')
      setQIcon("close-circle")
      props.countZaps({icon:"close-circle", color:"red"})
    }
  }


  return (
    <div className={nameclass? (`QuestionClosedBox ${remember}`): `QuestionOpenBox ${remember}` } onClick={ nameClass }>
        {nameclass? (<><h2>Pergunta {props.number}</h2> <ion-icon name={qicon}></ion-icon></>): cardstate? (<><p>{props.question}</p><ion-icon name="reload-outline"></ion-icon></>): <><p>{props.answer}</p><div className="buttons"><div className="buttonRemember redbg" onClick={ ()=>answerQuestion('no') }><p>Não lembrei</p></div><div className="buttonRemember yellowbg" onClick={ ()=>answerQuestion('half') }><p>Quase não lembrei</p></div><div className="buttonRemember greenbg" onClick={ ()=>answerQuestion('yes') }><p>Zap!</p></div></div></>}
    </div>
  );
}
