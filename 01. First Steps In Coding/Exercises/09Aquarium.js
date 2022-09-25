function aquarium(input){
    // 1. Дължина в см – цяло число в интервала [10 … 500]

    // 2. Широчина в см – цяло число в интервала [10 … 300]
    
    // 3. Височина в см – цяло число в интервала [10… 200]
    
    // 4. Процент – реално число в интервала [0.000 … 100.000]
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentageOfOccupiedVolume = Number(input[3]);
    percentageOfOccupiedVolume= percentageOfOccupiedVolume/100;
    //1 cm^3 = 0.001 l
    let availableVolume = (lenght*width*height)*(1-percentageOfOccupiedVolume)*0.001;
    console.log(availableVolume);
}
aquarium(["85 ","75 ","47 ","17 "]);