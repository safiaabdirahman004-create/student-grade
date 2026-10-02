const studentName = document.querySelector('input[placeholder="student Name"]');
const studentGrade = document.querySelector('input[placeholder="Enter grade"]');


studentName.addEventListener('input', () => {
    if(!isNaN(studentName.value)){
         studentName.value = "";
    }
    
    if(Number(studentGrade.value)){
        studentGrade.value = '';
    }
  
  
    
});