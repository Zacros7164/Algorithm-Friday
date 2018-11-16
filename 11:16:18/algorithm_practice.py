# ===== Algorithm 1 =====

# total_sum = 0
# for i in range(0, 1001):
#     if (i % 3 == 0 or i % 5 == 0):
#         total_sum += i
# print total_sum



# ======= Algorithm 2 ======
# ======= Connor's version =======

# a = 1
# b = 1
# sum = 0
# while a <= 4000000:
#     if a % 2 == 0:
#         sum += a
#     a, b = b, a+b
# print sum


# ===== Algorithm 2 =====
# ====== Group version =====


# fib_seq = [1, 2]
# sum = 0
# running_total = 2
# for i in fib_seq:
#     if i < 4000000:
#         sum = fib_seq[-2] + fib_seq[-1]
#         # fib_seq.append(sum)
#         if sum % 2 == 0:
#             running_total += sum
#             # print running_total

# print running_total
# # print fib_seq


# ===== Algorithm 3 =====
# import math
# primeFactor = []
# num = int(raw_input("what is a number? "))
# numSquare = int(math.sqrt(num))
# for i in range(2, numSquare):
#     if num % i == 0:
#         primeFactor.append(i)
#         if i % 2 == 0:
#             primeFactor.remove
#         if i % 3 == 0:
#             primeFactor.remove(i)
# print primeFactor       


# for i in range (1, num):
#     if (num % i) != 0:
#         primeFactor.append(i)
#         if (i % 2) == 0:
#             primeFactor.remove(i)
#     if primeFactor[i] > primeFactor[i-1]:
#         primeFactor.remove(i-1)

# print primeFactor

# uncomment the following lines to take input from the user
#lower = int(input("Enter lower range: "))
#upper = int(input("Enter upper range: "))

# print("Prime numbers between",lower,"and",upper,"are:")

# for num in range(lower,upper + 1):
#    # prime numbers are greater than 1
#    if num > 1:
#        for i in range(2,num):
#            if (num % i) == 0:
#                break
#        else:
#            print(num)



# ===== Algorithm 3 =====
# ===== Class Example =====

# The prime factors of 13195 are 5, 7, 13, and 29.
# What is the largest prime of the number 600851475143.

user_number = int(raw_input("What number would you like to factor? "))
prime_factors = []
for i in range(2,user_number):
    if(user_number % i == 0):
        prime_factors.append(i)
        user_number = user_number