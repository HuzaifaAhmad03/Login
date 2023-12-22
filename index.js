const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const ejs=require('ejs');


const app=express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

mongoose.connect("mongodb://127.0.0.1:27017/loginDB",{useNewUrlParser: true});


const doctorsSchema={
    uid: String,
    name: String,
    spe: String
};
const Doctor=mongoose.model("Doctor",doctorsSchema);
const doc1=new Doctor({
    uid: "Joh123",
    name: "John Doe",
    spe: "Cardiology"
});
const doc2=new Doctor({
    uid: "Sak123",
    name: "Sakshi Rai",
    spe: "Neurology"
});
const defaultDoctors=[doc1,doc2];
//Doctor.insertMany(defaultDoctors);

const loginsSchema={
    uid: String,
    name: String,
    doctor: String,
    field: String
};
const Login=mongoose.model("Login",loginsSchema);

const registersSchema={
    name: String,
    email: String,
    adhaar: String,
    contact: Number,
    appointment_spe_dept: String,
    uid: String
};
const Register=mongoose.model("Register",registersSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/doct", function(req, res) {
    Doctor.find().then(function(foundDoctors) {
        if (foundDoctors.length === 0) {
            Doctor.insertMany(defaultDoctors);
            res.redirect("/doct");
        } else {
            res.render("doct", { newDoctors: foundDoctors });
        }
    });
});

app.get("/welcome", function(req, res) {
    Login.findOne({}, {}, { sort: { _id: -1 } }).then(function(foundLogin) {
        if (!foundLogin) {
            console.log("ERROR: No user logged in.")
            res.redirect("/welcome");
        } else {
            res.render("welcome", { userLogin: foundLogin });
        }
    });
});


let UserId;
let Name;
let Field;

app.post("/login",function(req,res){
    UserId=req.body.userID;
    Name=req.body.name;
    Field=req.body.field;
    if(Field=="Patient"){
        res.redirect("/doct");
    }
    else{
        const item=new Login({
            name: Name,
            uid: UserId,
            field: Field
        });
        item.save();
        res.redirect("/welcome");
    }
})
app.post("/doct",function(req,res){
    const DoctorName=req.body.doctor;
    const item=new Login({
        name: Name,
        uid: UserId,
        doctor: DoctorName,
        field: Field
    });
    item.save();
    res.redirect("/welcome");
})
app.post("/register",function(req,res){
    const Name=req.body.name;
    const Email=req.body.email;
    const Adhaar=req.body.adhaar;
    const Contact=req.body.contact;
    const Appointment_Spe_Dept=req.body.appointment_spe_dept;
    const Uid=Name.substring(0, 3)+"123";
    const Field=req.body.field;
    
    const item1=new Register({
        name: Name,
        email: Email,
        adhaar: Adhaar,
        contact: Contact,
        appointment_spe_dept: Appointment_Spe_Dept,
        uid: Uid
    });
    item1.save();
    
    if(Field=="Doctor"){
        const docUid = Name.substring(0, 3)+"123";
        const docName=Name;
        const item2=new Doctor({
            uid: docUid,
            name: docName,
            spe: Appointment_Spe_Dept
        });
        item2.save();
    }

    res.redirect("/register.html");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });