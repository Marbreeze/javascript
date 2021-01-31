// ***For all the exercises, be sure to log the output of the function to the console.***

        //1 problem
        /************************************************************************************/
        // Write a JavaScript function that iterates the integers from 1 to 100. 
        //For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." 
        //For numbers that are multiples of both 3 and 5, print "TEKcamp."

        //your code...

    {   
        
        function tekCamp() {
            for(let i = 1; i <= 100; i++){
                if(i % 3 === 0 && i % 5 === 0){
                console.log("TeckCamp");
                }
                else if(i % 5 === 0){
                   console.log("Camp"); 
                }
                else if(i % 3 === 0){
                    console.log("Teck")
                }
                else{
                    console.log(i)
                }
            }
        }
        tekCamp()
    }



        //2 problem
        /************************************************************************************/
        //Write a function that converts the current temperature from Fahrenheit to Celsius. 

        //your code...
    {
        function farenheitCelsius(farenheit) {
            let celcius = (farenheit - 32) * (5 / 9);
            return celcius;
        }
        farenheitCelsius(50);
    }



        //3 problem
        /************************************************************************************/
        //Write a function that converts the Celsius temperature back to Fahrenheit. 

        //your code...
    {
        function celsiusFarenheit(celsius) {
            let farenheit = (celsius * 1.8) + 32;
            return farenheit;
        }
        celsiusFarenheit(80)
    }





        //4 problem
        /************************************************************************************/
        // Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

        //your code...
    {
        function canVote(age) {
            age >= 18?true:false;
        }

        canVote(17);
    }




        //5 problem
        /************************************************************************************/
        // Write a function that converts a string to an array. It should return an array.  

        //your code...
    {
        function strToArr() {
            const str = 'tekCamp awesome!';
            return str.split();
        }
        strToArr();
    }



        //6 problem
        /************************************************************************************/
        // Write a function that reverses your telephone number.  It should return the reversed telephone number.

        //your code...
    {
        function reversePhone(nr) {
            let reversed = 0;
            while(nr > 0){
                reversed = (reversed * 10) + (nr % 10);
                nr = Math.floor(nr / 10);
            }
            return reversed;
        }
        reversePhone(4254992269)
        // console.log(reversePhone(4254992269))
    }



        //7 problem
        /************************************************************************************/
        // Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.
        
         //your code...
    {
        function carFunct(make, model, year, color) {
            const car = {
                make: make,
                model:model,
                year: year,
                color:color
            }
            return car;
        }
        
        const carOne = carFunct("infinity", "fx35",3002, "grey");
        //console.log(carOne);
    }

   


        //8 problem
        /************************************************************************************/
        // Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

        //example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

        //your code...
    {
        function evenOrOdd(myArr){
            const myMap = {};
            for(let i = 0; i < myArr.length; i++){
              if(myArr[i] % 2 === 0){
                  console.log(myArr[i] + ' : even')
                  myMap[myArr[i]] = "even";
                  }else{
                    console.log(myArr[i] + ' : odd')
                    myMap[myArr[i]] = "odd";
                  }
              }
              return myMap;
          }
        evenOrOdd([4, 9, 4, 23, 99, 0, 100000000099])
    }





        //9 problem
        /************************************************************************************/
        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        // Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

        //your code...
    {
        for(let i = 0; i < numbers.length; i % 3 === 0 ? i += 3 : i++){
            console.log(i)
        }
    }



        //10 problem
        /************************************************************************************/
    {
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        //access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
        //your code

        let retrieve = foodArray[foodArray.length-1];
        let school = retrieve.program;

        const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        // Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour"

        //your code

        for(let i = 0; i < foodArray.length; i++){
            let word = foodArray[i];
            if(word === retrieve){
            console.log(school + ' is ' + `${adjectiveArray[i]}`)
          }
          else if((word.substring(word.length - 1) == 's')){
            console.log(word + ' are ' + `${adjectiveArray[i]}`)
          }else{
              console.log(word + ' is ' + `${adjectiveArray[i]}`)
            }
        }


    }


    

        //11 problem
        /************************************************************* */
        // Refactor the for() loop to be a while loop.
        for(let i=0; i<10; i++) {

        console.log(" the value of i in the loop is : " + i);
        }


        //your code...
    {

        let i = 0;
        while(i < 10){
            console.log(" the value of i in the loop is : " + i);
            i++;
        }
    }






        //12 problem
        /************************************************************* */
        //Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
        //use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

        //your code...

    {  
        
        function add(x, y){
          let res =  x + y
          return res
        }

        function mult(x, y){
          return x * y
        }


        function division(x,y){
          return x / y
        }

        function powerOf(x, y){
          return (Math.pow(x,y))
        }

        add(30, 2)
        mult(add(30, 2), 20)
        division(mult(add(30, 2), 20), 10)

        let result = powerOf(division(mult(add(30, 2), 20), 10), 2)
        console.log(result)

    }



    {   
        
        //13 problem
        /************************************************************* */
        //Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

        // ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

        // 20 
        // 0
        // "zero";
        // const zero = 20;
        // null
        // "0"
        // !""
        // {}
        // () => {console.log("hello TEKcamp!");
        // 125
        // undefined
        // ""
        console.log(`${20} evaluates truthy because it is number value`)
        console.log(`${0} evaluates to falsy because it has no value`)
        console.log(`${"zero"} is truthy because it is a string`)
        const zero = 20; 
        console.log(`${zero} in this case zero is truthy because  is a placeholder and its value is 20`)
        console.log(`${null} is falsy because null is nothing or in other words doesn't have any value` )
        console.log(`${"0"} is truthy because "0" is a string and it has a value of "0"` )
        console.log(`!"" is truthy because the oposite string will be falsey`)
        console.log(`${{}} is truthy because it holds an empty object`)
        console.log(`() => {console.log("hello TEKcamp!"); is truthy because it is a arrow function `); 
        console.log(`${125} is truthy because it does have a value`)
        console.log(`${undefined} is falsy because it's declared but there's no value assigned to it`)
        console.log(`"" is falsy because its an empty string`)

    }

        //14 problem
        /************************************************************* */
        // Refactor the following code using a switch statement:
        // const day = "friday";

        // if(day === "monday") {
        //     console.log("we got a long week ahead of us...");
        // } else if(day === "tuesday") {
        //     console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        // } else if (day === "wednesday") {
        //     console.log("We are smack dab in the middle of the week");
        // } else if (day === "thursday") {
        //     console.log("Thursday night... the mood is right");
        // } else if (day === "friday") {
        //     console.log("TGIF.  Friday truly is the best day of the week!")
        // } else {
        //     console.log("It's a weekend!")
        // }

        //your code


     {   
        const day = "friday";
        let text = "";
        
        switch(day){
          case "monday":
            text = "we got a long week ahead of us...";
            break;
          case "tuesday":
            text = "tuesday's are still beterr than mondays, but LONG way to go still";
            break;
          case "wednesday":
            text = "We are smack dab in the middle of the week";
            break;
          case "thursday":
            text = "Thursday night... the mood is right";
            break;
          case "friday":
            text = "TGIF.  Friday truly is the best day of the week!";
            break;
          default:
            text = "It's a weekend!";
         }
        
        
    }


        //15 problem
        /************************************************************* */
        // Refactor the following statements to use ternary expressions:
        // const age = 10;
        // if (age > 21) console.log("adult"); else {
        //     console.log("minor");
        // }

        // if (age > 13 && age < 19) console.log('teen'); else {
        //     console.log("not a teenager");
        // };

        // if (age > 65) console.log("retired"); else {
        //     console.log("still working...");
        // }

        //your code
    {
        const age = 10;
        age > 21 ? console.log("adult") : console.log("minor"); 
        age > 13 && age < 19 ? console.log("teen") : console.log("not a teenager");
        age > 65 ? console.log("retired") : console.log("still working...");

    }

        //16 problem
        /************************************************************* */
        //Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
        /*

        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript". 
         The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.
          Make sure to reference any properties on your objedct using the 'this' keyword.
        */

        //your code...

    {    

        let tekStudent = {
            name:'Marina',
            age:26,
            gender:'female',
            healthy:'yes',
            hobbies:['cooking','singing', 'reading'],
            profession: 'developer',
            education: 'economy',
            learn:function(){
                console.log(this.name +  " is learning JavaScript");
            },
            persistance:function(){
                console.log("Some day you will be a " + this.profession);
            }
        }
        tekStudent.learn();
        tekStudent.persistance();

    }



        //17 problem
        /************************************************************* */

    {
            const year = 2021;
            const nums = [1,2,3,4,5];
            let sum = 0;
            let i = 0;


            //Refactor the following statements into expressions


            //1.
            // if(year > 2000 && year < 2100) {
            //     console.log("welcome to the 21st century");
            // }

            //your code...

            year > 2000 && year < 2100 && console.log("welcome to the 21st century");
            

            //2.
            // for(let i=0; i<nums.length; i++) {
            //     sum += nums[i];
            // }
            // console.log(sum);

            
            //your code...

            sum = nums.reduce(function(i, el) {
                return i + el;
            })
            console.log(sum);
            
            
            // 3.

            //     while(i < nums.length) {
            //         doubled.push(nums[i]*2);
            //         i++;
            //     }
            
            //     console.log(doubled);
            // }
        
            //your code...

            const doubled = nums.map(el => el * 2);
            console.log(doubled);

    }


        //18 problem
        /************************************************************* */
        // Use array methods to solve the following problems.

    {
        const nums = [1,2,3,4,5];
        // Square every number in the array.  Store the squares in a new array.
        
        //your code...
        const newArr = nums.map(el =>Math.pow(el, 2))
        console.log(newArr);

    }
     


        //19 problem
    {
        const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        //Remove all numbers that are less than 5.  Store the results in a new array.

        //your code...

        const result = fivePlus.filter(numr => numr > 5);
        console.log(result)

    }

        //20 problem
     
    {
        // Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

        //your code...

        const arr = Array.from({length: 20}, () => Math.floor(Math.random() * 20));
        const summ = arr.reduce((accumulator, currentValue)=>{
            return accumulator + currentValue;
        });
        // console.log(summ);

    }


        //21 problem

    {
        const showNums = [12,22,33,44,55,66,77,88,99,101];
        //Print out the value of each number divided by 2.  There is no need to store the output in an array.
        console.log(showNums.map(el => Math.round(el /2)))

    }
        //22 problem
        /************************************************************* */
        /* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */

    {
            function chessCalc(pieces) {
            const table =  new Map([
                ['queen', 9],
                ['pawn', 1],
                ['rock', 5], ['knight', 3], ['bishop', 3], ['king', 0 ]
            ]);
            let total = 0;
            for(let  i = 0; i<= pieces.length;i++){
                if(table.has(pieces[i])){
                    total += table.get(pieces[i]);
                    console.log(total);
                }else
                return null
            }
        }
        console.log(chessCalc(['king','queen','pawn','pawn','pawn','bishop']))

    }


        //23 problem
        /************************************************************* */

    {
        const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
        //reverse the array, without modifying / `mutating` the ones array.
        console.log(ones.reverse());
    }

        //24 problem
        /************************************************************* */
        //create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.
    {
        function cb(text){
            console.log('Thank you! ' + text);
        }

        function performer(cb) {
            //code goes here
            const txt = ('Amir you a great instructor!');
            cb(txt);
        }

        performer(cb);
    }






    
        //25 problem
        /************************************************************* */
        // For the given list of developers : 
        const devs = [
            {
                name: 'Cameron',
                age: 23,
                gender: 'm',
                "tech_stack" : ['html','css','js','React']
            },
            {
                name: 'Liz',
                age: 20,
                gender: 'f',
                "tech_stack" : ['java','spring-boot','MySql']
            },
            {
                name: 'Chris',
                age: 102,
                gender: 'm',
                "tech_stack" : ['react','express','python']
            },
            {
                name: 'Rashid',
                age: 27,
                gender: 'm',
                "tech_stack" : ['thymeleaf','postgres','js','Angular']
            },
            {
                name: 'Annie',
                age: 30,
                gender: 'F',
                "tech_stack" : ['html','scss','less','DynamoDB','GraphQL']
            },
            {
                name: 'Dr. Patel',
                age: 52,
                gender: 'M',
                "tech_stack" : null
            },
            {
                name: 'Isaiah',
                age: 48,
                gender: 'M',
                "tech_stack" : ['Java','','less','DynamoDB','GraphQL']
            },
            {
                name: 'Saima',
                age: 33,
                gender: 'F',
                "tech_stack" : ['MongoDB','Route53','Jenkins','Terraform','Kubernetes']
            },
            {
                name: 'Omar',
                age: 33,
                gender: 'm',
                "tech_stack" : ['c++']
            },
            {
                name: 'Mariam',
                age: 32,
                gender: 'f',
                "tech_stack" : null
            },
        ];

        
        //26 problem
        /************************** */  
        // Find all devs older than 24

        //your code here...
        const older24 = devs.filter((developer) => developer.age > 24)

    

        //27 problem
        /************************** */  
        // Remove all people who are not developers (i.e. no tech stack)

        //your code here...
        const onlyDev = devs.filter((developer) => developer.tech_stack !== null)

    

        //28 problem
        /************************** */  
        // Calculate the total age of all the devs

        //your code here...
        const totalAge = devs.reduce((total, current) => total + current.age, 0)


        //29 problem
        /************************** */  
        // Find all female devs

        //your code here...
        const onlyFemale = devs.filter((developer) => developer.gender === 'f' || developer.gender === 'F')


        //30 problem
        /************************** */  
        // lowercase the genders of every dev

        //your code here...
        devs.forEach((developer) => developer.gender = developer.gender.toLowerCase())

        //31 problem
        /************************** */  
        // Sort the developers by name

        //your code here
        devs.sort((a, b) => (a.name < b.name) ? -1 : 1)

        //32 problem
        /************************** */  
        // Sort the devs by age in descending order

        //your code here
        devs.sort((a, b) => b.age - a.age)


        //34 problem
        /************************** */  
        // Sort the male coders by age

        //your code here
        console.log(devs.sort((a, b) => b.age - a.age).filter((developer) => developer.gender === 'm' || developer.gender === 'M'))


        //35 problem
        /************************** */  
        // For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  
        // Example output is provided below : 

        /*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

        //your code here

    {    
        devs.forEach((developer) => {
            let sentence = "";
            sentence += developer.name;
            if (developer.tech_stack !== null) {
             sentence += " specializes in " + developer.tech_stack.join(", ") + ".";
            } else {
             sentence += " is not a developer.";
            }
            console.log(sentence);
           })
        
    }


        //36 problem
        /************************************************************* */
        // Write a function to find the maximum numerical value of the given array.  
        //Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  
        //("one" => 1) ("1" => 1).  Use array methods to perform this task.
    {       
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

        function maxNumber(numbers) {
            let newnums = numbers.map(num => {
                //your code ...
            
                if (Number.isInteger(num))
                 return num
                switch(num) {
                 case 'one': return 1;
                 case 'two': return 2;
                 case 'three': return 3;
                 case 'four': return 4;
                 case 'five': return 5;
                 case 'six': return 6;
                 case 'seven': return 7;
                 case 'eight': return 8;
                 case 'nine': return 9;
                 default: return 'Unknown';
                }
               })
               newnums = newnums.filter(num => num !== 'Unknown')
               newnums.sort((a, b) => b - a)
               console.log(newnums);
            }
            maxNumber(numbersMixed)
    
        //37 problem
        //After the numbers array has been cleaned up to only have numbers in it,
        // Write a function that sorts the modified numbers array.  
        //Allow the function to sort the array in descending order as well.

        function sortNums(numbers,desc) {
            //your code...
            return (desc ? numbers.sort((a, b) => b - a) : numbers.sort((a, b) => a - b))
        };
        sortNums(numbersMixed,desc=false);

    }

    {    
        //38 problem
        /************************************************************* */
        //Research a new feature of ES6+ and create an example of it's use case here.  
        //Be sure to write comments explaining what the feature is and why it is useful.


        //your code...
        const first = 'Luka';
        const last = 'Mika';
        console.log(`Hello ${first} ${last}!`);
        //above is string interpolation it is easy to use, and makes the code much cleaner


        'hello'.startsWith('hell')?console.log(true):console.log(false)
        'hello'.endsWith('ello')?console.log(true):console.log(false)
        //new string methods, very nice,let's us to check instanly the begining and ending of str,
        // did't know about them until someone in the slack asked for help.

        const iterable = ['a', 'b'];
        const [x, y] = iterable;
        console.log(x, y);

        //destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and arrays.
        //its very useful to implement in react as when passing the props to diferent components and getting the exact property from state.
        let add = (x,y) => x + y;
        console.log(add(10,20));

        //arrow functions, it is very useful first it is syntax sugar, to handle eventhandlers in REACT for example, 
        //also there is no need for binding to class compoenents.

    }

       
        //39 problem
        /************************************************************* */
        //Add an example of the 5 primary JavaScript data types to the given mapObj.  
        //The key is an example data type, and the value is the name of the data type.  
        //An object data type has already been set as the 1st key / val pair.

    {
        let mapObj = new Map();
        mapObj.set({company : "TEKsystems"},"object");
        mapObj.set('tekCamp', 'string')
        mapObj.set(true, 'boolean')
        mapObj.set(1,'int')
        mapObj.set(["volvo","infinity","toyota"], 'array')
        mapObj.set(function foo() { return 'add to mapObj'}, "function" )
        mapObj.set(undefined,'undefined')

        console.log(mapObj.has({company : "TEKsystems"}));

        //The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  
        //Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.
        
        
        
        //In the code above, in my opinion when map uses object it return false because it uses object value
        //your code..

        let newObj = {company: 'TEKsystems'}
        mapObj.set(newObj, 'object'); 
        console.log(mapObj.has(newObj))
        //above statement return true since it's a variable reference not an actual val of an obj.




        //loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  
        //Use array methods to do this.  Example output : ['string',number','boolean',array','object']

        let dtypes = [];
        mapObj.forEach(val => {dtypes.push(val)})
        console.log(dtypes)


    }


        //40 problem
        /************************************************************* */
        //Create 4 mathematical function expressions, add, subtract, multiply, divide.  
        //put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  
        //The doMath() function should print to the console the mathetmatical function that was carried out.  
        //The doMath() function should return the computed value of any operation performed.

        // ex : 2,3 => doMath(2,3) => adding : 5
        // const operations = [];
        // function doMath(x,y) {};

        //your code...
    {
            const operations = [
            add = (a, b) => a + b, 
            subtract = (a, b) => a - b, 
            multiply = (a, b) => a * b, 
            divide = (a, b) => a / b
            ];
            function doMath(x,y) {
            const rand = Math.floor(Math.random() * 4);
            let op = "op"
            switch(rand) {
                case 0: op="adding : ";
                break;
                case 1: op="subtracting : ";
                break;
                case 2: op="multiplying : ";
                break;
                case 3: op="dividing : ";
                break;
            }
            return(op + operations[rand](x, y))
        }; 
        console.log(doMath(3, 5))

    }


        //41 problem
        /************************************************************* */
        //- Create a Higher Order Function called multiple(x) that takes a single parameter.  
        //This HOF should return another function fn(y) that accepts another single parameter y.  
        //This inner function should compute the product of it's parameter with the parameter passed into multiple.  
        //Use this returned "first-class" function to compute triples of any given number.

        //your code...
    {
        const multiple = (x) => {
            return (y) => { return x * y}
           }
        console.log(multiple(3)(30))
    }






        //42 problem
        //- Write an outer function called stockGain that has cost basis (basis) as a parameter; 
        //declare a variable called message that holds " is how much the stock has increased".  
        //Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

        
        
        //your code
    {
        function stockGain(basis){
            const message = " is how much the stock has increased";
                return yrs =>{
                    const growthRate = 0.05;
                    return basis  * (growthRate * yrs) + message;
                }
        }
        stockGain()
    


        // Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

        //your code...
        const futureValue = stockGain(34)(3);
        console.log(futureValue);
    }


// DO NOT DELETE THIS EXPORT
module.exports = {
    tekCamp,
    canVote
}


//*************************************** */



