import { useEffect, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";

let counter1 = 0;
let counter2 = 0;
const MainPage = () => {
    const [player1, setPlayer1] = useState(0);
    const [player2, setPlayer2] = useState(0);
    const [statement, setStatement] = useState("");
    let isAnonymous = false;
    useEffect(()=>{
        if(player1==40 && player2 == 40  && counter1 < 4 && counter2 < 4){
            setStatement("Duece state");
        }
        if(counter1 == 4 && counter2 == 4){
            setStatement("Tie Match");
            isAnonymous = true;
        }
    }
    ,[player1,player2,counter1,counter2])
    const changeInPlayer1 = () => {
        counter1 = counter1 + 1;
        if(counter1 == 1){
            setPlayer1(15)
        }else if(counter1 == 2){
            setPlayer1(30)
        }else if(counter1 == 3){
            setPlayer1(40)
        }else if(counter1 == 4){
            if(player1 == 40 && player2<40){
                setStatement("Player 1 You Win");
                isAnonymous = true;
            }else if(player1 == 40 && player2 == 40)
                setStatement("Player 1 is in Advantage");
        }else if(counter1 == 5){
            setStatement("Player 1 You Win");
            isAnonymous = true;
        }
    };
    const changeInPlayer2 = () => {
        counter2 = counter2 + 1;
        if(counter2 == 1){
            setPlayer2(15)
        }else if(counter2 == 2){
            setPlayer2(30)
        }else if(counter2 == 3){
            setPlayer2(40)
        }else if(counter2 == 4){
            if(player2 == 40 && player1<40){
                setStatement("Player 2 You Win");
                isAnonymous = true;
            }else if(player1 == 40 && player2 == 40)
                setStatement("Player 2 is in Advantage");
        }else if(counter2 == 5){
            setStatement("Player 2 You Win");
            isAnonymous = true;
        }
    }
    return (
        <>
        <h1>{statement}</h1>
        <div className="flex-class">
            <div className="flex">
                <div>
                    <p>PLAYER 1</p>
                </div>
                <div className="content" >
                <Input 
                    inputvalue={player1}
                />
                </div>
                <div className="content" >
                <Button onClick={changeInPlayer1} disable={isAnonymous} />
                </div>
            </div>
            <div className="flex">
                <div>
                <p>PLAYER 2</p>
                </div>
                <div className="content" >
                <Input 
                    inputvalue={player2}
                />
                </div>
                <div className="content" >
                <Button onClick={changeInPlayer2} disable={isAnonymous} />
                </div>
            </div>
        </div>
        </>
    )
}

export default MainPage;