const { application } = require('express');
var mysql=require('mysql');

var DatabaseConnectionConfig={host:"localhost", user:"root", password:"", database:"cruddb"}

var con=mysql.createConnection(DatabaseConnectionConfig);

con.connect(function (error) {
    if(error){
        console.log("Connection Fail")
    }
    else{
        console.log("Connection Success");
        //InsertData(con);
        //DeleteDataByID(con)
       //UpdateData(con);
       SelectData(con);
    }
});


function InsertData(con) {
    let SQLQuery="INSERT INTO `employee`(`Id`, `Name`, `Email`, `JoinDate`, `Salary`) VALUES ('3233-fsrf34-dfsdf34-234','Jamal','jamal@gmail.com','2022/3/4','203000')"
    con.query(SQLQuery,function (error) {
        if(error){
            console.log("Data insert fail");
        }
        else{
            console.log("Data insert success");
        }
    })
}


function DeleteDataByID(con) {
    let SQLQuery="DELETE FROM `students_list` WHERE `id`='2'";
    con.query(SQLQuery,function (error) {
        if(error){
            console.log("Data Delete fail");
        }
        else{
            console.log("Data Delete Success");
        }
    })
}



function UpdateData(con) {
    let SQLQuery="UPDATE `students_list` SET `phone`='11111111111',`city`='Rangpur' WHERE `id`='4'";
    con.query(SQLQuery,function (error) {
        if(error){
            console.log("Data Update fail");
        }
        else{
            console.log("Data Update Success");
        }
    })
}




function SelectData(con) {
    let SQLQuery="SELECT * FROM `employee`";
    con.query(SQLQuery,function (error,result) {

        if(error){
            console.log("Data Select Fail")
        }
        else {
            console.log(result)

        }

    })
}

module.exports.SelectData=SelectData;












