for(let i =1;i<=10;i++){
    document.writeln(`<h1>Tablas del ${i}</h1>`)
    for(let j =1;j<=10;j++){
        document.writeln(`<h2>${i}x${j}=${(i*j)}</h2>`)
    }
}