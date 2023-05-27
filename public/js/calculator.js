export function calculateRoot(index, radicant) {
    let multiplier = 1;
    let radicantOutput = 1;
    if (!(radicant == 1 || index == 1)) {
        for (let i = 2; i <= radicant; i++) {
            let groupSize = 0;
            while (radicant % i == 0) {
                groupSize++;
                if (groupSize == index) {
                    multiplier *= i;
                    groupSize = 0;
                }
                radicant /= i;
            }
            radicantOutput *= Math.pow(i, groupSize);
        }
    }
    else {
        radicantOutput = radicant;
    }
    return { multiplier, index, radicant: radicantOutput };
}
