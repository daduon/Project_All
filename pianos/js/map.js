// const DINNER_MAP = new Map();
// DINNER_MAP.set('Manday','Eat and Fish');
// DINNER_MAP.set('Tuesday','Eat and Fish');
// DINNER_MAP.set('Wednesday','Eat and Fish');
// DINNER_MAP.set('Thresday','Eat and Fish');
// DINNER_MAP.set('Friday','Eat and Fish f');
// DINNER_MAP.set('Saterday','Eat and Fish');
// DINNER_MAP.set('Sunday','Eat and Fish s');

// console.log(DINNER_MAP.size);
// console.log(DINNER_MAP.get('Sunday'));

// DINNER_MAP.forEach((value,key) =>{
//     const resultTable = document.querySelector('table');
//     resultTable.innerHTML +=`
//         <tr>
//             <td>${key}</td>
//             <td>${value}</td>
//         </tr>
//     `;
// });

// const STUDENT_MAP = new Map();
// STUDENT_MAP.set(123,{"name" : "da","age" : 18, "province" : "pursat"});
// STUDENT_MAP.set(124,{"name" : "sar","age" : 19, "province" : "pursat"});
// STUDENT_MAP.set(125,{"name" : "son","age" : 16, "province" : "pursat"});
// STUDENT_MAP.set(126,{"name" : "yon","age" : 15, "province" : "pursat"});
// STUDENT_MAP.set(127,{"name" : "hy","age" : 14, "province" : "pursat"});
// // console.log(STUDENT_MAP);

// STUDENT_MAP.forEach((value , key) =>{
//     // console.log(value["name"]+key)
//     const table = document.querySelector('table');
//     table.innerHTML +=`
//         <tr>
//             <td>${key}</td>
//             <td>${value['name']}</td>
//             <td>${value['age']}</td>
//             <td>${value['province']}</td>
//         </tr>
//     `;
// });
const KEYS = new Map(

    [// white key
        ['z','C'],
        ['x','Gb'],
        ['c','G'],
        ['v','Eb'],
        ['b','E'],
        ['n','F'],
        ['m','Bb'],
    // black key
        ['a','B'],
        ['s','Db'],
        ['d','D'],
        ['f','Ab'],
        ['g','A']
    ]
);
// white key
// KEYS.set('z','C');
// KEYS.set('x','Gb');
// KEYS.set('c','G');
// KEYS.set('v','Eb');
// KEYS.set('b','E');
// KEYS.set('n','F');
// KEYS.set('m','Bb');
// // black key
// KEYS.set('a','B');
// KEYS.set('s','Db');
// KEYS.set('d','D');
// KEYS.set('f','Ab');
// KEYS.set('g','A');
// console.log(KEYS.size);
const NOTES = new Map(
    [
        ['C','notes/C.mp3'],
        ['Gb','notes/Gb.mp3'],
        ['G','notes/G.mp3'],
        ['Eb','notes/Eb.mp3'],
        ['E','notes/E.mp3'],
        ['F','notes/F.mp3'],
        ['Bb','notes/Bb.mp3'],
        ['B','notes/B.mp3'],
        ['Db','notes/Db.mp3'],
        ['D','notes/D.mp3'],
        ['Ab','notes/Ab.mp3'],
        ['A','notes/A.mp3'],
    ]
);
// NOTES.set('A','notes/A.mp3'); the same down
// NOTES.set();
// NOTES.set();
// NOTES.set();
// NOTES.set();
// NOTES.set();
// NOTES.set();
// NOTES.set();
// NOTES.set();
// NOTES.set();
// NOTES.set();
// NOTES.set();

const keys = document.querySelectorAll('.key');
keys.forEach(itemkey =>{
    itemkey.addEventListener('click', () =>{
        const divElement = itemkey.dataset.note;
        onPlaySound(divElement);
    });
});
// get values from key board
document.addEventListener('keydown', e =>{
    // console.log(KEYS.get(e.key));
    const notedId = KEYS.get(e.key);
    if(notedId !=null){
        // for play with key board
        onPlaySound(notedId);
    }
});
// function store audio
function onPlaySound(key){
    const audio  = NOTES.get(key);
    // console.log(audio);
    var sound = new Audio(audio);
    sound.play();
}
