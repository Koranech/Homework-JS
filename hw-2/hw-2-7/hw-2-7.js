let time = 14;

if (time >= 0 && time < 15) {
    console.log('Перша чверть')
}
else if (time >= 15 && time < 30) {
    console.log('Друга чверть');
}
else if (time >= 30 && time < 45) {
    console.log('Третя чверть');
}
else if (time >= 45 && time < 60) {
    console.log('Четверта чверть');
}
else {
    console.log('Такого часу не існує')
}
