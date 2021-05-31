const experience = {  
    jobs:[{
        id:1,
        title:'Inventory Control Specialist',
        description:'Responsible for Inventory Accuracy in Automotive Inventory systems, Investigate errors or problems that arise with data and equipment, Verify accuracy of cycle counts and overall accuracy in Automotive Plants , Add , delete or change parts numbers in master file , as directed by supervisor',
        date:'Nov. 2019 - Present',
        location:'Lyons, Pennsylvania'
    } ,{
        id:2,
        title:'COS/Take Off',
        description:'Set up, make adjusments and operate COS machines, inspect batteries and discard defects, Mantained a clean and safe work station',
        date:'Nov. 2018 - Nov. 2019',
        location:'Lyons, Pennsylvania',    
    },{ 
        id:3,
        title:'Golden Ears Apiaries',
        description:'Produced beehives, acquired bee nuclei and queens, extracted honey, prepared beekeeping materials and feed bees',
        date:'April 2014 - Oct.2017',
        location:'Mission, British Columbia'
}]
}

const experienceReducer = (state = experience , action )=>{return state;}


export default experienceReducer;