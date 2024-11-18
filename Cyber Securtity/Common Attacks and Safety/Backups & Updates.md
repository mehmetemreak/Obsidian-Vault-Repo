# Backups
Backups are arguably the single most important defensive measure you can take to protect your data. No matter what happens, if you have taken appropriate steps to back your information up, you will always be able to recover almost regardless of the severity of the damage.**The Golden 3,2,1 Rule**

The golden standard for taking backups is relatively simple and is often called the "3,2,1 rule".

The 3,2,1 rule specifies that:  

You should always keep at least **three** up-to-date copies of your data; this can include the original copy, but all copies must be maintained.  

Backups should be stored on at least **two** different storage mediums; for example: a cloud backup and a USB device. This can include a hard drive on your PC.  

**One** (or more) backups should be stored "off-site". Cloud services such as Google Drive are ideal for personal use in this regard.

Personally, I'd recommend to store your low-weight or work data on [GitHub](https://github.com/)It's easy to use, encrypted (to some level, not sure), at other solutions NAS(Network Attached Storage) is a great one, especially if you have your own [Pi-hole](https://pi-hole.net/) or a homemade VPN or even better, your own router, since you will be in full control what's coming and going. ocf you can also use cloud services.
# Software Updates

Updates are an essential part of the software development lifecycle; they allow developers to add new features, fix bugs and otherwise simply alter aspects of the product. When vulnerabilities are discovered in software, the developers usually release special updates called _patches_ that contain a fix for the vulnerability or otherwise "patch" the security issue.

For this reason, it is imperative that you update software whenever possible — especially for things like operating systems (e.g. Windows or macOS) where vulnerabilities can be particularly dangerous, as seen in the case study below.

## Case study: Eternal Blue

Eternal Blue is believed to have been discovered by the United States **N**ational **S**ecurity **A**gency (the NSA) and was leaked to the general public in April 2017. The vulnerability affects an integral part of the Windows operating system and gives a remote attacker complete control over the target at the highest level of privileges. You can see this for yourself in the ["Blue" room on TryHackMe](https://tryhackme.com/room/blue).

Microsoft quickly released a patch (the infamous [MS17-010](https://docs.microsoft.com/en-us/security-updates/SecurityBulletins/2017/ms17-010)) which was designed to remove the vulnerable component in the software; however, many administrators simply chose not to download it for one reason or another.

Why is this important? Eternal Blue was the transmission vector that the [Wannacry](https://www.malwarebytes.com/wannacry) ransomware used to spread and infect new devices! Eternal Blue gave full access to a target remotely, making it a perfect vulnerability to exploit with a self-replicating virus. Despite a patch having been made available months before the appearance of Wannacry, the ransomware was still able to attack millions of unpatched systems, with devastating effects.  

You can read more about Eternal Blue [here](https://www.sentinelone.com/blog/eternalblue-nsa-developed-exploit-just-wont-die/).

