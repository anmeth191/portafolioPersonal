const personalData = {
    name:'Angel',
    lastName:'Rivera',
    address:'115 Beaver Road',
    city:'Maven',
    state:'PA',
    zipCode:32186,
    skill:['JavaScript' , 'HTML' , 'CSS' , 'React' , 'NodeJS' , 'MongoDB' , 'Angular' , 'MYSQL' , 'Team Work',
            'Communication Skills' , 'Problem Solving' , 'Customer Service' , 'Glovia' , 'Mainframe' ]
}

const personalInfo = (state = personalData , action)=>{
return state;
}

export default personalInfo;