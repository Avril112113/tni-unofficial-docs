---
nav_order: 1
parent: Data
permalink: /data/programs
---

# Programs
{: .no_toc }
GENERATED FOR TNI VERSION 0.11.5

- TOC
{:toc}



## **Reference**  
- "(ALL_OR_NOTHING)" - Consumes from a single source only, which must have all the required USE.  
- "(FRAGMENTED_USE_ALLOWED)" - Can consume from multiple sources. Some USE's can be wasted if the total is not found.  
- "on destination device" - The produced USE is given to the device it consumed from instead of the device running the program.  

---

## bladeos  
**CPU:** 2 **MEM:** 1 **SIZE:** 1  
  
**Modifiers:** ALLOW_PACKET_SWITCHING  
  
**Description:**  
Network switch firmware.  
  
  
  
## blobdb  
**CPU:** 4 **MEM:** 3 **SIZE:** 5  
**<span style="color:DarkKhaki;">Produces:</span>** 5 `store-image, store-video, store-audio, store-text` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 5)</span>  
  
  
**Description:**  
General blob storage server. Stores media files.  
Production is limited to 5 compatible uses on the device's use stack.  
  
  
  
## cctv_edge  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
**<span style="color:LightCoral;">Required Hardware:</span>** CCTV  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `accept-cctv-camera-connection` @ [`udp/554`](traffic_types.md/#udp554) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `stream-live-video` <span style="color:Coral;font-size:85%;white-space:nowrap;">on destination device </span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by TARGET_TOTAL_CPU)</span>  
  
  
**Description:**  
cctv camera firmware  
  
Produce target's use stack limit is 1 compatible uses per target's installed CPU.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
  
  
## cctv_edge  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `accept-cctv-monitor-connection` @ [`tcp/554`](traffic_types.md/#tcp554) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `stream-live-video` <span style="color:Coral;font-size:85%;white-space:nowrap;">on destination device </span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 1)</span>  
  
  
**Description:**  
cctv camera firmware  
  
Produce target's use stack limit is 1 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
  
  
## complaint-lite  
**CPU:** 1 **MEM:** 2 **SIZE:** 1  
**<span style="color:DarkKhaki;">Produces:</span>** 2 `read-complaint, post-complaint, store-complaint` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 2)</span>  
  
  
**Description:**  
Lightweight complaint server which allows customers to submit complaints and customer service to manage and respond to tickets.  
Production is limited to 2 compatible uses on the device's use stack.  
  
