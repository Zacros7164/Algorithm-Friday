# in this universe, 2 and 3 are ALWAY prime
known_primes = [2,3]
# a function that will find if a number is prime
def is_prime(n):
    print n
    total_known_primes = len(known_primes)
    for i in range(0, total_known_primes):
        if(n % known_primes(i) == 0):
            # THIS IS DIVISIBLE BY A PRIME NUMBER.
            # therefore it CANNOT be a prime number
            return False
        else: 
            # its not divisible by this one... BUT that doesn't mean its not prime
            # its just not divisible by this number
            continue
    # we went through all KP and never hit return false, which means this must be prime
    known_primes.append(n)
    if(i == total_known_primes):
        return True


number = int(raw_input("Give me a number. "))
is_prime(number)