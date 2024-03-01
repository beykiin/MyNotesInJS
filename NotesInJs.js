// float= The decimal number variable.
        // int(intager)= It is an integer variable.
        // String= String variable.
        // There is a variable named 'number' which is a combination of float and integer.
        // We define all of these with 'let' or 'var'. 
        // The difference between "var" and "let" is that "var" performs global declaration, whereas "let" is strictly block-scoped and does not allow re-declaration of variables within the same scope.
        //  Another aspect is "const" variables; once assigned, they cannot be changed. So, if you set x to 10, you cannot later set x to 5.
        // const name="pancar"
        // name="ahmet"
        // The error message you receive is likely: "Assignment to constant variable." This means you are attempting to assign a new value to a variable that has been declared using "const," which is not allowed.
        //let or var name="pancar"
        // name="ahmet"

        // Printing to the console:
        //var name="pancar" // "var" or "let" are used for variable declaration, while "const" is used for declaring constants that cannot be changed.
        //name="ahmet"
        // console.log(name) // console.log(x)= It is used to display output in the console.

        //Displaying a warning window on the page:
        // let name="pancar"
        // name="ahmet"
        // alert(name) // alert(name)= It opens a warning window on the page and displays the output of your actions in this warning window to the user.

        //Displaying directly within the page.
        // var name="pancar"
        // name="ahmet"
        //document.write(name) // It executes the code directly within the page.

        //EXAMPLE
        // let name="pancar"
        // name="<br> Ahmet <br><i> Neos Yazılım Akademi</i> <br> <b>OOOO NABER</b>"
        // document.write(name) // So, everything we write with HTML tags is visible on the page.

        //To move to a new line. "\n"
        // console.log("Merhaba ben: \nYasin BEKEN") // Using "\n" moves you to a new line.

        //To leave a space of one tab distance. "\t"
        // console.log("Merhaba ben: \tYasin \tBEKEN") // Using "\t" leaves a space of one tab distance.

        // To indicate that you want to quote something:
        // console.log("Yasin şöyle söyledi: 'Kendimi hiç iyi hissetmiyorum.'") // If you use a double quotation mark within another pair of double quotation marks, it will result in an error because it disrupts the string structure. Therefore, single quotation marks should be used. If you enclose it within double quotation marks, it will be perceived as a variable.

        //String concatenation in JavaScript:
        // var name="Yasin Beken"
        // console.log("Yasin söyledi: "+name+"\tişte benim adım dedi.") // You can concatenate both textual string expressions and variables using the plus (+) sign.

        // Decimals:
        // var name="Yasin" // String expression.
        // let decimal=123.23 // It is also used as a float expression or double.
        // let integer=123 // Integer expression
        // console.log(typeof(decimal)) // console.log(typeof(x)) This will display on the console the type of the entered variable, whether it's a float, string, or integer. And this is called "number"

        // console.log(typeof(integer)) //console.log(typeof(x)) This will display on the console the type of the entered variable, whether it's a float, string, or integer. And this is called "number"
        // console.log(typeof(name)) //console.log(typeof(x)) This will display on the console the type of the entered variable, whether it's a float, string, or integer. And this is called "number"

        //Displaying Boolean values:
        //let isTrue=true //True 0 false 1 It takes two values.
        //Arrays
        //let array=["Yasin","Beken",11,0.123] // We assign only one value to a variable, but we assign multiple values to arrays.
        //console.log(array) // Its type is an array, which means it's a list. Object represents an entity.
        //console.log(array[n-1]) // So, if you want the nth element in the array, you should subtract 1 from the index. For example, if you want the 5th element, you should write 5 - 1 = 4. The index number of the 5th element is 4.
        //console.log(array[3])

        //The other array type is "object":
        //let object={
        //    "name":"YASİN",
        //    "surname":"BEKEN",
        //    "job":"Yazılımcı",
        //    "adress":{
         //       "avenue":"Meşrutiyet",
        //        "street":"Abidin Paşa",
        //        "city":"Ankara"
//
        //    },
        //    "projects":["Bu","Şekilde","Liste","Oluşturulabilir."]
        //} // In this way, we can create a list using commas and defining. Be careful with the commas! Also, you can create another array within an array.
        //console.log(object) // In this way, we display the elements inside the array on the console.
        //console.log(object["job"]) // In this way, we can display the desired element within the array by writing it in square brackets.
        //console.log(object.surname) // This is another method to display any element within the array by specifying its index.
        //console.log(object.adress.avenue) //In this way, you can also display an array within an array.
        //console.log(object.projects)
        //console.log(object.projects[3])

        //QUESTİONS
        //let names=["Recep",["Ahmet",["Pancar"],"Umut"],"Mehmet",["Kenan",["Olcay"]]]

        //1- How do we reach Olcay?
        // ANSWER = console.log(names[3][1][0])
        //2- Print Umut.
        // ANSWER = console.log(names[1][2])
        //3- Print the h in Mehmet.
        // ANSWER = console.log(names[2][2])

        // let names={
        //     name:["Ahmet",["Mehmet",["Pancar",["Umut"],"Recep"],"Olcay"],"Kenan"],
        //     fruits:{
        //         orange:["orange","tangerine",["grapefruit"]]
        //     }
        // }

        //1- Reach Olcay.
        // ANSWER = console.log(names.name[1][2])
        //2- Reach Umut.
        // ANSWER = console.log(names.name[1][1][1][0])