const Muqeem = require('muqeemcalcs');



const addition = Muqeem.add(1,2,3,4,5);




const Quadratic = Muqeem.solveQuadratic(1,2,3); // x^2 + 2x + 3




const WorkDone = Muqeem.calculateWork(2,4); //W = F*S, here F=2, S=4




console.log(addition);




console.log(Quadratic); //results only if roots are real otherwise empty array





console.log(WorkDone);