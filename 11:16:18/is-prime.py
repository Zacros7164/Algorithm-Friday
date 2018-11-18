# in this universe, 2 and 3 are ALWAY prime
known_primes = [2,3]
finalPrime = 2
# a function that will find if a number is prime
def is_prime(n):
    # print n
    total_known_primes = len(known_primes)
    for i in xrange(0, total_known_primes):
        if(n % known_primes[i] == 0):
            # THIS IS DIVISIBLE BY A PRIME NUMBER.
            # therefore it CANNOT be a prime number
            return False
        else: 
            # its not divisible by this one... BUT that doesn't mean its not prime
            # its just not divisible by this number
            continue
    # we went through all KP and never hit return false, which means this must be prime
    known_primes.append(n)
    # finalPrime = known_primes[-1]
    if(i == total_known_primes):
        return True

# print is_prime(31)
# print is_prime(8)
# print is_prime(11)
# print is_prime(13)

prime_factor = []
num = int(raw_input("number: "))
for i in xrange(2, num):
    is_prime(i)
    print known_primes
    if num % finalPrime == 0:
            prime_factor.append(finalPrime)
    if len(known_primes) > 10:
        del known_primes[0]
        

    # print known_primes
print known_primes
print prime_factor


