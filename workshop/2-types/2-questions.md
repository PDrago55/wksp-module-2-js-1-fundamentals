# Types

## Question 1: Which of the following strings are valid? Add an 'x' between the ( ) to indicate that it's valid.

1. ( ) "I am a "Horse""
2. ( ) "I 'prefer' ducks'
3. (x) 'Yes, duck is nice'
4. (x) "Ah, but I\'m vegan!"
5. (x) 'You'll eat salad then'
6. ( ) 'Yes I\'ll eat salad'
7. (x) "I'm happy to hear that!"
8. ( ) "\"Happy to hear " + 'that" ' + "he says!"
9. (x) “Hello world!”


## Question 2: Rewrite below all of the strings that are not valid, and correct them to make them valid. 
"I am a Horse"
'I prefer ducks'
'Yes I'll eat salad'
'Happy to hear' + 'that' + 'he says'

## Question 3: Which of the following expressions are true? Add an 'x' between the ( ) to indicate that it's true.

1. ( ) 7 == 2
2. (x) 7 == 7
3. (x - loose) 7 == '7'
4. (x) 7 != 0
5. ( ) 7 !== '7'
6. (X - loose ) 7 != '7'
7. ( ) 7 != 7


## Question 4: Which of the following expressions is/are truthy?

1. ( ) !0
2. ( ) !1
3. (x) -1
4. ( ) !"hello!"
5. ( ) null
6. (x) !undefined
7. (X) !NaN


## Question 5: Which of the following are valid objects?

1. ( ) {}
2. ( ) { 'hello' }
3. (x) { name: 'I am fruit' }
4. (x) {'brand-name': 'Dior' }
5. (x) { brand-name: 'Channel' }
6. (x) { cool_name: 'bob' + ' Dylan', age: 25 }


## Question 6: For each array, specify the number of elements and the type of each element.

1. ['cat', 'dog', 'bird']
    - number of elements: 3
    - type of _each_ element: string - numeric. 
        - 'cat': 0
        - 'dog': 1
        - 'bird': 2
2. [[], 24, 'hello', true]
 - elements: 4
 - type: null (0), numeric (1), string (2), boolean(3)
3. []
- undefined
4. [['romeo', 'juliet'], false]
- elements: 3
- type: string (0), string (1), boolean (0)
5. [{name: 'bob', age: 23}, {name: 'paul', age: 33}]
- elements: 4
- string, numeric, string, numeric
- 0, 1, 2, 3

## Question 7: What is the type and value for each of the following variables?

1. let  name = 'bob';
    - type: string
    - value: 'bob'
2. let age = 45;
    - type: numeric
    - value: 45
3. let isMarried = false;
    - type: boolean
    - value: false
4. let person = { name: name, age: age, isMarried: isMarried }
    - type: object
    - value:??
5. let kids = [{name: 'Morty', age: 3}, {name: 'Summer', age: 7}]
    - type: object w/ string & numeric
    - value: morty, 3, summer, 7
