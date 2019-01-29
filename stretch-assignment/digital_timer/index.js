const startBtn = document.getElementById("start");

startBtn.onclick = () => {
    console.log("clicked!")
    const start = new Date();

    let elapsed = 0;
    const calcTime = () => {
        const now = new Date();
        elapsed = now - start;
    }

    const seconds = document.getElementById("secondOnes");
    while (elapsed <= 10000){
        calcTime();
        seconds.textContent = Math.floor(elapsed/1000);
    } 
    console.log("Counted to 10");
}
