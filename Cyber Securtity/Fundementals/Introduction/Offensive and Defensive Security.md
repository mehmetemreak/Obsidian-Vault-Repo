
# Offensive Security / Pentesting
I used Gobuster app to find hidden URLs in a online banking website.
```bash
gobuster -u http://fakebank.thm -w wordlist.txt dir
```
Bu komutta, **-u** taranacak websitesini belirtmek için, **-w** ise yinelenerek taratılacak wordlisti belirtmek için kullandım.

![[Pasted image 20241030220932.png|500]]
Here I can see that Gobuster found another page in directory of the website.
Now we can just go to that address and can find vulnerabilities in this application.

# Defensive Security 

Some of the tasks that are related to defensive security include:
- User cyber security awareness: Training users about cyber security helps protect against attacks targeting their systems.
- Documenting and managing assets: We need to know the systems and devices we must manage and protect adequately.
- Updating and patching systems: Ensuring that computers, servers, and network devices are correctly updated and patched against any known vulnerability (weakness).
- Setting up preventative security devices: firewall and intrusion prevention systems (IPS) are critical components of preventative security. Firewalls control what network traffic can go inside and what can leave the system or network. IPS blocks any network traffic that matches present rules and attack signatures.
- Setting up logging and monitoring devices: Proper network logging and monitoring are essential for detecting malicious activities and intrusions. If a new unauthorized device appears on our network, we should be able to detect it.
### Security Operations Center (SOC)

A _Security Operations Center_ (SOC) is a team of cyber security professionals that monitors the network and its systems to detect malicious cyber security events.
Some of their main areas are:
- Vulnerabilities: Whenever a vulnerability is discovered, it is essential to fix and patch it. if a fix is unavailable, necessary measures should be taken to prevent an attack from happening.
- Policy violations: A set of rules are required to protect the network and systems. if users upload improper data, they would handle it.
- Unauthorized activity: A SOC must detect any stolen user acc and block or take such actions to prevent further damage.
- Network intrusions(zorla girme): No matter how good the security is, An intrusion may always happen. It may be caused when a user clicks on a malicious link or when an attacker exploits a public server. either way SOC must detect and prevent further damage asap.

### Threat Intelligence

In this context, intelligence refers to information you gather about actual and potential enemies. Threat intelligence collects information to help the company better prepare against potential adversaries. The purpose would be to achieve a _threat-informed defense_. 

Intelligence needs data. Data has to be collected, processed, and analyzed. Data is collected from local sources such as network logs and public sources such as forums. Data processing arranges it into a format suitable for analysis. The analysis phase seeks to find more information about the attackers and their motives; moreover, it aims to create a list of recommendations and actionable steps.

### Digital Forensics and Incident Response (DFIR)

#### Digital Forensics
Forensics is the application of science to investigate crimes and establish facts.
In defensive security, the focus of digital forensics shifts to analyzing evidence of an attack and its perpetrators and other areas such as ***intellectual property theft, cyber espionage, and possession of unauthorized content.*** Consequently, digital forensics will focus on different areas.
[More info...](https://tryhackme.com/r/room/defensivesecurityintro#:~:text=Malware%20Analysis-,Digital%20Forensics,-Forensics%20is%20the)

### Malware Analysis

Malware analysis aims to learn about such malicious programs using various means:

1. Static analysis works by inspecting the malicious program without running it. This usually requires solid knowledge of assembly language (the processor’s instruction set, i.e., the computer’s fundamental instructions).
2. Dynamic analysis works by running the malware in a controlled environment and monitoring its activities. It lets you observe how the malware behaves when running.

### SIEM
_Security Information and Event Management_ (SIEM) tool gathers security-related information and events from various sources and presents them in one dashboard. If the SIEM finds something suspicious, an alert will be generated.

If an IP address is unknown to your SIEM it will tell you it's suspicious. The way to find out if that is a malicious address or not is to use open-source databases out there, like AbuseIPDB, and Cisco Talos Intelligence, where you can perform a reputation and location check for the IP address. Most security analysts use these tools to aid them with alert investigations. You can also make the Internet safer by reporting the malicious IPs, for example, on AbuseIPDB.
### Flag
 A flag is a series of characters with a format like this: "THM{RANDOM_WORDS}". Use this flag to answer questions from rooms here in TryHackMe, 

# So...
In this note, we've discussed the different subfields ([[#Security Operations Center (SOC)]], [[#Threat Intelligence]], [[#Malware Analysis]], and [[#Digital Forensics and Incident Response (DFIR)]]) and experienced firsthand how to deal with alerts in a simulated [[#SIEM]] environment. While we've covered a lot, the depth and complexity of this field mean there's more to learn and explore. The lessons learned here will serve as your foundation as cyber threats evolve, demanding continuous learning, vigilance, and adaptation.