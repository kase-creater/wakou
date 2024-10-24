document.getElementById('drawButton').addEventListener('click', function() {
    drawKuji(kujiStock);
});


let kujiStock = {
    "1等": 20,
    "2等": 30,
    "3等": 50,
    "4等": 150,
    "はずれ": 250
};

// 全てのくじの合計枚数を計算する関数
function totalKuji(kujiStock) {
    return Object.values(kujiStock).reduce((sum, value) => sum + value, 0);
}

// ランダムにくじを引く関数
function drawKuji(kujiStock) {
    const total = totalKuji(kujiStock);  // 残っているくじの合計枚数

    if (total === 0) {
        console.log("すべてのくじが終了しました。");
        return null;  // すべてのくじがなくなった場合
    }

    let random = Math.floor(Math.random() * total);  // 0からtotal - 1までのランダムな数字

    // ランダムな数字に基づいてどのくじが引かれたかを決める
    for (let key in kujiStock) {
        if (random < kujiStock[key]) {
            kujiStock[key]--;  // 引かれたくじの枚数を減らす
            document.getElementById('result').textContent = key;
            console.log(kujiStock);  // 残りのくじの枚数を確認
            setTimeout(() => {
                document.getElementById('result').textContent = "";
            }, 10000)
            return key;
        } else {
            random -= kujiStock[key];  // 次の等級の範囲に移動
        }
    }
}

// 実際にくじを引いてみる例
console.log(kujiStock);  // 残りのくじの枚数を確認
