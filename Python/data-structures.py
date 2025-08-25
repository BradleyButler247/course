# Data Structures

# Len is how we find the length of a string, list, dictionary or set

# Lists

# list('hello')
# Returns [h, e, l, l, o]

# list(range(10, 20, 2))
# Returns [10,12,14,16,18]

# vegan_no_nos = ['eggs', 'meat', 'milk', 'fish', 'figs']

# pie_ingredients = ['flour', 'apples', 'sugar', 'eggs', 'salt']

# for food in pie_ingredients:
#     if food in vegan_no_nos:
#         print(f"OH NO, CANNOT EAT {food}! IT'S NOT VEGAN!")
#     else:
#         print(f"YUM, I LOVE {food}!")



# Slicing a list

# vegan_no_nos[2:4:1]
# [start:stop:step]
# Returns ['milk', 'fish']

# vegan_no_nos[2:]
# Returns the list from index 2 to the end

# vegan_no_nos[2::2]
# Returns every other list item since step is set to 2

# vegan_no_nos[:3]
# Returns all list items starting at the beginning and ending at the index 3



# Splicing

# colors = ['red', 'orange', 'yellow']

# colors[0:1] = ['dark red', 'pink']

# colors is now equal to ['dark red', 'pink', 'orange', 'yellow']

# colors[1:] = [] 
# This will remove all elements including and beyond the index of 1



# List methods

# Instead of .push() in js python uses .append()

# .copy() creates a copy of the list that does NOT reference the same list
#   This means changes can be made to the copy without effecting the original
#   Nested elements like lists will not be copied, just the top level list is

# .count() will count how many times a specified value occurs in a list

# .extend(x) will add list x to the specified list

# index() is the python equivalent of indexOf() in js

# .insert(i,x) will insert x at position i

# .pop(i) will remove and return the item at i 
#   .pop() will remove and return the last item in a list

# .sort() will sort a list 
#   Strings alphabetically
#   Numbers smallest to largest
#   .sort(reverse=True) will reverse how these lists are sorted



# String methods

# .count(t) returns the number of times t occurs in the string

# .endswith(t) does string end with string t

# .find(t) index of the first occurrence of t in the string
#   Returns -1 if t is not found

# .isdigit() is s entirely made up of numbers

# '.'.join('lol) will return l.o.l

# .lower() returns lowercase copy of string

# .replace(t, count) replace count occurrences of t in string
#   Defaults to all occurrences

# .split(sep) returns a list of items made from splitting a string on sep

# .splitlines() splits a string at new lines

# .startswith(t) does a string start with t

# .strip() removes whitespace at start/end of string



# Dictionaries

# chicken = {
#     'name': 'butters',
#     'age': '6 months',
#     'breed': 'Silkie'
# }
# If keys or values that are words are not entered as a string python will think you are referencing a variable

# stuff = {
#     True: 34,
#     100: 'AWESOME'
# }
# Booleans and numbers are not converted to strings

# Lists cannot be keys, it will return an Unhashable type error

# breed in chicken
# This will return true since it is a key but we cannot do this with a value

# chicken['breed']
# This will return 'Silkie'

# chicken['age'] = 12
# This will change the value of age to 12

# chicken.get('weight')
# This will not return anything since weight is not a key

# chicken.get('weight', '2 lbs')
# This will return '2 lbs' as the default value since weight is not in the chicken dictionary

# dict() will make a new empty dictionary

# dict([[True, 0], [False, 1]])
# This will return {True: 0, False: 1}

# chicken = {
#     'name': 'Lady Gray',
#     'breed': 'Silkie',
#     'total_egg_count': 12,
#     'egg_chart': {
#         'Mo': True,
#         'Tu': True,
#         'We': True,
#         'Th': True,
#         'Fr': True,
#         'Sa': False,
#         'Su': True
#     },
#     'coop_mates': ['Butters', 'Stevie', 'Henry']
# }

# for key in chicken.keys():
#     print(key)
# This will print each key in chicken

# for val in chicken.values():
#     print(val)
# This will print each value in chicken

# for item in chicken.items():
#     print(item)
# This will print (key, value) for each pair in the dictionary

# for (k,v) in chicken.items():
#     print(k, '---->', v)
# This will print k ----> v for each pair in chickens



# Dicitonary methods

# .get(key) will return the value associated to that key
# If the key is not in the dictionary it will not return anything

