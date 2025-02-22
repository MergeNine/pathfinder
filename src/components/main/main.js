

const main = document.querySelector('#main')

for(let i = 0; i < 28; i++){
    const row  = document.createElement('button')
    row.className = 'row'
    main.appendChild(row)
    for(let j = 0; j <20; j++) {
        const col  = document.createElement('button')
        col.className = 'col'
        row.appendChild(col)
    }
}
