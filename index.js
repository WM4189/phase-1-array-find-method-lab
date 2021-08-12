function superbowlWin(arrayRecord){
    const newObj = arrayRecord.find(arrayRecord => arrayRecord.result === 'W')
    return !!newObj ? newObj.year : undefined
}
