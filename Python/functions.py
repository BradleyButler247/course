def greet(person):
    return f'Hello there, {person}'

def divide(a,b):
    if type(a) is int and type(b) is int:
        return a/b
    return 'You can only divide integers'


def send_email(to_email, from_email, subject, body):

    # When entering arguments they must be in the order provided unless you define them when you call the function
    # send_email(to_email='you@gmail.com', from_email='me@gmail.com', subject='This is my subject', body='This is the body')
    # The above line could have the arguments arranged in any order

    email = f"""
        to: {to_email}
        from: {from_email}
        subject: {subject}
        ------------------
        body: {body}
    """

    print(email)