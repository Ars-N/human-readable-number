module.exports = function toReadable (num) {
    let lib={
            0:'zero',
            1:'one',
            2:'two',
            3:'three',
            4:'four',
            5:'five',
            6:'six',
            7:'seven',
            8:'eight',
            9:'nine',
            10:'ten',
            11:'eleven',
            12:'twelve',
            13:'thirteen',
            14:'fourteen',
            15:'fifteen',
            16:'sixteen',
            17:'seventeen',
            18:'eighteen',
            19:'nineteen',
            20:'twenty'
        },
        lib2={2:'twenty',3:'thirty',4:'forty',5:'fifty',6:'sixty',7:'seventy',8:'eighty',9:'ninety'},
        numArr=(num+'').split(''),
        f2=(a,b)=>{let c=+(a+b);return c<21?`${lib[c]}`:b==0?`${lib2[a]}`: `${lib2[a]} ${lib[b]}`},
        f3=()=>{return numArr[1]==0&&numArr[2]==0?`${lib[+numArr[0]]} hundred`
            : `${lib[+numArr[0]]} hundred ${f2(numArr[1],numArr[2])}`}
    return num<21? lib[num]:num<100?f2(numArr[0],numArr[1]):f3()
}