**Unlocked By:** [Customer Officer](users.md/#customer-officer), [Public Gateway](users.md/#public-gateway)  
  
  
## complaint-server2  
**CPU:** 5 **MEM:** 9 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 2 `( read-text and post-text and verify-user )` @ [`tcp/25`](traffic_types.md/#tcp25) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `read-complaint, post-complaint, store-complaint` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
  
**Description:**  
Allows customers to submit complaints and customer service to manage and respond to tickets.  
<span style="color:red;">Requires access to a running mail server</span>.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2), [mailer](#mailer)  
**Unlocked By:** [Customer Officer](users.md/#customer-officer), [Public Gateway](users.md/#public-gateway), [Public Gateway](users.md/#public-gateway)  
  
  
## decentro-collector  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `access-p2p-currency` @ [`tcp/8333`](traffic_types.md/#tcp8333) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `access-p2p-currency` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by TARGET_FREE_MEMORY)</span>  
  
  
**Description:**  
Collects decentro currencies over the network and accumulate them on the installed device.  
  
Produce target's use stack limit is 6 compatible uses per target's free memory.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocked By:** SEND DECENTRO  
  
  
## decentro-node  
**CPU:** 24 **MEM:** 12 **SIZE:** 6  
**<span style="color:DarkKhaki;">Produces:</span>** 10 `facilitate-p2p-transaction` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 10)</span>  
  
  
**Description:**  
Authenticate Decentro transactions. Decentro peers can connect to this program to perform peer-to-peer transactions. You may only spend decentro currencies that are accessible by decentro nodes.  
Production is limited to 10 compatible uses on the device's use stack.  
  
**Unlocked By:** SEND DECENTRO  
  
  
## decentro-wallet  
**CPU:** 1 **MEM:** 2 **SIZE:** 2  
  
**Modifiers:** ALLOW_DECENTRO_STORAGE  
  
**Description:**  
Safeguards your decentro currencies from power loss or unscheduled shutdown events.  
  
This program stores up to 10 'access-p2p-currency' compatible uses per free storage on device. Stored uses persists across device reboots.  
  
**Unlocked By:** SEND DECENTRO  
  
  
## dns-lite  
**CPU:** 1 **MEM:** 1 **SIZE:** 1+1=2  
**<span style="color:DarkKhaki;">Produces:</span>** 3 `reply-dns-queries` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 3)</span>  
  
**Modifiers:** ALLOW_DOMAIN_QUERYING  
  
**Description:**  
Replies network-addresses to DNS queries.  
Production is limited to 3 compatible uses on the device's use stack.  
  
**Unlocked By:** [Media Maniac](users.md/#media-maniac), [Net Nester](users.md/#net-nester), [Bobby Tester](users.md/#bobby-tester), [Casual Dweller](users.md/#casual-dweller), [Casual Glancer](users.md/#casual-glancer), [Religious Dweller](users.md/#religious-dweller), [Scientific Researcher](users.md/#scientific-researcher), [Social Dweller](users.md/#social-dweller), [Digital Minimalist](users.md/#digital-minimalist), [Digital Detoxer](users.md/#digital-detoxer), [Cozy Foodie](users.md/#cozy-foodie), [Night Dweller](users.md/#night-dweller), [Scientific Professor](users.md/#scientific-professor), [Patient Professor](users.md/#patient-professor), [Heavy Viewer](users.md/#heavy-viewer), [Stability Seeker](users.md/#stability-seeker), [Greedy Dweller](users.md/#greedy-dweller), [Greedy Gambler](users.md/#greedy-gambler), [Digital Hoarder](users.md/#digital-hoarder), [Wealthy Dweller](users.md/#wealthy-dweller), [Greedy Streamer](users.md/#greedy-streamer), [Tech Adopter](users.md/#tech-adopter), [Day Learner](users.md/#day-learner), [Night Learner](users.md/#night-learner), [Software Engineer](users.md/#software-engineer), [Minimum Spender](users.md/#minimum-spender), [Pavillion Tower](users.md/#pavillion-tower), [Gateway Tower](users.md/#gateway-tower), [WhiteHat Tower](users.md/#whitehat-tower), [Helper Central](users.md/#helper-central), [Go Delivery Hub](users.md/#go-delivery-hub), [Cyber Mall](users.md/#cyber-mall), [Cloud Hub](users.md/#cloud-hub), [Tower Portal](users.md/#tower-portal), [Software Nexus](users.md/#software-nexus), [Utilities Sphere](users.md/#utilities-sphere), [HR Officer](users.md/#hr-officer), [Partner Gateway](users.md/#partner-gateway), [Cloud Service](users.md/#cloud-service), [Tenabolt Retail](users.md/#tenabolt-retail), [People Operations](users.md/#people-operations), [IT Service](users.md/#it-service), [Public Gateway](users.md/#public-gateway), [Professional Gamer](users.md/#professional-gamer), [Indoor Dweller](users.md/#indoor-dweller), [Patient Dweller](users.md/#patient-dweller), [Satellite Tower](users.md/#satellite-tower), [Satellite Tower](users.md/#satellite-tower), [Relax Tower](users.md/#relax-tower)  
  
  
## dns-server  
**CPU:** 4 **MEM:** 3 **SIZE:** 2+1=3  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `store-text` @ [`tcp/3306`](traffic_types.md/#tcp3306) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 20 `reply-dns-queries` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 20)</span>  
  
**Modifiers:** ALLOW_DOMAIN_QUERYING  
  
**Description:**  
Replies network-addresses to DNS queries.   
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 20 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v1](#padu_v1)  
**Unlocked By:** [Media Maniac](users.md/#media-maniac), [Feed Signal](users.md/#feed-signal), [WireSync News](users.md/#wiresync-news), [Loyal Worker](users.md/#loyal-worker), [Casual Dweller](users.md/#casual-dweller), [Casual Glancer](users.md/#casual-glancer), [Religious Dweller](users.md/#religious-dweller), [Scientific Researcher](users.md/#scientific-researcher), [Social Dweller](users.md/#social-dweller), [Digital Minimalist](users.md/#digital-minimalist), [Digital Detoxer](users.md/#digital-detoxer), [Cozy Foodie](users.md/#cozy-foodie), [Night Dweller](users.md/#night-dweller), [Full-time Coder](users.md/#full-time-coder), [Conservative Leader](users.md/#conservative-leader), [Liberal Announcer](users.md/#liberal-announcer), [Capitalistic Announcer](users.md/#capitalistic-announcer), [Scientific Professor](users.md/#scientific-professor), [Patient Professor](users.md/#patient-professor), [Tower Worker](users.md/#tower-worker), [Freelance Worker](users.md/#freelance-worker), [Neighbour Helper](users.md/#neighbour-helper), [Strategic Investor](users.md/#strategic-investor), [Heavy Viewer](users.md/#heavy-viewer), [Stability Seeker](users.md/#stability-seeker), [Greedy Dweller](users.md/#greedy-dweller), [Greedy Gambler](users.md/#greedy-gambler), [Digital Hoarder](users.md/#digital-hoarder), [Wealthy Dweller](users.md/#wealthy-dweller), [Greedy Streamer](users.md/#greedy-streamer), [Tech Adopter](users.md/#tech-adopter), [Day Learner](users.md/#day-learner), [Night Learner](users.md/#night-learner), [Software Engineer](users.md/#software-engineer), [Minimum Spender](users.md/#minimum-spender), [Pavillion Tower](users.md/#pavillion-tower), [Gateway Tower](users.md/#gateway-tower), [WhiteHat Tower](users.md/#whitehat-tower), [Kanban Central](users.md/#kanban-central), [Booking Hub](users.md/#booking-hub), [Full Campus](users.md/#full-campus), [Night Campus](users.md/#night-campus), [Game Studios](users.md/#game-studios), [Tech Center](users.md/#tech-center), [All Supplies Center](users.md/#all-supplies-center), [Horror Studios](users.md/#horror-studios), [Travel Agency](users.md/#travel-agency), [Cheap Kitchen](users.md/#cheap-kitchen), [Database Hub](users.md/#database-hub), [Game Marketplace](users.md/#game-marketplace), [Film Sphere](users.md/#film-sphere), [Premium Kitchen](users.md/#premium-kitchen), [Telemedicine Hub](users.md/#telemedicine-hub), [Blogger Hub](users.md/#blogger-hub), [Book Club](users.md/#book-club), [Data Nexus](users.md/#data-nexus), [Data Hub](users.md/#data-hub), [Econ News](users.md/#econ-news), [Indie Studios](users.md/#indie-studios), [Free Kanban Central](users.md/#free-kanban-central), [Media Hub](users.md/#media-hub), [Music Sphere](users.md/#music-sphere), [Audio Sphere](users.md/#audio-sphere), [Political News](users.md/#political-news), [Religious Hub](users.md/#religious-hub), [Scientific News](users.md/#scientific-news), [Socialite Hub](users.md/#socialite-hub), [Finance Hub](users.md/#finance-hub), [Chatter Hive](users.md/#chatter-hive), [Mail Hub](users.md/#mail-hub), [Ads Agency](users.md/#ads-agency), [Customer Officer](users.md/#customer-officer), [Analytics Officer](users.md/#analytics-officer), [HR Officer](users.md/#hr-officer), [Legal Officer](users.md/#legal-officer), [Meter Reader I](users.md/#meter-reader-i), [Morning Technician](users.md/#morning-technician), [Night Associate](users.md/#night-associate), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Normal Technician](users.md/#normal-technician), [Partner Gateway](users.md/#partner-gateway), [Planning Officer](users.md/#planning-officer), [Cloud Service](users.md/#cloud-service), [Tenabolt Retail](users.md/#tenabolt-retail), [People Operations](users.md/#people-operations), [IT Service](users.md/#it-service), [Public Gateway](users.md/#public-gateway), [R&D Engineer](users.md/#r&d-engineer), [R&D Specialist](users.md/#r&d-specialist), [Sales Officer](users.md/#sales-officer), [AI Researcher](users.md/#ai-researcher), [Chips Designer](users.md/#chips-designer), [Professional Gamer](users.md/#professional-gamer), [Indoor Dweller](users.md/#indoor-dweller), [Patient Dweller](users.md/#patient-dweller), [Satellite Tower](users.md/#satellite-tower), [Satellite Tower](users.md/#satellite-tower), [Relax Tower](users.md/#relax-tower), [Animation Sphere](users.md/#animation-sphere), [Animation Studios](users.md/#animation-studios), [Central Mart](users.md/#central-mart), [ESport Hub](users.md/#esport-hub), [Happy Grocery](users.md/#happy-grocery), [Inventory Hub](users.md/#inventory-hub), [Transfer Hub](users.md/#transfer-hub), [Meeting Hub](users.md/#meeting-hub), [Antivirus Nexus](users.md/#antivirus-nexus), [Privacy Hub](users.md/#privacy-hub)  
  
  
## dnsmasq  
**CPU:** 1 **MEM:** 1 **SIZE:** 1+1=2  
**<span style="color:DarkKhaki;">Produces:</span>** 3 `reply-dhcp-request` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 3)</span>  
  
**Modifiers:** ALLOW_REMOTE_HOST_CONFIGURATION  
  
**Description:**  
Automatically assigns network addresses and designated DNS server to network devices.  
Production is limited to 3 compatible uses on the device's use stack.  
  
**Unlocked By:** [Media Maniac](users.md/#media-maniac), [Net Nester](users.md/#net-nester), [Bobby Tester](users.md/#bobby-tester), [Casual Dweller](users.md/#casual-dweller), [HR Officer](users.md/#hr-officer), [Partner Gateway](users.md/#partner-gateway), [People Operations](users.md/#people-operations), [Public Gateway](users.md/#public-gateway), [Indoor Dweller](users.md/#indoor-dweller)  
  
  
## dnsspam  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `reply-dns-queries` @ [`udp/53`](traffic_types.md/#udp53) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
  
  
**Description:**  
DNS load test software.  
  
  
  
  
## firewatcher  
**CPU:** 4 **MEM:** 1 **SIZE:** 1+1=2  
  
**Modifiers:** ALLOW_PACKET_FILTERING  
  
**Description:**  
Firewall operating system; performs packet filtering.  
  
  
  
## gitcoffee  
**CPU:** 4 **MEM:** 2 **SIZE:** 4  
**<span style="color:PapayaWhip;">Consumes:</span>** 2 `store-text` @ [`tcp/5432`](traffic_types.md/#tcp5432) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 16 `read-text, update-software` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 16)</span>  
  
  
**Description:**  
open-source software repository. Supports software-updates requests.  
  
Produce target's use stack limit is 16 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocked By:** SOFTWARE UPDATES, SOFTWARE UPDATES  
  
  
## hakernel  
**CPU:** 4 **MEM:** 2 **SIZE:** 1+1=2  
  
**Modifiers:** ALLOW_PACKET_ROUTING, ALLOW_HIGH_AVAILABILITY_SETUP  
  
**Description:**  
HA-enabled port grouping kernel.  
  
  
  
## hypervisor-server  
**CPU:** 20 **MEM:** 10 **SIZE:** 8  
**<span style="color:PapayaWhip;">Consumes:</span>** 4 `store-text` @ [`tcp/5432`](traffic_types.md/#tcp5432) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `provision-vm` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
  
**Description:**  
Provisions and allocates virtual compute resources for monitoring and scaling.  
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [Morning Technician](users.md/#morning-technician), [Night Technician](users.md/#night-technician), [Normal Technician](users.md/#normal-technician)  
  
  
## kea  
**CPU:** 6 **MEM:** 5 **SIZE:** 6+1=7  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `store-text` @ [`tcp/3306`](traffic_types.md/#tcp3306) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `reply-dhcp-request` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
**Modifiers:** ALLOW_REMOTE_HOST_CONFIGURATION  
  
**Description:**  
Automatically assigns network addresses and designated DNS server to network devices.  
  
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v1](#padu_v1)  
**Unlocked By:** [Tenabolt Prometheus/KEA DHCP Server](proposals-Tenabolt%20Prometheus.md/#kea-dhcp-server), [Standard/KEA DHCP Server](proposals-Standard.md/#kea-dhcp-server)  
  
  
## lbrr  
**CPU:** 2 **MEM:** 1 **SIZE:** 1  
  
**Modifiers:** ALLOW_TRAFFIC_SPLITTING  
  
**Description:**  
Round-robin network load balancer.  
  
  
  
## log-lite  
**CPU:** 1 **MEM:** 1 **SIZE:** 3  
**<span style="color:DarkKhaki;">Produces:</span>** 2 `query-log-entry, store-log-entry` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 2)</span>  
  
  
**Description:**  
Lightweight event log storage. Records and searches system activity.  
Production is limited to 2 compatible uses on the device's use stack.  
  
**Unlocked By:** [ten-scada-server](#ten-scada-server), [Morning Technician](users.md/#morning-technician), [Night Technician](users.md/#night-technician), [Normal Technician](users.md/#normal-technician), [IT Service](users.md/#it-service)  
  
  
## log-server  
**CPU:** 5 **MEM:** 9 **SIZE:** 16  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `store-text` @ [`tcp/3306`](traffic_types.md/#tcp3306) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `query-log-entry, store-log-entry` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
  
**Description:**  
Event log storage. Records and searches system activity.  
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [ten-scada-server](#ten-scada-server), [Morning Technician](users.md/#morning-technician), [Night Technician](users.md/#night-technician), [Normal Technician](users.md/#normal-technician), [IT Service](users.md/#it-service)  
  
  
## mailer  
**CPU:** 5 **MEM:** 6 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `( store-text and store-image )` @ [`tcp/5432`](traffic_types.md/#tcp5432) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `read-text, post-text, verify-user` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
  
**Description:**  
Provides exchange email usages to users.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [complaint-server2](#complaint-server2), EXCHANGE EMAIL, EXCHANGE EMAIL, [Billing Officer](users.md/#billing-officer), [Customer Officer](users.md/#customer-officer), [Distribution Officer](users.md/#distribution-officer), [Field Inspector](users.md/#field-inspector), [Finance Officer](users.md/#finance-officer), [Grid Officer](users.md/#grid-officer), [HR Officer](users.md/#hr-officer), [Legal Officer](users.md/#legal-officer), [Meter Reader I](users.md/#meter-reader-i), [Morning Grid Officer](users.md/#morning-grid-officer), [Morning Technician](users.md/#morning-technician), [Night Grid Officer](users.md/#night-grid-officer), [Night Associate](users.md/#night-associate), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Planning Officer](users.md/#planning-officer), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer), [R&D Engineer](users.md/#r&d-engineer), [R&D Specialist](users.md/#r&d-specialist), [Sales Officer](users.md/#sales-officer)  
  
  
## maintenance-server  
**CPU:** 3 **MEM:** 5 **SIZE:** 7  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `( verify-user and store-geospatial-data and read-geospatial-data )` @ [`tcp/5432`](traffic_types.md/#tcp5432) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `post-repair-workorder` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Serve to manages physical asset maintenance schedules and fault history.   
Coordinates field work orders for grid equipment.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2), [tena-gis-server](#tena-gis-server)  
**Unlocked By:** [Distribution Officer](users.md/#distribution-officer), [Field Inspector](users.md/#field-inspector)  
  
  
## mbox  
**CPU:** 1 **MEM:** 1 **SIZE:** 1+1=2  
  
**Modifiers:** ALLOW_PACKET_TRANSLATION  
  
**Description:**  
Network middlebox program. Configure with the "middlebox" command.  
  
Allows packet mangling/translation. Install on a device to make it a network middlebox.  
  
  
  
## netpeeker  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Modifiers:** ALLOW_REMOTE_DEBUGGING  
  
**Description:**  
Remote debugger.  
  
  
  
## nop  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
  
**Description:**  
Generic program.  
  
  
  
## oauth-serv  
**CPU:** 5 **MEM:** 6 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `store-text and store-image` @ [`tcp/5432`](traffic_types.md/#tcp5432) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `verify-user` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
  
**Description:**  
Allows staff to login to internal portal.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
  
  
## padu_v1  
**CPU:** 1 **MEM:** 2 **SIZE:** 4  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `store-text, store-image` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 2)</span>  
  
  
**Description:**  
Primary aggregation data unit. Supports text and image storage.  
Production is limited to 2 compatible uses on the device's use stack.  
  
**Unlocked By:** [dns-server](#dns-server), [sun-dns](#sun-dns), [kea](#kea), [HR Officer](users.md/#hr-officer), [Partner Gateway](users.md/#partner-gateway), [Cloud Service](users.md/#cloud-service), [Tenabolt Retail](users.md/#tenabolt-retail), [IT Service](users.md/#it-service), [Public Gateway](users.md/#public-gateway)  
  
  
## padu_v2  
**CPU:** 2 **MEM:** 4 **SIZE:** 8  
**<span style="color:DarkKhaki;">Produces:</span>** 2 `store-text, store-image, store-audio` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 2)</span>  
  
  
**Description:**  
Primary aggregation data unit. Supports text, image and audio storage.  
  
Improved disk handling algorithm.  
Production is limited to 2 compatible uses on the device's use stack.  
  
**Unlocked By:** [hypervisor-server](#hypervisor-server), [log-server](#log-server), [ten-bill-server](#ten-bill-server), [complaint-server2](#complaint-server2), [ten-public-portal](#ten-public-portal), [oauth-serv](#oauth-serv), [tmp-collabpoint1](#tmp-collabpoint1), [tena-calc-server](#tena-calc-server), [ten-anomaly-server](#ten-anomaly-server), [tena-calc-server2](#tena-calc-server2), [tena-staff-portal](#tena-staff-portal), [maintenance-server](#maintenance-server), [ten-scada-server](#ten-scada-server), [tena-mail](#tena-mail), [mailer](#mailer), [Partner Gateway](users.md/#partner-gateway), [IT Service](users.md/#it-service), [Public Gateway](users.md/#public-gateway)  
  
  
## padu_v3  
**CPU:** 4 **MEM:** 6 **SIZE:** 12  
**<span style="color:DarkKhaki;">Produces:</span>** 4 `store-text, store-image, store-audio, store-video` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 4)</span>  
  
  
**Description:**  
Primary aggregation data unit. Supports text, image, audio and video storage.  
  
Improved disk handling algorithm.  
Production is limited to 4 compatible uses on the device's use stack.  
  
**Unlocked By:** [Tenabolt Prometheus/PADU development funding](proposals-Tenabolt%20Prometheus.md/#padu-development-funding), [Standard/PADU development funding](proposals-Standard.md/#padu-development-funding)  
  
  
## poems-db  
**CPU:** 4 **MEM:** 4 **SIZE:** 6  
**<span style="color:DarkKhaki;">Produces:</span>** 4 `store-text` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 4)</span>  
  
  
**Description:**  
Based text-based database. Supports text storage usage.  
Production is limited to 4 compatible uses on the device's use stack.  
  
**Unlocked By:** [Tenabolt Prometheus/Poems DB](proposals-Tenabolt%20Prometheus.md/#poems-db), [Standard/Poems DB](proposals-Standard.md/#poems-db)  
  
  
## print-server  
**CPU:** 2 **MEM:** 1 **SIZE:** 4  
**<span style="color:DarkKhaki;">Produces:</span>** 10 `accept-printer-connection` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 10)</span>  
  
  
**Description:**  
Support printing services.  
Allows printer to be connected to produce print-text and print-image uses.  
Production is limited to 10 compatible uses on the device's use stack.  
  
**Unlocked By:** [Billing Officer](users.md/#billing-officer), [Customer Officer](users.md/#customer-officer), [Analytics Officer](users.md/#analytics-officer), [Finance Officer](users.md/#finance-officer), [Grid Officer](users.md/#grid-officer), [HR Officer](users.md/#hr-officer), [Legal Officer](users.md/#legal-officer), [Morning Grid Officer](users.md/#morning-grid-officer), [Morning Technician](users.md/#morning-technician), [Night Grid Officer](users.md/#night-grid-officer), [Night Technician](users.md/#night-technician), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Normal Technician](users.md/#normal-technician), [Planning Officer](users.md/#planning-officer), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer), [R&D Engineer](users.md/#r&d-engineer), [R&D Specialist](users.md/#r&d-specialist), [Sales Officer](users.md/#sales-officer)  
  
  
## print-server2  
**CPU:** 5 **MEM:** 3 **SIZE:** 5  
**<span style="color:DarkKhaki;">Produces:</span>** 20 `accept-printer-connection` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 20)</span>  
  
  
**Description:**  
Support printing services.  
  
Allows printer to be connected to produce print-text and print-image uses.  
Production is limited to 20 compatible uses on the device's use stack.  
  
  
  
## printer_edge  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
**<span style="color:LightCoral;">Required Hardware:</span>** PRINTER  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `accept-printer-connection` @ [`tcp/631`](traffic_types.md/#tcp631) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `print-image, print-text` <span style="color:Coral;font-size:85%;white-space:nowrap;">on destination device </span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by TARGET_TOTAL_CPU)</span>  
  
  
**Description:**  
printer firmware.  
  
Produce target's use stack limit is 1 compatible uses per target's installed CPU.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
  
  
## riserswfirm  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
**Modifiers:** ALLOW_PACKET_SWITCHING  
  
**Description:**  
Riser switch firmware.  
  
  
  
## rtkernel  
**CPU:** 4 **MEM:** 1 **SIZE:** 1+1=2  
  
**Modifiers:** ALLOW_PACKET_ROUTING  
  
**Description:**  
Packet routing program.  
  
  
  
## rtsp-diva-r  
**CPU:** 6 **MEM:** 4 **SIZE:** 10  
**<span style="color:DarkKhaki;">Produces:</span>** 13 `accept-cctv-camera-connection, accept-cctv-monitor-connection` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 13)</span>  
  
  
**Description:**  
Support surveillance monitoring services.  
  
Allows surveillance accessories to be connected to produce stream-live-video uses.  
Production is limited to 13 compatible uses on the device's use stack.  
  
**Unlocked By:** [Loyal Worker](users.md/#loyal-worker), [Tower Worker](users.md/#tower-worker), [Freelance Worker](users.md/#freelance-worker), [Neighbour Helper](users.md/#neighbour-helper), [Strategic Investor](users.md/#strategic-investor)  
  
  
## san-server  
**CPU:** 6 **MEM:** 14 **SIZE:** 6  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `store-block` @ [`tcp/3264`](traffic_types.md/#tcp3264) for <span style="color:Salmon;">4</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `store-text, store-image` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Mounts remote storage from a SAN.   
  
Fetches raw blocks over the network and serves them as text or image storage on this device.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
  
  
## san-storage  
**CPU:** 2 **MEM:** 5 **SIZE:** 10  
**<span style="color:DarkKhaki;">Produces:</span>** 4 `store-block` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 4)</span>  
  
  
**Description:**  
The storage array's operating system.   
  
Exposes their capacity as raw blocks (store-block) to the network.  
Production is limited to 4 compatible uses on the device's use stack.  
  
  
  
## sun-dns  
**CPU:** 10 **MEM:** 6 **SIZE:** 8+1=9  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `store-text` @ [`tcp/3306`](traffic_types.md/#tcp3306) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 40 `reply-dns-queries` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 40)</span>  
  
**Modifiers:** ALLOW_DOMAIN_QUERYING  
  
**Description:**  
Enterprise grade DNS server.  
<span style="color:red;">Requires access to a running text storage program</span>.  
  
Produce target's use stack limit is 40 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v1](#padu_v1)  
**Unlocked By:** [Tenabolt Prometheus/Sun DNS](proposals-Tenabolt%20Prometheus.md/#sun-dns), [Standard/Sun DNS](proposals-Standard.md/#sun-dns)  
  
  
## ten-anomaly-server  
**CPU:** 20 **MEM:** 8 **SIZE:** 4  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `read-operation-data` @ [`tcp/3306`](traffic_types.md/#tcp3306) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 20 `verify-user, run-tenabolt-simulation, store-tenabolt-model` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 20)</span>  
  
  
**Description:**  
Serve as advanced nuclear plant calculation application. Engineers run simulations and save models.  
<span style="color:red;">Requiring grid officer to perform scada operations.</span>  
  
  
Produce target's use stack limit is 20 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2), [ten-scada-server](#ten-scada-server)  
**Unlocked By:** [R&D Specialist](users.md/#r&d-specialist)  
  
  
## ten-bill-server  
**CPU:** 3 **MEM:** 9 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `read-meter-reading` @ [`tcp/5432`](traffic_types.md/#tcp5432) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `post-invoice, verify-user` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Enables Billing Staff to generate and post invoices to residents based on recorded consumption data.  
<span style="color:red;">Requires meter readings submitted by Meter Readers.</span>  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2), [tena-meter-db](#tena-meter-db)  
**Unlocked By:** [Billing Officer](users.md/#billing-officer)  
  
  
## ten-public-lite  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
**<span style="color:DarkKhaki;">Produces:</span>** 2 `post-news-updates, read-news-updates` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 2)</span>  
  
  
**Description:**  
Publishes outage updates and company news for public viewing.  
Production is limited to 2 compatible uses on the device's use stack.  
  
**Unlocked By:** [Public Gateway](users.md/#public-gateway)  
  
  
## ten-public-portal  
**CPU:** 3 **MEM:** 3 **SIZE:** 4  
**<span style="color:PapayaWhip;">Consumes:</span>** 2 `store-text and store-image` @ [`tcp/5432`](traffic_types.md/#tcp5432) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `post-news-updates, read-news-updates` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Publishes outage updates and company news for public viewing.  
<span style="color:red;">Requires access to a running text and image storage program</span>.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer)  
  
  
## ten-scada-server  
**CPU:** 16 **MEM:** 9 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 2 `store-log-entry` @ [`tcp/5432`](traffic_types.md/#tcp5432) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `verify-user, adjust-tenabolt-setpoint` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Serve as real-time supervisory control and data acquisition system for grid operations.  
<span style="color:red;">Requires access to a running log server</span>.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2), [log-server](#log-server), [log-lite](#log-lite)  
**Unlocked By:** [tena-calc-server](#tena-calc-server), [ten-anomaly-server](#ten-anomaly-server), [tena-calc-server2](#tena-calc-server2), [Field Inspector](users.md/#field-inspector), [Grid Officer](users.md/#grid-officer), [Morning Grid Officer](users.md/#morning-grid-officer), [Night Grid Officer](users.md/#night-grid-officer)  
  
  
## tena-calc-server  
**CPU:** 15 **MEM:** 8 **SIZE:** 4  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `read-operation-data` @ [`tcp/3306`](traffic_types.md/#tcp3306) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 10 `verify-user, run-tenabolt-simulation, store-tenabolt-model` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 10)</span>  
  
  
**Description:**  
Serve as nuclear plant calculation application. Engineers run simulations and save models.  
<span style="color:red;">Requiring grid officer to perform scada operations.</span>  
  
  
Produce target's use stack limit is 10 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2), [ten-scada-server](#ten-scada-server)  
**Unlocked By:** [Analytics Officer](users.md/#analytics-officer), [R&D Engineer](users.md/#r&d-engineer), [R&D Specialist](users.md/#r&d-specialist)  
  
  
## tena-calc-server2  
**CPU:** 20 **MEM:** 8 **SIZE:** 4  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `read-operation-data` @ [`tcp/3306`](traffic_types.md/#tcp3306) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 20 `verify-user, run-tenabolt-simulation, store-tenabolt-model` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 20)</span>  
  
  
**Description:**  
Serve as advanced nuclear plant calculation application. Engineers run simulations and save models.  
<span style="color:red;">Requiring grid officer to perform scada operations.</span>  
  
  
Produce target's use stack limit is 20 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2), [ten-scada-server](#ten-scada-server)  
**Unlocked By:** [R&D Specialist](users.md/#r&d-specialist)  
  
  
## tena-employee-db  
**CPU:** 3 **MEM:** 7 **SIZE:** 8  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `store-text and store-image` @ [`tcp/3306`](traffic_types.md/#tcp3306) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `read-employee-data, post-employee-data` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Stores employee data.   
<span style="color:red;">Requires access to a running text and image storage program</span>.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocked By:** ACCESS DATABASE, [HR Officer](users.md/#hr-officer), [Partner Gateway](users.md/#partner-gateway)  
  
  
## tena-gis-server  
**CPU:** 16 **MEM:** 9 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `store-text and store-image` @ [`tcp/5432`](traffic_types.md/#tcp5432) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `verify-user, store-geospatial-data, read-geospatial-data` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Serve as Geographic information system. Maps grid infrastructure, customer zones, and candidate sites for expansion.  
<span style="color:red;">Requires access to a running text and image storage program</span>.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocked By:** [maintenance-server](#maintenance-server), [Planning Officer](users.md/#planning-officer)  
  
  
## tena-mail  
**CPU:** 5 **MEM:** 6 **SIZE:** 3  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `store-text and store-image` @ [`tcp/5432`](traffic_types.md/#tcp5432) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 15 `read-text, post-text, post-image, view-image, verify-user` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 15)</span>  
  
  
**Description:**  
Provides exchange email usages to users.  
  
Produce target's use stack limit is 15 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
  
  
## tena-meter-db  
**CPU:** 5 **MEM:** 3 **SIZE:** 6  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `store-text and store-image` @ [`tcp/3306`](traffic_types.md/#tcp3306) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `post-meter-reading` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Allow meter reader to stores meter reading data.  
<span style="color:red;">Requires access to a running text and image storage program</span>.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocked By:** [ten-bill-server](#ten-bill-server), [Meter Reader I](users.md/#meter-reader-i)  
  
  
## tena-staff-portal  
**CPU:** 5 **MEM:** 3 **SIZE:** 9  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `( store-text or store-image )` @ [`tcp/5432`](traffic_types.md/#tcp5432) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 8 `post-news-updates, read-news-updates, verify-user` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 8)</span>  
  
  
**Description:**  
Serve landing page for staff internally for company resources and announcement.   
<span style="color:red;">Requires access to a running text or image storage program</span>.  
  
Produce target's use stack limit is 8 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [Customer Officer](users.md/#customer-officer), [Analytics Officer](users.md/#analytics-officer), [Distribution Officer](users.md/#distribution-officer), [Field Inspector](users.md/#field-inspector), [Finance Officer](users.md/#finance-officer), [Grid Officer](users.md/#grid-officer), [HR Officer](users.md/#hr-officer), [Meter Reader I](users.md/#meter-reader-i), [Morning Technician](users.md/#morning-technician), [Night Grid Officer](users.md/#night-grid-officer), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Normal Associate](users.md/#normal-associate), [Normal Technician](users.md/#normal-technician), [Normal Technician](users.md/#normal-technician), [Planning Officer](users.md/#planning-officer), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer), [R&D Engineer](users.md/#r&d-engineer), [R&D Specialist](users.md/#r&d-specialist), [Sales Officer](users.md/#sales-officer)  
  
  
## tmp-collabpoint0  
**CPU:** 1 **MEM:** 2 **SIZE:** 1  
**<span style="color:DarkKhaki;">Produces:</span>** 2 `download-file, upload-file` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 2)</span>  
  
  
**Description:**  
Allows media sharing among staff.  
Production is limited to 2 compatible uses on the device's use stack.  
  
**Unlocked By:** [Public Gateway](users.md/#public-gateway)  
  
  
## tmp-collabpoint1  
**CPU:** 5 **MEM:** 7 **SIZE:** 5  
**<span style="color:PapayaWhip;">Consumes:</span>** 3 `store-text and store-image` @ [`tcp/5432`](traffic_types.md/#tcp5432) for <span style="color:Salmon;">3</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(FRAGMENTED_USE_ALLOWED)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 25 `download-file, upload-file` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 25)</span>  
  
  
**Description:**  
Allows media sharing among staff.  
<span style="color:red;">Requires access to a running text and image storage program</span>.  
  
Produce target's use stack limit is 25 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
**Unlocks:** [padu_v2](#padu_v2)  
**Unlocked By:** [Billing Officer](users.md/#billing-officer), [Analytics Officer](users.md/#analytics-officer), [Field Inspector](users.md/#field-inspector), [Finance Officer](users.md/#finance-officer), [Grid Officer](users.md/#grid-officer), [HR Officer](users.md/#hr-officer), [Legal Officer](users.md/#legal-officer), [Legal Officer](users.md/#legal-officer), [Morning Grid Officer](users.md/#morning-grid-officer), [Morning Technician](users.md/#morning-technician), [Night Grid Officer](users.md/#night-grid-officer), [Night Technician](users.md/#night-technician), [Normal Associate](users.md/#normal-associate), [Normal Technician](users.md/#normal-technician), [Planning Officer](users.md/#planning-officer), [Public Gateway](users.md/#public-gateway), [PR Officer](users.md/#pr-officer), [R&D Engineer](users.md/#r&d-engineer), [R&D Specialist](users.md/#r&d-specialist), [Sales Officer](users.md/#sales-officer)  
  
  
## tnbmon  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
  
  
**Description:**  
Power meter firmware.  
  
  
  
## ubbt  
**CPU:** 4 **MEM:** 4 **SIZE:** 6  
**<span style="color:PapayaWhip;">Consumes:</span>** 4 `inspect-user-packets` @ [`udp/6343`](traffic_types.md/#udp6343) for <span style="color:Salmon;">2</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 4 `support-bots` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 4)</span>  
  
  
**Description:**  
Analyzes user traffic behavior from a network tap to support botnet operations.  
  
<span style="color:red;">Requires access to a network tap with user traffic</span>.  
  
Produce target's use stack limit is 4 compatible uses.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
  
  
## vlanfirm  
**CPU:** 2 **MEM:** 2 **SIZE:** 1+1=2  
  
**Modifiers:** ALLOW_VLAN_TAGGING, ALLOW_STP_PORT_CONTROL  
  
**Description:**  
Managed switch firmware.  
  
  
  
## voip-server  
**CPU:** 5 **MEM:** 2 **SIZE:** 5  
**<span style="color:DarkKhaki;">Produces:</span>** 10 `accept-voip-phone-connection` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by 10)</span>  
  
  
**Description:**  
Supports Voice over Internet Protocol for streaming voice messages phones.  
  
Allows voip phones to be connected to produce stream-voice uses.  
Production is limited to 10 compatible uses on the device's use stack.  
  
**Unlocked By:** TALK TO SOMEONE ONLINE, [Media Maniac](users.md/#media-maniac), [Vocal Connector](users.md/#vocal-connector), [Casual Dweller](users.md/#casual-dweller), [Casual Glancer](users.md/#casual-glancer), [Religious Dweller](users.md/#religious-dweller), [Scientific Researcher](users.md/#scientific-researcher), [Social Dweller](users.md/#social-dweller), [Digital Minimalist](users.md/#digital-minimalist), [Digital Detoxer](users.md/#digital-detoxer), [Cozy Foodie](users.md/#cozy-foodie), [Night Dweller](users.md/#night-dweller), [Private Dweller](users.md/#private-dweller), [Full-time Coder](users.md/#full-time-coder), [Conservative Leader](users.md/#conservative-leader), [Liberal Announcer](users.md/#liberal-announcer), [Capitalistic Announcer](users.md/#capitalistic-announcer), [Scifi Movie Director](users.md/#scifi-movie-director), [Audio Lover](users.md/#audio-lover), [Scientific Professor](users.md/#scientific-professor), [Decentro Farmer](users.md/#decentro-farmer), [Home Chef](users.md/#home-chef), [Lifestyle Blogger](users.md/#lifestyle-blogger), [Digital Salesman](users.md/#digital-salesman), [Night Chatter](users.md/#night-chatter), [Pet Lover](users.md/#pet-lover), [Secondhand Buyer](users.md/#secondhand-buyer), [Vocal Connector](users.md/#vocal-connector), [Patient Professor](users.md/#patient-professor), [Heavy Viewer](users.md/#heavy-viewer), [Stability Seeker](users.md/#stability-seeker), [Greedy Dweller](users.md/#greedy-dweller), [Greedy Gambler](users.md/#greedy-gambler), [Digital Hoarder](users.md/#digital-hoarder), [Wealthy Dweller](users.md/#wealthy-dweller), [Greedy Streamer](users.md/#greedy-streamer), [Tech Adopter](users.md/#tech-adopter), [Day Learner](users.md/#day-learner), [Night Learner](users.md/#night-learner), [Software Engineer](users.md/#software-engineer), [Malicious User](users.md/#malicious-user), [Minimum Spender](users.md/#minimum-spender), [Pavillion Tower](users.md/#pavillion-tower), [Gateway Tower](users.md/#gateway-tower), [WhiteHat Tower](users.md/#whitehat-tower), [Recycling Center](users.md/#recycling-center), [Tech Center](users.md/#tech-center), [All Supplies Center](users.md/#all-supplies-center), [Cheap Kitchen](users.md/#cheap-kitchen), [Premium Kitchen](users.md/#premium-kitchen), [Horror Director](users.md/#horror-director), [Ads Agency](users.md/#ads-agency), [Research Hub](users.md/#research-hub), [Surveillance Hub](users.md/#surveillance-hub), [Normal Associate](users.md/#normal-associate), [Sales Officer](users.md/#sales-officer), [Professional Gamer](users.md/#professional-gamer), [Binge Watcher](users.md/#binge-watcher), [Jazz Lover](users.md/#jazz-lover), [Indoor Dweller](users.md/#indoor-dweller), [Patient Dweller](users.md/#patient-dweller), [Satellite Tower](users.md/#satellite-tower), [Satellite Tower](users.md/#satellite-tower), [Relax Tower](users.md/#relax-tower), [Semiconductor Hub](users.md/#semiconductor-hub)  
  
  
## vonet_edge  
**CPU:** 1 **MEM:** 1 **SIZE:** 1  
**<span style="color:LightCoral;">Required Hardware:</span>** PHONE  
**<span style="color:PapayaWhip;">Consumes:</span>** 1 `accept-voip-phone-connection` @ [`udp/5060`](traffic_types.md/#udp5060) for <span style="color:Salmon;">1</span>bw <span style="color:gray;font-size:85%;white-space:nowrap;">(ALL_OR_NOTHING)</span>  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `stream-voice` <span style="color:Coral;font-size:85%;white-space:nowrap;">on destination device </span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by TARGET_TOTAL_CPU)</span>  
  
  
**Description:**  
VOIP phone firmware.  
  
Produce target's use stack limit is 1 compatible uses per target's installed CPU.  
Skips consuming from destination if produce target's use stack limit is reached.  
  
  
  
## vrout3  
**CPU:** 4 **MEM:** 1 **SIZE:** 2+2=4  
  
**Modifiers:** ALLOW_PACKET_ROUTING, ALLOW_VLAN_TAGGING  
  
**Description:**  
Packet routing with VLAN subinterfaces.  
  
  
  
## wirerat  
**CPU:** 2 **MEM:** 2 **SIZE:** 1  
**<span style="color:DarkKhaki;">Produces:</span>** 1 `inspect-user-packets` <span style="color:Coral;font-size:85%;white-space:nowrap;"></span><span style="color:gray;font-size:85%;white-space:nowrap;">(limited by TARGET_TOTAL_MEM)</span>  
  
**Modifiers:** ALLOW_PACKET_INSPECTION, ALLOW_PACKET_SWITCHING  
  
**Description:**  
Packet monitoring system.  
Production is limited to 4 compatible uses per device's installed memory.  
  
  
  
## WORM ANNOYING_MORRIS  
**CPU:** 0 **MEM:** 0 **SIZE:** 0  
**Vulnerable Devices:** NETWORK_ROUTER, COMPUTE_SERVER  
**Incubation Cycles:** 5  
**Spread per tick:** 1  
  
  
**Description:**  
ANNOYING_MORRIS spreads itself across routers and servers using traffic types ranging from TCP/510 to TCP/519. It doesn't do any harm to its targets but wastes the bandwidth of the devices it traverses.  
  
  
  
## WORM HUSH  
**CPU:** 0 **MEM:** 0 **SIZE:** 0  
**Vulnerable Devices:** PHONE, COMPUTE_SERVER  
**Incubation Cycles:** 3  
**Spread per tick:** 3  
  
  
**Description:**  
HUSH targets VOIP phones and servers using SIP traffic (UDP/5060). Upon infection, it silently erases all other programs installed on the device.  
  
  
