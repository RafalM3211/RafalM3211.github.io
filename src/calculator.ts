import type { Root } from "./types";

export function calculateRoot(index: number, radicant: number): Root{
    let multiplier=1;
    let radicantOutput=1;

    checkForInputMistakes(index, radicant);

    if( !(radicant==1||radicant==0||index==1) ) {
        for(let i=2; i<=radicant; i++){
            let groupSize=0;
            while(radicant%i==0){
                groupSize++;
                if(groupSize==index){
                    multiplier*=i;
                    groupSize=0;
                }
                radicant/=i;
            }
            radicantOutput*=Math.pow(i, groupSize);
        }
    }
    else {
        radicantOutput=radicant;
    }

    return { multiplier, index, radicant: radicantOutput }
}

function checkForInputMistakes(index: number, radicant: number){
    if(index<1 || (isEven(index)&&radicant<0)){
        throw "input error";
    }
}

function isEven(number: number){
    return number%2===0;
}