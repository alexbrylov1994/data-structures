const steps = (n: number) => {
    // take positive number n,
    // console log step shape with n levels like
    // 3
    //'#  '
    //'## '
    //'###'

    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair)
    }
}