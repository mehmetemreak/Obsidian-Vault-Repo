Hyperlinks:
- [[#Evaluate information sources]]
- [[#Use search engines efficiently]]
- [[#Explore specialized search engines]]
- [[#Vulnerabilities and Exploits]]
- [[#Technical Documentation]]
- [[#Make use of social media]]
- [[#Conclusion]]

## Evaluate information sources

It is our job, as readers, to evaluate the information. We will mention a few things to consider when evaluating information:

- **Source**: Identify the author or organization publishing the information. Consider whether they are reputable and authoritative on the subject matter. Publishing a blog post does not make one an authority on the subject.
- **Evidence and reasoning**: Check whether the claims are backed by credible evidence and logical reasoning. We are seeking hard facts and solid arguments.
- **Objectivity and bias**: Evaluate whether the information is presented impartially and rationally, reflecting multiple perspectives. We are not interested in authors pushing shady agendas, whether to promote a product or attack a rival.
- **Corroboration and consistency**: Validate the presented information by corroboration from multiple independent sources. Check whether multiple reliable and reputable sources agree on the central claims.

## Use search engines efficiently

- `"exact phrase"`: Double quotes indicate that you are looking for pages with the exact word or phrase. For example, one might search for `"passive reconnaissance"` to get pages with this exact phrase.
- `site:`: This operator lets you specify the domain name to which you want to limit your search. For example, we can search for success stories on TryHackMe using `site:tryhackme.com success stories`.
- `-`: The minus sign allows you to omit search results that contain a particular word or phrase. For example, you might be interested in learning about the pyramids, but you don’t want to view tourism websites; one approach is to search for `pyramids -tourism` or `-tourism pyramids`.
- `filetype:`: This search operator is indispensable for finding files instead of web pages. Some of the file types you can search for using Google are Portable Document Format (PDF), Microsoft Word Document (DOC), Microsoft Excel Spreadsheet (XLS), and Microsoft PowerPoint Presentation (PPT). For example, to find cyber security presentations, try searching for `filetype:ppt cyber security`.

You can check more advanced controls in various search engines in this [advanced search operators list](https://github.com/cipher387/Advanced-search-operators-list); however, the above provides a good starting point. Check your favourite search engine for the supported search operators.

## Explore specialized search engines

### Shodan

Shodan let's you to search for specific types and versions of servers, networking equipment, industrial control systems, and IoT devices. ![[Pasted image 20241031195410.png]]
You may want to see how many servers are still running Apache 2.4.1 and the distribution across countries. To find the answer, we can search for `apache 2.4.1`, which will return the list of servers with the string “apache 2.4.1” in their headers.
Consider visiting Shodan [Search Query Examples](https://www.shodan.io/search/examples) for more examples.
### Censys
focuses on Internet-connected hosts, websites, certificates, and other Internet assets. Some of its use cases include enumerating domains in use, auditing open ports and services, and discovering rogue assets within a network. You might want to check [Censys Search Use Cases](https://support.censys.io/hc/en-us/articles/20720064229140-Censys-Search-Use-Cases).
![[Pasted image 20241031195550.png]]

### VirusTotal
[VirusTotal](https://www.virustotal.com/) is an online website that provides a virus-scanning service for files using multiple antivirus engines. It allows users to upload files or provide URLs to scan them against numerous antivirus engines and website scanners in a single operation. They can even input file hashes to check the results of previously uploaded files.

Furthermore, one can check the community's comments for more insights. Occasionally, a file might be flagged as a virus or a Trojan; however, this might not be accurate for various reasons, and that's when community members can provide a more in-depth explanation.
![[Pasted image 20241031195648.png]]

### Have I Been Pwned
[Have I Been Pwned](https://haveibeenpwned.com/) (HIBP) does one thing; it tells you if an email address has appeared in a leaked data breach. Finding one’s email within leaked data indicates leaked private information and, more importantly, passwords. Many users use the same password across multiple platforms, if one platform is breached, their password on other platforms is also exposed. Indeed, passwords are usually stored in encrypted format; however, many passwords are not that complex and can be recovered using a variety of attacks.
## Vulnerabilities and Exploits

### CVE
CVE is a program as a Vulnerabilities and Exposures (CVE) dictionary.
It provides a standardized identifier for vulnerabilities and security issues in software and hardware products. Each vulnerability is assigned a CVE ID with a standardized format like `CVE-2024-29988`.
This unique identifier (CVE ID) ensures that everyone from security researchers to vendors and IT professionals is referring to the same vulnerability, [CVE-2024-29988](https://nvd.nist.gov/vuln/detail/CVE-2024-29988) in this case.

The MITRE Corporation maintains the CVE system. For more information and to search for existing CVEs, visit the [CVE Program](https://www.cve.org/) website. Alternatively, visit the [National Vulnerability Database](https://nvd.nist.gov/) (NVD) website. The screenshot below shows CVE-2014-0160, also known as Heartbleed.

### Exploit Database
There are many reasons why you would want to exploit a vulnerable application; one would be assessing a company’s security as part of its red team. Needless to say, we should not try to exploit a vulnerable system unless we are given permission, usually via a legally binding agreement.

Now that we have permission to exploit a vulnerable system, we might need to find a working exploit code. One resource is the [Exploit Database](https://www.exploit-db.com/). The Exploit Database lists exploit codes from various authors; some of these exploit codes are tested and marked as verified.
### GitHub
[GitHub](https://github.com/), a web-based platform for software development, can contain many tools related to CVEs, along with proof-of-concept (PoC) and exploit codes. To demonstrate this idea, check the screenshot below of search results on GitHub that are related to the Heartbleed vulnerability.

## Technical Documentation
### Linux Manual Pages
man page for short. On Linux and every Unix-like system, each command is expected to have a man page. In fact, man pages also exist for system calls, library functions, and even configuration files.

Let’s say we want to check the manual page for the command `ip`. We issue the command `man ip`.
### Product Documentation

Every popular product is expected to have well-organized documentation. This documentation provides an official and reliable source of information about the product features and functions. Examples include [Snort Official Documentation](https://www.snort.org/documents), [Apache HTTP Server Documentation](https://httpd.apache.org/docs/), [PHP Documentation](https://www.php.net/manual/en/index.php), and [Node.js Documentation](https://nodejs.org/docs/latest/api/).

It is always rewarding to check the official documentation as it is the most up-to-date and offers the most complete product information.

## Make use of social media
It's expected you to be familiar with social media platforms. However, if you are not familiar with any of them, I recommend you check them out. Ideally, use your temp email and one you done terminate both the account and email. One reason for not using your primary account is that you don’t want your contacts to start connecting with you there when you are only temporarily exploring a platform.

The power of social media is that it allows you to connect with companies and people you are interested in. Furthermore, social media offers a wealth of information for cyber security professionals, whether they are searching for people or technical information. Why is searching for people important, you ask?

Furthermore, as a cyber security professional, you want to stay updated with new cyber security trends, technologies, and products. Following the proper channels and groups can provide a suitable environment for growing your technical expertise.

Besides staying updated via social media channels and groups, we should mention news outlets. Hundreds of news websites would offer valuable cyber-security-related news. Try different ones and stick with the ones you like most.
## Conclusion

This file focused on the most common sources of information for cyber security professionals. There are plenty more. As the information landscape keeps changing, it is impossible to cover all the sources. However, by subscribing to relevant cyber security groups, one can stay ahead and be aware whenever new interesting sources arise.
