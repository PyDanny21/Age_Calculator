const btn=document.getElementById('btn');
const birthdayEl=document.getElementById('birthday');
const resultEl=document.getElementById('result');

function calculateAge() {
    const birthday=birthdayEl.value;
    //  console.log(birthday);
     if(birthday==''){
        alert('Please enter a date!');
     }else{
        const Age=getAge(birthday);
        resultEl.innerHTML=`Your age is ${Age} ${Age>1? 'years':'year'} old`

        // console.log(Age)
     }
    
};
function getAge(birthday) {
    const currentDate=new Date();
    const birthdayDate=new Date(birthday);
    let age=currentDate.getFullYear()- birthdayDate.getFullYear();
    let month=currentDate.getMonth()- birthdayDate.getMonth();
    if (month<0 || (month===0 && currentDate.getDate()<birthdayDate.getDate())) {
        age--;        
    };
    return age;
    
    console.log(age)
    // console.log(birthdayDate.getFullYear())
    // console.log(currentDate)  
};

btn.addEventListener('click',calculateAge)