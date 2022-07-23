export default function Start({setStart}){
    return (
        <div className="Start">
        <img src="./img/logo.png"/>
        <h1>ZapRecall</h1>
        <div className="InitialButtom" onClick={ setStart }>
            <h2>Iniciar Recall!</h2>
        </div>
        </div>
    )}