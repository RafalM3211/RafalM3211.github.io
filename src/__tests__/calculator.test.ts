import { calculateRoot } from "../calculator";

const correctDataProvider=[
    {
        description: "calculates correctly when output should be without multiplier",
        input: {
            index: 2,
            radicant: 2
        },
        output: {
            multiplier: 1,
            index: 2,
            radicant: 2
        }
    },
    {
        description: "calculates correctly when output should be with multiplier",
        input: {
            index: 2,
            radicant: 8
        },
        output: {
            multiplier: 2,
            index: 2,
            radicant: 2
        }
    },
    {
        description: "calculates correctly when output should be a real number",
        input: {
            index: 3,
            radicant: 8
        },
        output: {
            multiplier: 2,
            index: 3,
            radicant: 1
        }
    },
    {
        description: "outputs 1 when radicant is 1",
        input: {
            index: 2,
            radicant: 1
        },
        output: {
            multiplier: 1,
            index: 2,
            radicant: 1
        }
    },
    {
        description: "outputs radicant when index is 1",
        input: {
            index: 1,
            radicant: 5
        },
        output: {
            multiplier: 1,
            index: 1,
            radicant: 5
        }
    },
    {
        description: "calculates correctly when index is odd and radicant negative",
        input: {
            index: 3,
            radicant: -8
        },
        output: {
            multiplier: -2,
            index: 3,
            radicant: 1
        }
    }
]

const wrongDataProvider=[
    {
        description: "throws when index is lower than 1",
        input: {
            index: 0,
            radicant: 2
        }
    },
    {
        description: "throws when index is even and radicant negative",
        input: {
            index: 2,
            radicant: -2
        }
    }
]


describe("tests if calculates correctly", ()=>{
    correctDataProvider.forEach(data=>{
        it(data.description, ()=>{
            //arrange
            const index=data.input.index;
            const radicant=data.input.radicant
            const expectedOutput=data.output

            //act
            const output=calculateRoot(index, radicant);
            
            //assert
            expect(output).toEqual(expectedOutput);
        })
    })
})

describe("tests if thows when should", ()=>{
    wrongDataProvider.forEach(data=>{
        it(data.description, ()=>{
            //arrange
            const index=data.input.index;
            const radicant=data.input.radicant

            //act
            
            //assert
            expect(()=>{
                calculateRoot(index, radicant)
            }).toThrow("input error");
        })
    })
})
