# The Problem

The internet plays a _gargantuan_ role in modern life, with most people being connected in some way virtually constantly. As such, most public spaces (e.g. cafés, restaurants, public transport) are fully equipped with public WiFI to let people catch up on email (or, equally likely, play the latest hit mobile game).

The attacker can quickly set up a network of their own and monitor the traffic of everyone who connects; this is referred to as a "man-in-the-middle" attack and is very easy to carry out.

If you were to connect to a network belonging to an attacker then logged into an account for a website that doesn't use an encrypted (HTTPS) connection, the attacker could simply pluck your credentials out of the network traffic and use them to log into your account for themselves.

This scenario will be explored in more detail in the interactive element to this task; however, it is fortunately significantly less likely to occur with modern websites which implement **T**ransport **L**ayer **S**ecurity (TLS) to encrypt traffic between their servers and users as standard.

## The Solutions

The _ideal_ solution to this problem is simply not connecting to untrusted networks.

it will always be safer to use a mobile hotspot or private network. Unfortunately, the ideal solution is not always feasible; when this is the case, we must rely on other methods of staying safe.

**V**irtual **P**rivate **N**etworks (VPNs) encrypt all traffic leaving and re-entering your machine. It is possible to host your own VPN server for free. Don't look for online solutions.

