---
title: Packet Processing
parent: Info
permalink: /info/packet-processing
---

## Program processing order for packets
*Verified for 0.12.3*  

Programs which affect packets have a "Packet Processing Priority", which defines which programs affect the packet before others.  
A smaller "Packet Processing Priority" makes it run before programs with a higher "Packet Processing Priority" value.  

This is typically based on the modifiers that program has.  
If a program has multiple modifiers, the one with the smallest "Packet Processing Priority" value will be used.  
The following lists each modifier and it's "Packet Processing Priority" value, with the top being the first to affect the packet.  
1. `ALLOW_PACKET_TRANSLATION` (5)
2. `ALLOW_PACKET_FILTERING` (10)
3. `ALLOW_PACKET_ROUTING` (20)
4. `ALLOW_TRAFFIC_SPLITTING` (50)
5. `ALLOW_VLAN_TAGGING` (51)
6. `ALLOW_PACKET_SWITCHING` (52)


## Internal packet processing behaviour
*Verified for 0.12.1*  

Every 0.1s, all received packets are processed on the given device or vm.  
If bandwidth is exceeded, all packets are dropped.  
If a packet processing program doesn't DROP the packet (ie, [`firewall`]({{ site.baseurl }}/data/programs#firewatcher)), then consume bandwidth and continue handling the packet.  

The above in more technical detail; each device processes packets according to the following;
```
Upon receiving a packet:
    If device/vm is not running:
        Ignore the packet.
    Else if bandwidth is exceeded:
        Drop the packet for "network overload"
        Ignore the packet.
    Else:
        Put packet into 'packet input queue'.

Every 0.1s to 0.2s, while device/vm running:  (affected by time scale)
    Send out all packets in packet output queue.

    For each packet in the packet input queue:
        If bandwidth is exceeded OR iteration count > 2048:
            Drop the packet for "network overload"
            Stop for loop.
        
        If packet ttl expired:
            Drop packet.
            Continue to next packet in queue.

        Decrement packet ttl

        For each packet processing program, it may:  (in the order of "Packet Processing Priority")
            DROP:
                Stop processing packet.
                Continue to next packet in queue.
            PASS:
                Mark as processed
            NOOP:
                Do nothing.
        
        Consume bandwidth for packet weight (aka packet size)

        If packet destination is this device/vm:
            Packet attempts to do whatever it does.
        
        If packet for self:
            Continue to next packet in queue.
        Else:
            If device is packet origin AND not marked as processed:
                Copy packet to packet output queue on every port
            Else If virtual ports > 0:
                *Packet handling for vm host and vms... Ask if you want me to dig into it*
    
    Clear packet input queue. *This is technically done before the for loop.*
```
Additional notes;
- Programs may create packets, they are handled by the above as well.  
- [`wirerat`]({{ site.baseurl }}/data/programs#wirerat) will not create `inspect-user-packets` for dropped packets, but `pcap` will still see them in red.
