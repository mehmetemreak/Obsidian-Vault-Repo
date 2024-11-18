# The Problem

Most public spaces (e.g. cafés, restaurants, public transport) are fully equipped with public WiFI to let people catch up on email (or, equally likely, play the latest hit mobile game).

The attacker can quickly set up a network of their own and monitor the traffic of everyone who connects; this is referred to as a "man-in-the-middle" attack and is very easy to carry out.

If you were to connect to a network belonging to an attacker then logged into an account for a website that doesn't use an encrypted (HTTPS) connection, the attacker could simply pluck your credentials out of the network traffic and use them to log into your account for themselves.

This scenario will be explored in more detail in the interactive element to this task; however, it is fortunately significantly less likely to occur with modern websites which implement **T**ransport **L**ayer **S**ecurity (TLS) to encrypt traffic between their servers and users as standard.

## The Solutions

The _ideal_ solution to this problem is simply not connecting to untrusted networks.

it will always be safer to use a mobile hotspot or private network. Unfortunately, the ideal solution is not always feasible; when this is the case, we must rely on other methods of staying safe.

**V**irtual **P**rivate **N**etworks (VPNs) encrypt all traffic leaving and re-entering your machine. It is possible to host your own VPN server for free. I don't recommend online solutions.

# Website Connection Security

All websites should now only serve information in the safety of an encrypted connection. As with using a VPN, this prevents an attacker from reading, or modifying your web traffic if they intercept it. The encrypted connection used to create HTTPS (**H**yper **T**ext **T**ransfer **P**rotocol **S**ecure) is referred to as TLS (**T**ransport **L**ayer **S**ecurity), and in most browsers is represented by a padlock to the left of the search bar, which indicates that the connection is secure:
![[Pasted image 20241118144028.png]]

With this in place, your traffic can only be decrypted in very select circumstances: namely, if it is a work or school managed device and you are connected to a work/school network.

_**Note:** The presence of the padlock indicates that the connection is secure; it does not guarantee that the website itself is_ safe_. In other words, a malicious website can still easily have a TLS cert (meaning that your traffic with the server_ is _encrypted), but that doesn't stop the site from having a malicious purpose._

In some instances, you may also see a padlock with a cross through it or an exclamation mark over it; this indicates that the connection is _theoretically_ secure but that there is something wrong with the certificate in use by the server.

