function recursiva(max) {
    console.log(max);
        if(max >= 900) return;
        max++;
        recursiva(max);
}

recursiva(0);