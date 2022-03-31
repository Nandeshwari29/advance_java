var student=[
    {
        roll_no: 1,
        course_name: "fsd"
    },
    {
        roll_no: 2,
        course_name: "fsd1"
    },
    {
        roll_no: 3,
        course_name: "fsd2"
    },
    

]
function getStudent(){
    console.log("get Students")
    setTimeout(()=>{
        let displayItem=""
        student.forEach((student)=>{
            console.log(student.roll_no)
        })
    },500)
}

function createStudent(newItem)
{
    console.log("Create Student")
    return new Promise(
        (resolve,reject)=>{
            setTimeout(()=>{
                student.push(newItem)
                let flag=true;
                if(flag){
                    resolve();
                }
                else{
                    reject("Problem occured")
                }
            }, 500)
        }
    )
}
createStudent({roll_no:5, course_name:"full_fsd"}).then(getStudent).catch(err=>console.log(err))

