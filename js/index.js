for( i = 1; i <= 100; i++){
    if(i % 2 !== 0) {
        // 奇数の時はコンソールに表示しない
    }else if(i % 15 === 0) {
        console.log(i + "回目。" + "私はアホな犬です。" )
    }else if(i % 5 === 0) {
        console.log(i + "回目。" + "私は犬です。" )
    }else if(i % 3 === 0) {
        console.log(i + "回目。" + "私はアホな人です。")
    }else{
        console.log(i + "回目。" )
    }
}