# .copy() will return a copy of the dictionary
# Reference will be different so you can change the copy without changing the original

# .items() will return an iterable of the (key, value) pairs

# .keys() will return an iterable of the keys in the dictionary

# .values() will return an iterable of the values in the dictionary

# .pop(key) will remove the specified key and value

# .popitem() will remove a random key-value pair

# {}.fromkeys('MTWTF', True)
# This will return {'M': True, 'T': True, 'W': True, 'T': True, 'F': True}
# Could also pass in a list instead of 'MTWTF'
# Won't effect existing dictionary, only works on new ones

# .clear() will empty a dictionary



# Sets

# Unordered collection of unique values

# colors = {'red', 'blue', 'green'}

# Like a dictionary but with only values not key-value pairs

# languages = {'javascript', 'python', 'ruby'}

# set('@#$%^')
# This will create a set with each character as a value

# Lists and dictionaries cannot be put in a set, only immutable types



# Set methods

# .add(x) will add x to the set

# .copy() will make a copy of the set

# .pop() pop will remove and return an arbitrary value from the set

# .remove(x) will remove x from the set

# .clear() will empty out the set



# lemon = {'sour', 'yellow', 'fruit', 'bumpy'}
# banana = {'fruit', 'smooth', 'sweet', 'yellow'}

# lemon | banana
# banana.union(lemon)
# Union will merge the two sets 
# Both notations will merge the sets

# lemon & banana
# banana.intersection(lemon)
# Will return the common values of the two sets

# lemon - banana
# Will return different values in the first set 
# banana.difference(lemon)
# Will return different values in banana

# lemon ^ banana
# banana.symmetric_difference(lemon)
# Will return all different values across both sets

# set.union(list)
# set.intersection(list)
# set.difference(list)
# set.symmetric_difference(list)
# These will convert the list to a set then perform the function 
# The shorthand notation will not work

# for adj in banana:
#     print(adj)
# Will print all adj in banana



# Tuples
# Immutable, ordered sequence
# Like a list but immutable

# colors = ('red', 'yellow', 'green')

# Can access value in tuple by index

# Cannot change, add or remove value from tuple

# To create a one item tuple you need the following notation (3,)

# Values in a tuple do not need to be unique

# Since they're immutable tuples can be used in dictionaries and sets

# .count(x) will tell you the number of times x occurs in a tuple

# .index(x) will tell you the first index of x in a tuple



# Comprehensions

# nums = [1,2,3,4,5,6,7,8,9,10,11,12,13]

# evens = []
# for num in nums:
#     if num % 2 == 0:
#         evens.append(num)
# print(evens)

# Can be rewritten as follows
# evens = [num for num in nums if num % 2 == 0]
# print(evens)

# doubled_nums = [num * 2 for num in nums]
# This will create a new list of doubled nums

# [n * n for n in [2,4,6,8]]
# This will square each value in the list

# [num for num in range(10,20)]
# This will create a list of numbers in the range provided
# This is effectively the map function in js

# [[] for x in range(3)]
# Returns [[],[],[]]

# [[0 for y in range(3)] for x in range(3)]
# Returns [[0,0,0], [0,0,0], [0,0,0]]

# def gen_board(size, initial_val=None):
#     return [[initial_val for x in range(size)] for y in range(size)]
# gen_board(5,0) returns:
# [[0, 0, 0, 0, 0],
# [0, 0, 0, 0, 0],
# [0, 0, 0, 0, 0],
# [0, 0, 0, 0, 0],
# [0, 0, 0, 0, 0]]

# [x for x in range(10) if x % 2 == 0]
# Returns [0,2,4,6,8]

# chickens = [
#     {'name': 'Henry', 'sex': 'Rooster'}
#     {'name': 'Lady Gray', 'sex': 'Hen'}
#     {'name': 'Junior', 'sex': 'Rooster'}
#     {'name': 'Stevie Chicks', 'sex': 'Hen'}
#     {'name': 'Rocket', 'sex': 'Hen'}
#     {'name': 'Butters', 'sex': 'Rooster'}
# ]

# hens = [bird['name'] for bird in chickens if bird['sex'] == 'Hen']
# Returns the name of all hens

# scores = [55, 89, 99, 87, 60, 70, 74, 76, 90, 82]

# grades = ['Pass' if score >= 70 else 'Fail' for score in scores]

