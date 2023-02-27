export function sterRegist(str) {
    if (!str) return str;

    str = str.toLowerCase()
    str = str[0].toUpperCase() + str.slice(1)
    console.log(str);
    return str
}

export function sterProb(str) {
    str = str.replace(/ +/g, ' ').trim();
    str = str.replace(/\s*([,.!?:;])[,.!?:;]*\s*/g, '$1 ')
    str = str.split()
    console.log(str);
    return str
}

export function number_of_words(str) {
    str = str.split(/\s+/);
    str = str.length
    console.log(str);
    return str
}

export function unique_words(result) {
    result = result.toLowerCase()
    result = result.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let arr = result.split(' ');
    let count = {};

    for (let elem of arr) {
        if (count[elem] === undefined) {
        count[elem] = 1;
        } else {
        count[elem]++;
        }
    }
    console.log(count);

}
