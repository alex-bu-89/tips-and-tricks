function blocksToCollect(level) {
    const result = { total: 9, gold: 9, diamond: 0, emerald: 0, iron: 0 };
    const arr = Array.from(Array(level).keys());
    let currentMaterial = 1; // 1 - gold, 2 - diamond, 3 - emerald, 4 - iron
    let currentLevel = 1;

    for (let i = 1; i <= level; i++) {
        if (i === 1) {
            currentMaterial = currentMaterial + 1;
            currentLevel = 3;
            continue;
        }

        currentLevel = currentLevel + 2;

        switch (currentMaterial) {
            case 1:
                result.gold += Math.pow(currentLevel, 2);
                break;
            case 2:
                result.diamond += Math.pow(currentLevel, 2);
                break;
            case 3:
                result.emerald += Math.pow(currentLevel, 2);
                break;
            case 4:
                result.iron += Math.pow(currentLevel, 2);
                break;
        }

        currentMaterial = i % 4 === 0 ? 1 : currentMaterial + 1;
    }

    result.total = result.gold + result.diamond + result.emerald + result.iron;

    return result;
}

console.log('------', blocksToCollect(3), { total: 83, gold: 9, diamond: 25, emerald: 49, iron: 0 });
console.log('------', blocksToCollect(4), { total: 285, gold: 9, diamond: 25, emerald: 49, iron: 81 });
console.log('------', blocksToCollect(5), { total: 285, gold: 130, diamond: 25, emerald: 49, iron: 81 });
console.log('------', blocksToCollect(6), { total: 454, gold: 130, diamond: 194, emerald: 49, iron: 81 });
console.log('------', blocksToCollect(7), { total: 679, gold: 130, diamond: 194, emerald: 274, iron: 81 });
console.log('------', blocksToCollect(8), { total: 679, gold: 130, diamond: 194, emerald: 274, iron: 370 });
console.log('------', blocksToCollect(9), { total: 1329, gold: 491, diamond: 194, emerald: 274, iron: 370 });
console.log('------', blocksToCollect(10), { total: 1770, gold: 491, diamond: 635, emerald: 274, iron: 370 });
