# What makes a strong pass?

In the past, people were advised to choose complex passwords that were easy to remember, for example:

`@Ed1nburgh#1988-2000!`

For all intents and purposes, this is a traditionally strong password. That said, the personal connection means that this password could potentially still be made weaker through social engineering or in-depth information gathering on a target.

Current best practices lean more towards length than complexity. For example:

`Vim is _obviously_, indisputably the best text editor in existence!`

By using a pass-phrase rather than a traditional password, the password is significantly longer whilst still retaining some of the more complex elements despite not looking quite so obfuscated. This has the advantage of being easier to remember whilst still being incredibly difficult to brute-force.

Ideally, however, you should use long, completely random passwords. For example:

`w41=V1)S7KIJGPN,dII>cHEh>FRVQsj3M^]CB`  

These take millions of years to crack and are objectively the most secure option available. The drawback is usability; however, this is largely mitigated by using a _password manager_

### Exposed Passwords

Unfortunately, not every service stores passwords securely (making it doubly important that you don't reuse passwords!).

The largest and most well-known data exposure checker is called "[Have I Been Pwned?](https://haveibeenpwned.com/)". It exists as a free online service that scours data dumps and catalogues all of the information found, allowing users to enter their email addresses to see if they have been included in any breaches. _Have I Been Pwned_ also allows you to add yourself to a notification list, meaning that you will receive an email notifying you if your email address appears in any data breaches.

Whilst not a perfect defence, notification services give you a vital early warning to change your passwords (hopefully) _before_ you get hacked.
###### _Background Information: Safe Password Storage_

When you sign up for an online account, the provider must store a copy of your password in order to validate it the next time you sign in; but this poses a huge problem: how can the passwords be stored securely?

- Storing the passwords as plain text (e.g. the same way you submit them) isn't an option as every password will instantly be leaked if the database is ever hacked.
- _Encrypting_ the passwords is an improvement, but not by much. If the passwords are stored encrypted, then they can also be _decrypted_ — an attacker simply has to obtain the key, and they can turn every encrypted password back into plaintext. Encrypting passwords was part of what made the [2013 Adobe breach](https://nakedsecurity.sophos.com/2013/11/04/anatomy-of-a-password-disaster-adobes-giant-sized-cryptographic-blunder/) so serious.  
    
- The industry-standard password storage method is referred to as _password hashing_. Password hashing (or simply "hashing") involves using complicated mathematical algorithms to take any input and turn it into a unique, fixed-length output in a way that is impossible to reverse. This means that when you sign up, your password will be hashed and stored in the database in a way that stops everyone (including server administrators) from being able to read it!  
    When you try to sign in, the same algorithm is applied to the password that you supply: if the stored hash matches the hash of the password you are trying to log in with (remembering that the same input will always create the same unique output), then you are considered to have successfully authenticated.  
    

Ideally, every service would hash user passwords with a secure algorithm. Even if the entire database were leaked, the attackers would still need to waste valuable time and computational power attempting to brute-force the (otherwise useless) hashes to find the plaintext passwords. This is why it is so important that passwords are long and preferably of a decent level of complexity: the longer the password and the larger the number of potential characters involved, the more power it takes to effectively _guess_ the password input used to generate a hash.
### Password Attacks

An attacker has a few options when it comes to attacking passwords and authentication systems. Some attacks are entirely local (i.e. working entirely on a device owned by the attacker without interacting with the target service at all), others are remote attacks involving the original server.

Local attacks require a stolen copy of the credentials in question. The attacker will take a file full of stolen usernames/emails and hashed passwords, then use software to effectively try to guess the input that created the hash either using randomly generated sequences of characters (slower but more thorough) or by using a pre-generated wordlist of possible passwords (faster but much more likely to miss things). Hybrid types are also very widely used; these are when an attacker takes an existing wordlist and _mutates_ it to add new characters, symbols, or random elements. Local password attacks will be demonstrated in the interactive element for this task.  

Remote attacks tend to be one of two categories; they either involve attempting to brute-force known usernames by sending requests to the server and seeing what it responds with, or they use known username and password pairs from previous breaches to see if they are valid on the target site — this is the aforementioned credential stuffing.
# Multi-Factor Authentication

**M**ulti-**F**actor **A**uthentication (or MFA) is a term used to describe any authentication process where you need more than one thing to log in. The most common example of this is when you enter the password for an account, then get asked for a six-digit code that is sent to your phone and usually expires after fifteen minutes or so. This particular second authentication factor is referred to as a **T**ime-based **O**ne **T**ime **P**assword (or TOTP) and is one of the most common second factors currently in use.


