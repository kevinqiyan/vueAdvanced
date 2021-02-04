
let fike = function(){
    let fs = require('fs')
    let data2 = ''
    fs.readFile('D:/知识练习/VueAdvanced/vueadvanced/dist/info.yaml',(err,data)=>{
        console.log(err,'错误');
        console.log(data2 += data,'数据');
        data2 += data
        let all = data2
        // localStorage.setItem('info',all)
    })
}
fike()
// let yaml = require('yamljs')
// let result2 = yaml.load('D:/知识练习/VueAdvanced/vueadvanced/dist/info.yaml')
// let str = JSON.stringify(result2)
// console.log(result2);
// console.log(str);
// export default class getAll {
//     info = function(){
//         let fs = require('fs')
//         let data2 = ''
//         fs.readFile('D:/知识练习/VueAdvanced/vueadvanced/dist/info.yaml',(err,data)=>{
//             console.log(err,'错误');
//             console.log(data2 += data,'数据');
//             let all = data2 += data
//             localStorage.setItem('info',all)
//         })
//     }
// }
