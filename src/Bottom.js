import QuestionResultCount from './QuestionResultCount.js'

export default function Bottom({zap}){
    const QuestionCount = zap.length;
    let congratulations = true;
    for(let i=0; i<QuestionCount;i++){
        if(zap[i].icon==='close-circle'){
            congratulations = false;
        }
    }
    return (
<div className={QuestionCount==4?('BottomEnd'):'Bottom'}>
    {QuestionCount!==4?(''): congratulations?( <> <div className="congratulations"> <img src="img/party.png"/> <h4>Parabéns!</h4></div> <p>Você não esqueceu de nenhum flashcard!</p></>): <> <div className="congratulations"> <img src="img/sad.png"/> <h4>Putz...</h4></div> <p>Ainda faltam alguns... Mas não desanime!</p></>}
    <p>{QuestionCount}/4 CONCLUÍDOS</p>
    <div className='QuestionResultCount'>
            {zap.map((zap) =>(<QuestionResultCount icon={zap.icon} color={zap.color}/>))}
    </div>
</div>
    );
}