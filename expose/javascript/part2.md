# Part 2
1. This prints out "3". Because the loop is exited at the point where i = 3.
2. This line prints out "150". Because the loop exits at iteration i=2, the discounted price would be 150 at that point
3. This line also prints out "150". Because the finalPrice would be 150 when the loop exits, since the var is accessible outside of the functions, it prints out normally.
4. The function would return an array [50,100,150]. Because each new price is being pushed into a new array for each value in the original one. 
5. This line produces an error because the variable is being declared with "Let" which limits the scope and access of it.
6. This line also produces an error because of the declaration using "Let". So the function cannot access the out of scope variable.
7. This will print out "150". Because even though it is declared using "Let" it is inside of the current scope of the function.
8. This function would return an array [50,100,150]. Because of the same reason as the previous question.
9. This will have an error because of the definition of i using "Let". Because of this, there is no access as it is out of scope 
10. This will return "3" because it is using the length of the array. Because "const" is just not gonna let the variable value change.
11. The function would return an array [50,100,150]. Because even though we are using "const" it doesn't affect the value that wasn't changed.
12. a) student.name
    b) student['Grad year']
    c) student.greeting()
    d) student['Favorite Teacher'].name
    e) student.courseLoad[0]
13. a) "32" ; integers map to ther exact string representation.
    b) "1" ; string "3" is converted to the actual value 3.
    c) "3" ; null becomes 0.
    d) "3null" ; null converts to a string and then it's just concatenated.
    e) "4" ; because "true"'s value is 1.
    f) "0" ; beacuse "false"'s value is 0.
    g) "3undefined" ; "undefined" converts to a string and then it's just concatenated.
    h) "NaN" ; "undefined" is converted to NaN, and any number subtracted by NaN becomse NaN.
14. a) "true" ; because 2 is converted to integer.
    b) "false" ; because the strings are compared as strings and compares the length of them.
    c) "true" ; because 2 is converted to an integer.
    d) "false" ; because === doesn't convert data type.
    e) "false" ; becasue boolean "true" has a value of 1.
    f) "true" ; because it is converted to true.
15. == allows data type conversion while === doesn't. So with the first, you can compare different variable types, but not with the latter.
16. see file part2-question16.js.
17. Function outputs [2,4,6]. Function doSomething returns the passed parameter number multiplied by 2. The other function creates a new array and pushes new values into it. So in the loop, each value is multiplied by two and then inserted into the array.
18. see file part2-question18.js.
19. "1 4 3 2".
    


