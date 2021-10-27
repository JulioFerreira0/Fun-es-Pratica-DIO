const alunos = [
    {
        nome: "Julio",
        media: 9  
    },

    {
        nome: "Carla",
        media: 5
    },

    {
        nome: "Kébler",
        media: 8  
    },
]
const {media} = alunos
console.log(media);

const aprovarAlunos = (alunos) => {
    const aprovados = [];
    for(let i= 0; i< alunos.length; i++){
        if(alunos[i].media >= 6){
            aprovados.push(alunos[i].nome);
        }
       
    }
    console.log(`Alunos aprovados: ${aprovados}`);
}

aprovarAlunos(alunos)



