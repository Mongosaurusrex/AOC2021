const getMap = (digits) => {
    digits = digits.map(d => d.split('').sort().join(''));
    const one = digits.find(d => d.length === 2);
    const seven = digits.find(d => d.length === 3);
    const four = digits.find(d => d.length === 4);
    const eight = digits.find(d => d.length === 7);
    const six = [
        eight
            .split('')
            .filter(d => d !== one[0])
            .sort()
            .join(''),
        eight
            .split('')
            .filter(d => d !== one[1])
            .sort()
            .join(''),
    ].find(d => digits.indexOf(d) !== -1);
    const five = digits.find(d => {
        const l = six.split('').filter(x => d.indexOf(x) === -1).length;
        return d.length === 5 && l === 1;
    });
    const nine = [...new Set((one + five).split(''))].sort().join('');
    const zero = digits.find(d => d.length === 6 && d !== six && d !== nine);
    const two = digits.find(
        d =>
            (d.indexOf(one[0]) === -1 || d.indexOf(one[1]) === -1) &&
            d.length === 5 &&
            d !== five,
    );
    const three = digits.find(d => d.length === 5 && d !== five && d !== two);

    const map = {
        [one]: 1,
        [seven]: 7,
        [four]: 4,
        [eight]: 8,
        [five]: 5,
        [six]: 6,
        [nine]: 9,
        [two]: 2,
        [three]: 3,
        [zero]: 0,
    };
    return map;
}

const calcNum = (output, map) => {
    return +output
        .map(d => {
            return map[d.split('').sort().join('')];
        })
        .join('');
}

export const getNumberFromString = (line) => {
    const map = getMap(line[0].concat(line[1]));
    return calcNum(line[1], map);
}

