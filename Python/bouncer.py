age = 19
isBirthday = True

if age >= 21:
    print('You can drink')
    if isBirthday:
        print("Happy birthday! Here's a free martini!")
elif age >= 18:
    print('You can come in but not drink')
    if isBirthday:
        print("Happy birthday! Here's a free apple juice!")
else:
    print('Sorry go home kid')